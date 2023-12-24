window.onload = function() {
	setTimeout(()=>{
		let $loading = document.querySelector('#loading');
		$loading.classList.add('loading--hidden');

		setTimeout(()=>{
			$loading.remove();
			init();
		},500);
	}, 100);
};

function init() {
  const $movies = document.querySelector(".movies");
  const $movieAction = document.querySelectorAll(".movie__action");
  const $movieClose = document.querySelectorAll(".close__movie");
  let isOpen = false;
  
  function resetMovie() {
    let $openMovie = document.querySelector(".open");
    if ($openMovie !== null) {
      $openMovie.classList.add("hidden");
      $openMovie.classList.remove("open");
      setTimeout(() => {
        $openMovie.classList.remove("hidden");
      }, 450);
    }
  }
  
  $movieAction.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (!isOpen || !e.target.parentElement.classList.contains("open")) {
        resetMovie();
  
        if (!$movies.classList.contains("active")) {
          $movies.classList.add("active");
        }
  
        element.parentElement.classList.add("open");
        isOpen = true;
      }
    });
  });
  
  $movieClose.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
      resetMovie();
      $movies.classList.remove("active");
      isOpen = false;
    });
  });
  
  //document.getElementById("myVideo").src = "mov_bbb.ogg";
  
  /*VIDEO*/
  const $videoPlay = document.querySelectorAll(".view__video");
  const $video = document.getElementById("video");
  const $closeVideo = document.getElementById("close-video");
  
  $closeVideo.addEventListener("click", (e) => {
    closeVideo(e.target.parentElement.querySelector("video"));
  });
  
  $videoPlay.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.dataset.video) {
        console.log(e.target.dataset.video);
        openVideo(e.target.dataset.video, e.target.dataset.poster);
      } else {
        console.dir(e.target.parentElement.dataset.video);
        openVideo(
          e.target.parentElement.dataset.video,
          e.target.parentElement.dataset.poster
        );
      }
    });
  });
  
  function openVideo(video, poster) {
    $video.src = `./static/video/${video}`;
    $video.play();
  
    const $videoContainer = document.querySelector(".video__container");
    $videoContainer.classList.add("show_video");
  
    $movies.classList.add("show_video");
    setTimeout(() => {
      $videoContainer.classList.add("play");
      $movies.classList.add("play");
    }, 500);
  }
  
  function closeVideo(video) {
    const $videoContainer = document.querySelector(".video__container");
    video.pause();
    video.currentTime = 0;
    $videoContainer.classList.remove("show_video");
    $movies.classList.remove("show_video");
    setTimeout(() => {
      $videoContainer.classList.remove("play");
      $movies.classList.remove("play");
    }, 500);
  }
  
  const $videos = document.querySelectorAll("video");
  
  $videos.forEach((video) => {
    video.addEventListener("ended", () => {
      closeVideo(video);
    });
  });
}

