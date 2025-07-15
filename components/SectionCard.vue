<script setup lang="ts">

import Chip from "~/components/ui/Chip.vue";

const props = defineProps<{
    sectionInfo: ISection
}>();

const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const selectedDaysOfWeek = computed(() => {
    const selectedDays: string[] = [];
    props.sectionInfo.schedule.forEach((val, idx) => {
        if (val) {
            selectedDays.push(daysOfWeek[idx]);
        }
    })

    return selectedDays;
})

</script>

<template>
    <card>
        <div class="image-wrapper">
            <img class="image" src="/section_placeholder.svg" alt="section-image-placeholder"/>
        </div>
        <div style="flex-grow: 1; display: grid">
            <div style="display:flex;">
                <h3 class="title">{{ sectionInfo.title }}</h3>
                <div style="display: flex; gap:20px;">
                    <chip type="outlined" size="smallest" color="pink" v-if="sectionInfo.isFirstFree">
                        Первое бесплатно
                    </chip>
                    <chip size="smallest" color="pink">
                        <span v-if="sectionInfo.price == 0">Бесплатно</span>
                        <span v-else>{{ sectionInfo.price }} руб. месяц</span>
                    </chip>
                </div>
            </div>
            <div style="flex-grow: 1; color: var(--pink); margin: 10px 0;">
                #{{ sectionInfo.subcategory }}
            </div>
            <div style="flex-grow: 1; display:flex; justify-content: space-between; height: max-content">
                <div class="description">
                    <div class="description-icon">
                        <icon name="kc:person"/>
                    </div>
                    <div>{{ sectionInfo.minAge }}-{{ sectionInfo.maxAge }}&nbsp;лет</div>
                    <div class="description-icon">
                        <icon name="kc:address"/>
                    </div>
                    <div>{{ sectionInfo.address }}</div>
                    <div class="description-icon">
                        <icon name="kc:geo"/>
                    </div>
                    <div>{{ sectionInfo.buildingTitle }}</div>
                    <div class="description-icon">
                        <icon name="kc:clock"/>
                    </div>
                    <div style="display:flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                        <span style="font-weight: 500;">
                            {{ selectedDaysOfWeek.join(', ') }}
                        </span>
                        <chip style="width: 137px; display:flex; justify-content: center;"
                              size="small" color="beige"
                              :key="index + '_time'"
                              v-for="(timeSlot, index) in sectionInfo.timeSlots">
                            {{ timeSlot }}
                        </chip>
                    </div>
                </div>
                <div style="display:flex; align-items: end; justify-content: end;">
                    <ui-button color="brown" role="link">Подробнее</ui-button>
                </div>
            </div>
        </div>
    </card>
</template>

<style scoped>

.image-wrapper {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}

.title {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;

    flex-grow: 1;
    display: flex;
    align-items: center;
}

.description {
    display: grid;
    grid-template-columns: 18px 1fr;
    flex-direction: column;
    gap: 10px;
}

.description-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
}

</style>