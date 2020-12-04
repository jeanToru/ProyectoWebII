const boton = document.querySelectorAll('.bottones');
const cierre = document.querySelectorAll('.bottonesCierre');
const content = document.querySelectorAll('.contenido');

for (let i = 0; i < content.length; i += 1) {
  content[i].classList.add('ocultar');
}

for (let i = 0; i < boton.length; i += 1) {
  boton[i].addEventListener('click', (event) => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1);

    for (let j = 0; j < content.length; j += 1) {
      content[j].classList.add('ocultar');
      if (content[j].getAttribute('id') === id) {
        content[j].classList.remove('ocultar');
      }
    }
  });
}

for (let i = 0; i < cierre.length; i += 1) {
  cierre[i].addEventListener('click', (event) => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1);

    for (let j = 0; j < content.length; j += 1) {
      content[j].classList.add('ocultar');
      if (content[j].getAttribute('id') === id) {
        content[j].classList.remove('ocultar');
      }
    }
  });
}
