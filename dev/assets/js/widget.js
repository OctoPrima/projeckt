function installWidget() {
  const openButtons = document.querySelectorAll('[data-custom-widget="open-button"]');
  const customWidgetsMenu = document.querySelectorAll('[data-custom-widget="menu"]');

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

  /*  customWidgets.forEach((item, index)=>{
    console.log(index);
    })
  function checkLayoutCookie() {
    if(document.cookie === 'layoutCase=list') {
      widget.classList.add('list')
      widget.classList.remove('grid')
    } else {
      widget.classList.add('grid')
      widget.classList.remove('list')
    }
  } checkLayoutCookie()
  layoutItem.forEach(item => {
    item.addEventListener('click', function(){
      let dataLayout = item.getAttribute('data-layout')
      document.cookie = 'layoutCase=' + dataLayout;
      checkLayoutCookie()
      const thisNavigation = item.closest('.layout-case') 
      const thisNavigationItems = thisNavigation.querySelectorAll('.layout-case__item')
      thisNavigationItems.forEach(item => {
        item.classList.remove('active')
      })
      item.classList.add('active')
    });
  });*/

  let date = new Date(Date.now() + 86400e3 * 365);
  date = date.toUTCString();

  
  function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
    }

  console.log( customWidgetsMenu);

  customWidgetsMenu.forEach((menu, index) => {
    // menu.setAttribute('id', 'layoutCase-' + (index + 1))

      let widgetCookie = getCookie('layoutCase-' + (index + 1))
      const widget = menu.closest('.widget');
      const itemGrid = widget.querySelector('[data-layout="grid"]');
      const itemList = widget.querySelector('[data-layout="list"]');

      if (widgetCookie === 'grid') {
          widget.classList.add('grid');
          itemGrid.classList.add('active');
          itemList.classList.remove('active');
      } else if (widgetCookie === 'list') {
          widget.classList.remove('grid');
          itemGrid.classList.remove('active');
          itemList.classList.add('active');
      }


      menu.addEventListener('click', function() {
        const dataLayout = menu.querySelectorAll('[data-layout]')
        dataLayout.forEach(item => {
          item.addEventListener('click', function() {
            const widget = item.closest('.widget')
            const thisNavigation = item.closest('.layout-case')
            const thisNavigationItems = thisNavigation.querySelectorAll('.layout-case__item') 

            thisNavigationItems.forEach(navItem => {
            navItem.classList.remove('active')
            })

            item.classList.add('active');
            const dataLayoutValue = item.getAttribute('data-layout');


            if (dataLayoutValue === 'grid') {
              widget.classList.remove('list')
              widget.classList.add('grid')
            } else if (dataLayoutValue === 'list') {
              widget.classList.remove('grid')
              widget.classList.add('list')
            }

            let layoutCase = 'layoutCase-' + (index + 1);
            let widgetLayoutCoockie = document.cookie = layoutCase + "=" + dataLayoutValue + "; expires=" + date
            
          })
        })


      })
 })
}