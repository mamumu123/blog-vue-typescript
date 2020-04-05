<template lang="pug">
    .admin 
        Form
            FormItem(label="标题" placeholder="title" :label-width="formLabelWidth")
                Input(v-model="params.title" autocomplete="off")
            FormItem(label="描述" placeholder="description" :label-width="formLabelWidth")
                Input(v-model="params.description" autocomplete="off")
            FormItem(label="内容" placeholder="body" :label-width="formLabelWidth")
                Input(v-model="params.body" autocomplete="off" type='area')
            
            
            Button(type="primary" @click="handleOk") 确 定

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
export default class Home extends Vue {
  private formLabelWidth: string = "60px";
  private params: IArticle = {
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
