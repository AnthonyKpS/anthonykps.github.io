// Overlay functionality

// Open when someone clicks on the span element 
function openNav(button) {
    
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    var size = "50%";
    if (vw < 992) {
        size = "100%";
    }

    document.getElementById("about").style.width = "0%";
    document.getElementById("work").style.width = "0%";
    document.getElementById("awards").style.width = "0%";
    
    if (button == 1){
        document.getElementById("about").style.width = size;
    } else if (button == 2) {
        document.getElementById("work").style.width = size;
    } else {
        document.getElementById("awards").style.width = size;
    }
}

// Close when someone clicks on the "x" symbol inside the overlay
function closeNav() {
    document.getElementById("about").style.width = "0%";
    document.getElementById("work").style.width = "0%";
    document.getElementById("awards").style.width = "0%";
}