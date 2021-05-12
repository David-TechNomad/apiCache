<template>
  <div>
    <div class="mb-10">
      简单的 数据 缓存，第一次请求时候获取数据，之后便使用数据，不再请求后端api
    </div>
    <button
      class="p-6"
      @click="getCache"
    >获取缓存数据</button>
  </div>
</template>

<script>
import { getList2 } from "@/api/list1.api";

export default {
  data() {
    return {
      dataCache: new Map()
    };
  },
  methods: {
    async getCache() {
      const result = await getList2();

      console.log(result);
    }
  }
};
</script>

<style scoped lang="scss"></style>
