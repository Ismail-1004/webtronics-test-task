<script setup>
const { $toast } = useNuxtApp()
const router = useRouter()

const logout = () => {
    localStorage.removeItem('token')
    $toast('success', 'Вы успешно вышли из системы')

    setTimeout(() => {
        router.push('/login')
    }, 1500)
}
</script>

<template>
    <header class="header">
        <NuxtLink to="/" class="header__logo"> W </NuxtLink>
        <el-button type="primary" @click="logout"> <Icon name="material-symbols:exit-to-app" class="header__icon" /> Выйти</el-button>
    </header>
</template>

<style lang="scss" scoped>
.header {
    background: #023047;
    padding: 10px 20px;
    width: 100%;
    color: white;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &__logo {
        color: white;
        font-size: 30px;
        font-weight: 700;
    }

    &__icon {
        margin-right: 5px;
        font-size: 18px;
    }
}
</style>