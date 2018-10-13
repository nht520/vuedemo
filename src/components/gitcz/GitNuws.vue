<template>
    <div id="gitNuws">
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
            // list:['111','222','3333'],
            list:[]
          }
        },
        methods:{
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
          console.log(restData.length);
          if(restData.length>0){
            this.rest=restData;
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
