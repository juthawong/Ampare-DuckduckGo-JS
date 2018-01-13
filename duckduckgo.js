String.prototype.DuckDuckGo = function () {
    var amparerequest = new XMLHttpRequest();
    amparerequest.onload = function (e) {
        if (this.readyState == 4 && this.status == 200) {
            return this.response;
        }
        return false;
    }
    amparerequest.open("GET", "http://api.duckduckgo.com/?q=" + this + "&format=json&pretty=1");
    amparerequest.responseType = "json";
    amparerequest.send();
}
