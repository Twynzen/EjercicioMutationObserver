const equiposFutbol_array = ['Los tiburones', 'Los Gorilas', 'Los Marcianos', 'Los Guerrilleros'];
setTimeout(function addTeam() {
    const equipos = document.querySelector('ul.equipos');
    const equipo = document.createElement('li');
    //El contenido de textcontent es un variación aleatoria de los equipos
    equipo.textContent = equiposFutbol_array[parseInt(Math.random() *
        equiposFutbol_array.length, 10)];
    equipos.appendChild(equipo);
    equipo.classList.add('newClass');
}, Math.random() * 1000);

setTimeout(function removeTeam() {
    const equipos = document.querySelector('ul.equipos');
    equipos.removeChild(equipos.querySelector('li'));
}, Math.random() * 3000 + 3000);