<script setup>
definePageMeta({
    layout: 'main'
})

const route = useRoute()

</script>

<template>
    <h1> Ticket #{{ route.params.id }} </h1>
</template>