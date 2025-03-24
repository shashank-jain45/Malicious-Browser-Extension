/*Function to insert Script/DOM obejct passed*/
function insertScript(type, data) {
  let body = document.body || document.getElementsByTagName("body")[0];

  if (!body) {
    console.error("Body not found, cannot inject script.");
    return;
  }

  if (type === "dom") {
    let nav = document.getElementById("myNav");
    if (!nav) {
      let newDiv = document.createElement("div");
      newDiv.innerHTML = data;
      body.appendChild(newDiv);
    }
  } else if (type === "js") {
    try {
      let script = document.createElement("script");
      script.textContent = data;
      body.appendChild(script);
    } catch (e) {
      console.error("JavaScript injection failed:", e);
    }
  } else if (type === "css") {
    try {
      let style = document.createElement("style");
      style.textContent = data;
      document.head.appendChild(style);
    } catch (e) {
      console.error("CSS injection failed:", e);
    }
  } else if (type === "external_js") {
    let script = document.createElement("script");
    script.src = data;
    script.async = true;
    script.onload = () => console.log("External JS loaded:", data);
    script.onerror = () => console.error("Failed to load external JS:", data);
    body.appendChild(script);
  } else if (type === "external_css") {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = data;
    link.onload = () => console.log("External CSS loaded:", data);
    link.onerror = () => console.error("Failed to load external CSS:", data);
    document.head.appendChild(link);
  } else {
    console.warn("Unsupported injection type:", type);
  }
}

/*Listener for communication with extension messages*/
chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
  insertScript(msg.type, msg.data);
});
