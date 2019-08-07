<template>
    <div>
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
        <router-link to="/aa">11</router-link>
        <router-link to="/bb">22</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "app"
    }
</script>

<style scoped>

</style>