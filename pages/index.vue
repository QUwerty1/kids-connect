<script setup lang="ts">

import ComboBox from "~/components/ui/ComboBox.vue";
import Checkbox from "~/components/ui/Checkbox.vue";

const priceFilter: Ref<PriceType> = ref("any");
const testSection: ISection = {
    "title": "Рисование для детей",
    "category": "Искусство",
    "img": "https://example.com/image1.jpg",
    "price": 2500,
    "isFirstFree": true,
    "minAge": 5,
    "maxAge": 12,
    "address": "ул. Пушкина, 10",
    "buildingTitle": "Дом творчества",
    "schedule": ["16:00 - 17:30", "16:00 - 17:30", null, "16:00 - 17:30", null, null, null],
    "description": "Курсы рисования для детей младшего и среднего школьного возраста.",
    "contents": "Акварель, гуашь, карандаши, основы композиции"
};

function changePriceType(type: PriceType): void {
    priceFilter.value = type;
}

onMounted(async () => {

})

</script>

<template style="min-height: 100dvh">
    <container class="price-filters">
        <div>
            <div style="display:flex; justify-content: space-between; margin-bottom: 20px">
                <div style="display:flex; gap: 20px">
                    <search-input/>
                    <ui-chip @click="changePriceType('any')" class="price-chip" :disabled="priceFilter != 'any'"
                             color="white">Все
                    </ui-chip>
                    <ui-chip @click="changePriceType('paid')" class="price-chip" :disabled="priceFilter != 'paid'"
                             color="white">
                        Платные
                    </ui-chip>
                    <ui-chip @click="changePriceType('free')" class="price-chip" :disabled="priceFilter != 'free'"
                             color="white">
                        Бесплатные
                    </ui-chip>
                </div>
                <ui-button style="display:flex; align-items: center;">
                    <span>На карте&nbsp;&nbsp;</span>
                    <icon style="position:relative; top:-1px" name="kc:geo"/>
                </ui-button>
            </div>
        </div>
        <div style="display:flex; gap: 40px;">
            <main style="flex-grow: 1">
                <h2 class="subheader">Искусство</h2>
                <SectionCard :section-info="testSection"/>
            </main>
            <aside style="width: 330px;">
                <div class="subheader">Фильтры</div>
                <card>
                    <div style="flex-grow: 1">
                        <div class="filter-category">
                            Возраст
                        </div>
                        <combo-box style="width: 100%" :options="[
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
                            <checkbox>Мужской</checkbox>
                            <checkbox>Женский</checkbox>
                        </div>
                    </div>
                </card>
            </aside>
        </div>
    </container>
</template>

<style scoped>

.price-filters {
    border-radius: var(--big-border-radius);
    background-color: var(--light-grey);
    padding: 40px 40px;
}

.price-chip {
    cursor: pointer;
}

.subheader {
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;

    margin-bottom: 30px;
}

.filter-category {
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    width: 100%;
    margin-bottom: 15px;
}

</style>