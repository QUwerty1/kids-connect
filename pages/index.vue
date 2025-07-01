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
        <ui-combo-box :options="[
            {value: '1', title: '1'},
            {value: '2', title: '2'},
            {value: '3', title: 'sdfsdfasdf'},
            {value: '4', title: '4'},
        ]">
        </ui-combo-box>
        <br>
        <div style="width: 290px">
            <expanding-panel title="Some title" :categories-amount="[
            {title: 'Тяжелая атлетика', amount: 2},
            {title: 'Пауерлифтинг', amount: 1}
            ]"/>
        </div>
    </container>
</template>

<style scoped>

</style>