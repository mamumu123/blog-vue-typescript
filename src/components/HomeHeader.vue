<template lang="pug">
    .header 
        el-col(:span="16")
            el-menu(:router="true"
              :default-active="activeIndex"
              active-text-color="#409eff"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect")
                el-menuItem(:route="l.path"
                    :index="l.index"
                    v-for="l in list"
                    :key="l.index") {{ l.name }}
        el-button(@click="handleLogin"  type='primary') 登录
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { NavListItem } from "@/types/index";

@Component
export default class Footer extends Vue {
  private list: Array<NavListItem> = [
    {
      index: "1",
      path: "/",
      name: "首页"
    },
    {
      index: "2",
      path: "/home",
      name: "文章"
    },
    {
      index: "3",
      path: "/home",
      name: "归档"
    },
    {
      index: "4",
      path: "/home",
      name: "项目"
    },
    {
      index: "5",
      path: "/home",
      name: "历程"
    },
    {
      index: "6",
      path: "/home",
      name: "留言"
    },
    {
      index: "7",
      path: "/home",
      name: "关于"
    }
  ];
  private activeIndex: string = "0";

  private handleSelect(val: string, oldVal: string): void {
    // console.log("val :", val);
    // console.log("oldVal :", oldVal);
    this.activeIndex = val;
  }
  handleLogin() {
    this.$router.push({ name: "login" });
  }
}
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
