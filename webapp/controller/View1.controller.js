sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast) {
    "use strict";

    //var PageController = Controller.extend("zcursoappgnt.controller.View1", {
    return Controller.extend("zcursoappgnt.controller.View1", {
      onInit: function () {
      },

      onQuery: function () {
        debugger;
        this.getView()
          .getModel()
          .read("/AlunosFioriSet", {
            filters: [
              new sap.ui.model.Filter(
                "Usuario",
                sap.ui.model.FilterOperator.EQ,
                "GNT"
              ),
            ],
            success: function (oData, oReponse) {
              sap.m.MessageBox.success(
                that
                  .getView()
                  .getModel("i18n")
                  .getResourceBundle()
                  .getText("msgsgGetOk")
              );
            },
            error: function (oError) {
              sap.m.MessageBox.error(
                that
                  .getView()
                  .getModel("i18n")
                  .getResourceBundle()
                  .getText("msgsgGetError")
              );
            },
          });
      },

      onUpdate: function () {
        debugger;
        var that = this;
        var usuario = this.getView().byId("_IDGenInput9").getValue();
        var nome = this.getView().byId("_IDGenInput2").getValue();
        var projesegw = this.getView().byId("_IDGenInput3").getValue();
        var email = this.getView().byId("_IDGenInput5").getValue();

        //var oStrPath = this.getView()
          //.byId("idtablealuno")
          //.getSelectedContextPaths();

          let index = "/AlunosFioriSet('"+usuario+"')"

        var oDados = {
          Usuario: usuario,
          Nome: nome,
          ProjetoSegw: projesegw,
          email: email,
        };

        this.getView()
          .getModel()
          .update(index, oDados, {
            success: function (oData, oReponse) {
              sap.m.MessageBox.success(
                that
                  .getView()
                  .getModel("i18n")
                  .getResourceBundle()
                  .getText("msgUpdateOk")
              );
              that.getView().byId("_IDGenInput9").setValue("");
              that.getView().byId("_IDGenInput2").setValue("");
              that.getView().byId("_IDGenInput3").setValue("");
              that.getView().byId("_IDGenInput5").setValue("");
            },
            error: function (oError) {
              sap.m.MessageBox.error(
                that
                  .getView()
                  .getModel("i18n")
                  .getResourceBundle()
                  .getText("msgUpdateError")
              );
            },
          });
      },

      onDelete: function () {
        debugger;
        var that = this;
        var totRemove = this.getView().byId("idtablealuno").getSelectedItems();

        for (var i = 0; i < totRemove.length; i++) {
          var sPath = totRemove[i].getBindingContextPath(); //this.getView().byId("idtablealuno").getSelectedContextPaths();

          this.getView()
            .getModel()
            .remove(sPath, {
              success: function (odata, oReponse) {
                sap.m.MessageBox.success(
                  that
                    .getView()
                    .getModel("i18n")
                    .getResourceBundle()
                    .getText("msgDeleteOk")
                );
                return;
              },
              error: function (oError) {},
            });
        }
      },

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
