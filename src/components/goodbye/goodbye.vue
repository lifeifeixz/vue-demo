<template>
  <div class="goodbye">
    {{msg}}
  </div>
</template>
<script>
  export default {
    props: {
      msg: {
        type: String
      }
    }
  }
</script>
<style>
  .goodbye {
    width: 100px;
    height: 100px;
    background: #F3C9CE;
    text-align: center;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    margin: 0 auto;
    line-height: 100px;
  }
</style>
