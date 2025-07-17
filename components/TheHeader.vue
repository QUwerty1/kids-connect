<script setup lang="ts">

</script>

<template>
    <container>
        <header class="header">
            <icon class="logo" size="76" name="kc:logo"/>
            <h1 class="title">KidsConnect</h1>
        </header>
    </container>
</template>

<style scoped>

.header {
    width: 100%;
    height: 100px;
    border-radius: var(--big-border-radius);
    display: flex;
    align-items: center;
    background-color: var(--brown);
}

.logo {
    margin-left: 40px;
    height: 87px;
    width: 78px;
}

.title {
    color: var(--white);
    margin-left: 18px;

    font-family: Montserrat Alternates, sans-serif;
    font-size: 32px;
    font-weight: 600;
    line-height: 39px;
}

</style>