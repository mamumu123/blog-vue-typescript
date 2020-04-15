<template lang="pug">
    el-container.container
        el-header 
            home-header
        el-main 
            router-view       
        Footer.el-footer
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form, FormItem, Input, Button } from "element-ui";
import Footer from "@/components/footer.vue"; // @ is an alias to /src
import HomeHeader from "@/components/HomeHeader.vue";

@Component({
  components: {
    Form,
    FormItem,
    Input,
    Button,
    Footer,
    HomeHeader
  }
})
export default class HomeLayout extends Vue {}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 85% !important;
}
.el-footer {
  text-align: center;
  font-weight: bold;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>
