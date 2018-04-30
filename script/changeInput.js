document.getElementById("openFile").addEventListener('change',function () {

    var fr = new FileReader();
    fr.onload = function () {
        document.getElementById("info").innerHTML=this.result;};
    fr.readAsText(this.files[0]);});










