chrome.webRequest.onBeforeRequest.addListener(function(details) {
    let url = chrome.runtime.getURL("inject/inject.js");

    if (details.url !== url) {
        return {
            redirectUrl: url
        };
    }

}, {
    urls: ["*://skribbl.io/js/game.js"]
}, ["blocking"]);
