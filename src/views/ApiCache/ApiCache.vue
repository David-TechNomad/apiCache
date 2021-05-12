<template>
  <div id="apiCache">
    <div class="header">
      接口缓存方法
    </div>
    <div id="nav">
      <router-link
        v-for="router in tabList"
        :key="router.id"
        tag="span"
        :to="router.id"
        :class="{active: activeId === router.id}"
      >
        {{router.name}}
      </router-link>
    </div>
    <div class="content">
      <components :is="activeId"></components>
    </div>
  </div>
</template>

<script>
import one from "./methodList/one";
import two from "./methodList/two";
import three from "./methodList/three";

export default {
  name: "ApiCache",
  data() {
    return {
      tabList: [
        {
          id: "one",
          name: "方法一"
        },
        {
          id: "two",
          name: "方法二"
        },
        {
          id: "three",
          name: "方法三"
        }
      ]
    };
  },
  computed: {
    activeId() {
      return this.$route.params.id;
    }
  },
  components: {
    one,
    two,
    three
  }
};
</script>

<style lang="scss" scoped>
#apiCache {
  padding: 30px;
  .header {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  #nav {
    padding: 10px 0;
    > span {
      cursor: pointer;
      color: #595959;
      padding: 4px 14px;
      &.active {
        color: #25b864;
        border-bottom: 1px solid #25b864;
      }
    }
  }

  .content {
    padding: 10px 0;
  }
}
</style>
