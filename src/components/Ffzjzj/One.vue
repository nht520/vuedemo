<template>
    <div id="One">
      我是弟弟组件
      <button @click="emitOne">给Ffzzj组件广播数据</button>
    </div>
</template>

<script>
    // <!--映入vue实例-->
    import VueEvent from '../../vueEvent/vueEvent.js';
    export default {
        name: "one",
        data(){
            return{
              msg:'我是一个one组件'
            }
        },
        methods:{
          emitOne(){
            VueEvent.$emit('to-Ffzzj',this.msg)
          }
        },
        mounted(){
          //监听Ffzzj广播的数据
          VueEvent.$on('to-One',function (data) {
            console.log(data)
          })
        }
    }
</script>

<style scoped>

</style>
