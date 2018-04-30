function search(tagname) {

    var tag = document.getElementById("find").value;

    var divInfo = document.getElementById('info');
    var elem = divInfo.getElementsByTagName(tag);
    var divInfoTag = document.getElementById('tagInfo');

    for(var i=0; i<elem.length; i++){

        var input = elem[i];
        var textTag = document.createElement('p');

        textTag.innerHTML = '<strong>'+tag+' '+i+'</strong>'+'<br><br>'+input.innerText;
        divInfoTag.appendChild(textTag);
    }
}


