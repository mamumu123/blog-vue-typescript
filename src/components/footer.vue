<template>
  <div class="footer">十八的个人空间 ©2020 Created by mamumu</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
<style scoped>
.footer {
  text-align: center;
  font-weight: bold;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
}
</style>
