<template>
    <footer>
        <div class="outside">
            <div class="inside" :class="{ errorBtn: widgets.errorWidget }" :style="{ width: `${userData.tableScore}%` }"></div>
        </div>
    </footer>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
    name: 'Footer',
    computed: {
        ...mapState(['userData', 'widgets']),
    },
}
</script>

<style lang="scss">
footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;
    width: 100%;
    padding: 31px 31px;
    .outside {
        width: 100%;
        background-color: #eaebef;
        height: 18px;
        border-radius: 15px;
        overflow: hidden;
        .inside {
            transition: .3s ease;
            height: 100%;
            background-color: #0453f4;
            border-radius: 15px;
        }
    }
}
</style>
