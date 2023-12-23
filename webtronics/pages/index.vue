<script setup>
import { useTickets } from '@/stores/tickets'
const ticketsStore = useTickets()

let tickets = ref([])
let loading = ref(true)

const labels = [
    { title: 'Id', prop: 'id', sortable: true },
    { title: 'Id Пользователя', prop: 'userId', type: 'link', to: '/profile/', key: 'userId' },
    { title: 'Заголовок', prop: 'title' }
]

const loadTickets = async () => {
    await ticketsStore.getTickets()
    tickets.value = ticketsStore.ticketsGetter

    loading.value = false
}

loadTickets()

definePageMeta({
    layout: 'main'
})
</script>

<template>
    <div class="tickets">
    <h2 class="tickets__title"> Список билетов </h2>
    <dataTable 
        :tableData="tickets" 
        :labels="labels"
        :loading="loading"
        :enableMoreBtn="true"
        :item-path="'/tickets/*'"
    />
    </div>
</template>

<style lang="scss" scoped>
.tickets {
    &__title {
        font-size: 40px;
        color: #023047;
        margin-bottom: 30px;
    }
}
</style>