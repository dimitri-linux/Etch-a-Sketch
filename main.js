const divContainer = document.querySelector('#main-Container')


for (let i = 1; i < 257; i++) {
    const divnum = document.createElement('div');
    divnum.textContent = i;
    divContainer.appendChild(divnum);

}