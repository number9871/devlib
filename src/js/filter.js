let filter = document.querySelectorAll('#filter_sm [type="checkbox"]')
let clearFilter = document.querySelector('[ref=reset_filter]')
let clearFilterMob = document.querySelector('[ref=reset_filter_mobile]')

// сброс фильтров
if(clearFilter){
    clearFilter.onclick = () => {
      filter.forEach(item => item.checked = false)
      document.querySelectorAll('.vs__clear')
      .forEach(item => item.click())
      document.querySelectorAll('.filter__wrapper input')
      .forEach(item => item.value = '')
    }
  }
  // сброс фильтров
  if(clearFilterMob){
    clearFilterMob.onclick = () => {
      filter.forEach(item => item.checked = false)
      document.querySelectorAll('.vs__clear')
      .forEach(item => item.click())
      document.querySelectorAll('.filter__wrapper input')
      .forEach(item => item.value = '')
    }
  }

const { createApp } = Vue

const filterStack = createApp({
    components: {
        vSelect: window["vue-select"],
    },
    data() {
        return {
        stack: [
            { title: "Python", selected: false },
            { title: "C++", selected: false },
            { title: "JavaScript", selected: false },
            { title: "C#", selected: false },
            { title: "Java", selected: false },
            { title: "Kotlin", selected: false },
            { title: "Go", selected: false },
            { title: "JavaScript", selected: false },
            { title: "Java", selected: false },
            { title: "Kotlin", selected: false },
            { title: "Go", selected: false },
            { title: "JavaScript", selected: false },
            { title: "Java", selected: false },
            { title: "Kotlin", selected: false },
            { title: "Go", selected: false },
            { title: "JavaScript", selected: false }
        ],
        selected: [],
        }
    },
    watch: {
        selected(newState) {
        let selected = newState.map(item => item.title)
        
        this.stack.forEach(item => {
            if(selected.includes(item.title)) return item.selected = true
            else item.selected = false
        })
        }
    },
})

const filterForm = createApp({
    components: {
    vSelect: window["vue-select"],
    },
    data() {
    return {
    form: [
        { title: "Любой" },
        { title: "Офис" },
        { title: "Удалённо" },
        { title: "Гибрид" }
    ]
    }
    }
})

const filterCity = createApp({
    components: {
        vSelect: window["vue-select"],
    },
    data() {
        return {
        city: [
            { title: "Абакан", selected: false },
            { title: "Азов", selected: false },
            { title: "Александров", selected: false },
            { title: "Алексин", selected: false },
            { title: "Альметьевск", selected: false },
            { title: "Анапа", selected: false },
            { title: "Ангарск", selected: false },
            { title: "Анжеро-Судженск", selected: false },
            { title: "Апатиты", selected: false },
            { title: "Арзамас", selected: false },
            { title: "Армавир", selected: false },
            { title: "Арсеньев", selected: false },
            { title: "Артем", selected: false },
            { title: "Архангельск", selected: false },
            { title: "Асбест", selected: false },
            { title: "Астрахань", selected: false },
            { title: "Ачинск", selected: false },
            { title: "Балаково", selected: false },
            { title: "Балахна", selected: false },
            { title: "Балашиха", selected: false },
            { title: "Великий Новгород", selected: false },
            { title: "Верхняя Пышма", selected: false },
            { title: "Видное", selected: false },
            { title: "Владивосток", selected: false },
            { title: "Владикавказ", selected: false },
            { title: "Владимир", selected: false },
            { title: "Волгоград", selected: false },
            { title: "Волгодонск", selected: false },
            { title: "Волжск", selected: false },
            { title: "Волжский", selected: false },
            { title: "Вологда", selected: false },
            { title: "Вольск", selected: false },
            { title: "Воркута", selected: false },
            { title: "Воронеж", selected: false },
            { title: "Воскресенск", selected: false },
            { title: "Воткинск", selected: false },
            { title: "Всеволожск", selected: false },
            { title: "Выборг", selected: false },
            { title: "Выкса", selected: false },
            { title: "Вязьма", selected: false },
            { title: "Гатчина", selected: false },
            { title: "Геленджик", selected: false },
            { title: "Георгиевск", selected: false },
            { title: "Глазов", selected: false },
            { title: "Горно-Алтайск", selected: false },
            { title: "Грозный", selected: false },
            { title: "Губкин", selected: false },
            { title: "Гудермес", selected: false },
            { title: "Гуково", selected: false },
            { title: "Гусь-Хрустальный", selected: false },
            { title: "Дербент", selected: false },
            { title: "Дзержинск", selected: false },
            { title: "Димитровград", selected: false },
            { title: "Дмитров", selected: false },
            { title: "Долгопрудный", selected: false },
            { title: "Домодедово", selected: false },
            { title: "Донской", selected: false },
            { title: "Дубна", selected: false },
            { title: "Евпатория", selected: false },
            { title: "Егорьевск", selected: false },
            { title: "Ейск", selected: false },
            { title: "Екатеринбург", selected: false },
            { title: "Елабуга", selected: false }
        ],
        selected: [],
        }
    },
    watch: {
        selected(newState) {
        let selected = newState.map(item => item.title)
        
        this.city.forEach(item => {
            if(selected.includes(item.title)) return item.selected = true
            else item.selected = false
        })
        }
    },
})

const filterPayment = createApp({
    components: {
        vSelect: window["vue-select"],
    },
    data() {
        return {
        payment: [
            { title: "Российский рубль · RUB · ₽" },
            { title: "Доллар США · USD · $" },
            { title: "Евро · EUR · €" },
            { title: "Украинская гривна · UAH · ₴" }
        ]
        }
    }
})

const filterExp = createApp({
    components: {
        vSelect: window["vue-select"],
    },
    data() {
        return {
        exp: [
            { title: "Любой" },
            { title: "Нет опыта" },
            { title: "До 1 года" },
            { title: "От 1 года до 3 лет" },
            { title: "От 3 лет до 5 лет" },
            { title: "Более 5 лет" }
        ]
        }
    }
})

const filterEmployment = createApp({
    components: {
        vSelect: window["vue-select"],
    },
    data() {
        return {
        employment: [
            { title: "Любой" },
            { title: "Офис" },
            { title: "Удалённо" },
            { title: "Любой" },
            { title: "Офис" },
            { title: "Удалённо" },
            { title: "Гибрид" }
        ]
        }
    }
})

function createNewVue (item, id, together){
    if(window.screen.width > 1000 || together) {
        // desktop or together
        if(document.getElementById(`${id}`)) item.mount(`#${id}`)
    }else{ 
        //mobile
        if(document.getElementById(`${id}`)) item.mount(`#${id}Mobile`)
    }
}

createNewVue(filterStack, 'filterStack')
createNewVue(filterForm, 'filterForm')
createNewVue(filterCity, 'filterCity')
createNewVue(filterEmployment, 'filterEmployment')
createNewVue(filterExp, 'filterExp')
createNewVue(filterPayment, 'filterPayment')
createNewVue(filterCity, 'filterCityProfile', true)

  