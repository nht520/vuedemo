<template>
    <div id="Content">
      <h2>{{list.title}}</h2>
      <div v-html="list.content">

      </div>
    </div>
</template>

<script>
    export default {
        name: "Content",
      components: {

      },
      data(){
          return{
            msg:'我是详情',
            list:[],
          }
        },
        mounted(){
          // console.log(this.$route.params)
        //  获取git传值
        //   console.log(this.$route.query);
          var aid=this.$route.params.aid;
          //调用this方法
          this.requestData(aid);
          console.log(aid)
        },
        methods:{
            requestData(aid){
              var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
              this.$http.get(api).then((res)=>{
                  console.log(res);
                  this.list=res.body.result[0];
                }).catch(err=>{
                console.log(err)
              })
            }
        }
    }
</script>

<style scoped>

</style>
