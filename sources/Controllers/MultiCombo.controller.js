sap.ui
    .controller(
        "sources.Controllers.MultiCombo",
        {

            onInit : function () {
                var oMydata = new sap.ui.model.json.JSONModel();
                oMydata.loadData("sources/Data/TileCollectionWithMicroChart.json");
                console.log(JSON.stringify(oMydata.getData()));

                this.getView().setModel(oMydata);
            },

            handleSelectionChange: function(oEvent) {
                var changedItem = oEvent.getParameter("changedItem");
                var isSelected = oEvent.getParameter("selected");

                var state = "Selected";
                if (!isSelected) {
                    state = "Deselected";
                }

                MessageToast.show("Event 'selectionChange': " + state + " '" + changedItem.getText() + "'", {
                    width: "auto"
                });
            },

            handleSelectionFinish: function(oEvent) {
                var selectedItems = oEvent.getParameter("selectedItems");
                var messageText = "Event 'selectionFinished': [";
                var nodeName = "";

                for (var i = 0; i < selectedItems.length; i++) {
                    messageText += "'" + selectedItems[i].getText() + "'";
                    nodeName = selectedItems[i].getText();
                    if (i != selectedItems.length - 1) {
                        messageText += ",";
                    }
                }

                messageText += "]";

                console.log(
                    Enumerable.from(
                        [
                            {
                                "header": 5,
                                "nodeName": "első node neve",
                                "microchart" : [
                                    {
                                        "title" : "waiting",
                                        "value": 5,
                                        "color": "Critical"
                                    },{
                                        "title" : "completed",
                                        "value": 25,
                                        "color": "#00008B"
                                    },{
                                        "title" : "succsess",
                                        "value": 11,
                                        "color": "Good"
                                    },{
                                        "title": "failed",
                                        "value": 75,
                                        "color": "Error"
                                    }]
                            },
                            {
                                "header": 76,
                                "nodeName": "második node neve",
                                "microchart" : [
                                    {
                                        "title" : "waiting",
                                        "value": 25,
                                        "color": "Critical"
                                    },{
                                        "title" : "completed",
                                        "value": 2,
                                        "color": "#00008B"
                                    },{
                                        "title" : "succsess",
                                        "value": 11,
                                        "color": "Good"
                                    },{
                                        "title": "failed",
                                        "value": 9,
                                        "color": "Error"
                                    }]
                            },
                            {
                                "header": 45,
                                "nodeName": "harmadik node neve",
                                "microchart" : [
                                    {
                                        "title" : "waiting",
                                        "value": 8,
                                        "color": "Critical"
                                    },{
                                        "title" : "completed",
                                        "value": 56,
                                        "color": "#00008B"
                                    },{
                                        "title" : "succsess",
                                        "value": 78,
                                        "color": "Good"
                                    },{
                                        "title": "failed",
                                        "value": 8,
                                        "color": "Error"
                                    }]
                            },
                            {
                                "header": 6,
                                "nodeName": "negyedik node neve",
                                "microchart" : [
                                    {
                                        "title" : "waiting",
                                        "value": 120,
                                        "color": "Critical"
                                    },{
                                        "title" : "completed",
                                        "value": 2,
                                        "color": "#00008B"
                                    },{
                                        "title" : "succsess",
                                        "value": 101,
                                        "color": "Good"
                                    },{
                                        "title": "failed",
                                        "value": 15,
                                        "color": "Error"
                                    }]
                            },
                            {
                                "header": 53,
                                "nodeName": "ötödik node neve",
                                "microchart" : [
                                    {
                                        "title" : "waiting",
                                        "value": 2,
                                        "color": "Critical"
                                    },{
                                        "title" : "completed",
                                        "value": 11,
                                        "color": "#00008B"
                                    },{
                                        "title" : "succsess",
                                        "value": 16,
                                        "color": "Good"
                                    },{
                                        "title": "failed",
                                        "value": 10,
                                        "color": "Error"
                                    }]
                            },
                            {
                                "header": 23,
                                "nodeName": "hatodik node neve",
                                "microchart" : [
                                    {
                                        "title" : "waiting",
                                        "value": 75,
                                        "color": "Critical"
                                    },{
                                        "title" : "completed",
                                        "value": 27,
                                        "color": "#00008B"
                                    },{
                                        "title" : "succsess",
                                        "value": 18,
                                        "color": "Good"
                                    },{
                                        "title": "failed",
                                        "value": 99,
                                        "color": "Error"
                                    }]
                            }
                        ]
                    )
                        .select(function (egyCsempe) { return egyCsempe})
                        .where(function (egyCsempe) { return egyCsempe.nodeName == nodeName;}).toArray()
                );

                console.log(messageText, {
                    width: "auto"
                });
            }

        });