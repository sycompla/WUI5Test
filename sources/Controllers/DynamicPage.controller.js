sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/f/library",
    "sap/ui/core/Fragment"
], function (Controller, JSONModel, library, Fragment) {
    "use strict";

    // shortcut for sap.f.DynamicPageTitleArea
    var DynamicPageTitleArea = library.DynamicPageTitleArea;

    return Controller.extend("sources.Controllers.DynamicPage", {
        onInit: function () {
            var oMydata = new sap.ui.model.json.JSONModel();
            oMydata.loadData("sources/Data/products.json");
            this.getView().setModel(oMydata);
        },
        getPage : function() {
            return this.byId("dynamicPageId");
        },
        onToggleFooter: function () {
            this.getPage().setShowFooter(!this.getPage().getShowFooter());
        },
        toggleAreaPriority: function () {
            var oTitle = this.getPage().getTitle(),
                sNewPrimaryArea = oTitle.getPrimaryArea() === DynamicPageTitleArea.Begin ? DynamicPageTitleArea.Middle : DynamicPageTitleArea.Begin;
            oTitle.setPrimaryArea(sNewPrimaryArea);
        },
        onPressOpenPopover: function (oEvent) {
            var oView = this.getView(),
                oSourceControl = oEvent.getSource();

            if (!this._pPopover) {
                this._pPopover = Fragment.load({
                    id: oView.getId(),
                    name: "sap.f.sample.DynamicPageFreeStyle.view.Card"
                }).then(function (oPopover) {
                    oView.addDependent(oPopover);
                    return oPopover;
                });
            }

            this._pPopover.then(function (oPopover) {
                oPopover.openBy(oSourceControl);
            });
        }
    });
});