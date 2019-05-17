import LoadingComponent from './Loading.vue';

const Loading = {
  install: function (Vue) {
    Vue.component('Loading', LoadingComponent)
  }
}
export default Loading

// index.js导出组件，里面需要install
