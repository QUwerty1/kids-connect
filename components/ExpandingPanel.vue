<script setup lang="ts">

const isOpened = ref(false);

</script>

<template>
    <div class="expanding-panel">
        <div @click="() => {isOpened = !isOpened}" class="header">
            <div class="header-text">
                <slot name="header"/>
            </div>
            <icon class="icon" :class="{opened: isOpened}" size="7" name="kc:bold-chevron-down"/>
        </div>
        <div ref="contentRef" class="content" :class="{closed: !isOpened}">
            <slot name="default"/>
        </div>
    </div>
</template>

<style scoped>

.expanding-panel {
    display: flex;
    flex-direction: column;
}

.header {
    display: flex;
    cursor: pointer;
    align-items: center;
}

.header-text {
    flex-grow: 1;
}

.icon.opened {
    rotate: 0.5turn;
}

.content {
    margin-top: 5px;
    overflow-y: hidden;
    transition-property: max-height, margin;
    max-height: initial;
    white-space: pre-wrap;
    overflow-x: hidden;
}

.content.closed {
    max-height: 0;
    margin: 0;
}

</style>