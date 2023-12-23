<script setup>
import { useUsers } from "@/stores/users";

definePageMeta({
  layout: "main",
});

const userStore = useUsers();
const route = useRoute();
const user = ref(null);
const loading = ref(true);

const labels = [
    { title: 'Id', key: 'id' },
    { title: 'Email', key: 'email', width: 180 },
    { title: 'Имя', key: 'name' },
    { title: 'Имя пользователя', key: 'username' },
]

const getUser = async () => {
  await userStore.getUser(route.params.id);
  user.value = { ...userStore.userGetter };
  loading.value = false;

  console.log(user);
};

getUser();
</script>

<template>
  <div class="ticket">
    <h1 class="ticket__title">Пользователь #{{ route.params.id }}</h1>
    <el-descriptions
      direction="vertical"
      :column="4"
      border
      v-loading="loading"
    >
        <template v-if="user">
            <el-descriptions-item v-for="label in labels" :width="label.width" :key="label.key" :label="label.title">{{ user[label.key] }}</el-descriptions-item>
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