<template>
    <div id="gitNuws">
      <p>{{msg}}</p>
      <p>{{this.$store.state.cont}}</p>
      <button @click="contlist()">
        减
      </button>
      <ul>
        <li v-for="(item,aid) in list">
          <router-link :to="'/Content/'+item.aid">
            {{item.title}}
          </router-link>
        </li>
      </ul>
      <!--git传值-->
      <!--<ul>-->
        <!--<li v-for="(item,aid) in list">-->
          <!--<router-link :to="'/Content?aid='+item.aid">-->
            <!--{{item.title}}-->
          <!--</router-link>-->
        <!--</li>-->
      <!--</ul>-->
    </div>
</template>
<script>
    export default {
        name: "gitNuws",
        data(){
          return{
            msg:"我是一个新闻列表组件",
            // list:['111','222','3333'],
            list:[]
          }
        },
        methods:{
          contlist(){
            this.$store.commit('contlist1');
          },
          requestData(){
             var api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
             this.$http.get(api)
               .then((res)=>{
                  console.log(res)
                  this.list=res.body.result;
                  this.$store.commit('restList',res.body.result);
               }).catch(err =>{
                  console.log(err)
             })
          }
        },
        mounted(){
          this.requestData();
          //判断 store里面有没有数据 如果没有就请求
          var restData=this.$store.state.list;
          if(restData.length>0){
            this.list=restData;
          }else{
            this.requestData();
          }
        }
    }
</script>

<style scoped>
  ul li{
    list-style: none;
  }
</style>
