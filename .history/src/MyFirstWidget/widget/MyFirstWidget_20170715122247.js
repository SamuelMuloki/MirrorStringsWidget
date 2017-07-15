/*global logger*/
/*
    MyFirstWidget
    ========================

    @file      : MyFirstWidget.js
    @version   : 1.0.0
    @author    : Muloki Samuel
    @date      : 7/10/2017
    @copyright : Flock Of Birds
    @license   : MIT

    Documentation
    ========================
    Describe your widget here.
*/


// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",

    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event",

    "dojo/text!MyFirstWidget/widget/template/MyFirstWidget.html"
], function (declare, _WidgetBase, _TemplatedMixin, dom, dojoDom, dojoProp, dojoStyle, dojoConstruct, dojoArray, lang, dojoText, dojoHtml, dojoEvent, widgetTemplate) {

    return declare("MyFirstWidget.widget.MyFirstWidget", [ _WidgetBase, _TemplatedMixin ], {
        templateString: widgetTemplate,

        // DOM elements
        inputNodes: null,
        textInput: null,
        textString: null,
       
       //browser message
        message: null,

        constructor: function () {
            logger.debug(this.id + ".constructor");
        },

        postCreate: function () {
            logger.debug(this.id + ".postCreate");
            this._updateRendering();
            this._setupEvents();
        },

        // mxui.widget._WidgetBase.update is called when context is changed or initialized. Implement to re-render and / or fetch data.
        update: function (obj, callback) {
            logger.debug(this.id + ".update");

            this._contextObj = obj;
            this._updateRendering(callback); // We're passing the callback to updateRendering to be called after DOM-manipulation
        },

        reverse_func:function(s){
            this.message.innerHTML = this.textString.value.split('').reverse().join('');
        },
        // Rerender the interface.
        _updateRendering: function (callback) {
            logger.debug(this.id + "._updateRendering");

            if (this._contextObj !== null) {
                dojoStyle.set(this.domNode, "display", "block");

                var colorValue = this._contextObj.get(this.backgroundColor);
            } else {
                dojoStyle.set(this.domNode, "display", "none");
            }

            // The callback, coming from update, needs to be executed, to let the page know it finished rendering
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

require(["MyFirstWidget/widget/MyFirstWidget"]);
