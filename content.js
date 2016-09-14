document.addEventListener("dblclick", function(){
    var selection = window.getSelection().toString();
    var lbs = parseFloat(selection.replace(/[^0-9.]/g, ''));

    if(isNaN(lbs)){
        return;
    }
    else{       
        var kgs = lbs*(1/2.2046226218);
        alert(kgs.toFixed(2) + " kgs"); 
    }
});




/* old regex /^\D+/g  */