var posts=["2024/04/25/hello-world/","2024/04/25/安装成功hexo博客/","2024/04/26/第一篇文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };