sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/dnd/DragInfo",
    "sap/f/dnd/GridDropInfo",
    "sap/ui/core/dnd/DropPosition",
    "sap/ui/core/dnd/DropLayout"
], function (Controller, JSONModel, DragInfo, GridDropInfo, DropPosition, DropLayout) {
    "use strict";

    return Controller.extend("sources.Controllers.GridContainer", {

        onInit: function () {
            var oMydata = new sap.ui.model.json.JSONModel();
            oMydata.loadData("sources/Data/cardManifests.json");
            console.log(JSON.stringify(oMydata.getData()));
            var oGrid = this.byId("grid1");

            this.getView().setModel(oMydata, "manifests");

            oGrid.addDragDropConfig(new DragInfo({
                sourceAggregation: "items"
            }));

            oGrid.addDragDropConfig(new GridDropInfo({
                targetAggregation: "items",
                dropPosition: DropPosition.Between,
                dropLayout: DropLayout.Horizontal,
                drop: function (oInfo) {
                    var oDragged = oInfo.getParameter("draggedControl"),
                        oDropped = oInfo.getParameter("droppedControl"),
                        sInsertPosition = oInfo.getParameter("dropPosition"),
                        iDragPosition = oGrid.indexOfItem(oDragged),
                        iDropPosition = oGrid.indexOfItem(oDropped);

                    oGrid.removeItem(oDragged);

                    if (iDragPosition < iDropPosition) {
                        iDropPosition--;
                    }

                    if (sInsertPosition === "After") {
                        iDropPosition++;
                    }

                    oGrid.insertItem(oDragged, iDropPosition);
                    oGrid.focusItem(iDropPosition);
                }
            }));

            // Use smaller margin around grid when on smaller screens
            oGrid.attachLayoutChange(function (oEvent) {
                var sLayout = oEvent.getParameter("layout");

                if (sLayout === "layoutXS" || sLayout === "layoutS") {
                    oGrid.removeStyleClass("sapUiSmallMargin");
                    oGrid.addStyleClass("sapUiTinyMargin");
                } else {
                    oGrid.removeStyleClass("sapUiTinyMargin");
                    oGrid.addStyleClass("sapUiSmallMargin");
                }
            });
        },

        onRevealGrid: function () {
            RevealGrid.toggle("grid1", this.getView());
        },

        onExit: function () {
            RevealGrid.destroy("grid1", this.getView());
        }

    });
});