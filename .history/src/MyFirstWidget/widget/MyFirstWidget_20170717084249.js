define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",

    "dojo/text",

    "dojo/text!MyFirstWidget/widget/template/MyFirstWidget.html"
], function (declare, _WidgetBase, _TemplatedMixin,
             dojoText, widgetTemplate) {

    return declare("MyFirstWidget.widget.MyFirstWidget", [ _WidgetBase, _TemplatedMixin ], {
        templateString: widgetTemplate,

        // DOM elements
        textInput: null,
        textString: null,
       
       //browser message
        message: null,
       //function that reverses the string input in the text box
        reverse_func:function(s){
            this.message.innerHTML = this.textString.value.split('').reverse().join('');
        },
        
    });
});

require(["MyFirstWidget/widget/MyFirstWidget"]);