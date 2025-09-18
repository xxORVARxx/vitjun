"use strict" // WHOLE-SCRIPT STRICT MODE SYNTAX.

// https://materializecss.com/scrollspy.html:
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".c_animate-soon").forEach( animate => {
        animate.classList.replace("c_animate-soon", "c_animate");
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



function f_get_window_ratio(){
    let window_ratio = window.innerWidth / window.innerHeight;
    document.querySelector(':root').style.setProperty("--my-window-ratio", window_ratio);
}
f_get_window_ratio();
window.addEventListener('resize', f_get_window_ratio);