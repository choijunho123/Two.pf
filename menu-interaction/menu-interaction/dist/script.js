const ul = document.querySelector('.big_list');


function active(e) {
    const lists = document.querySelectorAll('li');
    lists.forEach(list => list.classList.remove('active'))
    const element = e.target;
    element.classList.add('active')
    
}

ul.addEventListener('click', active);