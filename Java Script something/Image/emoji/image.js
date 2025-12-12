const images = document.querySelectorAll('.Galary')
const preview = document.getElementById('preview')

images.forEach(btn => {
    btn.addEventListener('click', () => {
        images.forEach(i => i.classList.remove('Galary-Selected'))
        btn.classList.add('Galary-Selected')
        preview.textContent = btn.textContent;
    });
})