<template lang="pug">
    .home 这里可以整一堆花活
        h1 我想到的有 吃东西的小老鼠、龙族的话（好玩的东西，暴露出来）
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
