<script setup lang="ts">

const ageModel = defineModel('age');
const categoriesModel = defineModel<string[]>('categories')

const props = defineProps<{
    sectionAmounts: ISectionAmount[],
}>();

const selectedCategories = ref(new Map<string, string[]>());

function changeSelectedCategories(title: string, categories: string[]) {
    selectedCategories.value.set(title, [...categories]);

    categoriesModel.value = Array.from(selectedCategories.value.values()).flat();
}

</script>

<template>
    <div class="subheader">Фильтры</div>
    <card style="padding: 10px 20px">
        <div style="flex-grow: 1">
            <div class="filter-category">
                Возраст
            </div>
            <ui-combo-box v-model="ageModel" style="width: 100%" :options="[
                        {value: 'null', title: 'Любой'},
                        {value: '1', title: '1 год'},
                        {value: '2', title: '2 года'},
                        {value: '3', title: '3 года'},
                        {value: '4', title: '4 года'},
                        {value: '6', title: '6 лет'},
                        {value: '7', title: '7 лет'},
                        {value: '5', title: '5 лет'},
                        {value: '8', title: '8 лет'},
                        {value: '9', title: '9 лет'},
                        {value: '10', title: '10 лет'},
                        {value: '11', title: '11 лет'},
                        {value: '12', title: '12 лет'},
                        {value: '13', title: '13 лет'},
                        {value: '14', title: '14 лет'},
                        {value: '15', title: '15 лет'},
                        {value: '16', title: '16 лет'},
                        {value: '17', title: '17 лет'},
                        {value: '18', title: '18 лет'},
                    ]"/>
            <div style="margin-top: 15px;" class="filter-category">
                Пол
            </div>
            <div style="display:flex; gap: 20px; flex-wrap: wrap">
                <ui-checkbox>Мужской</ui-checkbox>
                <ui-checkbox>Женский</ui-checkbox>
            </div>
            <div style="margin-top: 15px;" class="filter-category">
                Каталог
            </div>
            <div style="display:grid; grid-template-columns: 1fr; grid-auto-rows: min-content; gap: 15px">
                <section-filter
                    v-for="sectionAmount in sectionAmounts"
                    @change-selection="(changedCategories) => {
                        changeSelectedCategories(sectionAmount.title, changedCategories)}"
                    :title="sectionAmount.title"
                    :categories-amount="sectionAmount.subcategories"/>
            </div>
        </div>
    </card>
</template>

<style scoped>

.subheader {
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;

    margin-bottom: 20px;
}

.filter-category {
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    width: 100%;
    margin-bottom: 15px;
}

</style>