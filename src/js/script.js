// Изменяет видимость элементов
const modalToggle = (first, sec, third, toggle, secToggle = null, fourth) => {
  if(document.getElementById(`${first}`) && document.getElementById(`${sec}`)){
    let firstItem = document.getElementById(`${first}`),
        secItem = document.getElementById(`${sec}`),
        thirdItem = document.getElementById(`${third}`),
        fourthItem = document.getElementById(`${fourth}`)

    firstItem.onclick = () => {
      if(secToggle !== null) secItem.classList.toggle(`${secToggle}`)
      else secItem.classList.toggle(`${toggle}`)
      thirdItem.classList.toggle(`${toggle}`)
    }

    thirdItem.onclick = () => {
      if(secToggle !== null) secItem.classList.toggle(`${secToggle}`)
      else secItem.classList.toggle(`${toggle}`)
      thirdItem.classList.toggle(`${toggle}`)
    }

    if(fourthItem !== null){
      fourthItem.onclick = () => {
        secItem.classList.toggle(`${toggle}`)
        thirdItem.classList.toggle(`${toggle}`)
      }
    }
  }
}

modalToggle('filterModalBtn', 'filterModal', 'filterOverlay', 'filter__outside-wrapper_active')
modalToggle('searchModalBtn', 'searchInput', 'searchOverlay', 'header__search_mobile_active')
modalToggle('commentImageBtn', 'commentImageModal', 'commentImageOverlay', 'card__modal_active')
modalToggle('createFolderBtn0', 'createFolderModal', 'createFolderOverlay', 'card__modal_active')
modalToggle('renameFolderBtn0', 'renameFolderModal', 'renameFolderOverlay', 'card__modal_active')
modalToggle('renameFolderBtn1', 'renameFolderModal', 'renameFolderOverlay', 'card__modal_active')
modalToggle('renameFolderBtn2', 'renameFolderModal', 'renameFolderOverlay', 'card__modal_active')
modalToggle('discussToggleOn', 'discuss', 'discussToggleOff', 'discuss__toggle_mobile_active', 'discuss__wrapper_hide')
modalToggle('moreSubscrBtn', 'moreSubscrModal', 'moreSubscrOverlay', 'card__modal_active', null, 'card__modal__close')
modalToggle('moreSubsrBtnMobile', 'moreSubscrModal', 'moreSubscrOverlay', 'card__modal_active', null, 'card__modal__close')

if (document.getElementById('nav')) {
  let nav = document.getElementById('nav'),
      overlay = document.getElementById('nav-overlay');
  
  document.getElementById('nav-btn-desktop').onclick = () => {
      nav.classList.toggle('navigation_active');
      overlay.classList.toggle('navigation__overlay_active');
  };
  document.getElementById('nav-btn-mobile').onclick = () => {
      nav.classList.toggle('navigation_active');
      overlay.classList.toggle('navigation__overlay_active');
  };
  document.getElementById('nav-overlay').onclick = () => {
      nav.classList.toggle('navigation_active');
      overlay.classList.toggle('navigation__overlay_active');
  };
  document.getElementById('nav-close').onclick = () => {
      nav.classList.toggle('navigation_active');
      overlay.classList.toggle('navigation__overlay_active');
  };
}


let closeJoinModal = document.querySelector('[ref=close_join_modal]')

if(closeJoinModal !== undefined){
  closeJoinModal.onclick = () => {
    let join_us = document.getElementsByClassName('join-us')
    join_us[0].classList.add('join-us_hide')
  }
}

if(document.getElementsByClassName('card__header__tabs__item').length > 0 || document.getElementsByClassName('card__nav__item').length > 0){
  // переключение основыных табов
  let card__nav__item = document.getElementsByClassName("card__nav__item"),
      profile__tab = document.getElementsByClassName("profile__tab")	

  for (let i=0; i < card__nav__item.length; i++) {
      card__nav__item[i].onclick = function(event){

          for (let i=0; i < card__nav__item.length; i++) {
              card__nav__item[i].classList.remove("card__nav__item_active")
          }
          for (let i=0; i < profile__tab.length; i++) {
              profile__tab[i].classList.remove("profile__tab_active")
          }

          event.target.classList.add("card__nav__item_active")
          document.getElementsByClassName(event.target.id)[0]?.classList.add("profile__tab_active")
      }
  }

  // переключение табов на странице "мой профиль"
  let card__header__tabs__item = document.getElementsByClassName("card__header__tabs__item")

  for (let i=0; i < card__header__tabs__item.length; i++) {
    card__header__tabs__item[i].onclick = function(event){

      // TODO: Для переключения вкладок - в подменю добавить id и такой же класс добавить на нужную вкладку / незабыть добавить "subtab" на новые вкладки
      let subtab = document.querySelectorAll('.' + event.target.parentElement.parentElement.parentElement.classList[1] + ' .subtab')
      Object.entries(subtab).map(item => item[1].classList.remove("subtab_active"))
      document.getElementsByClassName(event.target.id)[0]?.classList.add("subtab_active")

      let submenus = document.querySelectorAll('.' + event.target.parentElement.parentElement.parentElement.classList[1] + ' .card__header__tabs__item')
      for (let q=0; q < submenus.length; q++) {
          submenus[q].classList.remove("card__header__tabs__item_active")
      }
      event.target.classList.add("card__header__tabs__item_active")
    }
  }
}

// Сортировка закладок
// В функцию передается массив id вкладок, без ковычек
// newSortable([watch_later, preparing_interview])
const newSortable = (arr) => {
  arr.forEach(item => {
    Sortable.create(item, {
      group: "sorting",
      sort: true,
      ghostClass: 'profile__bookmarks__folders__item__ghost',
      animation: 150,
      onSort: () => {
        updateCount(item)
      }
    })
  })
}

const updateCount = (el) => {
  let element = document.getElementById(`${el.id}_count`),
      count = document.querySelectorAll(`#${el.id} .profile__bookmarks__folders__item`).length
  count !== 0
    ? element.innerHTML = count
    : element.innerHTML = ''
}


// Добавляет активной вкладке подсветку
(function getActiveTab(){
  let activeTab = document.location.pathname === '/'
  ? document.querySelector('nav [href="/"]').classList.add("menu__item_active")
  : document.location.pathname.split('/')[1].split('.')[0]
  
  document.querySelector(`nav [href=${activeTab}]`)
  ? document.querySelector(`nav [href=${activeTab}]`).classList.add("menu__item_active")
  : undefined
  
})()

if(document.getElementById('search_input') !== undefined){
  document.getElementById('search_clear').onclick = () => {
    document.getElementById('search_input').value= ""
  }
}
