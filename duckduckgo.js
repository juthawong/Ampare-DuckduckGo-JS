String.prototype.DuckDuckGo = function (keyword) {
    var amparerequest = new XMLHttpRequest();
    amparerequest.onload = function (e) {
        if (this.readyState == 4 && this.status == 200) {
            return this.responseText;
        }
    }
    amparerequest.open("GET", "http://api.duckduckgo.com/?q=" + keyword + "&format=json&pretty=1");
    amparerequest.responseType = "json";
    return false;
}
