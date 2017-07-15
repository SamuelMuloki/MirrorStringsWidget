define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",

    "dojo/dom-style",
    "dojo/text",
    "dojo/html",

    "dojo/text!MyFirstWidget/widget/template/MyFirstWidget.html"
], function (declare, _WidgetBase, _TemplatedMixin,
             dojoStyle, dojoText, dojoHtml,
             widgetTemplate) {

    return declare("MyFirstWidget.widget.MyFirstWidget", [ _WidgetBase, _TemplatedMixin ], {
        templateString: widgetTemplate,

        // DOM elements
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