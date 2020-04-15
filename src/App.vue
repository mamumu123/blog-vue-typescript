<template lang="pug">
    .layout
        router-view
        ArrowUp
</template>
<script lang="ts">
import { Vue, Watch } from "vue-property-decorator";
import Component from "vue-class-component";
import { Route } from "vue-router";
import ArrowUp from "@/components/arrowUp.vue"; // @ is an alias to /src
import { isMobileOrPc } from "@/utils/utils";

@Component({
  components: {
    ArrowUp
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
@import url("./less/index.less");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width: 1200px;
  margin: 0 auto;
  padding-top: 61px;
}
.layout {
  height: 100%;
  width: 100%;
}
</style>
