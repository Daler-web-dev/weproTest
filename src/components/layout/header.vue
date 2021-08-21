<template>
    <div>
        <header>
            <span class="name" >Hey, {{userData.userName}}</span>
            <div class="lang">
                <label class="switch">
                    <input class="apple-switch" type="checkbox">
                    <span class="slider round"></span>
                </label>
                <span>
                    O'zbek tilida
                </span>
            </div>
        </header>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
    name: 'Header',
    // props: {
    //     transfername
    // }
    computed: {
        ...mapState(['userData']),
    },
}
</script>

<style lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 31px 100px;
    border-bottom: 1px solid #EAEBEF;
    .name {
        font-size: 29px;
        font-weight: bold;
    }

}
.lang {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        font-weight: bold;
        font-size: 16px;
        margin-left: 4px;
    }
}


/////////////
input.apple-switch {
  cursor: pointer;
  position: relative;
  -webkit-appearance: none;
  outline: none;
  width: 40px;
  height: 23px;
  background-color: #fff;
  border: 2px solid #8E9AA7;
  border-radius: 50px;
  box-shadow: inset -20px 0 0 0 #8E9AA7;
}

input.apple-switch:after {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  background: transparent;
  width:  20px;
  height: 20px;
  border-radius: 50%;
}

input.apple-switch:checked {
  box-shadow: inset 20px 0 0 0 #4ed164;
  border-color: #4ed164;
}

input.apple-switch:checked:after {
  left: 20px;
  box-shadow: -2px 0px 0px rgba(0,0,0,0.05);
}
</style>
