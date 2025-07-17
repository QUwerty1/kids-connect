<script setup lang="ts">

import Chip from "~/components/ui/Chip.vue";
import getDaysOfWeek from "~/utils/GetDaysOfWeek";

const allSections: ISection[] = reactive([]);

const currentSection = computed(() => {
    if (typeof (useRoute().params.id) == 'string') {
        const currentSection = allSections
            .find(section => section.id == Number(useRoute().params.id))
        if (currentSection == undefined)
            return null;
        return currentSection;
    }
    return null;
})

onMounted(() => {
    $fetch('/fake_sections.json')
        .then(response => {
            allSections.push(...response as ISection[])
        })
})

</script>

<template>
    <div>
        <container class="section-container">
            <div style="display:flex; justify-content: space-between;">
                <nuxt-link :to="{name: 'index', params: {}}">
                    <ui-button style="display:flex; align-items: center;" color="white">
                        <icon
                            style="position:relative; top:-1px; margin-right: 17px;"
                            size="11.43"
                            name="kc:chevron-left"/>
                        <span>Назад</span>
                    </ui-button>
                </nuxt-link>
                <ui-button style="display:flex; align-items: center;">
                    <span>На карте&nbsp;&nbsp;</span>
                    <icon style="position:relative; top:-1px" name="kc:geo"/>
                </ui-button>
            </div>
            <h1 class="section-header">
                {{ currentSection?.title }}
            </h1>
            <card class="header-card">
                <div class="image">
                    <img
                        src="/section_description_placeholder.png"
                        alt="section-description-image">
                </div>
                <div class="recruitment">
                    <chip
                        color="pink"
                        type="outlined"
                        size="smallest">
                        Набор открыт
                    </chip>
                </div>
                <div class="price">
                    <chip
                        color="pink"
                        size="smallest">
                        <span v-if="currentSection?.price == 0">
                            Бесплатно
                        </span>
                        <span v-else>
                            {{ currentSection?.price }} руб.
                        </span>
                    </chip>
                </div>
                <div class="info">
                    <icon name="kc:person"></icon>
                    <span>{{ currentSection?.minAge }}-{{ currentSection?.maxAge }} лет</span>
                    <icon name="kc:address"></icon>
                    <span>{{ currentSection?.address }}</span>
                    <icon name="kc:geo"></icon>
                    <span>{{ currentSection?.buildingTitle }}</span>
                </div>
                <div class="apply">
                    <ui-button color="brown">
                        Записаться
                    </ui-button>
                </div>
            </card>
            <card>
                <div class="card-section">
                    <div class="section-title">Группы</div>
                    <div class="section-subtitle">Этап начальной подготовки</div>
                    <div
                        style="display: grid; grid-template-columns: min-content auto;
                            column-gap: 10px; row-gap: 13px; width: 392px;"
                        class="section-paragraph">
                        <icon name="kc:teacher"/>
                        <span>Петрова Елена Александровна</span>
                        <icon name="kc:plus-person"/>
                        <span>15 из 20</span>
                        <icon name="kc:flag"/>
                        <span>12 месяцев</span>
                    </div>
                </div>
                <div class="card-section">
                    <div class="section-title">Расписание</div>
                    <div style="display:flex; align-items: center;">
                        <icon
                            size="15px"
                            class="icon"
                            name="kc:clock"
                            style="margin-right: 21px; position: relative; top: -1px;"/>
                        <div style="display:flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                            <span
                                style="font-size: 16px; font-weight: 600; line-height: 20px;">
                                {{ getDaysOfWeek(currentSection?.schedule ?? []).join(', ') }}
                            </span>
                            <ui-chip class="chip" color="beige" size="small"
                                     :key="currentSection?.id + '_' + index + '_timeSlot'"
                                     v-for="(timeSlot, index) in currentSection?.timeSlots">
                                {{ timeSlot }}
                            </ui-chip>
                        </div>
                    </div>
                </div>
            </card>
            <card>
                <div class="card-section">
                    <div class="section-title">Описание</div>
                    <p class="section-paragraph">{{ currentSection?.description }}</p>
                </div>
            </card>
            <card>
                <expanding-panel style="width: 100%">
                    <template #header>
                        <div class="contents-header">
                            Содержание программы
                        </div>
                    </template>
                    <template #default>
                        <expanding-panel
                            style="margin-top: 20px"
                            class="contents-inner-expanding-panel">
                            <template #header>
                                <div class="contents-subheader">Базовый уровень</div>
                            </template>
                            <template #default>
                                <div class="contents-text">
                                    <span>Базовый уровень сложности первый-второй год обучения, 252 часа.</span>
                                    <ul>
                                        <li>Обязательные предметы области (количество часов – 15);</li>
                                        <li>Вариативные предметные области (количество часов −10);</li>
                                        <li>Теория (количество часов −5);</li>
                                        <li>Практика (количество часов − 216);</li>
                                        <li>Самостоятельная работа (количество часов −2);</li>
                                        <li>Аттестация (количество часов − 4).</li>
                                    </ul>
                                    <span>Базовый уровень сложности третий-четвертый год обучения, 416 часов.</span>
                                    <span>Обязательные предметы области (количество часов − 25);</span>
                                    <ul>
                                        <li>Вариативные предметные области (количество часов − 15);</li>
                                        <li>Теория (количество часов − 7);</li>
                                        <li>Практика (количество часов − 361);</li>
                                        <li>Самостоятельная работа (количество часов − 4);</li>
                                        <li>Аттестация (количество часов − 4).</li>
                                    </ul>
                                    <span>Базовый уровень сложности пятый-шестой год обучения, 420 часов.</span>
                                    <ul>
                                        <li>Обязательные предметы области (количество часов − 27);</li>
                                        <li>Вариативные предметные области (количество часов − 15);</li>
                                        <li>Теория (количество часов − 8);</li>
                                        <li>Практика (количество часов − 360);</li>
                                        <li>Самостоятельная работа (количество часов − 6);</li>
                                        <li>Аттестация (количество часов − 4).</li>
                                    </ul>
                                </div>
                            </template>
                        </expanding-panel>
                        <expanding-panel
                            class="contents-inner-expanding-panel"
                            style="margin-bottom: 0">
                            <template #header>
                                <div class="contents-subheader">Углубленный уровень</div>
                            </template>
                            <template #default>
                                <div class="contents-text">
                                    <span>
                                        Углубленный уровень сложности первый-второй год обучения, 504.
                                    </span>
                                    <ul>
                                        <li>Обязательные предметы области (количество часов − 30);</li>
                                        <li>Вариативные предметные области (количество часов − 20);</li>
                                        <li>Теория (количество часов − 9);</li>
                                        <li>Практика (количество часов − 433);</li>
                                        <li>Самостоятельная работа (количество часов − 8);</li>
                                        <li>Аттестация (количество часов − 4).</li>
                                    </ul>
                                    <span>
                                        Углубленный уровень сложности третий-четвертый год обучения, 588 часов.
                                    </span>
                                    <ul>
                                        <li>Обязательные предметы области (количество часов − 35);</li>
                                        <li>Вариативные предметные области (количество часов − 23);</li>
                                        <li>Теория (количество часов − 10);</li>
                                        <li>Практика (количество часов − 506);</li>
                                        <li>Самостоятельная работа (количество часов − 10);</li>
                                        <li>Аттестация (количество часов − 4).</li>
                                    </ul>
                                </div>
                            </template>
                        </expanding-panel>
                    </template>
                </expanding-panel>
            </card>
        </container>
    </div>
