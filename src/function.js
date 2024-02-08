let navBtn = document.getElementsByClassName('navBtn');

setInterval(() => {
    for (let item of navBtn) {
        item.style.transform = 'rotate(3deg)';
    }
}, 2000);
setInterval(() => {
    for (let item of navBtn) {
        item.style.transform = 'rotate(-3deg)';
    }
}, 4000);




