<template lang="pug">
    .home 
        h1 正在搭建中
        router-link.link(to="/home")
            img(src='../assets/logo.png')

</template>

<script lang="ts">
// 满屏落花效果
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class EntryLayout extends Vue {}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.link {
  display: inline-block;
  padding: 20px;
  color: #409eff;
  min-width: 80px;
}
.link:hover {
  color: rgb(155, 35, 35);
}
</style>
