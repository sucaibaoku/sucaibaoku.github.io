var posts=["2024/04/26/IINA/","2024/04/26/VN视频剪辑/","2024/04/25/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };