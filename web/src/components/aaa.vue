<template>
    <div>
        <h1>大家好==={{msg}}
        <span>豆豆</span></h1>
    </div>
</template>

<script>
    export default {
        name: "aaa",
        data(){
          return{ msg:'hh'}
        }
    }
</script>

<style lang="less" scoped>
h1{
    color: red;
    span{
        color: aqua;
    }
}
</style>