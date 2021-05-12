<template>
  <div>
    <div class="mb-10">
      <div class="mb-10">
        promise缓存
      </div>
      方案一本身是不足的。因为如果考虑同时两个以上的调用此 api，会因为请求未返回而进行第二次请求api。当然，如果你在系统中添加类似于 vuex、redux这样的单一数据源框架，这样的问题不太会遇到，但是有时候我们想在各个复杂组件分别调用api，而不想对组件进行组件通信数据时候，便会遇到此场景。
    </div>
    <button
      class="p-6"
      @click="getCache"
    >获取缓存数据</button>
  </div>
</template>

<script>
import { getList2 } from "@/api/list2.api";

export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    getCache() {
      getList2().then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
