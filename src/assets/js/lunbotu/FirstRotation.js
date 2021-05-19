window.addEventListener('load',function(){
  var zuojianto = document.querySelector('.a-item');
  var youjianto = document.querySelector('.a-item1');
  var max = document.querySelector('#Rotation');
  var focu = max.offsetWidth;
  //鼠标移入显示
  max.addEventListener('mouseenter',function(){
    zuojianto.style.display = "block";
    youjianto.style.display = "block";

    clearInterval(timer);
    timer = null;
  })

  //鼠标移入隐藏
  max.addEventListener('mouseleave',function(){
    zuojianto.style.display = "none";
    youjianto.style.display = "none";

    timer = setInterval(function(){
      youjianto.click();
    },4000)
  })

  //实现滚动效果
  //获取ul条件
  var ul = max.querySelector('ul');
  //获取ol条件
  var ol = max.querySelector('.crent');
  for(var i=0;i<ul.children.length;i++){
    //然后动态的在ol里面创建一个小li
    var li = this.document.createElement('li');
    //记录当前小圆圈的索引
    li.setAttribute('index',i);
    //然后再把li放进ol里去
    ol.appendChild(li);

    li.addEventListener('click',function(){
      //使用排他思想，让小圆圈改变颜色
      for(var i = 0; i<ol.children.length;i++){
        //干掉所有人,清除所有小li的cent类名
        ol.children[i].className = '';
      }
      //留下我自己
      this.className = 'cent';
      //当我们点击了哪个小li就拿到当前小li的索引号
      var index = this.getAttribute('index');
      console.log(focu);
      //点击小圆圈，移动的不是图片是ul
      animate(ul,-index * focu)
    })
  }
  //把第一个ol设置cent类名
  ol.children[0].className = 'cent';
  //然后我们需要克隆第一组的图片
  var fistr = ul.children[0].cloneNode(true);//true代表深克隆，false代表浅克隆
  //然后在把克隆的图片添加到ul的最后一组去
  ul.appendChild(fistr);

  var num = 0;
  //记录小圆圈的播放
  var cir = 0;

  //节流阀
  var fiag = true;
  //实现右键的点击按钮效果
  youjianto.addEventListener('click',function(){
    //如果图片播放到最后一张了，那么我们就让它快速跳转到第一张
    if(num == ul.children.length - 1){
      ul.style.left = 0;
      num=0;
    }
    num++;
    animate(ul, -num * focu)

    //点击图片的时候我们需要小圆圈和图片的播放成一致，这时候我们就可以声明一个变量来看着
    cir++;
    //如果num == ol.children.length，就说明我们已走到了克隆的最后一张，这时候我们就立马把它在复原
    if(cir == ol.children.length){
      cir = 0;
    }
    paita();
  })

  //实现左键的点击效果
  zuojianto.addEventListener('click',function(){
    if(num == 0){
      num = ul.children.length - 1;
      ul.style.left = -num * focu + 'px';
    }
    num--;
    animate(ul, -num * focu)
    cir--;
    if(cir < 0){
      cir = ol.children.length - 1;
    }
    paita();
  })

//排他思想函数封装
function paita(){
  //清除所有人
  for(var i=0;i<ol.children.length;i++){
    ol.children[i].className = ''
  }
  //留下当前小圆圈的cent类名
  ol.children[cir].className = 'cent'
}

//实现自动轮播功能
var timer = setInterval(function(){
  youjianto.click();  
},4000)

  //animate动画函数
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
})