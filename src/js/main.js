document.addEventListener('DOMContentLoaded', () => {

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
    });
  }

  const activateScrollBtns = () => {
    document.querySelectorAll('a[href^="#"').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault()

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

  activateSliders()
  activateScrollBtns()
})