  const btnburger = document.querySelector('.btn-burger');
  const mobileContainer = document.querySelector('.mobail-container');

  const openButtons = document.querySelectorAll('[data-custom-widget="open-button"]');
  const customWidgetsMenu = document.querySelectorAll('[data-custom-widget="menu"]');
  

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

  openButtons.forEach(btn => {
    btn.addEventListener('click', function(e){
      btn.closest('.layout-menu').classList.toggle('show');
    });
  });

  function closeAllWidget() {
     customWidgetsMenu.forEach(item => {
       document.addEventListener('click', function(event) {
         const inBoundaries = event.composedPath().includes(item);
         inBoundaries ? null : item.classList.remove('show')
       })
     })
   };

   closeAllWidget();

 //  customWidgets.forEach((item, index)=>{
 //   console.log(index);
 //  })

 // function checkLayoutCookie() {
 //   if(document.cookie === 'layoutCase=list') {
 //     widget.classList.add('list')
 //     widget.classList.remove('grid')
 //   } else {
 //     widget.classList.add('grid')
 //     widget.classList.remove('list')
 //   }
 // } checkLayoutCookie()
//
 // layoutItem.forEach(item => {
//
 //   item.addEventListener('click', function(){
 //     let dataLayout = item.getAttribute('data-layout')
 //     document.cookie = 'layoutCase=' + dataLayout;
 //     checkLayoutCookie()
//
 //     const thisNavigation = item.closest('.layout-case') 
 //     const thisNavigationItems = thisNavigation.querySelectorAll('.layout-case__item')
//
 //     thisNavigationItems.forEach(item => {
 //       item.classList.remove('active')
 //     })
 //     item.classList.add('active')
 //   });
 // });


 let date = new Date(Date.now() + 86400e3 * 365);

 date = date.toUTCString();

 customWidgetsMenu.forEach((menu, index)=>{

    menu.setAttribute('id', 'layoutCase-' + (index + 1))

    function getCookie(name) {
      let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    let testCookie = getCookie('layoutCase-' + (index + 1))
    console.log(testCookie);


    menu.addEventListener('click', function() {
      const dataLayout = menu.querySelectorAll('[data-layout]');
      
      dataLayout.forEach(item =>{

        item.addEventListener('click', function() {
          const widget = item.closest('.widget');
          const thisNavigation = item.closest('.layout-case'); 
          const thisNavigationItems = thisNavigation.querySelectorAll('.layout-case__item');

          thisNavigationItems.forEach(item => {
          item.classList.remove('active')
          })
          item.classList.add('active');

          const dataLayoutValue = item.getAttribute('data-layout');
          let cookieName = 'layoutCase-' + (index + 1);
          let widgetLayoutCoockie = document.cookie = cookieName + "=" + dataLayoutValue + "; expires=" + date
          
        })
      })


    })
 })