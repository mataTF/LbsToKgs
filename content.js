document.addEventListener("dblclick", function(){
    var selection = window.getSelection().toString();
    var lbs = parseInt(selection.replace( /^\D+/g, ''));
    var kgs;

    kgs = lbs*(1/2.2046226218);
    alert(kgs.toFixed(2) + " kgs");
});
