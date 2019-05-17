<template>
  <div class="loading_box">{{msg}}
    <button @click="mesBox">弹出框</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'Loading…'
      }
    },
    methods: {
      mesBox(){
        this.$msgBox.showMsgBox({
          title: '添加分类',
          content: '请填写分类名称',
          isShowInput: true
        }).then(async (val) => {
          console.log(val);
        }).catch(() => {
          // ...
        });
      }
    }
  }
</script>
<style scoped>
  .loading_box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    color: royalblue;
  }
</style>
