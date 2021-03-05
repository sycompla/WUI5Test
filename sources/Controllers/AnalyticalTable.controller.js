sap.ui.define([
    "jquery.sap.global",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/format/DateFormat",
    "sap/base/Log",
    "sap/ui/core/Fragment"
], function (jQuery, Controller, JSONModel, MessageToast, DateFormat, Log, Fragment) {
    "use strict";

    return Controller.extend("sources.Controllers.AnalyticalTable", {

        productsDataSource : {},

        model : {},

        onInit : async function () {

            this.model = new sap.ui.model.json.JSONModel()
            await model.loadData("sources/Data/productsNums.json");

            this.productsDataSource = JSON.parse(model.getJSON());

            this.loadFromDataSource(this.productsDataSource);
        },

        loadFromDataSource: function(dataSource) {

            model.setData(dataSource);
            this.getView().setModel(model);

        },

        formatAvailableToObjectState : function (bAvailable) {
            return bAvailable ? "Success" : "Error";
        },

        formatAvailableToIcon : function(bAvailable) {
            return bAvailable ? "sap-icon://accept" : "sap-icon://decline";
        },

        handleDetailsPress : function(oEvent) {
            MessageToast.show("Details for product with id " + this.getView().getModel().getProperty("ProductId", oEvent.getSource().getBindingContext()));
        },
        onGenericTagPress: function (oEvent) {
            var oView = this.getView(),
                oSourceControl = oEvent.getSource();
            if (!this._pPopover) {
                this._pPopover = Fragment.load({
                    id: oView.getId(),
                    name: "sources.Views.Card"
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