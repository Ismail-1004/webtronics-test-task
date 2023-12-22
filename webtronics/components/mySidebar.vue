<script setup>
defineProps({
    menu: {
        type: Array,
        required: true,
        default: []
    }
})
</script>

<template>
    <aside class="side">
        <h1 class="side__title"> WEBTRONICS </h1>
        <ul class="side__list">
            <li class="side__list-item" v-for="link in menu" :key="link.to">
                <NuxtLink :to="link.to" active-class="active" :exact="link.exact" class="side__list-link"> {{ link.title }} </NuxtLink>
            </li>
        </ul>
    </aside>
</template>

<style lang="scss" scoped>
.side {
    height: 100%;
    background: #023047;
    max-width: 300px;
    width: 100%;
    padding: 30px;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
        text-align: center;
        font-size: 30px;
    }

    &__list {
        margin-top: 30px;

        &-item {
            &:not(:last-of-type) {
                margin-bottom: 30px;
            }
        }

        &-link {
            color: white;
            font-size: 18px;
            padding: 10px 20px;
            border-radius: 5px;
        }
    }
}

.active {
    background: black;
}
</style>