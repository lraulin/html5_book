function initiate() {
      name1 = document.getElementById("firstname");
      name2 = document.getElementById("lastname");
      name1.addEventListener("input", validation, false);
      name2.addEventListener("input", validation, false);
      validation();
    }
    function validation() {
      if (name1.value == '' && name2 == '') {
        name1.setCustomValidity('insert at least one name');
        name1.style.background = '#ffdddd';
      } else {
        name1.setCustomValidity('');
        name1.style.background = '#ffffff';
      }
    }
    window.addEventListener("load", initiate, false);