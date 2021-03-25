const divContainer = document.querySelector('#main-Container')


for (let i = 1; i < 257; i++) {
    const divnum = document.createElement('div');
    divnum.textContent = i;
    divContainer.appendChild(divnum);

}

for (let i = 1; i < 257; i++) {
    const div = document.getElementsByTagName('div');
    div.addEventListener('hover', () => {
        console.log(1);
    })
}