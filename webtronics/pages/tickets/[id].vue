<script setup>
import { useTickets } from '@/stores/tickets'

definePageMeta({
    layout: 'main'
})

const ticketsStore = useTickets()
const route = useRoute()
const ticket = ref(null)

const getTicektHandler = async () => {
    await ticketsStore.getTicket(route.params.id)
    ticket.value = {...ticketsStore.ticketGetter}

    console.log(ticket.value);
}

getTicektHandler()

</script>

<template>
    <div class="ticket">
    <h1> Ticket #{{ route.params.id }} </h1>
       <el-descriptions
        title="Vertical list with border"
        direction="vertical"
        :column="4"
        border
    >
        <el-descriptions-item label="Id">{{ ticket?.id }}</el-descriptions-item>
        <el-descriptions-item label="Id пользователя"> {{ ticket?.userId }} </el-descriptions-item>
        <el-descriptions-item label="Заголовок">{{ ticket?.title }}</el-descriptions-item>
        <el-descriptions-item label="Описание">{{ ticket?.body }}</el-descriptions-item>
    </el-descriptions>
    </div>
</template>