# scrollbarwidth

Very (very!) simple script for getting the current width of the browser scrollbar.  
Returns `0` if there is no scrollbar when called.  

Useful to check whether there is currently a scrollbar (e.g. `scrollbarwidth() === 0`), or for adjusting layouts that depend on the scrollbar width (e.g. `container.style.left = scrollbarwidth()*0.5`).

