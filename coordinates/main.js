const $vertical = document.querySelector('.vertical');
const $horizontal = document.querySelector('.horizontal');
const $target = document.querySelector('.target');
const $tag = document.querySelector('.tag');

document.addEventListener('mouseover', (e) => {
    const X = e.clientX;
    const Y = e.clientY;

    $vertical.style.left = `${X}px`;
    $horizontal.style.top = `${Y}px`;

    $target.style.left = `${X}px`;
    $target.style.top = `${Y}px`;
    
    $tag.style.left = `${X}px`;
    $tag.style.top = `${Y}px`;
    $tag.textContent = `${X}px ${Y}px`;
});
