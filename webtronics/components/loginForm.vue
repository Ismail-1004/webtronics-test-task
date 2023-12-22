<script lang="ts" setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['doLogin'])

const stateValues = {
    hide: { iconType: 'hide', inputType: 'password' },
    show: { iconType: 'show', inputType: 'text' },
}

const formParams = reactive({
    login: '',
    password: ''
})

const inputType = ref(stateValues.hide.inputType)
const iconType = ref(stateValues.hide.iconType)
const isHidden = ref(true)

const toggleHidden = ():void => {
    const newState = isHidden.value ? stateValues.show : stateValues.hide
    iconType.value = newState.iconType
    inputType.value = newState.inputType

    isHidden.value = !isHidden.value 
}

const submitHandler = () => {
    emit('doLogin', {
        login: formParams.login,
        password: formParams.password
    })
}

</script>

<template>
    <form class="form" @submit.prevent="submitHandler">
      <label for="login"> Введите Логин </label>
      <div class="form__content">
        <input type="text" v-model="formParams.login" placeholder="Введите логин" id="login" class="form__input" required />
      </div>
      <label for="password"> Введите пароль </label>
      <div class="form__content">
        <input :type="inputType" id="password" placeholder="Введите пароль" v-model="formParams.password" class="form__input" required />
        <Icon
            :name="`zondicons:view-${iconType}`"
            class="form__icon"
            @click="toggleHidden"
        />
      </div>
      <button class="form__btn">Войти</button>
    </form>
</template>

<style lang="scss" scoped>
.form {
    max-width: 350px;
    width: 100%;

    & label {
      margin-bottom: 15px;
      display: inline-block;
      font-size: 30px;
    }

    &__content {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      border: 1px solid white;
      border-radius: 5px;
      position: relative;

      & input {
        border: none;
        font-size: 20px;
        outline: none;
        padding: 10px;
        border-radius: 5px;
        background: none;
        color: white;

        &::placeholder {
            color: white;
        }
      }
    }

    &__icon {
        font-size: 22px;

        position: absolute;
        right: 10px;
    }

    &__btn {
        color: white;
        background: none;
        font-size: 20px;
        border: 1px solid white;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
}
</style>