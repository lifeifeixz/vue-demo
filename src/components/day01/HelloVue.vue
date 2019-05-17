<template>
  <div id="vue">Hello Vue.js!
    <goodbye :msg="'goodbye!'"></goodbye>
    {{ message }}
    <Loading></Loading>
  </div>
</template>

<script type="text/javascript">
  import goodbye from '@/components/goodbye/goodbye'

  export default { //这里需要将模块引出，可在其他地方使用
    name: "HelloVue",
    data() { //注意：data即使不需要传数据，也必须return,否则会报错
      return {
        message: "啦啦啦啦啦"
      }
    },
    components: {
      goodbye
    }
  }
</script>

<style type="text/css">
  #vue {
    color: green;
    font-size: 28px;
  }
</style>
<!--
---------------------
作者：飞翔在蓝天下的蜂鸟
来源：CSDN
原文：https://blog.csdn.net/qq_33036599/article/details/79656597
版权声明：本文为博主原创文章，转载请附上博文链接！

-->
