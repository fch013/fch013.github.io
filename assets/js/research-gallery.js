// Native dialog enhancement; links still open the original image without JavaScript.
(function () {
  "use strict";

  var dialog = document.querySelector(".research-lightbox");
  if (!dialog || typeof dialog.showModal !== "function") return;

  var enlargedImage = dialog.querySelector("img");
  var closeButton = dialog.querySelector(".research-lightbox__close");

  document.querySelectorAll(".research-entry").forEach(function (entry) {
    var figure = entry.querySelector(".research-entry__figure");
    var thumbnail = figure.querySelector("img");
    entry.querySelectorAll("a").forEach(function (link) {
      if (link.getAttribute("href") !== figure.getAttribute("href")) return;

      link.removeAttribute("target");
      link.setAttribute("aria-haspopup", "dialog");
      if (link === figure) {
        link.setAttribute("aria-label", "Enlarge figure: " + entry.querySelector("h3").textContent);
      }
      var hint = link.querySelector(".visually-hidden");
      if (hint) hint.textContent = "(opens enlarged view)";

      link.addEventListener("click", function (event) {
        // Modified clicks keep the browser's normal open-in-new-tab behavior.
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        enlargedImage.src = figure.href;
        enlargedImage.alt = thumbnail.alt;
        dialog.showModal();
      });
    });
  });

  closeButton.addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });
})();
