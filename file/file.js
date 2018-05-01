function initiate() {
  databox = document.getElementById("databox");
  var myfiles = document.getElementById("myfiles");
  myfiles.addEventListener("change", process, false);
}

function process(e) {
  var files = e.target.files;
  databox.innerHTML = "";
  var file = files[0];
  var reader = new FileReader();
  reader.onloadstart = start;
  reader.onprogress = status;
  reader.onloadend = function() {
    show(file);
  };
  reader.readAsBinaryString(file);
}

function start(e) {
  var per = parseInt(e.loaded / e.total * 100);
  databox.innerHTML =
    '<progress value="' + per + '"max="1001>' + "%</progress>";
}

function show(file) {
  databox.innerHTML = "Name: " + file.name + "<br>";
  databox.innerHTML += "Type: " + file.type + "<br>";
  databox.innerHTML += "Size: " + file.size + "bytes<br>";
}

window.addEventListener("load", initiate, false);
