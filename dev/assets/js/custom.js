addEventListener("load", (event) => {
  const btnburger = document.querySelector('.btn-burger');
  const mobileContainer = document.querySelector('.mobail-container');

  const wigetUserPersent = document.querySelectorAll('.widget-user__percent')

  const linkBack = document.querySelector('.history-back');

    function historyBack() {
      linkBack.addEventListener('click', function() {
        window.history.back()
      })
    }

  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  wigetUserPersent.forEach((item) => {
    
    //console.log(item);

    let string = item.textContent
    let stringComa = /,/gi;
    let stringPercent = /%/gi;
    let refactoringString = string.replace(stringComa, '.').replace(stringPercent, '')
    let val = Number(refactoringString)

   // console.log(val);

    if(val > 0) {
      item.classList.add('widget-user__percent-toon')
    }else if(val < 0) {
      item.classList.add('widget-user__percent-tobottom')
    }else {
      item.classList.add('widget-user__percent-zero')
    }
  });


  const toggleMobileMenu =()=> {
    mobileContainer.classList.toggle('show')
    btnburger.classList.toggle('active')
  }

  btnburger.addEventListener('click', toggleMobileMenu);


  const btnFollow = document.querySelectorAll('.just-unleash__widget-follow-button');
  console.log(btnFollow);

  

  
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

  const carouselCreator= new Swiper('.carousel-creator', {
    speed: 700,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 40,

    breakpoints: {
      1025: {
        direction: 'horizontal'
      },
      375: {
        direction: 'vertical'
      }
    }
  });

  $(document).ready(function() {
    $('select').niceSelect();
  });


  document.querySelector('.widget') ? installWidget() : null;
  document.querySelector('.tabs') ? installTabs() : null;
  document.querySelector('.accordion') ? installAccordion() : null;
  document.querySelector('#drop-zone') ? installAccordion() : null;
  
  //linkBack ? historyBack() : null;

});
