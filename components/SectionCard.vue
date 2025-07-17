<script setup lang="ts">

import getDaysOfWeek from "~/utils/GetDaysOfWeek";

const props = defineProps<{
    sectionInfo: ISection
}>();

const selectedDaysOfWeek = computed(() => {
    return getDaysOfWeek(props.sectionInfo.schedule);
})

const isOneLinedTitle = ref(false);
const titleRef = useTemplateRef<HTMLDivElement>('titleRef');
watch(titleRef, (newVal) => {
    isOneLinedTitle.value = newVal?.clientHeight! == 20;
})

</script>

<template>
    <card class="card-body">
        <div class="img">
            <img src="/section_placeholder.svg" alt="section-image">
        </div>
        <div class="card-right">
            <div class="card-header">
                <div ref="titleRef" class="title" :class="{ 'one-line': isOneLinedTitle }">
                    <h3>
                        {{ sectionInfo.title }}
                    </h3>
                </div>
                <div class="chips">
                    <ui-chip v-if="sectionInfo.isFirstFree" color="pink" type="outlined" size="smallest">
                        Первое бесплатно
                    </ui-chip>
                    <ui-chip color="pink" size="smallest">
                        <span v-if="sectionInfo.price == 0">Бесплатно</span>
                        <span v-else>{{ sectionInfo.price }} руб.</span>
                    </ui-chip>
                </div>
            </div>
            <div class="card-inner">
                <div class="description">
                    <div class="subcategory">#{{ sectionInfo.subcategory }}</div>
                    <div class="info">
                        <icon class="icon" name="kc:person"></icon>
                        <span class="info-text">{{ sectionInfo.minAge }}-{{ sectionInfo.maxAge }} лет</span>
                        <icon class="icon" name="kc:address"></icon>
                        <span class="info-text">{{ sectionInfo.address }}</span>
                        <icon class="icon" name="kc:geo"></icon>
                        <span class="info-text">{{ sectionInfo.buildingTitle }}</span>
                        <icon class="icon" name="kc:clock"></icon>
                        <div class="time info-text">
                            <span>
                                {{ selectedDaysOfWeek.join(', ') }}
                            </span>
                            <span class="time-chips">
                                <ui-chip class="chip" color="beige" size="small"
                                         :key="sectionInfo.id + '_' + index + '_timeSlot'"
                                         v-for="(timeSlot, index) in sectionInfo.timeSlots">
                                    {{ timeSlot }}
                                </ui-chip>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="more">
                    <nuxt-link :to="{name: 'sections-id', params: {id: sectionInfo.id}}">
                        <ui-button role="link" color="brown">
                            Подробнее
                        </ui-button>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </card>
</template>

<style scoped lang="scss">
.card-body {
    padding: 20px;
    display: grid;
    grid-template-columns: auto 1fr;
}

.card-right {
    display: flex;
    flex-direction: column;
}

.card-header {
    display: flex;
    justify-content: space-between;
}

.card-inner {
    display: grid;
    grid-template-columns: 1fr auto;
}

.img {
    width: 200px;
    height: 200px;
    align-self: center;
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}

.title {
    height: min-content;
    width: fit-content;
    margin-bottom: 10px;

    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0;

    & > h3 {
        width: fit-content;
        text-wrap: balance;
        white-space: pre-wrap;
    }

    &.one-line {
        margin-bottom: 15px;
    }
}

.chips {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    height: min-content;
    flex-wrap: wrap;
}

.description {

    & > .subcategory {
        color: var(--pink);
        margin-bottom: 10px;
        height: 17px;

        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
    }

    & > .info {
        display: grid;
        grid-template-columns: 18px 1fr;
        grid-auto-rows: auto;
        gap: 10px;

        font-size: 16px;
        font-weight: 400;
        line-height: 20px;

        & > .info-text {
            width: fit-content;
            text-wrap: wrap;
        }

        & > .icon {
            align-self: center;
            justify-self: center;
            height: 20px;
        }

        & > .time {
            display: flex;
            gap: 10px;
            align-items: center;
            height: fit-content;
            text-wrap: nowrap;

            font-size: 16px;
            font-weight: 600;
            line-height: 20px;

            & > .time-chips {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;

                & > .chip {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    width: 137px;
                }
            }
        }

        & > .icon:has(+.time) {
            height: 28px;
        }
    }
}

.more {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}
</style>