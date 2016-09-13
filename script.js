var selection = window.getSelection().toString();
var lbs = parseInt(selection.replace( /^\D+/g, ''));

    if(isNaN(lbs)){
        console.log("not a number");
    }
    else{       
        var kgs = lbs*(1/2.2046226218);
        alert(kgs.toFixed(2) + " kgs");  
    }