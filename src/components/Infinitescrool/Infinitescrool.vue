<template>
  <div id="Infinitescrool">
    <mt-loadmore :top-method="loadTop"   ref="loadmore" >
      <ul
        ref="loadmore"
        class="list"
        :top-method="loadTop"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <li v-for="(item,aid) in list">
            <router-link :to="'/Content/'+item.aid">
              {{item.title}}
            </router-link>
        </li>
      </ul>
      <p v-show="show" class="page-infinite-loading">
        <img src="../../assets/Spinner.svg"/>
        加载中...
      </p>
      <p v-text="text"></p>
    </mt-loadmore>
  </div>
</template>

<style>
.list li {
  height: 3.5rem;
}
.page-infinite-loading {
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
</style>

<script type="text/babel">
export default {
  name: "Infinitescrool",
  data() {
    return {
      show: true,
      loading: false,
      list: [],
      text:'',
      page: 1
    };
  },
  methods: {
    //触发 store
    loadTop: function() {
      //组件提供的下拉触发方法
      //下拉刷新
      this.requestDate();
      //反转数据：
      this.list.reverse();
      this.$refs.loadmore.onTopLoaded(); // 固定方法，查询完要调用一次，用于重新定位
    },
    loadMore() {
      this.requestDate();
    },
    requestDate() {
      this.loading = true; //请求数据的开关
      var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=" + this.page;
      this.$http.get(api).then(res => {
          console.log(res.body.result.length);
          this.list = this.list.concat(res.body.result);
          ++this.page;
          if (res.body.result.length < 20) {
            this.loading = true; //true 请求终止
            this.text="已经没有数据了哦";
            this.show = false;
          } else {
            this.loading = false; //false 继续请求
            this.show = true;
          }
        }, err => {
          console.log(err);
        }
      );
    }
  },
  mounted(){

  }
};
</script>
