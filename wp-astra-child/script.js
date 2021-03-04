console.log("Astra Child Theme JS is running!");


document.addEventListener("DOMContentLoaded", function () {
    initTypedJs();
    initMagicMouse();
});



// ---------- typed.js ---------- //
function initTypedJs() {
    new Typed(".typed", {
        strings: ['"Design is intelligence made visible"'],
        typeSpeed: 80,
        loop: true,
    });
    new Typed(".typed-two", {
        strings: ['"Every great design begins with an even better story."'],
        typeSpeed: 80,
        loop: true,
    });


};

// ---------- magicmouse.js ---------- //

    function initMagicMouse(){
    let options = {
        "cursorOuter": "disable",
        "hoverEffect": "pointer-overlay",
        "hoverItemMove": false,
        "defaultCursor": false,
        "outerWidth": 41,
        "outerHeight": 41
      };
    magicMouse(options);
    }

    







