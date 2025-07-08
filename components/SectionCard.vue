<script setup lang="ts">

import Chip from "~/components/ui/Chip.vue";

const props = defineProps<{
    sectionInfo: ISection
}>();

function getDaysAndTime(): ISectionSchedule {
    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    const schedule: ISectionSchedule = {days: [], time: []};

    props.sectionInfo.schedule.forEach((d, index) => {
        if (d !== null) {
            schedule.days.push(daysOfWeek[index]);
            schedule.time.push(d);
        }
    })

    return schedule;
}

const schedule = getDaysAndTime();

</script>

<template>
    <card>
        <div class="image-wrapper">
            <img class="image" src="/section_placeholder.svg" alt="section-image-placeholder"/>
        </div>
        <div style="flex-grow: 1">
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
                #{{ sectionInfo.category }}
            </div>
            <div style="flex-grow: 1; display:flex;">
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
                    <div style="display:flex; gap: 10px; align-items: center">
                        <span style="font-weight: 500;">
                            {{ schedule.days.join(', ') }}
                        </span>
                        <chip style="width: 137px; display:flex; justify-content: center;"
                              size="small" color="beige"
                              :key="index + '_time'"
                              v-for="(t, index) in schedule.time">
                            {{ t }}
                        </chip>
                    </div>
                </div>
                <div>

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
}

</style>