  const btnburger = document.querySelector('.btn-burger');
  const mobileContainer = document.querySelector('.mobail-container');
  // const linkBack = document.querySelector('.history-back.');

  // function historyBack() {
  //   linkBack.addEventListener('click', function() {
  //     window.history.back()
  //   })
  // }
  

  const toggleMobileMenu =()=> {
    mobileContainer.classList.toggle('show')
    btnburger.classList.toggle('active')
  }

  btnburger.addEventListener('click', toggleMobileMenu);
  
  const bannerSlider = new Swiper('.banner-slider', {
    speed: 700,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const carouselWeekly = new Swiper('.carousel-weekly', {
    speed: 700,
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 40,
    navigation: {
      nextEl: '.weekly-button-next',
      prevEl: '.weekly-button-prev',
    }
  });

  $(document).ready(function() {
    $('select').niceSelect();
  });


  document.querySelector('.widget') ? installWidget() : null;
  document.querySelector('.tabs') ? installTabs() : null;
  // linkBack ? historyBack() : null;
//  document.querySelector('.tabs') ? installTabs() : null
