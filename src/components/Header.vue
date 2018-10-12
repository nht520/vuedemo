<template>
    <div>
      <h1>{{ hommsg }}{{ title }}  </h1>
      <!--获取父组件传过来的方法  并给父组件传值-->
      <button @click="run(456)">执行伏组件的方法</button>

      <button @click="getparent()">获取父组件的数据和方法</button>

      <!--子组件主动获取伏组件的数据和方法,不用传值传方法-->
      <!--this.$parent.数据-->
      <!--this.$parent.方法-->
      <button @click="getParentDate()">主动获取父组件的数据和方法</button>
    </div>
</template>

<script>
    export default {
       name: "Header",
       data(){
         return{
           msg:'子组件的msg'
         }
       },
       methods:{
         getparent(){
           //获取伏组件title的值
           // alert(this.home.title)
           //执行伏组件run方法
           this.Sildows.run()
         },

         zizujian (){
           alert('我是子组件的方法')
         },
         getParentDate(){
           // const list = this.$parent.msg
           // console.log( list)

           // console.log( this.$parent.msg)
           this.$parent.run()
         }

       },
        props:[
          'title',
          'hommsg',
          'run',
          'Sildows'
        ],

    }
</script>

<style scoped>

</style>
