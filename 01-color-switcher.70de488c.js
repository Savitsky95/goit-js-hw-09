!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.body;console.log(n);var o=null;t.addEventListener("click",(function(){t.disabled=!0,o=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(o),e.disabled=!0,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.70de488c.js.map
