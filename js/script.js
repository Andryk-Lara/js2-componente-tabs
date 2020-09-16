function accion(){
    event.preventDefault();//Que el link no cambie
    const id = event.currentTarget.getAttribute('href').substring(1);
    console.log(id);
    for(let i = 0; i < infos.length; i++){
        infos[i].classList.add('js-content-hidden');
        if (infos[i].getAttribute('id') == id) {
            contenido[i].classList.remove('js-content-hidden');
        }
    }
    for(let i = 0; i < tabs.length; i++){
        tabs[i].classList.remove('js-active');
    }

    event.currentTarget.classList.add('js-active');
}


const tabs = document.querySelectorAll('.tabs-tablist-item');

const infos = document.querySelectorAll('.tabs-content-item');

for(let i = 0; i < infos.length; i++){
    infos[i].classList.add('js-content-hidden');
}

infos[0].classList.remove('js-content-hidden');
tabs[0].classList.add('js-active');

for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', accion);
}

