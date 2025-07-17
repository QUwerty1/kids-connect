<script setup lang="ts">

const {color = 'white'} = defineProps<{
    color?: ButtonColor
}>();

</script>

<template>
    <button class="btn" :class="[color]">
        <slot></slot>
    </button>
</template>

<style scoped>
    .btn {
        border-radius: var(--small-border-radius);
        box-shadow: none;
        border: none;
        background-color: var(--bg-color);
        padding: 10px 20px;
        color: var(--text-color);
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    }
    .white {
        --bg-color: var(--white);
        --text-color: var(--dark-brown);
    }
    .brown {
        --bg-color: var(--brown);
        --text-color: var(--white);
    }
</style>