sap.ui
    .controller(
        "sources.Controllers.MicroChartInTile",
        {

            chartDataSource : {},

            model : {},

            onInit : async function () {

                model = new sap.ui.model.json.JSONModel()
                await model.loadData("sources/Data/MicroChart.json");

                this.chartDataSource = JSON.parse(model.getJSON());

                this.loadFromDataSource(this.chartDataSource);
            },

            loadFromDataSource: function(dataSource) {

                model.setData(dataSource);
                this.getView().setModel(model);

            },

            onTilePress : function(evt) {
                app.to("idTile", "slide");},
        });