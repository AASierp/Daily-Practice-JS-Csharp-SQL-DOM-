const btn = document.getElementById('btn');
const list = document.getElementById('list');
let count = 0;

btn.addEventListener('click', () => {
    
    const li = document.createElement('li');
    li.textContent = `Item number ${count}`
    list.appendChild(li);
    count ++;

})