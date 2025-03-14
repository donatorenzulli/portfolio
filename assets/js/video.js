document.addEventListener("DOMContentLoaded", function () {
    let videos = document.querySelectorAll("video.hp-proj-video");
  
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.2 }
    );
  
    videos.forEach((video) => observer.observe(video));
  });
  