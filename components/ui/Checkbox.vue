<script setup lang="ts">

</script>

<template>
    <label class="input-wrapper">
        <input class="checkbox" type="checkbox">
        <span>
            <slot></slot>
        </span>
    </label>
</template>

<style scoped>
.checkbox {
    accent-color: var(--blue-green);
    height: 16px;
    width: 16px;
    margin-right: 5px;
}

.input-wrapper {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    width: fit-content;
}
</style>