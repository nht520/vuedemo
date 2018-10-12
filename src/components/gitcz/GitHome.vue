<template>
    <div id="GitHome">
      <router-link to="/GitList">列表</router-link>
      <router-link to="/GitNuws">新闻</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "GitHome",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>
