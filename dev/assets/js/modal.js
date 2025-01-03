const modalTriger = document.querySelectorAll('[data-target]');
const modalWindow = document.querySelectorAll('.custom-modal');

modalTriger.forEach(triger => {
    triger.addEventListener('click', (event) => {

        event.preventDefault()
        const modalID = triger.getAttribute('data-target')

        document.querySelector('#' + modalID).classList.add('show')

    })
});

const modalDiv = document.querySelectorAll('.custom-modal__body')



document.addEventListener('keydown', function(e) {
	modalWindow.forEach(item => {
        if( e.keyCode == 27 ){
            item.classList.remove('show');
        }
    })
});

window.onclick = function(event) {
    modalWindow.forEach(item => {
        if (event.target == item) {
            item.classList.remove('show');
        }
    })
}