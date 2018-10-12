<template>
    <div class="login">
      <p>我是登录页/编程市导航</p>

      <button @click="goNews()">跳转</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
          return{
            msg:'我是一个登录组件'
          }
        },
        methods:{
          goNews(){
            this.$router.push({path:'GitNuws'})
            // this.$router.push({path:'Content/495'})
          }
        }
    }
</script>

<style scoped>

</style>
