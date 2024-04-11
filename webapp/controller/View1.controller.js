sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        //return Controller.extend("zcursoappgnt.controller.View1", {
        //onInit: function () {

        //},

        //});

        var PageController = Controller.extend("zcursoappgnt.controller.View1", {

            onPress: function (evt) {
                debugger;
                MessageToast.show(evt.getSource().getId() + " Pressed");
            },

            onPress2: function (evt) {
                debugger;
                var varvalue = this.byId("_IDGenInput1").getValue();
                this.byId("_IDGenInput1").setValue("Some thing");
                MessageToast.show(evt.getSource().getId() + " Wello world");
            }

        });

        return PageController;

    });
