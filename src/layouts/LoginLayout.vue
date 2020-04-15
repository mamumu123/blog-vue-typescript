<template lang="pug">
    .login 
        Form
            FormItem(label="用户名" placeholder="username" :label-width="formLabelWidth")
                Input(v-model="params.username" autocomplete="off")
            FormItem(label="密码" :label-width="formLabelWidth")
                Input(type="password",placeholder="密码",v-model="params.password",autocomplete="off")
            Button(type="primary" @click="handleOk") 确 定
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { Dialog, Form, FormItem, Input, Button, Message } from "element-ui";
import config from "@/utils/config";
import { LoginParams, UserInfo } from "@/types/index";

@Component({
  components: {
    Dialog,
    Form,
    FormItem,
    Input,
    Button
  }
})
export default class LoginLayout extends Vue {
  // initial data
  //   private btnLoading: boolean = false;
  //   private loading: boolean = false;
  private formLabelWidth: string = "60px";
  private params: LoginParams = {
    username: "",
    password: ""
  };

  private handleOk(): void {
    if (!this.params.username) {
      Message.warning("name不能为空！");
      return;
    } else if (!this.params.password) {
      Message.warning("密码不能为空");
      return;
    }
    this.submit();
  }

  private async submit(): Promise<void> {
    const data: UserInfo = await this.$https.post(
      this.$urls.login,
      this.params
    );

    localStorage.setItem("authorization", `Bearer ${data.token!}`);
    Message.success("登录成功");
    this.$router.push({ path: "/admin" });
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
