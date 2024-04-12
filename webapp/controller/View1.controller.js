sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
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
      onCreate: function () {
        debugger;
        var that = this;
        var usuario = this.getView().byId("_IDGenInput9").getValue();
        var nome = this.getView().byId("_IDGenInput2").getValue();
        var projeto = this.getView().byId("_IDGenInput3").getValue();
        var email = this.getView().byId("_IDGenInput5").getValue();

        if (!usuario) {
          sap.m.MessageBox.error(
            this.getView()
              .getModel("i18n")
              .getResourceBundle()
              .getText("msgErroUsuario")
          );
          return;
        }

        var oDados = {
          Usuario: usuario,
          Nome: nome,
          ProjetoSegw: projeto,
          email: email,
        };

        this.getView()
          .getModel()
          .create("/AlunosFioriSet", oDados, {
            success: function (oData, Response) {
              sap.m.MessageBox.success(
                that
                  .getView()
                  .getModel("i18n")
                  .getResourceBundle()
                  .getText("msgCreateOk")
              );
              that.getView().byId("_IDGenInput9").setValue("");
              that.getView().byId("_IDGenInput2").setValue("");
              that.getView().byId("_IDGenInput3").setValue("");
              that.getView().byId("_IDGenInput5").setValue("");
            },

            error: function (oError) {
              sap.m.MessageBox.error(
                this.getView()
                  .getModel("i18n")
                  .getResourceBundle()
                  .getText("msgCreateError")
              );
            },
          });
      },

      onPress: function (evt) {
        debugger;
        MessageToast.show(evt.getSource().getId() + " Pressed");
      },

      onPress2: function (evt) {
        debugger;
        var varvalue = this.byId("_IDGenInput1").getValue();
        this.byId("_IDGenInput1").setValue("Some thing");
        MessageToast.show(evt.getSource().getId() + " Wello world");
      },
    });

    return PageController;
  }
);
