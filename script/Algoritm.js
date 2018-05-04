function search(tagname) {

    var tag = document.getElementById("strFind").value;

    var divInfo = document.getElementById('htmInfo');
    var elem = divInfo.getElementsByTagName(tag);
    var divInfoTag = document.getElementById('outputInfo');

    for(var i=0; i<elem.length; i++){

        var input = elem[i];
        var textTag = document.createElement('p');

        textTag.innerHTML = '<strong>'+tag+' '+i+'</strong>'+'<br><br>'+input.innerText;
        divInfoTag.appendChild(textTag);
    }
}


