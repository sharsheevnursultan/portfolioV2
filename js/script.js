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

document.getElementById('sort_button').onclick = function () {
    document.getElementById('portfolio_sort').classList.toggle('flex-wrap-reverse');
    x=document.getElementById('sort_name');
    if (x.innerHTML==='от старых к новым'){
        x.innerHTML='от новых к старым'
    }else  if (x.innerHTML==='от новых к старым'){
        x.innerHTML='от старых к новым'
    }
};

