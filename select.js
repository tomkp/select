
var select = function(selector) {

    var id = function(id) {
        return [document.getElementById(id)];
    };


    var tag = function(id) {
        return [document.getElementsByTagName(id)];
    };


    var classname = function(classname, tag) {
        tag = tag || '*';
        var matched = [];
        var pattern = new RegExp("(^|\\s)" + classname + "(\\s|$)");
        var elements = document.getElementsByTagName(tag);
        for (var i = 0, j = 0, len = elements.length; i < len; i++) {
            if (pattern.test(elements[i].className)) {
                matched.push(elements[i]);
            }
        }
        return matched;
    };

    var mappings = {
        ".": classname,
        "#": id
    };


    var fn = mappings[selector.substr(0,1)];
    if (fn) {
        return fn(selector.substr(1));
    } else {
        return tag(selector);
    }


};

