# scrollbarwidth

Extremely simple script for getting the current width of the browser window scrollbar.

If there is no scrollbar when invoked, `0` is returned.

### Installation

    # using npm
    npm install @loopmode/scrollbarwidth --save

    # using yarn
    yarn add @loopmode/scrollbarwidth

### Usage

You can provide a DOM element as argument to check it for its scrollbar width. When you call the function without arguments, it returns the width of the global window scrollbar.
You can require/import it any way you wish, and you can also access `window.scrollbarwidth`.

    import scrollbarwidth from '@loopmode/scrollbarwidth';

    var windowHasScrollbar = scrollbarwidth() > 0;
    var elHasScrollbar = scrollbarwidth(document.querySelector('.my-element')) > 0;

Have a look at the [code at github](https://github.com/loopmode/scrollbarwidth/blob/master/scrollbarwidth.js#L10-L15). It's ridiculously simple.
