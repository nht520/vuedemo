<template>
    <div id="Ffzzj">
    <!--非父子组件传至-->
      <div >
          我是大哥组件
        <button @click="emitFfzzj">给one组件广播数据</button>
      </div>
    </div>
</template>

<script>
  // <!--映入vue实例-->
    import VueEvent from '../../vueEvent/vueEvent.js';
    export default {
        name: "Ffzzj",
        data(){
          return{
            msg:'我是一个Ffzzj组件'
          }
        },
        methods:{
          emitFfzzj(){
            VueEvent.$emit('to-One',this.msg)
          },
        },
        mounted(){
          //监听One广播的数据
          VueEvent.$on('to-Ffzzj',function (data) {
            console.log(data)
          })
        }
    }
</script>

<style scoped>

</style>
