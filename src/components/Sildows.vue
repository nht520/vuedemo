<template>
  <div>
    <!--父组件给子组件传值-->
    <Header ref="zizujian" :title="title" :hommsg="msg" :run="run" :Sildows="this"></Header>
    <p></p>
    <button @click="getzizujian()">获取子组件的数据和方法</button>
  </div>
  <!--父组件主动获取子组件的数据和方法-->
      <!--1.调用子组建的时候定义一个ref-->
      <!--2.在伏组件里面通过
          this.$refs.header.属性
          this.$refs.header.方法
            zizujian
      -->
</template>

<script>
  // :Sildows="this"  把整个Sildows实例传过去 子组件就能拿到父组件的所有值
  import Header from "./Header";
  export default {
      name: 'Sildows',
      components: {Header},
      data(){
        return{
          title:'我是父组件的title',
          msg:'Home'
        }
      },
      methods:{
          run(data){
            alert("我是home组件run方法"+data)
          },
          getzizujian(){
              // alert(this.$refs.zizujian.msg)
             this.$refs.zizujian.zizujian()
          }
       }
  }
</script>
