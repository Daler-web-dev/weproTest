import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        questions: [
            {
                id: 1,
                question: 'Имя, фамилия, возраст и номер',
                type: 'input',
                visible: true,
                score: 6.25,
                answered: false,
                isTrue: false,
                answers: [
                    {
                        text: 'name',
                        name: '',
                        id: uuidv4(),
                    },
                    {
                        text: 'surname',
                        name: '',
                        id: uuidv4(),
                    },
                    {
                        text: 998,
                        name: '',
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 2,
                question: 'Какой курс вас интересует?',
                type: 'checkbox',
                visible: false,
                score: 6.25,
                option: 'courses',
                answered: false,
                isTrue: false,
                answers: [
                    {
                        text: 'Графический дизайн',
                        description:
                            'Какое-то описание, лучший курс эвер на самом деле честно говоря, черт как сложно оказывается придумывать рандомный текст.',
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Веб дизайн',
                        description:
                            'Какое-то описание, лучший курс эвер на самом деле честно говоря, черт как сложно оказывается придумывать рандомный текст.',
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Фронтенд разработка',
                        description:
                            'Какое-то описание, лучший курс эвер на самом деле честно говоря, черт как сложно оказывается придумывать рандомный текст.',
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Питон разработка',
                        description:
                            'Какое-то описание, лучший курс эвер на самом деле честно говоря, черт как сложно оказывается придумывать рандомный текст.',
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Питон разработка',
                        description:
                            'Какое-то описание, лучший курс эвер на самом деле честно говоря, черт как сложно оказывается придумывать рандомный текст.',
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 3,
                question: 'Какое сочетание клавиш копирует текст?',
                type: 'checkbox',
                visible: false,
                score: 6.25,
                answered: false,
                isTrue: false,
                answers: [
                    {
                        text: 'CTRL + A',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'CTRL + С',
                        wrong: true,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'CTRL + V',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Нет верного ответа',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Все ответы верны',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 4,
                question: 'Какое сочетание клавиш вырежет текст?',
                type: 'checkbox',
                visible: false,
                score: 6.25,
                answered: false,
                isTrue: false,
                answers: [
                    {
                        text: 'CTRL + A',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'CTRL + O',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'CTRL + X',
                        wrong: true,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Нет верного ответа',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Все ответы верны',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 5,
                question: 'Какое сочетание клавиш выделит весь текст?',
                type: 'checkbox',
                visible: false,
                score: 6.25,
                answered: false,
                answers: [
                    {
                        text: 'CTRL + A',
                        wrong: true,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'CTRL + O',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'CTRL + S',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Нет верного ответа',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Все ответы верны',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 6,
                question: 'Где можно создать папку?',
                type: 'checkbox',
                visible: false,
                score: 6.25,
                answered: false,
                isTrue: false,
                answers: [
                    {
                        text: 'Только на рабочем столе',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Только на диске С',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Только в созданных папках',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Нет верного ответа',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Все ответы верны',
                        wrong: true,
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 7,
                question: 'Какие операции можно совершать на флешке?',
                type: 'checkbox',
                visible: false,
                score: 6.25,
                answered: false,
                isTrue: false,
                answers: [
                    {
                        text: 'Скачивать и просматривать файлы',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Копировать и удалять файлы',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Редактировать и удалять файлы',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Нет верного ответа',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Все ответы верны',
                        wrong: true,
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 8,
                question: 'Двойной щелчок левой кнопки мыши используется для:',
                type: 'checkbox',
                visible: false,
                score: 6.25,
                answered: false,
                isTrue: false,
                answers: [
                    {
                        text: 'Открытия файла/папки',
                        wrong: true,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Редактирования файла/папки',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Перемещения файла/папки',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Нет верного ответа',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Все ответы верны',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 9,
                question: 'Microsoft Word – это:',
                type: 'checkbox',
                visible: false,
                score: 6.25,
                answered: false,
                isTrue: false,
                answers: [
                    {
                        text: 'База данных',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Текстовой редактор',
                        wrong: true,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Графический редактор',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Нет верного ответа',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Все ответы верны',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 10,
                question: 'Adobe Photoshop - это:',
                type: 'checkbox',
                visible: false,
                score: 6.25,
                answered: false,
                isTrue: false,
                answers: [
                    {
                        text: 'База данных',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Текстовой редактор',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Графический редактор',
                        wrong: true,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Нет верного ответа',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Все ответы верны',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 11,
                question: 'Как переключить язык ввода?',
                type: 'checkbox',
                visible: false,
                score: 6.25,
                answered: false,
                isTrue: false,
                answers: [
                    {
                        text: 'SHIFT+CTRL+ALT',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'SHIFT+ALT',
                        wrong: true,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'SHIFT+SPACE',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'SHIFT+TAB',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Нет верного ответа',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 12,
                question: 'Отметьте съемные носители информации:',
                type: 'checkbox',
                visible: false,
                score: 6.25,
                answered: false,
                isTrue: false,
                answers: [
                    {
                        text: 'Флешки',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'CD - диски',
                        wrong: true,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Жесткие диски',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Факсы/Принтеры',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Мониторы',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Нет верного ответа',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 13,
                question: 'Для чего нужна система координат X, Y?',
                type: 'checkbox',
                visible: false,
                score: 6.25,
                answered: false,
                isTrue: false,
                answers: [
                    {
                        text: 'Определить размер элемента',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Определить местоположение элемента',
                        wrong: true,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Определить размер элемента',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Определить цвет и прозрачность элемемента',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Все ответы верны',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Нет верного ответа',
                        wrong: false,
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 14,
                question:
                    'Из 200 компьютеров 16 оказались бракованными. Сколько процентов от всех компьютеров составили бракованные? Ведите расчеты тут:',
                type: 'inputAnswer',
                visible: false,
                score: 6.25,
                answered: false,
                isTrue: false,
                answers: [
                    {
                        text: 'your answer',
                        name: '',
                        wrong: 8,
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 15,
                question:
                    'Из 200-литрового бака вылили 40 литров воды. Сколько процентов воды вылили? Ведите ответ тут:',
                type: 'inputAnswer',
                visible: false,
                score: 6.25,
                answered: false,
                isTrue: false,
                answers: [
                    {
                        text: 'your answer',
                        name: '',
                        wrong: 20,
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 16,
                question: 'Откуда вы о нас узнали?',
                type: 'checkbox',
                visible: false,
                score: 6.25,
                answered: false,
                isTrue: false,
                option: 'socmedia',
                answers: [
                    {
                        text: 'Instagram',
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Facebook',
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Телеграм',
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Билборды/телевизоры',
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Через знакомых',
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        text: 'Westminster academy',
                        answered: false,
                        id: uuidv4(),
                    },
                    {
                        type: 'Другое',
                        answered: false,
                        id: uuidv4(),
                    },
                ],
            },
            {
                id: 17,
                question: 'Результаты',
                type: 'result',
                visible: false,
                answered: false,
                answers: {
                    userName: '',
                    userSurname: '',
                    userScore: 0,
                    userProcent: 0,
                    userCourse: ''
                },
            },
        ],
        userData: {
            userName: '',
            userSurname: '',
            userCourse: '',
            userReached: '',
            userMobile: '',
            tableScore: 6.25,
        },
        widgets: {
            errorWidget: false,
        },
    },
    getters: {
        questions: state => state.questions,
        userData: state => state.userData,
        widgets: state => state.widgets,
    },
    mutations: {
        nextQuestion(state, data) {
            event.preventDefault()
            // transfer variables 
            let name
            let phoneNumber

            // мап для поверхностного клонирования 
            state.questions.map(item => {
                if (item.id === data) {
                    // проверяем на тип объекта 
                    switch (item.type) {
                        case 'checkbox':
                            for (let option of item.answers) {
                                if (option.answered) {
                                    item.answered = true
                                }
                            }
                            break;
                        case 'input':
                            for (let option of item.answers) {
                                if (option.name !== '') {
                                    item.answered = true
                                }
                            }
                            break;
                        case 'inputAnswer':
                            for (let option of item.answers) {
                                if (option.name == option.wrong) {
                                    item.isTrue = true
                                    item.answered = true
                                } else {
                                    item.isTrue = false 
                                    item.answered = true
                                }
                            }
                            break;
                        default:
                            console.log('фигня какая то пошла');
                            break;
                    }
                }

                if (item.id === data) {
                    if (item.answered) {
                        for (let item of state.questions) {
                            let temp = data + 1
                            if (item.id === 1) {
                                name = item.answers[0].name + ' ' + item.answers[1].name
                                phoneNumber = item.answers[2].name
                            }
                            if (item.id === data) {
                                item.visible = false
                            }
                            if (item.id === temp) {
                                item.visible = true
                            }
                        }
                        state.userData.tableScore += 6.25
                    } else {
                        state.widgets.errorWidget = true
                        setTimeout(() => {
                            state.widgets.errorWidget = false
                        }, 2000)
                    }
                }
            })
            if(data === 16) {
                let temp = []
                for(let item of state.questions) {
                    if(item.isTrue) {
                        temp.push(1)
                    }
                    if(item.id === state.questions.length) {
                        item.answers.userName = name
                        item.answers.userScore = `${temp.length}/ ${state.questions.length - 4}`
                        item.answers.userProcent = Math.round(temp.length * 100 / (state.questions.length - 4))
                        item.answers.userCourse = state.userData.userCourse
                    }
                }
            }
            state.userData.userName = name
            state.userData.userMobile = phoneNumber
        },
        setAnswer(state, data) {
            event.preventDefault()
            for (let question of state.questions) {
                if(question.option === 'courses') {
                    for (let answer of question.answers) {
                        if(answer.id === data.answer.id) {
                            state.userData.userCourse = answer.text
                        }
                    }
                } else if(question.option === 'socmedia') {
                    for (let answer of question.answers) {
                        if(answer.id === data.answer.id) {
                            state.userData.userReached = answer.text
                        }
                    }
                }
                for (let answer of question.answers) {
                    if (answer.id !== data.answer.id) {
                        answer.answered = false
                    } else {
                        answer.answered = true
                        if(data.answer.wrong) {
                            question.isTrue = true
                        } else {
                            question.isTrue = false
                        }
                    }
                }
            }
        },
    },
    actions: {
        nextQuestion({ commit }, data) {
            commit('nextQuestion', data)
        },
        setAnswer({ commit }, data) {
            commit('setAnswer', data)
        },
    },
})

