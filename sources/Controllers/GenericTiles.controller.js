sap.ui
    .controller(
        "sources.Controllers.GenericTiles",
        {

            tileDataSource : {},

            model : {},

            onInit : async function () {

                model = new sap.ui.model.json.JSONModel()
                await model.loadData("sources/Data/TileCollectionWithMicroChart.json");

                this.tileDataSource = JSON.parse(model.getJSON());

                this.loadFromDataSource(this.tileDataSource);
            },

            loadFromDataSource: function(dataSource) {

                model.setData(dataSource);
                this.getView().setModel(model);

            },

            press : function (evt) {
                app.to("idListJson", "slide");

            }
        });