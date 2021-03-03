sap.ui
    .controller(
        "sources.Controllers.ListJson",
        {

            onInit : function () {
                var oMydata = new sap.ui.model.json.JSONModel();
                oMydata.loadData("sources/Data/TileCollectionWithMicroChart.json");
                console.log(JSON.stringify(oMydata.getData()));

                this.getView().setModel(oMydata);
            },

        });