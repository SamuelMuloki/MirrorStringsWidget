define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",

    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/text!MirrorStrings/widget/template/MirrorStrings.html"
], function (declare, _WidgetBase, _TemplatedMixin, dom, dojoDom, dojoProp, dojoStyle, dojoConstruct, lang, dojoText, dojoHtml, widgetTemplate) {
    "use strict";

    return declare("MirrorStrings.widget.MirrorStrings", [_WidgetBase, _TemplatedMixin], {
        templateString: widgetTemplate,

        dataAttribute: "",
        message: null,
        textString: "",

        //parameters to configure in the modeler
        reverseEntity: "",
        mfToExecute: "",

        // Internal variables. Non-primitives created in the prototype are shared between all widget instances.
        _contextObj: null,

        postCreate: function () {
            logger.debug(this.id + ".postCreate");
            this._updateRendering();
        },

        // mxui.widget._WidgetBase.update is called when context is changed or initialized. Implement to re-render and / or fetch data.
        update: function (obj, callback) {
            logger.debug(this.id + ".update");

            this._contextObj = obj;
            this._updateRendering(callback);
        },

        reverseMsg: function (str) {
            var newString = "";
            for (var i = str.length - 1; i >= 0; i--) {
                newString += str[i];
            }
            return newString;
        },

        _updateRendering: function (callback) {
            logger.debug(this.id + "._updateRendering");

            if (this._contextObj !== null) {
                dojoStyle.set(this.domNode, "display", "block");
                var msg = this._contextObj.get(this.dataAttribute)

                dojoHtml.set(this.message, this.reverseMsg(msg));

            } else {
                dojoStyle.set(this.domNode, "display", "none");
            }
            this._executeCallback(callback, "_updateRendering");
        },

        createTag: function () {
            mx.data.create({
                entity: this.reverseEntity,
                callback: lang.hitch(this, function (obj) {
                    obj.set(this.dataAttribute, this.textString.value)
                    this.saveTag(obj)
                    console.log("Object created on server");
                }),
                error: function (e) {
                    console.error("Could not commit object:", e);
                }
            });
        },

        saveTag: function (object) {
            mx.data.commit({
                mxobj: object,
                callback: function () {
                    console.log("Object committed");
                },
                error: function (e) {
                    console.error("Could not commit object:", e);
                }
            });
        },

        _setupEvent: function () {
            if (this.mfToExecute !== "") {
                this._execMf(this.mfToExecute, this._contextObj.getGuid());
            }
        },

         _execMf: function (mf, guid, cb) {
            logger.debug(this.id + "._execMf");
            if (mf && guid) {
                mx.ui.action(mf, {
                    params: {
                        applyto: "selection",
                        guids: [guid]
                    },
                    callback: lang.hitch(this, function (objs) {
                        if (cb && typeof cb === "function") {
                            cb(objs);
                        }
                    }),
                    error: function (error) {
                        mx.ui.error("Error executing microflow " + mf + " : " + error.message);
                        console.error(this.id + "._execMf", error);
                    }
                }, this);
            }
        },

        _executeCallback: function (cb, from) {
            logger.debug(this.id + "._executeCallback" + (from ? " from " + from : ""));
            if (cb && typeof cb === "function") {
                cb();
            }
        }
    });
});

require(["MirrorStrings/widget/MirrorStrings"]);
