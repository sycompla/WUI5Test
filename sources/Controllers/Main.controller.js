sap.ui
    .controller(
        "sources.Controllers.Main",
        {

            dataSource : {},

            originalTileDataSource : {},

            model : {},

            onInit : async function () {

                model = new sap.ui.model.json.JSONModel()
                await model.loadData("sources/Data/data.json");

                this.dataSource = model.getData();

                this.dataSource.companies =  Array.from(this.dataSource.companies);

                model.setData(this.dataSource);
                this.getView().setModel(model);
            },

            onTilePress : function(evt) {
                app.to("idTile", "slide");},

            onMicroChartInTilePress : function (evt) {
                app.to("idMicroChartInTile", "slide");
            },
            onGenericTilesPress : function (evt) {
                app.to("idGenericTiles", "slide");
            },

            onMultiComboPress: function (evt) {
                app.to("idMultiCombo", "slide");
            },

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
            },
        });