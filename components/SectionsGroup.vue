<script setup lang="ts">

defineProps<{
    title: string,
    sections: ISection[]
}>();

</script>

<template>
    <div>
        <h2 class="subheader">{{ title }}</h2>
        <SectionCard style="margin-bottom: 20px;"
                     :key="section.title" v-for="section in sections" :section-info="section"/>
    </div>
</template>

<style scoped>

.subheader {
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;

    margin-bottom: 20px;
}

</style>