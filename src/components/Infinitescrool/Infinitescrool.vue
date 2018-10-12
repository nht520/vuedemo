<template>
  <div id="Infinitescrool">
    <p>1</p>
    <ul
      class="list"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li v-for="item in list" class="page-infinite-listitem">{{ item.title }}</li>
    </ul>
    <p v-show="show" class="page-infinite-loading">
      <mt-spinner type="fading-circle"></mt-spinner>
      加载中...
    </p>
  </div>
</template>
<style>
  .list li{
    height: 3.5rem;
  }
  .page-infinite-loading {
    text-align: center;
    background: #f00;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
</style>

<script type="text/babel">
  export default {
    name:'Infinitescrool',
    data() {
      return {
        show:true,
        loading:false,
        list:[],
        page:1,
        text:''
      }
    },
    methods: {
      loadMore() {
        this.requestDate();
      },
      requestDate(){
          this.loading=true; //请求数据的开关
          var api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page="+this.page;
          this.$http.get(api).then((res)=>{
              console.log(res.body.result.length)
              this.list =this.list.concat(res.body.result);
              ++this.page;
              if(res.body.result.length<20){
                this.loading=true; //true 请求终止
                // this.text="已经没有数据了哦"
                this.show=false;
              }else{
                this.loading=false;//false 继续请求
              }
          },(err)=>{
              console.log(err);
          })
      }
    },
  };
</script>
