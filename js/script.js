function burgerScript() {
    let i = document.getElementById('burger');
    if (i.classList.contains('nav-elements')) {
        i.classList.remove('nav-elements');
        i.classList.add('menuVisible')
    } else if (i.classList.contains('menuVisible')) {
        i.classList.remove('menuVisible');
        i.classList.add('nav-elements')
    }

    console.log('click')
}


