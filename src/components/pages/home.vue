<template>
    <div>
        <Header />
        <main
            class="checkbox_div"
            :class="{ active: item.visible }"
            v-for="item of questions"
            :key="item.id"
        >
            <div v-if="item.visible && item.type === 'input' || item.type === 'inputAnswer'">
                <h2>{{ item.question }}</h2>
                <form action="">
                    <div class="form" v-for="item of item.answers" :key="item.key">
                        <input type="text" :placeholder="item.text" v-model="item.name" required />
                    </div>
                </form>
            </div>
            <div
                class="checkbox_div"
                v-if="item.visible && item.type === 'checkbox'"
                :class="{ active: item.visible }"
            >
                <h2>{{ item.question }}</h2>
                <div
                    @click="setAnswer({ answer, item })"
                    class="item"
                    :class="{ item_active: answer.answered }"
                    v-for="answer of item.answers"
                    :key="answer.key"
                >
                    <img src="../../assets/icon/done.png" v-if="answer.answered" />
                    <span>{{ answer.text }}</span>
                    <p>{{ answer.description }}</p>
                </div>
            </div>
            <div v-if="item.visible && item.type === 'result'">
                <div class="wrapper">
                    <span class="heading">{{item.answers.userName}}, у вас {{item.answers.userScore}} баллов.</span>
                    <div v-if="item.answers.userProcent >= 70">
                        <p>
                        Вы прошли наше тестирование с успехом в <b>{{item.answers.userProcent}}%</b>. Минимальный допустимый балл -
                        <b>70%.</b> Вы успешно сдали тестирование и допускаетесь к обучению на курсе <b>{{item.answers.userCourse}}</b>.
                    </p>
                    <p>
                        Подойдите к менеджеру и она подскажет Вам расписание и ответит на все
                        оставшиеся вопросы. Спасибо.
                    </p>
                    </div>
                    <div v-if="item.answers.userProcent < 70">
                        <p>
                            К сожалению, Вы не прошли наше тестирование. Ваш процент равен <b>{{item.answers.userProcent}}%</b>. Минимальный допустимый балл - <b>70%</b>. Вам необходимо научиться работать с компьютером ещё лучше, чтобы вас допустили на курс <b>{{item.answers.userCourse}}</b>.
                        </p>
                        <p>
                            Вы можете записаться на подготовительный курс, подойдите к менеджеру, чтобы уточнить расписание и получить ответы на все остальные вопросы. Спасибо!
                        </p>
                    </div>
                </div>
            </div>
            <button
                @click="nextQuestion(item.id)"
                class="button"
                :class="{ errorBtn: widgets.errorWidget }"
                v-if="item.id !== 17"
            >
                <span v-if="item.id === 1">Начать тестирование</span>
                <span v-if="item.id > 1 && item.id < 16">Продолжить</span>
                <span v-if="item.id === questions.length">Закончить тестирование</span>
                <img src="../../assets/icon/arrow-up-right .svg" alt="" />
            </button>
            <span class="errorSpan" v-if="item.type === 'input' && widgets.errorWidget"
                >Нужно заполнить форму
            </span>
            <span class="errorSpan" v-if="item.type === 'checkbox' && widgets.errorWidget"
                >Выберите один из вариантов</span
            >
            <Footer />
        </main>
    </div>
</template>

<script>
import Header from '../layout/header.vue'
import Footer from '../layout/footer.vue'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
    components: {
        Header,
        Footer,
    },
    computed: {
        ...mapState(['questions', 'userData', 'widgets']),
    },
    methods: {
        ...mapActions(['nextQuestion', 'setAnswer']),
    },
}
</script>

<style lang="scss">
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Gilroy';
}
main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 0px 100px;
    margin-top: 70px;
    h2 {
        width: 100%;
        font-weight: bold;
        font-size: 63px;
        border-bottom: 1px solid #eaebef;
        padding: 10px 0px;
        margin: 10px 0px;
    }
    form {
        display: flex;
        flex-direction: column;
        margin-top: 62px;
        input {
            width: 545px;
            font-size: 24px;
            border-radius: 12px;
            padding: 20px 30px;
            margin: 5px 0px;
            border: 1px solid #eaebef;
            outline: none;
            box-shadow: 3px 5px 10px #eaebef;
            &:nth-child(3) {
                margin-bottom: 10px;
            }
        }
    }
}
.button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 545px;
    font-size: 24px;
    border-radius: 12px;
    margin: 15px 0px;
    padding: 20px 30px;
    background-color: #0453f4;
    border: 1px solid #0453f4;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s ease;
}
.checkbox_div {
    display: none;
    flex-wrap: wrap;
    grid-gap: 14px;
    .item {
        position: relative;
        cursor: pointer;
        width: 545px;
        padding: 23px 26px 60px;
        border: 1px solid #eceff0;
        border-radius: 12px;
        margin-top: 20px;
        span {
            font-size: 24px;
            font-weight: bold;
        }
        p {
            margin-top: 11px;
            font-size: 16px;
        }
        img {
            position: absolute;
            transform: translate(-35px, -35px);
        }
    }
    .item_active {
        background-color: #f5f6f8;
    }
}
.active {
    display: flex !important;
}
.errorSpan {
    color: red;
    font-size: 24px;
}
.errorBtn {
    transition: 0.3s ease;
    border: red;
    background-color: red !important;
}
.wrapper {
    width: 1127px;
    height: 400px;
    .heading {
        font-size: 63px;
        font-weight: bold;
    }
    p {
        font-size: 24px;
        color: #707070;
        padding-top: 28px;
    }
    b {
        color: #004DFF;
    }
}
</style>
