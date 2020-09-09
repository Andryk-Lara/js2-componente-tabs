function accion(){
    const id = event.currentTarget.getAttribute('href').substring(1);
    console.log(id);

    const infos = document.querySelectorAll('.tabs-content-item');

    for(let i = 0; i < infos.length; i++){
    infos[i].style.display = 'none';
    }

    const info = document.getElementById(`${id}`);
    info.style.display = 'block';
}


const tabs = document.querySelectorAll('.tabs-tablist-item');

const infos = document.querySelectorAll('.tabs-content-item');

for(let i = 0; i < infos.length; i++){
    infos[i].style.display = 'none';
}

infos[0].style.display ='block';

for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', accion)
}

