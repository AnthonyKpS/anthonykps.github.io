if (window.CSS && CSS.supports("color", "var(--primary)")) {
    var toggleColorMode = function toggleColorMode(e) {

        // Switch to Light Mode
        if (e.currentTarget.classList.contains("light--hidden")) {

            // Sets the custom html attribute
            document.documentElement.setAttribute("color-mode", "light");

            // Change the typer.js text color
            document.getElementById("main").style.color = "black"
            document.getElementById("main").setAttribute("data-colors", "black")
            return;
        }

        /* Switch to Dark Mode
        Sets the custom html attribute */
        document.documentElement.setAttribute("color-mode", "dark");

        // Change the typer.js text color
        document.getElementById("main").style.color = "white"
        document.getElementById("main").setAttribute("data-colors", "white")

    };

    // Get the buttons in the DOM
    var toggleColorButtons = document.querySelectorAll(".color-mode__btn");

    // Set up event listeners
    toggleColorButtons.forEach(function (btn) {
        btn.addEventListener("click", toggleColorMode);
    });
} else {
    // If the feature isn't supported, then we hide the toggle buttons
    var btnContainer = document.querySelector(".color-mode__header");
    btnContainer.style.display = "none";
}