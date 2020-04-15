<template lang="pug">
    el-container.container
        el-header  header
        el-aside(width="200px") side
        el-main 
            router-view    
</template>

<script lang="ts">
// 满屏落花效果
import { Component, Vue } from "vue-property-decorator";
import { IArticle } from "../types/index";
import { Dialog, Form, FormItem, Input, Button, Message } from "element-ui";

@Component({
  components: {
    Dialog,
    Form,
    FormItem,
    Input,
    Button
  }
})
export default class AdminLayout extends Vue {
  private formLabelWidth: string = "60px";
  private params: Partial<IArticle> = {
    title: "",
    description: "",
    body: ""
  };

  private handleOk(): void {
    const { title, description, body } = this.params;
    if (!title || !description || !body) {
      Message.warning(" 不能为空！");
      return;
    }
    this.submit();
  }

  private async submit(): Promise<void> {
    const data: IArticle = await this.$https.post(
      this.$urls.postArticle,
      this.params
    );
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  .el-main {
    background-color: #e9eef3;
    color: #333;
  }
  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
}
</style>
