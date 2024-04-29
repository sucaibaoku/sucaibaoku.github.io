var posts=["2024/04/26/IINA/","2024/04/25/hello-world/","2024/04/26/VN视频剪辑/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };