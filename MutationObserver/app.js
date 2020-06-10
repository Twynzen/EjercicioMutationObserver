const observer = new MutationObserver((mutationList) => {
    mutationList.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            console.log('add', mutation.addedNodes[0]);
        }
        if (mutation.removedNodes.length) {
            console.log('delete', mutation.removedNodes[0]);
        }
    });
});

//Indicar el target que se desdea observar 
const equipos = document.querySelector('ul.equipos');
const observerOptions = {

    //Detecta cambios en los atributos
    attributes: true,
    //Detecta cambios al añadir o elimnar elementos del dom
    childList: true,
    //Detecta si los hijos han cambiado
    subtree: false,
};
observer.observe(equipos, observerOptions);