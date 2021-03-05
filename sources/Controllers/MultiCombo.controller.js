sap.ui
    .controller(
        "sources.Controllers.MultiCombo",
        {
            tileDateSource : {},

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

            filterDataSource: function(filter) {

                let filteredDataSource=new Object();

                if (filter.length>0) {

                    filteredDataSource.TileCollection =
                        Enumerable.from(this.tileDataSource.TileCollection)
                            .select(function (egyCsempe) { return egyCsempe})
                            .where(function (egyCsempe) {return egyCsempe.nodeName === filter[0].getText();})
                            .toArray();

                    this.loadFromDataSource(filteredDataSource);

                }
                else
                    this.loadFromDataSource(this.tileDataSource);

            },

            handleSelectionFinish: function(event) {

                this.filterDataSource(event.getParameter("selectedItems"));

            }

        });