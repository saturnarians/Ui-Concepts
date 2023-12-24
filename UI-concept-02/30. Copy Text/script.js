function handleCopyTextFromArea() {
    const area = document.querySelector('#clipboard')
    area.select();
    document.execCommand('copy')
  }