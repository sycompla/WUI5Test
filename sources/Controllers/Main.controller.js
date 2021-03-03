sap.ui
    .controller(
        "sources.Controllers.Main",
        {

            onInit : function () {
                var oMydata = new sap.ui.model.json.JSONModel();
                oMydata.loadData("sources/Data/data.json");
                console.log(JSON.stringify(oMydata.getData()));

                this.getView().setModel(oMydata);

                console.log(
                    Enumerable.from(
                        [
                                {
                                    "title" : "Waiting for response",
                                    "value": 5,
                                    "color": "Critical"
                                },{
                                    "title" : "Completed",
                                    "value": 25,
                                    "color": "#00008B"
                                },{
                                    "title" : "Succsess",
                                    "value": 11,
                                    "color": "Good"
                                },{
                                    "title": "Failed",
                                    "value": 75,
                                    "color": "Error"
                                }
                        ]
                    )
                    .select(function (egyCsempe) { return egyCsempe})
                        .where(function (egyCsempe) { return egyCsempe.title == "Failed";}).toArray()
                );
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
            }
        });