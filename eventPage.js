var menuItem={
    "id": "wikit",
    "title": "Wikit",
    "contexts": ["selection"]
};

chrome.contextMenus.removeAll(function() {
    console.log("contextMenus.removeAll callback");
    chrome.contextMenus.create(menuItem);
  });

chrome.contextMenus.onClicked.addListener(function(clickData){
    
    if(clickData.menuItemId == "wikit" && clickData.selectionText){
        var url = "url",
            keyAPI = "key";

        var xhr = new XMLHttpRequest(),
            textAPI = clickData.selectionText,
            langAPI = "tr"
            data = "key="+keyAPI+"&text="+textAPI+"&lang="+langAPI;
        xhr.open("POST",url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(data);
        xhr.onreadystatechange = function() {
            if (this.readyState==4 && this.status==200) {
                var res = this.responseText;
                var json = JSON.parse(res);
                if(json.code == 200) {
                    window.alert(json.text[0]);
                }
                else {
                    window.alert(json.code);
                }
            }
        }

    }
});

