<script setup lang="ts">

</script>

<template>
    <select class="select">
        <slot></slot>
    </select>
    <!--todo-->
</template>

<style scoped>
    .select {
        border-radius: var(--border-radius);
        height: 27px;
        padding-inline: 10px;
        border-bottom: 1px solid var(--brown);

        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
    }
</style>