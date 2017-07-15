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

    // Declare widget's prototype.
    return declare("MyFirstWidget.widget.MyFirstWidget", [ _WidgetBase, _TemplatedMixin ], {
        // _TemplatedMixin will create our dom node using this HTML template.
        templateString: widgetTemplate,

        // DOM elements
        inputNodes: null,
        textInput: null,
        textString: null,

        // Internal variables. Non-primitives created in the prototype are shared between all widget instances.
        _handles: null,
        _contextObj: null,
        _alertDiv: null,
        message: null,

        // dojo.declare.constructor is called to construct the widget instance. Implement to initialize non-primitive properties.
        constructor: function () {
            logger.debug(this.id + ".constructor");
        },

        // dijit._WidgetBase.postCreate is called after constructing the widget. Implement to do extra setup work.
        postCreate: function () {
            logger.debug(this.id + ".postCreate");
        },

        reverse_func:function(s){
            this.message.innerHTML = this.textString.value.split('').reverse().join('');
        },
        
    });
});

require(["MyFirstWidget/widget/MyFirstWidget"]);
