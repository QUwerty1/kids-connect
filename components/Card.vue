<script setup lang="ts">

</script>

<template>
    <div class="card">
        <slot/>
    </div>
</template>

<style scoped>

.card {
    display: flex;
    border-top: 1px solid var(--brown);
    border-radius: var(--small-border-radius);
    padding: 20px;
    background-color: var(--white);
}

</style>