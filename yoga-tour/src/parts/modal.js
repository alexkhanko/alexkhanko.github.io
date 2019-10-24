function modal() {

    let more = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        more2 = document.querySelector('.more');

        more.forEach(function(item) {
            item.addEventListener('click', function() {
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            });
        });

        more2.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function() {
            overlay.style.display = 'none';
            //more.classList.remove('more-splash');
            more2.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
}

module.exports = modal;