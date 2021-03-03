sap.ui
    .controller(
        "sources.Controllers.GenericTiles",
        {

            onInit : function () {
                var oMydata = new sap.ui.model.json.JSONModel();
                oMydata.loadData("sources/Data/TileCollectionWithMicroChart.json");
                console.log(JSON.stringify(oMydata.getData()));

                this.getView().setModel(oMydata);
            },

            press : function (evt) {
                console.log(evt.getParameters());
                console.log(evt.getSource());

            }
        });