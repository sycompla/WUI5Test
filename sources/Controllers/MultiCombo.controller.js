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

                for (var i = 0; i < selectedItems.length; i++) {
                    messageText += "'" + selectedItems[i].getText() + "'";
                    if (i != selectedItems.length - 1) {
                        messageText += ",";
                    }
                }

                messageText += "]";

                MessageToast.show(messageText, {
                    width: "auto"
                });
            }

        });