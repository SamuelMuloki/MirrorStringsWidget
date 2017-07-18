define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",

    "dojo/text",
    "dojo/text!MirrorStrings/widget/template/MirrorStrings.html"
], function (declare, _WidgetBase, _TemplatedMixin,
             dojoText, widgetTemplate) {

    return declare("MirrorStrings.widget.MirrorStrings", [ _WidgetBase, _TemplatedMixin ], {
        templateString: widgetTemplate,

        // DOM elements
        textInput: null,
        textString: null,
       
       //browser message
        message: null,
        _contextObject: null,
        dataAttribute: "",

       //function that reverses the string input in the text box
        reverse:function(){
            var wd = this._contextObj.get(this.dataAttribute)
            this.message.innerHTML = wd.value.split('').reverse().join('');
        },       
    });
});

require(["MirrorStrings/widget/MirrorStrings"]);
