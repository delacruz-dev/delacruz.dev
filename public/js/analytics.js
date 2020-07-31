var callToActions = window.document.querySelectorAll("[data-tracking]");

if (callToActions && callToActions.length) {
  callToActions.forEach(function (trackedElement) {
    trackedElement.addEventListener("click", function () {
      gtag("event", "click", {
        event_category: "Call to Action",
        event_label: trackedElement.dataset.tracking,
      });
    });
  });
}
