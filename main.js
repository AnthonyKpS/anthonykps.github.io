// Overlay functionality

// Open when someone clicks on the span element 
function openNav(button) {
    
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    
    if (vw < 992) {
        document.getElementById("myNav").style.width = "100%";
    } else {
        document.getElementById("myNav").style.width = "50%";
    }
    
    if (button == 1){
        document.getElementById("overlayHeading").innerHTML = "About me";
        document.getElementById("overlayText").innerHTML = "My full name in Anthony Kaparounakis but most people call me kps <br> I'm a Greek living in Athens, Greece and an undergraduate student at dit.hua <br> I have been fiddling with computers for as long as I can remember";
    } else if (button == 2) {
        document.getElementById("overlayHeading").innerHTML = "My work";
        document.getElementById("overlayText").innerHTML = "";
    } else {
        document.getElementById("overlayHeading").innerHTML = "Awards";
        document.getElementById("overlayText").innerHTML = "";
    }
}


// Close when someone clicks on the "x" symbol inside the overlay
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}