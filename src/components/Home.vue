<template>
  <div id="max">
    <div id="img">
      <img src="../assets/img/bg1.jpg" alt="" />
    </div>
    <div id="Hot-Commodity">
      <p>热门产品展示—<span>PRODUCT DISPLAY</span></p>
      <img src="../assets/img/1.png" alt="" />
    </div>
    <!-- 轮播图 -->
    <div id="Rotation">
      <div class="a-item">
        <a href="javascript:;" class="zuo"
          ><img src="../assets/img/jianto/jianto.svg" alt=""
        /></a>
      </div>
      <div class="a-item1">
        <a href="javascript:;" class="you"
          ><img src="../assets/img/jianto/jianto.svg" alt=""
        /></a>
      </div>
      <ul>
        <li>
          <a href="#"><img src="../assets/img/1.1.jpg" alt="" /></a>
          <a href="#"><img src="../assets/img/1.2.jpg" alt="" /></a>
          <a href="#"><img src="../assets/img/1.3.jpg" alt="" /></a>
        </li>
        <li>
          <a href="#"><img src="../assets/img/1.4.jpg" alt="" /></a>
          <a href="#"><img src="../assets/img/1.5.jpg" alt="" /></a>
          <a href="#"><img src="../assets/img/1.6.jpeg" alt="" /></a>
        </li>
      </ul>
      <ol class="crent">
      </ol>
    </div>
  </div>
</template>

<script>
// 引入js文件
import  "../assets/js/lunbotu/FirstRotation";
export default {
  name: "Home"
};
</script>

<style>
@import "../assets/css/Home/home.css";
</style>
