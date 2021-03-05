sap.ui.controller("sources.Controllers.Tile", {

        tileDataSource : {},

        model : {},

        onInit : async function () {

                model = new sap.ui.model.json.JSONModel()
                await model.loadData("sources/Data/TileData.json");

                this.tileDataSource = JSON.parse(model.getJSON());

                this.loadFromDataSource(this.tileDataSource);
        },

        loadFromDataSource: function(dataSource) {

                model.setData(dataSource);
                this.getView().setModel(model);

        },

        handleEditPress : function (evt) {
                var oTileContainer = this.getView().byId("container");
                var newValue = ! oTileContainer.getEditable();
                oTileContainer.setEditable(newValue);
                evt.getSource().setText(newValue ? "Done" : "Edit");
        },

        handleBusyPress : function (evt) {
                var oTileContainer = this.getView().byId("container");
                var newValue = ! oTileContainer.getBusy();
                oTileContainer.setBusy(newValue);
                evt.getSource().setText(newValue ? "Done" : "Busy state");
        },

        handleTileDelete : function (evt) {
                var tile = evt.getParameter("tile");
                evt.getSource().removeTile(tile);
        }
        });