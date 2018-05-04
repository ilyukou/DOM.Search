function search(tagname) {

    var strFind = document.getElementById("strFind").value;
    var divInfo = document.getElementById('htmInfo');

    var o = document.getElementById( 'search' );
    for( var i = 0; i < o.length; i++ ) {
        if( o[i].checked == '1' ) {

            if(o[i].value == 'tag'){

                var elem = divInfo.getElementsByTagName(strFind);
                var divInfoTag = document.getElementById('outputInfo');

            }
            if(o[ i ].value == 'class'){
                var elem = divInfo.getElementsByClassName(strFind);
                var divInfoTag = document.getElementById('outputInfo');
            }
            if(o[ i ].value == 'id'){
                var elem = divInfo.getElementById(strFind);
                var divInfoTag = document.getElementById('outputInfo');
            }
            for(var i=0; i<elem.length; i++){
                var input = elem[i];
                var textStrFind = document.createElement('p');

                textStrFind.innerHTML = '<strong>'+strFind+' '+i+'</strong>'+'<br><br>'+input.innerText;
                divInfoTag.appendChild(textStrFind);
            }
        }

    }




}


