function initiate() {
  const button = document.getElementById('save');
  button.addEventListener('click', newItem, false);
}

function newItem() {
  const keyword = document.getElementById('keyword').value;
  const value = document.getElementById('text').value;
  // sessionStorage.setItem(keyword, value);
  sessionStorage[keyword] = value;
  show(keyword);
}

function show(keyword) {
  const dataBox = document.getElementById('data_box');
  // const value = sessionStorage.getItem(keyword);
  const value = sessionStorage[keyword];
  dataBox.innerHTML = '<div>' + keyword + '-' + value + '<div>';
}

window.addEventListener('load', initiate, false);