<script setup lang="ts">

</script>

<template>
    <container style="background-color: var(--light-grey); min-height: 100dvh">
        <ui-button color="brown">Кнопка</ui-button>
        <ui-button>Кнопка</ui-button>
        <br>
        <search-input/>
        <br>
        <ui-chip type="default" color="pink" size="smallest">Бесплатно</ui-chip>
        <ui-chip type="default" color="white" size="small">Бесплатно</ui-chip>
        <ui-chip type="default" color="beige" size="default">Бесплатно</ui-chip>
        <ui-chip type="outlined" color="pink" size="smallest">Первое бесплатно</ui-chip>
        <ui-select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </ui-select>
    </container>
</template>

<style scoped>

</style>