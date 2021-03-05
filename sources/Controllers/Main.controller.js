sap.ui
    .controller(
        "sources.Controllers.Main",
        {

            onInit : function () {
                var oMydata = new sap.ui.model.json.JSONModel();
                oMydata.loadData("sources/Data/data.json");
                console.log(JSON.stringify(oMydata.getData()));

                this.getView().setModel(oMydata);

            },
/*
            onTilePress : function(evt) {
                app.to("idTile", "slide");},

            onMicroChartInTilePress : function (evt) {
                app.to("idMicroChartInTile", "slide");
            },
            onGenericTilesPress : function (evt) {
                app.to("idGenericTiles", "slide");
            },
*/
            onMultiComboPress: function (evt) {
                app.to("idMultiCombo", "slide");
            },
/*
            onMasterPress: function (evt) {
                app.to("idMaster", "slide");
            },
            onDynamicPagePress: function (evt) {
                app.to("idDynamicPage", "slide");
            },
            onAnalyticalTablePress: function (evt) {
                app.to("idAnalyticalTable", "slide");
            },
            onGridContainerPress: function (evt) {
                app.to("idGridContainer", "slide");
            },*/
        });