const toggleSetupButton = document.getElementById('toggle_setup');
const stepsDiv = document.getElementById('steps-div');
const articleSwitch = document.querySelectorAll('article .top');
const profileBtn = document.querySelector('.header-right .profile');
const aside = document.querySelector('aside');

toggleSetupButton.onclick= () => {
    stepsDiv.classList.toggle('open');
    toggleSetupButton.classList.toggle('open');
    if (stepsDiv.style.maxHeight) return stepsDiv.style.maxHeight=null;
    stepsDiv.style.maxHeight = stepsDiv.scrollHeight+ 'px';
}

articleSwitch.forEach(art => {
    art.addEventListener('click', (e) => {
        if (e.target.tagName == 'svg') return;
        articleSwitch.forEach(el => {
            if (art == el) return;
            el.parentElement.classList.remove('open');
            el.nextElementSibling.style.maxHeight = null;
            el.nextElementSibling.style.marginTop = 0;
        });
        // articleSwitch.forEach(el => el.parentElement.classList.remove('open'));
        
        art.parentElement.classList.add('open');
        if (art.nextElementSibling.style.maxHeight) {
            console.log('closing');
            art.parentElement.classList.remove('open');
            art.nextElementSibling.style.maxHeight = null;
            art.nextElementSibling.style.marginTop = 0;
            return;
        }
        art.nextElementSibling.style.maxHeight = art.nextElementSibling.scrollHeight + 50 + 'px';
        stepsDiv.style.maxHeight = stepsDiv.scrollHeight + 140 + 'px';
    });
});

profileBtn.addEventListener('click', () => {
    aside.classList.toggle('show');
    profileBtn.classList.toggle('active');
});