<template>
  <div class="hello">
    <!--非父子组件传值-->
    <Ffzzj></Ffzzj>
    <One></One>
    <router-link to="/Ffzzj">非父子组件传值</router-link>
<br/><hr>
    <!--父子组件传值-->
    <router-link to="/Sildows">父子组件传值</router-link>
<br/><hr>
    <!--git传值-->
    <GitHome></GitHome>
<br/><hr>

    <!--js跳转页面 -->
    <router-link to="/Login">js跳转页面</router-link>
<br/><hr>
    <!--js跳转页面 -->
    <router-link to="/Infinitescrool">mint ui下拉 刷新 上啦加载更多</router-link>
    <br/><hr>

<br/><hr>
    <!--todolist-->
    <Todolist></Todolist>
<!---->
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in list">
        <h1>{{item.cate}}</h1>
        <ul>
          <li v-for="news in item.list1">
            {{news.title}}
          </li>
        </ul>
      </li>
    </ul>
    <!--绑定属性-->
    <h1  :title="title">h2{{h2}}</h1>
    <img :src="url" alt="1111111">
    <h2 v-html="h2"></h2>
    <h2 v-text="title"></h2>

    <ul>
      <li :class="{'red':key==0,'blue':key==1}" v-for="(item,key) in liebiao"  >
        {{key}}{{item.title}}
      </li>
    </ul>

    <h1 :class="{'red':flag,'blue':!flag}">去就和1</h1>
    <h1 :class="{'red':flag}">去就和2</h1>
    <h1 class="box":style="{width:boxWidth+'px'}">我是style</h1>

      <!--双向数据绑定 mvvm   双向数据绑定必须在表单里面使用-->
    <h1>{{msg1}}</h1>
    <input type="text" v-model="msg1"/>
    <button @click="huoqu()">获取</button>
    <button @click="shuoqu()">设置</button>

    <hr/>
    <!--ref 可以获取deom 节点-->
    <input type="text" ref="useinfo"/>
    <button @click="getvalue()">123</button>
    <h1 ref="box">11</h1>

    <!--on click 事件-->
    <button @click="getmsg()">获取data里面的数据</button>


    <!--请求数据-->
    <br/>
    <button @click="qingqiu">请求</button>
    <ul>
      <li v-for="(item,key) in fjld">{{key}}-{{item}}</li>
    </ul>

    <br/>
    <!--点击 执行方法传值-->
    <button @click="chuanzhi('123')">传值</button>
    <button @click="chuanzhi('2222')">传值</button>
    <!--事件对象-->
    <br/>
    <button @click="eventFn($event)">事件对象</button>

  </div>
</template>

<script>
import Todolist from "./Todolist";
import Sildows from "./Sildows";
import Ffzzj from "./Ffzjzj/Ffzzj";
import One from "./Ffzjzj/One";
import GitHome from "./gitcz/GitHome";
import Login from "./loginRoute/Login";


export default {
  components: {
    Login,
    GitHome,
    One,
    Ffzzj,
    Sildows,
    Todolist,
  },
  name: 'HelloWorld',
  methods:{
    huoqu(){
      console.log(this.msg1)
    },
    shuoqu(){
      this.msg1="123"
    },
    getvalue(){
      // alert(1)
      alert(this.$refs.useinfo.value);
      this.$refs.box.style.background='red';
    },
    getmsg(){
      alert(this.msg)
    },
    qingqiu(){
        for(var i =0; i<10; i++){
          this.fjld.push('我是第'+i+"条数据")
        }
    },
    chuanzhi(val){
      alert(val)
    },
    eventFn(e){
      console.log(e);
      e.srcElement.style.background='red';
      console.log(e.srcElement.dataset)  //获取自定义属性的值
    }



  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'就是我',
      msg1:'就是我',
      url:'https://www.itying.com/themes/itying/images/logo.gif',
      h2:'<h1>我是h5</h1>',
      flag:false,
      boxWidth:500,
      fjld:[],
      list:[
        {
          cate:'国内行文',
          list1:[
            { title:'11111111' },
            { title:'22222222' }
          ]
        },
        {
          cate:'国际新闻',
          list1:[
            { title:'33333333' },
            { title:'44444444' }
          ]
        }
      ],
      //循环数据 第一个数据高亮
      liebiao:[
        {
          title:'大 ',
        },
        {
          title:'小'
        },
        {
          title:'大 ',
        },
        {
          title:'小'
        }
       ]

    }
  }
}
</script>
<style  lang="stylus">
  .red
    color #f00
  .blue
    color blue
  .box
    height 100px
    color #f00
    background #0d47a1
</style>
