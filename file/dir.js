function initiate() {
  databox = document.getElementById("databox");
  var button = document.getElementById("fbutton");
  button.addEventListener("click", create, false);
  window.webkitRequestFileSystem(
    window.PERSISTENT,
    5 * 1024 * 1024,
    createhd,
    showerror
  );
}

function createhd(fs) {
  hd = fs.root;
}

function create() {
  var name = document.getElementById("myentry").value;
  if (name != "") {
    hd.getFile(name, { create: true, exclusive: false }, show, showerror);
  }
}

function show(entry) {
  document.getElementById("myentry").value = "";
  databox.innerHTML = "Entry created!<br>";
  databox.innerHTML += "Name: " + entry.name + "<br>";
  databox.innerHTML += "Path: " + entry.fullPath + "<br>";
  databox.innerHTML += "FileSystem: " + entry.filesystem.name;
}

function showerror(e) {
  alert("Error " + e.code);
}

window.addEventListener("load", initiate, false);
