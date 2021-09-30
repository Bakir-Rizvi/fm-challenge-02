function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validate() {
    var inputRow = document.querySelector('.form__row');
    var email = document.forms['signup-form']['email'];

    if (email.value === '' || !validateEmail(email.value)) {
      inputRow.classList.add('form__row--error');
      email.focus();
      return false;
    }

    inputRow.classList.remove('form__row--error');
    return true;
  }