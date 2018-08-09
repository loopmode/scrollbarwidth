(function() {
    "use strict";

    /**
     * Measures the width of the scrollbar of a given element, or of the global window itself when called without arguments.
     *
     * @param {Element} [target] - Container element to check. Defaults to `window.documentElement`.
     * @return {Number} The width of the scrollbar in pixels. If there is no scrollbar, 0 is returned.
     */
    function scrollbarwidth(target) {
        if (target) {
            return target.offsetWidth - target.clientWIdth;
        }
        return window.innerWidth - window.documentElement.clientWidth;
    }

    if (typeof define === "function" && define.amd) {
        define([], function() {
            return scrollbarwidth;
        });
    } else if (typeof exports !== "undefined") {
        module.exports = scrollbarwidth;
    } else {
        this.scrollbarwidth = scrollbarwidth;
    }
}.call(this));
