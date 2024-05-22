document.getElementById('imagem').addEventListener('change', function() {
  const label = document.getElementById('upload-label');
  if (this.files && this.files.length > 0) {
    const fileName = this.files[0].name;
    label.textContent = fileName;
    label.classList.add('loaded');
  } else {
    label.textContent = 'Selecionar Imagem';
    label.classList.remove('loaded');
  }
});