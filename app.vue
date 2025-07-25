<template>
    <div>
        <the-header :light="isLightLogo" style="margin: 20px auto 30px auto;"/>
        <NuxtPage/>
    </div>
</template>
<script setup lang="ts">

const isLightLogo = computed(() => {
    console.log(useRoute().path);
    return useRoute().path != '/';
})

</script>