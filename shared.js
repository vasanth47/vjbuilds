var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectButtonPlan = document.querySelectorAll('.plan button');
var modal__action__negative = document.querySelector('.modal__action--negative');
var toggle__button = document.querySelector('.toggle-button');
var mobile__nav = document.querySelector('.mobile-nav');


for(i=0; i< selectButtonPlan.length; i++){
    selectButtonPlan[i].addEventListener('click', function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; //This will overwrite the complete class list
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

function closeModel(){
    modal.classList.remove('open');
    backdrop.classList.remove('open');
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
}

function closeMobileModel(){
    mobile__nav.classList.remove('open');
    backdrop.classList.remove('open');
    // mobile__nav.style.display = 'none';
    // backdrop.style.display = 'none';
}

backdrop.addEventListener('click', closeModel);

if(modal) {
modal__action__negative.addEventListener('click', closeModel);
}

toggle__button.addEventListener('click', function(){
    mobile__nav.classList.add('open');
    backdrop.classList.add('open');
    // mobile__nav.style.display = 'block';
    // backdrop.style.display = 'block'
})

backdrop.addEventListener('click', closeMobileModel);

