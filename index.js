console.log("Are you a web developer 🌝");

document.addEventListener('keydown', function (event) {
    if (event.key !== ' ')
        document.querySelector('.key').textContent = event.key;
    else
        document.querySelector('.key').textContent = 'Space';
});
