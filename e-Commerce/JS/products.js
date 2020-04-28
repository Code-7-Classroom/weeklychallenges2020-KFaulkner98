let shoes = document.querySelectorAll('.shoes');
let clothes = document.querySelectorAll('.clothes');

document.querySelector('.shoesFltr').addEventListener('click', (event) => {
    event.preventDefault();
    // for (var i = 0; i < shoes.length; i++){
    //     shoes[i].style['display'] = 'none';
    // };
    for (var i = 0; i < clothes.length; i++){
        clothes[i].style['display'] = 'none';
    };
});

document.querySelector('.clothesFltr').addEventListener('click', (event) => {
    event.preventDefault();
    for (var i = 0; i < shoes.length; i++){
        shoes[i].style['display'] = 'none';
    };
    // for (var i = 0; i < clothes.length; i++){
    //     clothes[i].style['display'] = 'none';
    // };
});