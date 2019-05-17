/**
 作者：lifanyu123
 来源：CSDN
 原文：https://blog.csdn.net/lifanyu123/article/details/80804056
 版权声明：本文为博主原创文章，转载请附上博文链接！
 */
export default {
  install: function (Vue, options) {
    Vue.prototype.AUTHINFO = '';
    Vue.prototype.refactorData = function (mes) {

      return mes + " (system make this message)";
    }
  }
}
