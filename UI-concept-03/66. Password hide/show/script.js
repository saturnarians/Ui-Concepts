const toggleHideShow = document.querySelector('#toggleHideShow');
  const password = document.querySelector('#id_password');

  toggleHideShow.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});