function removePopup() {
  const popup = popupFind();
    try {
      console.log("Removing popup");
      popup.parentElement.remove(popup);
      console.log("Resuming video");
      const video = document.querySelector("#movie_player > div.html5-video-container > video");
      if(video) {
        const playEvent = new Event("play");
        video.dispatchEvent(playEvent);
      }
    } catch (error) {
      delete error; 
    }
}
function popupFind() {
    return document.querySelector(
      "body > ytd-app > ytd-popup-container > tp-yt-paper-dialog > ytd-enforcement-message-view-model"
    );
}
function pauseFind() {
  return document.querySelector(
    "body > ytd-app > ytd-popup-container > tp-yt-paper-dialog > ytd-enforcement-message-view-model"
  );
}
const observer = new MutationObserver((mutationsList) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      removePopup();
    }
  }
});
const config = { childList: true, subtree: true };
observer.observe(document.body, config);
(function () {
  window.debug = true;
  if (debug) console.log("Script started");
})();
