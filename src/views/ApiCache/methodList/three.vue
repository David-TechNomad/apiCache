<template>
  <div>
    <div class="mb-10">
      <div class="mb-10">添加时间有关的缓存</div>
      <div>
        往往缓存是有危害的，如果我们在知道修改了数据的情况下，直接把 cache 删除即可，此时我们调用方法就可以向服务器进行请求。这样我们规避了前端显示旧的的数据。但是我们可能一段时间没有对数据进行操作，那么此时旧的数据就一直存在，那么我们最好规定个时间来去除数据。
      </div>
    </div>
    <button
      class="p-6"
      @click="getCache"
    >获取缓存数据</button>
  </div>
</template>

<script>
import { getList2 } from "@/api/list3.api";

export default {
  data() {
    return {};
  },
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
