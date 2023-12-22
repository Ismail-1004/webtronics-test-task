<script setup>
const menu = [
    { to: '/', title: 'Главная', exact: true },
    { to: '/profile', title: 'Профиль' },
    { to: '/tickets', title: 'Список тикетов' }
]
</script>

<template>
    <div class="main">
        <my-sidebar :menu="menu"  />
        <div class="main__content">
            <my-header />
            <div class="main__content-content">
                <slot />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main {
    display: flex;
    height: 100vh;
    width: 100%;

    &__content {
        padding: 30px;    
        width: 100%;

        &-content {
            margin-top: 40px;
        }
    }
}
</style>