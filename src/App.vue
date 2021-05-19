<template>
  <div id="app">
    <div id="step">
      <span class="span-item1">半杯都是料，料到好味道</span>
      <span class="span-item2">茶棠夜色加盟热线：15576538925</span>
    </div>
    <div id="top">
      <div id="home">
        <router-link to="/home">首页</router-link>|
        <router-link to="/about">关于我们</router-link>|
        <router-link to="/products">产品展示</router-link>|
        <router-link to="/store">店铺展示</router-link>
      </div>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "assets/css/base.css";
</style>
