<template>
    <div>
        <h1>哈哈哈==={{msg}}</h1>
        <router-link to="/cc">33</router-link>
        <router-link to="/dd">44</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "aaa",
        data(){
            return{ msg:'hhh'}
        }
    }
</script>

<style scoped>
h1{
    color:greenyellow;
}
</style>