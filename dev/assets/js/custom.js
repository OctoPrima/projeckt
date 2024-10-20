  const btnburger = document.querySelector('.btn-burger') 
  const mobileContainer = document.querySelector('.mobail-container')

  console.log(mobileContainer);
  

  const toggleMobileMenu =()=> {
    mobileContainer.classList.toggle('show')
    btnburger.classList.toggle('active')
  }

  btnburger.addEventListener('click', toggleMobileMenu)