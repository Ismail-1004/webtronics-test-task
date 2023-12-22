<script setup>
import { useIAm } from '@/stores/iam'
const { $toast } = useNuxtApp()
const iamStore = useIAm()

let router = useRouter()

const loginHandler = ({ login, password }) => {
    const response = iamStore.login({ login, password })
    if (!response) return $toast('error', 'Введены не корректные данные')

    localStorage.setItem('token', JSON.stringify(response))
    
    $toast('success', 'Вход выполнен успешно!')

    setTimeout(() => {
        router.push('/')
    }, 1000)
}
</script>

<template>
  <div class="login">
    <div class="login__content">
        <div class="login__content-form">
            <h2 class="login__content-formTitle"> Войти </h2>
            <login-form @doLogin="loginHandler" />
        </div>
        <div class="login__content-titles">
            <h1 class="login__content-title"> WEBTRONICS </h1>
        </div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.login {
  height: 100vh;

  &__content {
    display: flex;
    height: 100%;

    &-form {
        max-width: 50%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background: #023047;
        color: white;
    }

    &-formTitle {
        margin-bottom: 30px;
        font-size: 50px;
    }

    &-titles {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &-title {
        font-size: 50px;
    }
  }
}
</style>