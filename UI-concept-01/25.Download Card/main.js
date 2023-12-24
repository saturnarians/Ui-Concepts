const updateDownloads = (button) => {
    const downloads = Number(button.getAttribute('data-downloads'));
    const icon = button.children[0];
    
    button.setAttribute('data-downloads', downloads + 1);
    
    icon.classList.remove('fa-download');
    icon.classList.add('fa-check');
    button.setAttribute('disabled', true);
    
    
    setTimeout(() => {
      icon.classList.remove('fa-check');
      icon.classList.add('fa-download');
      button.removeAttribute('disabled');
    }, 2000)
  }