</template>

<style scoped lang="scss">

.section-header {
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;

    flex-grow: 1;
}

.section-container {
    background-color: var(--light-grey);
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.header-card {
    padding: 20px;
    display: grid;
    grid-template-areas:
    "img recruit price"
    "img info    apply";
    grid-template-columns: 220px 1fr auto;
    grid-template-rows: auto 1fr;

    & > .image {
        grid-area: img;
        margin-right: 20px;
    }

    & > .recruitment {
        grid-area: recruit;
    }

    & > .price {
        grid-area: price;
        display: flex;
        justify-content: flex-end;
    }

    & > .info {
        grid-area: info;
        display: grid;
        grid-template-columns: 18px auto;
        grid-auto-rows: min-content;
        gap: 10px;
        margin-top: 20px;
    }

    & > .apply {
        grid-area: apply;
        display: flex;
        align-items: flex-end;
    }
}

.card-section {
    & > .section-title {
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;

        color: var(--brown);
        margin-bottom: 10px;
        text-transform: uppercase;
    }

    & > .section-subtitle {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;

        margin-bottom: 11.5px;
    }

    & > .section-paragraph {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;

        text-wrap: pretty;
        white-space: pre-wrap;
    }
}

.chip {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 137px;
}

.contents-header {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    color: var(--brown);
    text-transform: uppercase;

    margin-bottom: 5px;
}

.contents-inner-expanding-panel {
    margin-bottom: 20px;
}

.contents-subheader {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;

    color: var(--brown);
}

.contents-text {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    margin-left: 10px;
    margin-top: 5px;

    li {
        margin-left: 6px;
    }

    li::before {
        content: "•";
        margin-right: 10px;
        font-size: 20px;
        font-weight: 400;
        line-height: 16px;
    }
}

</style>