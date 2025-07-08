<script setup lang="ts">

</script>

<template>
    <label class="search-wrapper">
        <icon class="search-icon" name="kc:search" filled></icon>
        <input placeholder="Поиск" class="text-input" type="text">
    </label>
</template>

<style scoped>

.search-wrapper {
    background-color: var(--white);
    border-radius: var(--small-border-radius);
    width: 241px;
    padding-inline: 18px;
    height: 40px;
    display: flex;
    align-items: center;
}
.text-input {
    border: none;
    padding-left: 11px;
    outline: none;
    color: var(--pink);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    width: 0;
    flex-grow: 1;
}
.search-icon {
    height: 18px;
    width: 18px;
}
.text-input::placeholder {
    color: var(--pink);
}

</style>