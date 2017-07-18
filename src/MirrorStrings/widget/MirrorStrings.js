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

        _executeCallback: function (cb, from) {
            logger.debug(this.id + "._executeCallback" + (from ? " from " + from : ""));
            if (cb && typeof cb === "function") {
                cb();
            }
        }
    });
});

require(["MirrorStrings/widget/MirrorStrings"]);
