var listof = document.getElementsByTagName("li");
var i;
for (i = 0; i < listof; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    listof[i].appendChild(span);
}