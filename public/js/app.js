"use strict" // WHOLE-SCRIPT STRICT MODE SYNTAX.

// https://materializecss.com/scrollspy.html:
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".animate-soon").forEach( animate => {
        animate.classList.replace("animate-soon", "animate");
    });
    f_scrollspy();
    f_sidenav();
    f_collapsible();
});



function f_scrollspy(){
    const options = {
        throttle: 200,
        scrollOffset: 0,
    };
    const elems = document.querySelectorAll(".scrollspy");
    const instances = M.ScrollSpy.init(elems, options);
}

function f_sidenav(){
    const options = {
        edge: "right",
        preventScrolling: false,
    };
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, options);
}

function f_collapsible(){
    const options = {
        accordion: false,
    };
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
};
