function animate(obj, target, chenc) {
  //解决方案：让我们元素只能有一个定时器执行
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
      //把步长值写到定时器里面
      var step = (target - obj.offsetLeft) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (obj.offsetLeft == target) {
          //停止动画
          clearInterval(obj.timer);
          if (chenc) {
              chenc();
          }
      }
      obj.style.left = obj.offsetLeft + step + 'px';
  }, 15);
}