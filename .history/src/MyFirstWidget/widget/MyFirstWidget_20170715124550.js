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
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event",

    "dojo/text!MyFirstWidget/widget/template/MyFirstWidget.html"
], function (declare, _WidgetBase, _TemplatedMixin,
             dojoStyle, dojoArray, lang, dojoText, dojoHtml, dojoEvent,
             widgetTemplate) {

    return declare("MyFirstWidget.widget.MyFirstWidget", [ _WidgetBase, _TemplatedMixin ], {
        templateString: widgetTemplate,

        // DOM elements
        //inputNodes: null,
        textInput: null,
        textString: null,
       
       //browser message
        message: null,

        reverse_func:function(s){
            this.message.innerHTML = this.textString.value.split('').reverse().join('');
        },
        
    });
});

require(["MyFirstWidget/widget/MyFirstWidget"]);
