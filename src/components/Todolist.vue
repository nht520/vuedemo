<template>
  <div id="todolist">

    <input type="text" v-model="todo"  @keyup="keyup($event)">
    <button @click="add" >+增加</button>
    <br/>
    <!--购物车功能-->
    <h2>进行中</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="!item.checkbox" >
        <input type="checkbox" v-model="item.checkbox"/>{{item.title}} --<button @click="removdelt(key)">删除</button>
      </li>
    </ul>
    <br/>
    <h2>已完成</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="item.checkbox">
        <input type="checkbox" v-model="item.checkbox"/>{{item.title}} --<button @click="removdelt(key)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "todolist",
        data() {
          return{
            todo:[],
            list:[ ],
          }
        },
        methods:{
          add(){
            // console.log(e.keyCode)
              // 1.增加获取文本框内的值
              this.list.push({
                title:this.todo,
                checkbox:false
              });
              this.todo=''
          },
          keyup(e){
            if(e.keyCode ==13){
              // 1.获取文本框内的值
                this.add()
                // this.list.push({
                //   title:this.todo,
                //   checkbox:false
                // });
                this.todo=''
             }
          },
          removdelt(key){
            // alert(11)
            this.list.splice(key,1);
          }
        },

    }
</script>

<style  lang="stylus">
  #todolist ul li{
    background #308000
  }
</style>
