document.addEventListener('DOMContentLoaded', () => {
  const wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 100,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();

  const activateSliders = () => {
    const pageSlider = new Swiper('.portfolio__slider', {
      slidesPerView: 1,
      keyboard: {
        enabled: true,
        // Включить\выключить только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        pageUpDown: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      grabCursor: true,
      // Отключение функционала
      // при изменении элементов слайдера
      watchOverflow: true,
      speed: 600,
      // Обновить свайпер
      // при изменении родительских
      // элементов слайдера
      observeParents: true,
      // Обновить свайпер
      // при изменении дочерних
      // элементов слайда
      observeSlideChildren: true,
      spaceBetween: 50,

      breakpoints: {
        550: {
          spaceBetween: 0,
        }
      }
    });
  }

  const activateScrollBtns = () => {
    const burgerBtn = document.querySelector('.burger')
    const headerMenu = document.querySelector('.header__menu')
    const body = document.querySelector('html')

    document.querySelectorAll('a[href^="#"').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault()

        headerMenu.classList.remove('_open')
        body.classList.remove('_fixed')
        if (burgerBtn.classList.contains('_open')) {
          burgerBtn.classList.replace('_open', '_close')
        }

        const href = this.getAttribute('href').substring(1)

        const scrollTarget = document.getElementById(href)

        const topOffset = 0
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        })
      })
    })
  }

  const openCloseMenu = (burgerBtn, headerMenu, body) => {
    if (!headerMenu.classList.contains('_open')) {
    }
    if (burgerBtn.classList.contains('_open')) {
      burgerBtn.classList.replace('_open', '_close')
    } else if (burgerBtn.classList.contains('_close')) {
      burgerBtn.classList.replace('_close', '_open')
    } else {
      burgerBtn.classList.add('_open')
    }

    headerMenu.classList.toggle('_open')
    body.classList.toggle('_fixed')
  }

  const burger = () => {
    const burgerBtn = document.querySelector('.burger')
    const headerMenu = document.querySelector('.header__menu')
    const body = document.querySelector('html')

    burgerBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0
      })
      openCloseMenu(burgerBtn, headerMenu, body)
    })
  }

  burger()
  activateSliders()
  activateScrollBtns()
})