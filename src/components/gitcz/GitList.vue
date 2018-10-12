<template>
    <div class="gitList">
      <p>{{msg}}</p>

      <mt-button @click.native="sheetVisible = true" size="large">选择用户头像</mt-button>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    </div>
</template>

<script>
    import GitNuws from "./GitNuws";
    export default {
        name: "gitList",
      components: {GitNuws},
      data(){
          return{
            msg:"我是一个列表组件",
            sheetVisible: false,
            actions: [],
          }
      },
      methods: {
        takePhoto() {
          console.log('taking photo');
        },
        openAlbum() {
          console.log('opening album');
        },
        goBack() {
          history.go(-1);
        }
      },

      mounted() {
        this.actions = [{
          name: '拍照',
          method: this.takePhoto
        }, {
          name: '从相册中选择',
          method: this.openAlbum
        }, {
          name: '返回上一步',
          method: this.goBack
          }];
      }
    }
</script>

<style scoped>

</style>
