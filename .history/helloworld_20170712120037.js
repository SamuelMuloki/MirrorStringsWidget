// A simple Mendix widget.
var HelloWorld = declare(mxui.widget._WidgetBase, {
    message: "Hello world!",

    postCreate: function() {
        // setup your widget here.
    },

    showMessage: function() {
        console.log(this.message);
    }
});

var h = new HelloWorld();
h.showMessage();