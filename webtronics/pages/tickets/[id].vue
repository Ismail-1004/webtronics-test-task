<script setup>
import { useTickets } from "@/stores/tickets";

definePageMeta({
  layout: "main",
});

const ticketsStore = useTickets();
const route = useRoute();
const ticket = ref(null);
const loading = ref(true);

const labels = [
    { title: 'Id', key: 'id' },
    { title: 'Id пользователя', key: 'userId', width: 180 },
    { title: 'Заголовок', key: 'title' },
    { title: 'Описание', key: 'body' },
]

const getTicektHandler = async () => {
  await ticketsStore.getTicket(route.params.id);
  ticket.value = { ...ticketsStore.ticketGetter };
  loading.value = false;
};

getTicektHandler();
</script>

<template>
  <div class="ticket">
    <h1 class="ticket__title">Билет #{{ route.params.id }}</h1>
    <el-descriptions
      direction="vertical"
      :column="4"
      border
      v-loading="loading"
    >
        <template v-if="ticket">
            <el-descriptions-item v-for="label in labels" :width="label.width" :key="label.key" :label="label.title">{{ ticket[label.key] }}</el-descriptions-item>
        </template>
    </el-descriptions>
  </div>
</template>

<style lang="scss" scoped>
.ticket {
    &__title {
        margin-bottom: 30px;
    }
}
</style>