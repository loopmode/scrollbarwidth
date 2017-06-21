(function() {
    'use strict';

    function scrollbarwidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }

    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return scrollbarwidth;
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = scrollbarwidth;
    } else {
        this.scrollbarwidth = scrollbarwidth;
    }

}).call(this);
