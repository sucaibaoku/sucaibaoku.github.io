var posts=["2024/04/26/第一篇文章/","2024/04/25/hello-world/","2024/04/25/安装成功hexo博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };