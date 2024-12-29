
var weblink = window.location.href
if (weblink == 'https://www.bilibili.com/'){
   var selector1 = document.querySelector('#i_cecream').querySelector('.bili-feed4').querySelector('.bili-feed4-layout').querySelector('.feed2').querySelector('.recommended-container_floor-aside').querySelector('.container.is-version8').querySelectorAll('.container.is-version8>.feed-card')
   var selector2 = document.querySelector('#i_cecream').querySelector('.bili-feed4').querySelector('.bili-feed4-layout').querySelector('.feed2').querySelector('.recommended-container_floor-aside').querySelector('.container.is-version8').querySelectorAll('.container.is-version8>.bili-video-card.is-rcmd.enable-no-interest')
   var selector = [...selector1, ...selector2]
   var dizhi = []
   var finalAddress = []
   for (let name of selector) {
   dizhi.push(`${name.querySelectorAll('a')[0]}`)
   }
   for (let item of dizhi){
       let str = `${item}`
       if(str.includes('video')){
           finalAddress.push(item)
       }
   }
   function processArrayValue(value) {
       window.open(value)
   }
   var currentIndex = 0
   //设置定时器来等待异步加载完成    
   let intervalId = setInterval(() => {
       if (currentIndex < finalAddress.length) {
           processArrayValue(finalAddress[currentIndex]);
           currentIndex++;
       } else {
           clearInterval(intervalId);
           window.location.reload();

       }
    //    设置时间 这里是每一分钟打开一个视屏页面
   }, 10000);
}else if(weblink.includes('video')){
   setInterval(function(){
       if(document.querySelector('#commentapp').getElementsByTagName('bili-comments')[0].shadowRoot.querySelector('#header').getElementsByTagName('bili-comments-header-renderer')[0].shadowRoot.querySelector('#commentbox').getElementsByTagName('bili-comment-box')[0].shadowRoot.querySelector('#body').querySelector('#editor').getElementsByTagName('bili-comment-rich-textarea')[0].shadowRoot.querySelector('#input').querySelector('.brt-root').querySelector('.brt-editor')){
           var inputEvent = new Event('input', {
               bubbles: true, // 设置事件冒泡
               cancelable: true // 设置事件可以取消
             });
            // 这里输入你想要的评论
             document.querySelector('#commentapp').getElementsByTagName('bili-comments')[0].shadowRoot.querySelector('#header').getElementsByTagName('bili-comments-header-renderer')[0].shadowRoot.querySelector('#commentbox').getElementsByTagName('bili-comment-box')[0].shadowRoot.querySelector('#body').querySelector('#editor').getElementsByTagName('bili-comment-rich-textarea')[0].shadowRoot.querySelector('#input').querySelector('.brt-root').querySelector('.brt-editor').innerHTML = '哈哈哈哈哈'
             document.querySelector('#commentapp').getElementsByTagName('bili-comments')[0].shadowRoot.querySelector('#header').getElementsByTagName('bili-comments-header-renderer')[0].shadowRoot.querySelector('#commentbox').getElementsByTagName('bili-comment-box')[0].shadowRoot.querySelector('#body').querySelector('#editor').getElementsByTagName('bili-comment-rich-textarea')[0].shadowRoot.querySelector('#input').querySelector('.brt-root').querySelector('.brt-editor').dispatchEvent(inputEvent);
             document.querySelector('#commentapp').getElementsByTagName('bili-comments')[0].shadowRoot.querySelector('#header').getElementsByTagName('bili-comments-header-renderer')[0].shadowRoot.querySelector('#commentbox').getElementsByTagName('bili-comment-box')[0].shadowRoot.querySelector('#footer').querySelector('#pub').getElementsByTagName('button')[0].click();

           window.close()
       }
    //    设置循环执行的代码来等待异步加载的评论区完成，这里是1秒钟
   },1000);

}