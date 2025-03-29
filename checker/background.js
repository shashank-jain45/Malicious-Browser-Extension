chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.method === "POST") {
      const url = details.url;
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "POST Request Detected",
        message: `Another extension made a POST request to:\n${url}`,
      });
    }
  },
  { urls: ["<all_urls>"] },
  ["requestBody"]
);
