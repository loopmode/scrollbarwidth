# scrollbarwidth

Extremely simple script for getting the current width of the browser window scrollbar.  

If there is no scrollbar when invoked, `0` is returned.  


### Installation

    # using npm
    npm install @loopmode/scrollbarwidth --save

    # using yarn
    yarn add @loopmode/scrollbarwidth


### Usage

    // var scrollbarwidth = window.scrollbarwidth;
    // import scrollbarwidth from '@loopmode/scrollbarwidth';
    var scrollbarwidth = require('@loopmode/scrollbarwidth');

    // detect scrollbar
    var hasScrollbar = scrollbarwidth() > 0;

    // use in layout calculatrions
    myLayout.style.left = -scrollbarwidth() * 0.5;
