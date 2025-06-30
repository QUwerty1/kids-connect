<script setup lang="ts">

</script>

<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style scoped>
    .container {
        width: 1480px;
        margin-inline: calc((100% - 1480px) / 2);
    }
    @media (width < 1500px) {
        .container {
            width: calc(100% - 20px);
            margin-inline: 10px;
        }
    }
</style>