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
            /*
                        onTilePress : function(evt) {
                            app.to("idTile", "slide");},*/
        });