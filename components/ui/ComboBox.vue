<script setup lang="ts">

defineProps<{
    options?: ISelectOptions[]
}>();

</script>

<template>
    <div class="combo-box-wrapper">
        <select class="combo-box">
            <option class="option" :key="index + '_option'" v-for="(option, index) in options" :value="option.value">
                {{ option.title }}
            </option>
            <slot></slot>
        </select>
        <nuxt-icon class="chevron-icon" name="chevron-down" filled/>
    </div>
</template>

<style scoped>

.combo-box-wrapper {
    position: relative;
    border-bottom: 1px solid var(--brown);
    align-items: center;
    width: fit-content;
    border-radius: var(--small-border-radius);
}

.combo-box {
    height: 27px;
    padding-inline: 10px 20px;
    outline: none;
    border: none;
    appearance: none;
    cursor: pointer;

    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
}

.chevron-icon {
    position: absolute;
    right: 5px;
    top: 4px;
    height: 10px;
    width: 10px;
}

</style>