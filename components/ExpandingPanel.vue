<script setup lang="ts">

const props = defineProps<{
    title: string,
    categoriesAmount: ICategoryAmount[],
}>();

defineEmits<{

}>();

const amountSum = ref(props.categoriesAmount.reduce((prev, current) => prev + current.amount, 0));
const listRef = useTemplateRef('list');
const listHeight: Ref<string | null> = ref(null);
const isOpened = ref(true);

onMounted(() => {
    listHeight.value = `${listRef.value!.offsetHeight}px`;
    isOpened.value = false;
})

function toggleList() {
    isOpened.value = !isOpened.value;
}


</script>

<template>
    <div class="expanding-panel">
        <div @click="toggleList" class="header">
            <div class="header-left">
                <span class="header-title">{{ title }}</span>
                <span class="amount-sum">{{ amountSum }}</span>
            </div>
            <nuxt-icon :class="{opened: isOpened}" class="chevron-icon" name="chevron-down" filled/>
        </div>
        <ul ref="list" class="list" :class="{opened: isOpened, closed: !isOpened}">
            <li class="list-item" :key="index + '_categoryAmount'" v-for="(categoryAmount, index) in categoriesAmount">
                <span class="list-item-title">{{ categoryAmount.title }}</span>
                <span class="list-item-amount">{{ categoryAmount.amount }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>

.expanding-panel {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;

    width: fit-content;
}

.header {
    display: flex;
}

.header-left {
    flex-grow: 1;
}

.header-title {

}

.amount-sum {
    margin-left: 10px;
    color: var(--brown);
}

.chevron-icon {
    width: 10px;
    transition-property: all;
}

.chevron-icon.opened {
    rotate: 0.5turn;
}

.list {
    padding: 0 0;
    width: fit-content;
    overflow-y: hidden;
    transition-property: max-height, margin;
    max-height: v-bind('listHeight');
}

.list.closed {
    max-height: 0;
}
.list.opened {
    margin-top: 15px;
}

.list-item {
    width: fit-content;
}

.list-item::before {
    content: "•";
    margin-right: 10px;
    font-size: 20px;
    font-weight: 400;
    line-height: 16px;
}

.list-item-amount {
    margin-left: 10px;
    color: var(--brown);
}
</style>