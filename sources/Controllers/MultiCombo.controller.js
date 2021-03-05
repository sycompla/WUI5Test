sap.ui
    .controller(
        "sources.Controllers.MultiCombo",
        {
            tileDataSource : {},

            originalTileDataSource : {},

            model : {},

            onInit : async function () {

                model = new sap.ui.model.json.JSONModel()
                await model.loadData("sources/Data/TileCollectionWithMicroChart.json");

                this.tileDataSource = model.getData();

                this.originalTileDataSource.TileCollection =  Array.from(this.tileDataSource.TileCollection);

                model.setData(this.tileDataSource);
                this.getView().setModel(model);

            },

            filterDataSource: function(filter) {

                if (filter.length>0) {

                    this.tileDataSource.TileCollection =
                        Enumerable.from(this.originalTileDataSource.TileCollection)
                            .select(function (egyCsempe) { return egyCsempe})
                            .where(function (egyCsempe) {return egyCsempe.nodeName === filter[0].getText();})
                            .toArray();

                    model.setData(this.tileDataSource);

                }
                else
                    model.setData(this.originalTileDataSource);

            },

            handleSelectionFinish: function(event) {

                this.filterDataSource(event.getParameter("selectedItems"));

            }

        });