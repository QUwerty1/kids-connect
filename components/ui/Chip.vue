<script setup lang="ts">

const {size = 'default', type = 'default', color = 'transparent'} = defineProps<{
    size?: ChipSize,
    color?: ChipColor,
    type?: ChipType
}>();

</script>

<template>
    <div class="chip" :class="[size + '-size', type + '-type', color]">
        <slot></slot>
    </div>
</template>

<style scoped>
    .chip {
        width: fit-content;
        border-radius: var(--border-radius);
        display: flex;
        align-items: center;
    }
    .transparent {
        --color: var(--black);
        --bg-color: transparent;
    }
    .white {
        --color: var(--black);
        --bg-color: var(--white);
    }
    .beige {
        --color: var(--black);
        --bg-color: var(--beige);
    }
    .pink {
        --color: var(--white);
        --bg-color: var(--pink)
    }
    .default-type {
        color: var(--color);
        background-color: var(--bg-color);
    }
    .outlined-type {
        background-color: white;
        border: 1px solid var(--bg-color);
        color: black;
    }
    .default-size {
        height: 40px;
        padding-inline: 20px;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
    }
    .small-size {
        height: 28px;
        padding-inline: 10px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    }
    .smallest-size {
        height: 25px;
        padding-inline: 15px;
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
    }
    .outlined-type.smallest-size {
        font-weight: 600;
    }
</style>