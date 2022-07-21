const allSong = [
  {
    name: "Chúng Ta Dừng Lại Ở Đây Thôi",
    singer: "Nguyễn Đình Vũ",
    path: "song1",
    image: "./assets/data/image/img1.jpg",
  },
  {
    name: "Cứ Thế Mong Chờ",
    singer: "Nguyễn Đình Vũ",
    path: "song2",
    image: "./assets/data/image/img2.jpg",
  },
  {
    name: "Đi Để Trở Về",
    singer: "Soobin",
    path: "song3",
    image: "./assets/data/image/img3.jpg",
  },
  {
    name: "Đừng Làm Anh Đau",
    singer: "Minh Vương M4U",
    path: "song4",
    image: "./assets/data/image/img4.jpg",
  },
  {
    name: "Em Của Quá Khứ",
    singer: "Nguyễn Đình Vũ",
    path: "song5",
    image: "./assets/data/image/img5.jpg",
  },
  {
    name: "Khi Phải Quên Đi",
    singer: "Phan Mạnh Quỳnh",
    path: "song6",
    image: "./assets/data/image/img6.jpg",
  },
  {
    name: "Không Phải Dạng Vừa Đâu",
    singer: "Sơn Tùng M-T-P",
    path: "song7",
    image: "./assets/data/image/img7.jpg",
  },
  {
    name: "Khuôn Mặt Đáng Thương",
    singer: "Sơn Tùng M-T-P",
    path: "song8",
    image: "./assets/data/image/img8.jpg",
  },
  {
    name: "Kiếp Đỏ Đen",
    singer: "Duy Mạnh",
    path: "song9",
    image: "./assets/data/image/img9.jpg",
  },
  {
    name: "Lạc Trôi Remix",
    singer: "Sơn Tùng M-T-P",
    path: "song10",
    image: "./assets/data/image/img10.jpg",
  },
  {
    name: "Mashup-Nevada - Đi Đi Đi",
    singer: "Daniel-Mastro",
    path: "song11",
    image: "./assets/data/image/img11.jpg",
  },
  {
    name: "Mình Cưới Nhau Đi",
    singer: "Huỳnh James-Pjnboys",
    path: "song12",
    image: "./assets/data/image/img12.jpg",
  },
  {
    name: "Mình Từng Yêu Nhau",
    singer: "Phan Mạnh Quỳnh",
    path: "song13",
    image: "./assets/data/image/img13.jpg",
  },
  {
    name: "Năm Chặt Tay Anh Em Nhé",
    singer: "Lynk Lee",
    path: "song14",
    image: "./assets/data/image/img14.jpg",
  },
  {
    name: "Nắng Ấm Xa Dần",
    singer: "Sơn Tùng M-T-P",
    path: "song15",
    image: "./assets/data/image/img15.jpg",
  },
  {
    name: "Người Yêu Cũ",
    singer: "Phan Mạnh Quỳnh",
    path: "song16",
    image: "./assets/data/image/img16.jpg",
  },
  {
    name: "Nỗi Đau Xót Xa",
    singer: "Minh Vương M4U",
    path: "song17",
    image: "./assets/data/image/img17.jpg",
  },
  {
    name: "Nơi Này Có Anh",
    singer: "Sơn Tùng M-T-P",
    path: "song18",
    image: "./assets/data/image/img18.jpg",
  },
  {
    name: "Quên Người Đã Quá Yêu",
    singer: "Hà Duy Thái",
    path: "song19",
    image: "./assets/data/image/img19.jpg",
  },
  {
    name: "Sự Thật Đã Bỏ Quên",
    singer: "Hà Duy Thái",
    path: "song20",
    image: "./assets/data/image/img20.jpg",
  },
  {
    name: "Tri Kỉ",
    singer: "Phan Mạnh Quỳnh",
    path: "song21",
    image: "./assets/data/image/img21.jpg",
  },
  {
    name: "Về",
    singer: "Phan Mạnh Quỳnh",
    path: "song22",
    image: "./assets/data/image/img22.jpg",
  },
  {
    name: "Vừa Đi Vừa Khóc",
    singer: "Cao Tùng Anh",
    path: "song23",
    image: "./assets/data/image/img23.jpg",
  },
];
const ABUM = [
  {
    name: "Bước Qua Thế Giới",
    singer: "Phan Mạnh Quỳnh",
    path: "song1",
    image: "./assets/data/image-abum/img1.png",
  },
  {
    name: "Tri Kỉ",
    singer: "Phan Mạnh Quỳnh",
    path: "song2",
    image: "./assets/data/image-abum/img2.png",
  },
  {
    name: "Vợ Người Ta",
    singer: "Phan Mạnh Quỳnh",
    path: "song3",
    image: "./assets/data/image-abum/img3.png",
  },
  {
    name: "Làm Sao Giữ",
    singer: "Phan Mạnh Quỳnh",
    path: "song4",
    image: "./assets/data/image-abum/img4.png",
  },
  {
    name: "Khi Người Mình Yêu Khóc",
    singer: "Phan Mạnh Quỳnh",
    path: "song5",
    image: "./assets/data/image-abum/img5.png",
  },
  {
    name: "Gặp Gỡ Yêu Đương Và Được Bên Em",
    singer: "Phan Mạnh Quỳnh",
    path: "song6",
    image: "./assets/data/image-abum/img6.png",
  },
  {
    name: "Anh Sẽ Yêu Người Ấy Hơn Em",
    singer: "Phan Mạnh Quỳnh",
    path: "song7",
    image: "./assets/data/image-abum/img7.png",
  },
];
console.log(ABUM[1]);
const profile = document.querySelector(".profile");
const menuAll = document.querySelectorAll(".menu-item");
const menuProfile = document.querySelector(".menu-item__profile");
const menuExplore = document.querySelector(".menu-item__explore");
const menuChart = menuAll[2];
const menuRadio = menuAll[3];
const menuFollow = menuAll[4];
const menuNewMusic = menuAll[5];
const menuCategory = menuAll[6];
function renderProfile() {
  const template = `
  <div class="profile-wrap">
  <div class="profile-header">
    <ul class="profile-header__list">
      <li class="profile-header__item">
        <a
          class="profile-header__link profile-header__link--update"
          href="#"
          >Nâng cấp VIP</a
        >
      </li>
      <li class="profile-header__item">
        <a
          class="profile-header__link profile-header__link--code"
          href="#"
          >Nhập code VIP</a
        >
      </li>
      <li class="profile-header__item">
        <span class="material-icons"> more_horiz </span>
      </li>
    </ul>
  </div>
  <div class="profile-info">
    <div class="profile-info__wrap">
      <img
        class="profile-info__avatar"
        src="./assets/image/avatar.jpg"
        alt=""
      />
      <h1 class="profile-info__title">Trần Văn Sĩ</h1>
    </div>
    <div class="profile-option">
      <ul class="profile-option__list">
        <li class="profile-option__item active">Tổng quan</li>
        <li class="profile-option__item profile-all-song">
          Bài hát
        </li>
        <li class="profile-option__item">playlist</li>
        <li class="profile-option__item">Podcast</li>
        <li class="profile-option__item">
          <span class="material-icons"> more_horiz </span>
        </li>
      </ul>
    </div>
  </div>
  <div class="profile-action">
    <h3 class="profile-action__title">Bài hát</h3>
    <ul class="profile-action__list">
      <li class="profile-action__item profile-action__item--all-song">
        <span class="profile-action__text">Tất cả</span>
        <span
          class="profile-action__icon material-icons"
          style="font-size: 2rem"
        >
          arrow_forward_ios
        </span>
      </li>
      <li class="profile-action__item">
        <span
          class="profile-action__icon material-icons"
          style="font-size: 2rem"
        >
          file_upload
        </span>
        <span class="profile-action__text">Tải lên</span>
      </li>
      <li class="profile-action__item ">
        <span
          class="profile-action__icon material-icons"
          style="font-size: 2rem"
        >
          play_arrow
        </span>
        <span class="profile-action__text">Download All</span>
      </li>
    </ul>
  </div>

  <div class="tab-all">
    <div class="profile-content">
      <div class="profile-wrapper">
        <div class="profile-sliders">
          <div class="profile-sliders__item first">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
              alt=""
              class="profile-sliders__img"
            />
          </div>
          <div class="profile-sliders__item second">
            <img
              src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
              alt=""
              class="profile-sliders__img"
            />
          </div>

          <div class="profile-sliders__item third">
            <img
              src="https://images.unsplash.com/photo-1561948955-570b270e7c36?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
              alt=""
              class="profile-sliders__img"
            />
          </div>
          <div class="profile-sliders__item fourth">
            <img
              src="https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
              alt=""
              class="profile-sliders__img"
            />
          </div>
          <div class="profile-sliders__item fourth">
            <img
              src="https://media.istockphoto.com/photos/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-picture-id1322123064?b=1&k=20&m=1322123064&s=170667a&w=0&h=pDTOvPELFu0p39A2RT1gDl1Wjo-TtM6g45z-Q4KJ7BM="
              alt=""
              class="profile-sliders__img"
            />
          </div>
        </div>
        <div class="profile-songs">
          <ul class="profile-songs__list"></ul>
        </div>
      </div>
    </div>
    <div class="profile-playlist">
      <div class="profile-playlist__title">
        <h4>Playlist</h4>
        <div class="profile-playlist__all">
          <p>Tất cả</p>
          <span class="material-icons"> arrow_forward_ios </span>
        </div>
      </div>
      <ul class="card-list">
        <li class="card-item add-playlist">
          <span
            class="add-playlist__icon material-icons"
            style="font-size: 9rem"
          >
            add
          </span>
          <p class="add-playlist__text">Tạp playlist mới</p>
        </li>
        <li class="card-item">
          <div class="card-wrap">
            <div class="card-img">
              <img
                src="https://i1.sndcdn.com/artworks-xLeYlCOKZP0XGqsJ-eRi0eQ-t500x500.jpg"
                alt=""
              />
              <div class="overlay">
                <span class="material-icons"> clear </span>
                <span class="material-icons"> play_arrow </span>
                <span class="material-icons"> more_horiz </span>
              </div>
            </div>
          </div>
          <div class="card-info">
            <p class="card-name">Playlist #1</p>
            <p class="card-desc">Tràn Văn Sĩ</p>
          </div>
        </li>
        <li class="card-item">
          <div class="card-wrap">
            <div class="card-img">
              <img
                src="https://i1.sndcdn.com/artworks-xLeYlCOKZP0XGqsJ-eRi0eQ-t500x500.jpg"
                alt=""
              />
              <div class="overlay">
                <span class="material-icons"> clear </span>
                <span class="material-icons"> play_arrow </span>
                <span class="material-icons"> more_horiz </span>
              </div>
            </div>
          </div>
          <div class="card-info">
            <p class="card-name">Playlist #1</p>
            <p class="card-desc">Tràn Văn Sĩ</p>
          </div>
        </li>
        <li class="card-item">
          <div class="card-wrap">
            <div class="card-img">
              <img
                src="https://i1.sndcdn.com/artworks-xLeYlCOKZP0XGqsJ-eRi0eQ-t500x500.jpg"
                alt=""
              />
              <div class="overlay">
                <span class="material-icons"> clear </span>
                <span class="material-icons"> play_arrow </span>
                <span class="material-icons"> more_horiz </span>
              </div>
            </div>
          </div>
          <div class="card-info">
            <p class="card-name">Playlist #1</p>
            <p class="card-desc">Tràn Văn Sĩ</p>
          </div>
        </li>
        <li class="card-item">
          <div class="card-wrap">
            <div class="card-img">
              <img
                src="https://i1.sndcdn.com/artworks-xLeYlCOKZP0XGqsJ-eRi0eQ-t500x500.jpg"
                alt=""
              />
              <div class="overlay">
                <span class="material-icons"> clear </span>
                <span class="material-icons"> play_arrow </span>
                <span class="material-icons"> more_horiz </span>
              </div>
            </div>
          </div>
          <div class="card-info">
            <p class="card-name">Playlist #1</p>
            <p class="card-desc">Tràn Văn Sĩ</p>
          </div>
        </li>
      </ul>
    </div>

    
  `;
  profile.insertAdjacentHTML("beforeend", template);
}

function activeMenu(classActive) {
  menuAll.forEach((item) => {
    item.addEventListener("click", function (e) {
      menuAll.forEach((item) => item.classList.remove(classActive));
      item.classList.add(classActive);
    });
  });
}

activeMenu("active");
//* MENU PROFILE
menuProfile.addEventListener("click", function (e) {
  activeMenu("active");
  const app = document.querySelector(".app");
  app.classList.add("playlist-off");
  app.classList.add("playlist-off-active");
  this.classList.add("active");
  renderProfile();
  const rangeSong = document.querySelector("#range-song");
  const rangeVolume = document.querySelector("#volume");
  const container = document.querySelector(".container");
  const header = document.querySelector(".header");
  const slideImgs = document.querySelectorAll(".profile-sliders__item");
  const songList = document.querySelector(".profile-songs__list");
  const audio = document.querySelector("#audio");
  let imageSong = document.querySelector(".control-song__img img");
  let nameSong = document.querySelector(".control-song__name");
  let singerSong = document.querySelector(".control-song__singer");
  const playPauseBtn = document.querySelector("#play-pause-btn");
  const iconPlayPause = document.querySelector("#icon-play-pause");
  const nextSongBtn = document.querySelector("#next-btn");
  const prevSongBtn = document.querySelector("#prev-btn");
  const optionRepeatBtn = document.querySelector("#play-option");
  const randomBtn = document.querySelector("#random-btn");
  const playOptionIcon = document.querySelector("#play-option-icon");
  const currentTimeText = document.querySelector("#current-time");
  const durationText = document.querySelector("#duration");
  const volumeIcon = document.querySelector("#volume-icon");
  const profileContent = document.querySelector(".profile-content");
  const allTag = document.querySelector(".tab-all");
  const profileSlider = document.querySelector(".profile-sliders");
  const profileWrapSong = document.querySelector(".profile-songs");
  const profileWrapperCard = document.querySelectorAll(".profile-playlist");
  const profilePlayList = profileWrapperCard[0];
  const profileAbum = profileWrapperCard[1];
  const message = document.querySelector(".message");
  const textMassage = document.querySelector(".message-text");
  const iconMessage = document.querySelector(".message-icon");
  const profileTab = document.querySelectorAll(".profile-option__item");
  const profileTabOveview = profileTab[0];
  const profileTabAllMusic = profileTab[1];
  const profileTabPlaylist = profileTab[2];
  const profileAction = document.querySelector(".profile-action");
  const profileWrapper = document.querySelector(".profile-wrapper");

  let currentIndex = 0;
  let imgIndex = 2;
  let isPlaying = false;
  let isRandom = false;
  let volumeOn = true;
  let valueVolume = 1;
  let valueInputVolume = 100;
  let PLAYLIST = JSON.parse(localStorage.getItem("PLAYLIST")) || [];
  let playlistIndex = 0;
  let isPlayNext = false;
  let tempIndex = 0;
  let checkActiveRandom = "";
  //* HANDLE INPUT SLIDE
  function rangeSlider(input) {
    input.addEventListener("input", function (e) {
      let value = input.value;
      input.style.backgroundImage = `linear-gradient(90deg, #ffff ${value}%, #5a5561 0)`;
    });
  }
  rangeSlider(rangeSong);
  rangeSlider(rangeVolume);

  //* STICKY HEADER
  container.onscroll = function () {
    const scrollTop = this.scrollTop;
    if (scrollTop > 0) {
      header.classList.add("is-sticky");
    } else {
      header.classList.remove("is-sticky");
    }
  };

  //* RENDER SONG
  function renderSong(list) {
    list.forEach((song, index) => {
      const template = `
          <li id ="li-song" class="profile-songs__item " data-index = ${index}>
          <div class="profile-songs-left">
          <div class="song-node-music">
          <span class="check_box" "></span>
        
          </div>
            <div class="profile-songs-left__img">
            
              <img
              src="${song.image}"
                alt=""
              />
            
            <div class="img-overlay">
              <div class="animation-play"></div>
            <span class="material-icons animation-pause"style="font-size: 2.8rem">play_arrow</span>
            </div>
            </div>
            <div class="profile-songs-left__info">
              <p class="profile-songs-left__name">
                ${song.name}
              </p>
              <p class="profile-songs-left__singer">
              ${song.singer}
              </p>
            </div>
          </div>
          <div class="profile-songs-right">
            <div class="profile-songs-right__heart">
              <span
                class="profile-songs-right__heart-icon material-icons"
                style="font-size: 2rem"
              >
                favorite
              </span>
            </div>
            <div class="profile-songs-right__option">
              <p class="profile-songs-right__duration" id=${song.path}>04:02</p>
              <span
                class="profile-songs-right__heart-icon profile-songs-right__heart-icon--more material-icons"
                style="font-size: 2rem" data-index = ${index}
              >
                more_horiz
              </span>
            
            </div>
          </div>
          <audio src="./assets/data/music/music-profile/${song.path}.mp3" class="${song.path}"></audio>
          
        </li>
          `;
      songList.insertAdjacentHTML("beforeend", template);

      const audioFake = songList.querySelector(`.${song.path}`);
      const durationList = songList.querySelector(`#${song.path}`);
      audioFake.addEventListener("loadeddata", (e) => {
        const minutes = Math.floor(audioFake.duration / 60);
        const seconds = Math.floor(audioFake.duration % 60);
        durationList.textContent =
          ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
      });
    });
  }
  //* CALL RENDER SONG
  renderSong(allSong);
  const lefIconSong = document.querySelectorAll(".song-node-music");
  const musicNode = document.querySelectorAll(".music_note");
  const checkBoxSquare = document.querySelectorAll(".check_box");
  let liSong = document.querySelectorAll("#li-song");

  //* LOAD CURRENT SONG
  function loadCurrentSong(list, index, pathAudio) {
    imageSong.src = list[index].image;
    nameSong.textContent = list[index].name;
    singerSong.textContent = list[index].singer;
    audio.src = `./assets/data/music/music-${pathAudio}/${list[index].path}.mp3`;
    rangeVolume.style.backgroundImage = `linear-gradient(90deg, #ffff 100%, #5a5561 0)`;
  }
  //* CALL LOAD CURRENT SONG
  loadCurrentSong(allSong, currentIndex, "profile");

  //* HANDLE PLAY SONG, PAUSE SONG
  function handlePlayPause() {
    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  //* CALL PLAY SONG, PAUSE SONG
  playPauseBtn.addEventListener("click", handlePlayPause);

  //* ACTIVE ANIMATION WAVE, PLAY ARROW
  function activeAnimation(
    list1,
    list2,
    checkContains,
    elAdd,
    elRemove,
    index
  ) {
    if (app.classList.contains(checkContains)) {
      const findIndex = list1.findIndex(
        (item) => list2[index].name === item.name
      );
      console.log("FindIndex = ", index);
      if (findIndex !== -1) {
        liSong.forEach((item) => item.classList.remove(elRemove));
        liSong[findIndex].classList.add(elAdd);
      } else {
        liSong.forEach((item) => item.classList.remove(elRemove));
      }
    } else {
      liSong[index].classList.remove(elRemove);
      liSong[index].classList.add(elAdd);
    }
  }

  //* EVENT AUDIO PLAY
  audio.onplay = () => {
    isPlaying = true;
    iconPlayPause.textContent = "pause";
    updateSongTime();
    app.classList.add("check-disable-pl");
    if (app.classList.contains("playlist-on")) {
      activeAnimation(
        allSong,
        PLAYLIST,
        "active-song-list",
        "active-wave-play",
        "active",
        playlistIndex
      );
    } else if (app.classList.contains("playlist-off-active")) {
      activeAnimation(
        PLAYLIST,
        allSong,
        "active-play-list",
        "active-wave-play",
        "active",
        currentIndex
      );
    }
    if (app.classList.contains("active-play-list")) {
      const sliderRotateBtn = document.querySelector(".slider-rotate__btn");
      sliderRotateBtn.lastElementChild.textContent = "Dừng phát";
      sliderRotateBtn.firstElementChild.textContent = "pause";
      const sliderImage = document.querySelector(".slider-rotate img");
      const findIndex = PLAYLIST.findIndex(
        (item) => item.name === allSong[currentIndex].name
      );
      if (findIndex !== -1 && checkActiveRandom !== "click-random-playlist") {
        sliderImage.src = PLAYLIST[findIndex].image;
      }
    }
    app.classList.contains("active-play-list") ? rotateOn() : "";
  };

  //* EVENT AUDIO PAUSE
  let timer = 0;
  audio.onpause = () => {
    isPlaying = false;
    iconPlayPause.textContent = "play_arrow";
    if (app.classList.contains("playlist-on")) {
      activeAnimation(
        allSong,
        PLAYLIST,
        "active-song-list",
        "active",
        "active-wave-play",
        playlistIndex
      );
    } else if (app.classList.contains("playlist-off-active")) {
      activeAnimation(
        PLAYLIST,
        allSong,
        "active-play-list",
        "active",
        "active-wave-play",
        currentIndex
      );
    }
    if (app.classList.contains("active-play-list")) {
      rotateOff();
      timer = setTimeout(run, 500);
      const sliderRotateBtn = document.querySelector(".slider-rotate__btn");
      sliderRotateBtn.lastElementChild.textContent = "Tiếp tục phát";
      sliderRotateBtn.firstElementChild.textContent = "play_arrow";
    }
  };

  //* NEXT SONG

  nextSongBtn.addEventListener("click", () => {
    if (app.classList.contains("playlist-on")) {
      if (isRandom) {
        randomPlayList();
      } else {
        nextPlayList();
      }
    } else if (app.classList.contains("playlist-off")) {
      if (isRandom) {
        randomAllSong();
      } else {
        nextSongList();
      }
    }
  });

  //* HANDLE PLAYLIST
  function nextPlayList() {
    playlistIndex++;
    liSong = document.querySelectorAll("#li-song");
    playlistIndex >= PLAYLIST.length ? (playlistIndex = 0) : "";
    liSong.forEach((item) => {
      item.classList.remove("active");
      item.classList.remove("active-wave-play");
      item.classList.remove("active-play-next");
    });
    if (isPlayNext == true) {
      console.log("Index next play: ", tempIndex);
      playlistIndex = tempIndex;
      loadCurrentSong(PLAYLIST, playlistIndex, "profile");
      isPlayNext = false;
    } else {
      loadCurrentSong(PLAYLIST, playlistIndex, "profile");
    }
    playPauseBtn.click();
    audio.play();
  }

  //* HANDLE SONG LIST
  function nextSongList() {
    currentIndex++;
    currentIndex >= allSong.length ? (currentIndex = 0) : "";
    liSong.forEach((item) => {
      item.classList.remove("active");
      item.classList.remove("active-wave-play");
      item.classList.remove("active-play-next");
    });
    if (isPlayNext == true) {
      currentIndex = tempIndex;
      loadCurrentSong(allSong, currentIndex, "profile");
      isPlayNext = false;
    } else {
      loadCurrentSong(allSong, currentIndex, "profile");
    }
    playPauseBtn.click();
    audio.play();
  }

  //* PREVIOUS SONG
  prevSongBtn.addEventListener("click", () => {
    currentIndex--;
    currentIndex < 0 ? (currentIndex = allSong.length - 1) : "";
    loadCurrentSong(allSong, currentIndex, "profile");
    playPauseBtn.click();
    audio.play();
  });

  //* CLICK OPTION REPEAT
  optionRepeatBtn.addEventListener("click", function () {
    switch (this.title) {
      case "repeat-off":
        this.classList.add("active");
        this.title = "repeat-on";
        break;
      case "repeat-on":
        playOptionIcon.textContent = "repeat_one";
        this.title = "repeat-one";
        break;
      case "repeat-one":
        this.classList.remove("active");
        playOptionIcon.textContent = "repeat";
        this.title = "repeat-off";
        break;
    }
  });

  //* REWIND SONG
  rangeSong.addEventListener("input", (e) => {
    audio.currentTime = (audio.duration / 100) * e.target.value;
  });

  //* LOAD SONG TIME AND DISPLAY
  function loadSongTime() {
    audio.addEventListener("loadeddata", () => {
      const durationMinute = Math.floor(audio.duration / 60);
      const durationSecond = Math.floor(audio.duration % 60);
      durationText.textContent =
        ("0" + durationMinute).slice(-2) +
        ":" +
        ("0" + durationSecond).slice(-2);
    });
  }

  //* UPDATE SONG TIME AND DISPLAY
  function updateSongTime() {
    audio.addEventListener("timeupdate", () => {
      const { duration, currentTime } = audio;
      const currentTimeMinute = Math.floor(currentTime / 60);
      const currentTimeSecond = Math.floor(currentTime % 60);
      currentTimeText.textContent =
        ("0" + currentTimeMinute).slice(-2) +
        ":" +
        ("0" + currentTimeSecond).slice(-2);
      const timePercent = (currentTime / duration) * 100;
      if (duration) {
        const value = rangeSong.value;
        rangeSong.value = timePercent;
        rangeSong.style.backgroundImage = `linear-gradient(90deg, #ffff ${value}%, #5a5561 0)`;
      }
    });
  }
  loadSongTime();

  //* END SONG REPEAT
  audio.addEventListener("ended", () => {
    clearTimeout(timer);
    if (app.classList.contains("playlist-off-active")) {
      if (isRandom) {
        randomAllSong();
        return;
      }
    } else if (app.classList.contains("playlist-on")) {
      if (isRandom) {
        randomPlayList();
        const sliderImage = document.querySelector(".slider-rotate img");
        sliderImage.src = PLAYLIST[playlistIndex].image;
        return;
      }
    }
    switch (optionRepeatBtn.title) {
      case "repeat-off":
        if (currentIndex == allSong.length - 1) {
          return;
        } else {
          nextSongBtn.click();
          break;
        }
      case "repeat-on":
        nextSongBtn.click();
        break;
      case "repeat-one":
        audio.play();
        break;
    }
  });

  //* CLICK ACTIVE RANDOM
  randomBtn.addEventListener("click", () => {
    isRandom = !isRandom;
    randomBtn.classList.toggle("active", isRandom);
  });

  //* HANDLE RANDOM ALL SONG
  function randomAllSong() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * allSong.length);
    } while (currentIndex === newIndex);
    currentIndex = newIndex;
    liSong.forEach((item) => {
      item.classList.remove("active");
      item.classList.remove("active-wave-play");
    });
    loadCurrentSong(allSong, currentIndex, "profile");
    audio.play();
  }

  //* HANDLE RANDOM PLAY LIST
  function randomPlayList() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * PLAYLIST.length);
    } while (playlistIndex === newIndex);
    playlistIndex = newIndex;
    liSong.forEach((item) => {
      item.classList.remove("active");
      item.classList.remove("active-wave-play");
    });
    loadCurrentSong(PLAYLIST, playlistIndex, "profile");
    audio.play();
  }

  // DISPLAY NONE MESSAGE
  iconMessage.onclick = () => {
    message.style.display = "none";
  };
  //* HANDLE ADD SONG PLAYLIST

  const renderOption = document.querySelector(".render-option");
  function handleAddPlaylist() {
    const addPlaylist = document.querySelectorAll(".more-item--playlist");
    addPlaylist.forEach((item) =>
      item.addEventListener("click", (e) => {
        if (item.innerText.indexOf("Thêm vào playlist") !== -1) {
          let index = e.currentTarget.dataset.cr * 1;
          PLAYLIST.push(allSong[index]);
          localStorage.setItem("PLAYLIST", JSON.stringify(PLAYLIST));
          renderOption.innerHTML = "";
          message.classList.add("show");
          const name = allSong[index].name;
          textMassage.innerHTML = `Đã thêm bài hát "
            <strong>${name}</strong>" vào playlist thành công`;
          setTimeout(() => {
            message.classList.remove("show");
          }, 2000);
        }
      })
    );
  }

  //* HANDLE REMOVE PLAY LIST
  function handleRemovePlaylist() {
    const removePlaylist = document.querySelectorAll(".more-item--playlist");
    removePlaylist.forEach((item) =>
      item.addEventListener("click", (e) => {
        if (item.innerText.indexOf("Xóa khỏi playlist") !== -1) {
          let index = e.currentTarget.dataset.cr * 1;
          playlistIndex = index;
          const findIndex = [...PLAYLIST].findIndex(
            (obj) => obj.name === PLAYLIST[playlistIndex].name
          );
          PLAYLIST.splice(findIndex, 1);
          liSong[findIndex].remove();
          localStorage.setItem("PLAYLIST", JSON.stringify(PLAYLIST));
          cardPlayList.forEach((item) => item.click());
          renderOption.innerHTML = "";

          message.classList.add("show");
          const name = allSong[index].name;
          textMassage.innerHTML = `Đã xóa bài hát "
            <strong>${name}</strong>" khỏi playlist thành công`;
          setTimeout(() => {
            message.classList.remove("show");
          }, 2000);
        }
      })
    );
  }
  let checkPlayNextActive = 1;
  function handlePlayNext() {
    const playNext = document.querySelector(".more-item--play-next");
    playNext.addEventListener("click", (e) => {
      isPlayNext = true;
      checkPlayNextActive++;
      let indexPN = e.target.dataset.pn * 1;
      tempIndex = indexPN;
      renderOption.innerHTML = "";
      console.log("CHECK ", checkPlayNextActive);

      liSong.forEach((item) => item.classList.remove("active-play-next"));

      liSong[tempIndex].classList.add("active-play-next");
    });
  }
  //* HANDLE CLICK LI SONG
  function handleClickLiSong(list, index, check) {
    liSong.forEach((item) => {
      item.classList.remove("active");
      item.classList.remove("active-wave-play");
    });

    if (check === "allSong") {
      loadCurrentSong(list, index, "profile");
    }
    playPauseBtn.click();
    audio.play();
  }

  //* HANDLE CLICK MORE DISPLAY OPTION
  function handleClickShowOption(list, index) {
    let template = `
              <div class="more-song">
              <div class="more-head">
                <img src="${list[index].image}" alt="" />
                <div class="more-info">
                  <p class="more-info__title">${list[index].name}</p>
                  <div class="more-view">
                    <div class="more-view__icon">
                      <span class="material-icons"> favorite_border </span>
                      <p>618k</p>
                    </div>
                    <div class="more-view__icon">
                      <span class="material-icons"> headphones </span>
                      <p>618k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="more-action">
                <div class="more-action__item">
                  <span class="material-icons"> file_download </span>
                  <p>Tải xuống</p>
                </div>
                <div class="more-action__item">
                  <span class="material-icons"> file_download </span>
                  <p>Tải xuống</p>
                </div>
                <div class="more-action__item">
                  <span class="material-icons"> file_download </span>
                  <p>Tải xuống</p>
                </div>
              </div>
              <ul class="more-list">
                <li class="more-item">
                  <span class="more-item__icon material-icons"> bookmark_added </span>
  
                  <p class="more-item__title">Thêm vào danh sách phát</p>
                </li>
                <li class="more-item more-item--playlist" data-cr = ${index}>
                  <span class="more-item__icon material-icons"> bookmark_added </span>
  
                  <p class="more-item__title more-item-remove">Thêm vào playlist</p>
                </li>
                <li class="more-item more-item--play-next" data-pn = ${index}>
                  <span class="more-item__icon material-icons"> bookmark_added </span>
  
                  <p class="more-item__title">Phát kế tiếp</p>
                </li>
              </ul>
            </div>
          `;
    renderOption.insertAdjacentHTML("beforeend", template);
    const removePlayList = document.querySelector(".more-item-remove");
    if (app.classList.contains("active-play-list")) {
      removePlayList.textContent = "Xóa khỏi playlist";
    }
    if (renderOption.childElementCount > 1) {
      renderOption.firstElementChild.remove();
    }

    document.addEventListener("click", function (e) {
      if (!e.target.matches(".profile-songs-right__heart-icon--more")) {
        if (!renderOption.contains(e.target)) {
          renderOption.innerHTML = "";
        }
      }
    });
  }

  //* HANDLE CLICK LI SONG
  function clickLiSong(list) {
    liSong = document.querySelectorAll("#li-song");
    [...list].forEach((item) =>
      item.addEventListener("click", (e) => {
        // SONG
        if (!e.target.matches(".profile-songs-right__heart-icon ")) {
          app.classList.add("playlist-off-active");
          let index = Number(e.currentTarget.dataset.index);
          currentIndex = index;
          handleClickLiSong(allSong, currentIndex, "allSong");
        }
        // MORE SONG
        else if (e.target.matches(".profile-songs-right__heart-icon--more")) {
          let index = e.target.dataset.index * 1;
          handleClickShowOption(allSong, index);
          handleAddPlaylist();
          handlePlayNext();
        }
      })
    );
  }
  clickLiSong(liSong);

  //* VOLUME
  rangeVolume.addEventListener("input", (e) => {
    audio.volume = rangeVolume.value / 100;
    valueInputVolume = rangeVolume.value;
    valueVolume = rangeVolume.value / 100;
    if (valueInputVolume <= 0) {
      volumeIcon.textContent = "volume_off";
    } else {
      volumeIcon.textContent = "volume_up";
    }
  });

  //* VOLUME, STYLE INPUT RANGE VOLUME
  volumeIcon.addEventListener("click", () => {
    if (volumeOn) {
      audio.volume = 0;
      rangeVolume.value = 0;
      rangeVolume.style.backgroundImage = "none";
      volumeIcon.textContent = "volume_off";
      volumeOn = false;
    } else {
      audio.volume = valueVolume;
      rangeVolume.value = valueInputVolume;
      rangeVolume.style.backgroundImage = `linear-gradient(90deg, #ffff ${valueInputVolume}%, #5a5561 0)`;
      volumeIcon.textContent = "volume_up";
      volumeOn = true;
    }
  });
  //* AUTO SLIDE TRANSFROM 3D
  let autoSlider3D = null;
  function slider3D() {
    const slideImgFirst = document.querySelector(
      ".profile-sliders__item.first"
    );
    const slideImgSecond = document.querySelector(
      ".profile-sliders__item.second"
    );
    const slideImgThird = document.querySelector(
      ".profile-sliders__item.third"
    );
    const slideImgFourth = document.querySelector(
      ".profile-sliders__item.fourth"
    );
    //* ONLY OVERVIEW NOT PLAY LIST
    if (!app.classList.contains("active-play-list")) {
      slideImgFourth.classList.replace("fourth", "third");
      slideImgThird.classList.replace("third", "second");
      slideImgSecond.classList.replace("second", "first");
      slideImgFirst.classList.replace("first", "fourth");
      imgIndex++;
      if (imgIndex >= slideImgs.length) {
        imgIndex = 0;
      }
    }
  }
  const autoIntervalSlider = setInterval(slider3D, 2000);

  //* TAB OVERVIEW
  profileTabOveview.addEventListener("click", (e) => {
    profileContent.style.height = "auto";
    profileTab.forEach((item) => item.classList.remove("active"));
    profileTab[0].classList.add("active");
    profileSlider.style.display = "flex";
    profileWrapperCard.forEach((item) => (item.style.display = "block"));
    profileAction.style.display = "flex";
    profileWrapper.style.display = "flex";
    profileWrapSong.style.width = `calc(${100}% - ${230}px)`;
    profileWrapSong.style.marginLeft = `${30}px`;
    profileWrapSong.style.height = `${245}px`;
    profileSlider.style.marginLeft = `${58}px`;
    document.querySelector(".profile-playlist__all").style.display = "flex";
    document.querySelector(".profile-action__item--all-song").style.display =
      "flex";
    profileSlider.innerHTML = `
    <div class="profile-sliders__item first">
    <img
      src="https://images.unsplash.com/photo-1647694420044-6e42df6ca610?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      alt=""
      class="profile-sliders__img"
    />
  </div>
  <div class="profile-sliders__item second">
    <img
      src="https://images.unsplash.com/photo-1647634471094-149f3c53bcee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      alt=""
      class="profile-sliders__img"
    />
  </div>
  <div class="profile-sliders__item third">
    <img
      src="https://images.unsplash.com/photo-1647631703107-e1621e2d396e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      alt=""
      class="profile-sliders__img"
    />
  </div>
  <div class="profile-sliders__item fourth">
    <img
      src="https://images.unsplash.com/photo-1647629317650-682da3a8cad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      alt=""
      class="profile-sliders__img"
    />
  </div>
  <div class="profile-sliders__item fourth">
    <img
      src="https://images.unsplash.com/photo-1574156754197-ab77f4c213ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      alt=""
      class="profile-sliders__img"
    />
  </div>
  `;
    setInterval(slider3D, 2000);
    liSong = document.querySelectorAll("#li-song");
    profileSlider.style.width = `${230}px`;
    profileSlider.style.height = `${244}px`;
    profileWrapSong.style.height = `${245}px`;
    headerBackIcon.click();
  });
  //* TAB ALL MUSIC
  profileTabAllMusic.addEventListener("click", (e) => {
    profileContent.style.height = `${540}px`;
    profileTab.forEach((item) => item.classList.remove("active"));
    profileTab[1].classList.add("active");
    profileSlider.style.display = "none";
    profileWrapSong.style.width = `${100}%`;
    profileWrapperCard.forEach((item) => (item.style.display = "none"));
    profileAction.style.display = "flex";
    profileWrapper.style.display = "flex";
    profileWrapSong.style.marginLeft = 0;
    profileWrapSong.style.height = `${500}px`;
    document.querySelector(".profile-action__item--all-song").style.display =
      "none";
  });

  //* TAB PLAYLIST

  profileTabPlaylist.addEventListener("click", (e) => {
    profileContent.style.height = "auto";
    profileTab.forEach((item) => item.classList.remove("active"));
    profileTab[2].classList.add("active");
    profileAction.style.display = "none";
    profileWrapper.style.display = "none";
    profileWrapperCard.forEach((item) => (item.style.display = "block"));
    document.querySelector(".profile-playlist__all").style.display = "none";
  });

  liSong[0].classList.add("active");
  //* ANIMATION WAVE, PLAY ARROW -> CARD(PLAYLIST), BACK
  function activeAnimationCardBack(
    list1,
    list2,
    checkContains,
    elAdd1,
    elAdd2,
    index1,
    index2
  ) {
    if (app.classList.contains(checkContains)) {
      if (!isPlaying) {
        liSong[index1].classList.add(elAdd1);
      } else {
        liSong[index1].classList.add(elAdd2);
      }
    } else {
      const findIndex = list1.findIndex(
        (item) => list2[index2].name === item.name
      );
      if (findIndex != -1) {
        if (!isPlaying) {
          liSong[findIndex].classList.add(elAdd1);
        } else {
          liSong[findIndex].classList.add(elAdd2);
        }
      }
    }
  }

  //* BACK OVERVIEW
  const headerBackIcon = document.querySelector(".header-icon__back");
  headerBackIcon.addEventListener("click", (e) => {
    profileActionRight.style.display = "flex";
    if (profileTabPlaylist.classList.contains("active")) {
      profileTabPlaylist.click();
      profileInfo.style.display = "block";
    } else {
      profileTabOveview.click();
      profileInfo.style.display = "block";
      headerBackIcon.classList.remove("active");
      app.classList.remove("active-play-list");
      profileInfo.style.display = "block";
      app.classList.add("active-song-list");
      songList.innerHTML = "";
      renderSong(allSong);
      profileSlider.innerHTML = `
                    <div class="profile-sliders__item first">
                    <img
                      src="https://images.unsplash.com/photo-1647694420044-6e42df6ca610?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      class="profile-sliders__img"
                    />
                  </div>
                  <div class="profile-sliders__item second">
                    <img
                      src="https://images.unsplash.com/photo-1647634471094-149f3c53bcee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      class="profile-sliders__img"
                    />
                  </div>
                  <div class="profile-sliders__item third">
                    <img
                      src="https://images.unsplash.com/photo-1647631703107-e1621e2d396e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      class="profile-sliders__img"
                    />
                  </div>
                  <div class="profile-sliders__item fourth">
                    <img
                      src="https://images.unsplash.com/photo-1647629317650-682da3a8cad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      class="profile-sliders__img"
                    />
                  </div>
                  <div class="profile-sliders__item fourth">
                    <img
                      src="https://images.unsplash.com/photo-1574156754197-ab77f4c213ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      class="profile-sliders__img"
                    />
                  </div>
                  `;
      liSong = document.querySelectorAll("#li-song");
      profileSlider.style.width = `${230}px`;
      profileSlider.style.height = `${244}px`;
      profileWrapSong.style.height = `${245}px`;
      activeAnimationCardBack(
        allSong,
        PLAYLIST,
        "playlist-off-active",
        "active",
        "active-wave-play",
        currentIndex,
        playlistIndex
      );

      liSong.forEach((item) =>
        item.addEventListener("click", (e) => {
          if (checkActiveRandom === "click-random-playlist") {
            randomBtn.click();
            checkActiveRandom = "";
          }
          if (!e.target.matches(".profile-songs-right__heart-icon")) {
            liSong.forEach((item) => {
              item.classList.remove("active");
              item.classList.remove("active-wave-play");
            });
            app.classList.add("playlist-off-active");
            app.classList.remove("playlist-on");
            let index = Number(e.currentTarget.dataset.index);
            currentIndex = index;

            loadCurrentSong(allSong, currentIndex, "profile");
            audio.play();
          } else if (
            e.target.matches(".profile-songs-right__heart-icon--more")
          ) {
            let index = e.target.dataset.index * 1;
            let template = `
                    <div class="more-song">
                    <div class="more-head">
                      <img src="${allSong[index].image}" alt="" />
                      <div class="more-info">
                        <p class="more-info__title">${allSong[index].name}</p>
                        <div class="more-view">
                          <div class="more-view__icon">
                            <span class="material-icons"> favorite_border </span>
                            <p>618k</p>
                          </div>
                          <div class="more-view__icon">
                            <span class="material-icons"> headphones </span>
                            <p>618k</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="more-action">
                      <div class="more-action__item">
                        <span class="material-icons"> file_download </span>
                        <p>Tải xuống</p>
                      </div>
                      <div class="more-action__item">
                        <span class="material-icons"> file_download </span>
                        <p>Tải xuống</p>
                      </div>
                      <div class="more-action__item">
                        <span class="material-icons"> file_download </span>
                        <p>Tải xuống</p>
                      </div>
                    </div>
                    <ul class="more-list">
                      <li class="more-item">
                        <span class="more-item__icon material-icons"> bookmark_added </span>
                    
                        <p class="more-item__title">Thêm vào danh sách phát</p>
                      </li>
                      <li class="more-item more-item--playlist" data-add = ${index}>
                        <span class="more-item__icon material-icons"> bookmark_added </span>
                    
                        <p class="more-item__title">Thêm vào playlist</p>
                      </li>
                      <li class="more-item more-item--play-next"data-pn=${index}>
                        <span class="more-item__icon material-icons"> bookmark_added </span>
                    
                        <p class="more-item__title">Phát kế tiếp</p>
                      </li>
                    </ul>
                    </div>
                     `;
            renderOption.insertAdjacentHTML("beforeend", template);
            handlePlayNext();

            if (app.classList.contains("playlist-on")) {
              document.querySelector(".more-item--play-next").style.display =
                "none";
            } else {
              handlePlayNext();
            }
          }
          if (renderOption.childElementCount > 1) {
            renderOption.firstElementChild.remove();
          }
          handleAddPlaylist();
        })
      );
    }
  });

  //* CARD PLAYLIST
  const cardPlayList = profilePlayList.querySelectorAll(".card-img");
  const profileInfo = document.querySelector(".profile-info");
  const profileHeaderList = document.querySelector(".profile-header__list");
  const profileWrap = document.querySelector(".profile-wrap");
  const profileActionRight = document.querySelector(".profile-action__list");

  cardPlayList.forEach((item) =>
    item.addEventListener("click", (e) => {
      profileActionRight.style.display = "none";
      profileAction.style.display = "flex";
      profileWrapper.style.display = "flex";
      profileSlider.style.display = "flex";
      headerBackIcon.classList.add("active");
      profileWrapSong.style.width = `calc(${100}% - ${230}px)`;
      profileWrapSong.style.marginLeft = `${30}px`;
      app.classList.add("active-play-list");
      app.classList.remove("active-song-list");
      profileInfo.style.display = "none";
      profileHeaderList.style.display = "none";
      profileWrapperCard.forEach((item) => (item.style.display = "none"));
      profileWrap.style.marginTop = `${30}px`;
      profileSlider.innerHTML = `
        <div class="slider-rotate">
            <img src="https://icons.iconarchive.com/icons/iconsmind/outline/512/CD-icon.png" alt=""></img>
            <div class="slider-rotate__wrap">
              <h4 class="slider-rotate__title">Playlist #22</h4>
              <p class="slider-rotate__create">
                      Tạo bởi 
                  <span>Trần Văn Sĩ</span>
              </p>
              <p class="slider-rotate__public">Công khai</p> 
              <div class="slider-rotate__btn">
                  <span class="material-icons"> play_arrow </span>
                  <p>Phát ngẫu nhiên</p>
              </div>
            </div>
          </div>
        `;
      const sliderImgPlaylist = document.querySelector(".slider-rotate img");

      profileSlider.style.marginLeft = "0";
      profileSlider.style.width = `${308}px`;
      profileSlider.style.height = `${280}px`;
      profileWrapSong.style.height = `${500}px`;
      songList.innerHTML = "";
      renderSong(PLAYLIST);
      const sliderRotateBtn = document.querySelector(".slider-rotate__btn");

      liSong = document.querySelectorAll("#li-song");
      imgRotate = document.querySelector(".slider-rotate img");
      if (app.classList.contains("active-play-list")) {
        const findIndex = PLAYLIST.findIndex(
          (item) => item.name === allSong[currentIndex].name
        );
        if (findIndex !== -1) {
          imgRotate.src = PLAYLIST[findIndex].image;
        } else {
          imgRotate.src =
            "https://icons.iconarchive.com/icons/iconsmind/outline/512/CD-icon.png";
        }
      }
      activeAnimationCardBack(
        PLAYLIST,
        allSong,
        "playlist-on",
        "active",
        "active-wave-play",
        playlistIndex,
        currentIndex
      );

      const findIndex = PLAYLIST.findIndex(
        (item) => allSong[currentIndex].name === item.name
      );
      if (app.classList.contains("check-disable-pl")) {
        findIndex !== -1
          ? (sliderImgPlaylist.src = PLAYLIST[findIndex].image)
          : "";
      }
      nextSongBtn.addEventListener("click", (e) => {
        if (app.classList.contains("playlist-off-active")) {
          const findIndex = PLAYLIST.findIndex(
            (item) => item.name === allSong[currentIndex].name
          );
          if (findIndex === -1) {
            sliderImgPlaylist.src =
              "https://icons.iconarchive.com/icons/iconsmind/outline/512/CD-icon.png";
          }
        } else {
          sliderImgPlaylist.src = PLAYLIST[playlistIndex].image;
        }
      });
      liSong.forEach((item) =>
        item.addEventListener("click", (e) => {
          if (!e.target.matches(".profile-songs-right__heart-icon")) {
            app.classList.remove("check-disable-pl");
            app.classList.remove("playlist-off");
            app.classList.add("playlist-on");
            app.classList.remove("playlist-off-active");
            let index = Number(e.currentTarget.dataset.index);
            playlistIndex = index;
            sliderImgPlaylist.src = PLAYLIST[playlistIndex].image;
            handleClickLiSong(PLAYLIST, playlistIndex, "allSong");
          } else if (
            e.target.matches(".profile-songs-right__heart-icon--more")
          ) {
            const index = e.target.dataset.index * 1;
            handleClickShowOption(PLAYLIST, index);
            handleRemovePlaylist();
            if (app.classList.contains("playlist-off-active")) {
              document.querySelector(".more-item--play-next").style.display =
                "none";
            } else {
              handlePlayNext();
            }
          }
        })
      );
      isPlaying ? rotateOn() : "";
    })
  );

  //* ROTATE ON PLAYLIST
  let imgRotate = document.querySelector(".slider-rotate img");
  function rotateOn() {
    imgRotate.style.borderRadius = `${50}%`;
    imgRotate.style.transition = "all 0.4s";
    imgRotate.classList.add("rotate-on");
    imgRotate.classList.remove("rotate-off");
  }
  //* ROTATE OFF PLAYLIST
  function rotateOff() {
    imgRotate.classList.add("rotate-off");
    imgRotate.classList.remove("rotate-on");
  }
  //* RUN BORDER RADIUS
  function run() {
    imgRotate.style.borderRadius = 0;
  }

  //* SHOW ALL SONG, ALL PLAYLIST => CLICK
  cardPlayList.forEach((item) =>
    item.addEventListener("click", function (e) {
      clearInterval(autoIntervalSlider);
      const sliderPlayBtn = document.querySelector(".slider-rotate__btn");
      const text = sliderPlayBtn.lastElementChild;
      const icon = sliderPlayBtn.firstElementChild;
      if (isPlaying) {
        text.textContent = "Dừng phát";
        icon.textContent = "pause";
      } else if (!isPlaying && checkActiveRandom === "click-random-playlist") {
        text.textContent = "Tiếp tục phát";
        icon.textContent = "play_arrow";
      }
      sliderPlayBtn.addEventListener("click", function (e) {
        app.classList.remove("playlist-off");
        app.classList.add("playlist-on");
        app.classList.remove("playlist-off-active");

        const textsliderPlayBtn = this.lastElementChild;
        const textIconSliderPlayBtn = this.firstElementChild;

        switch (textsliderPlayBtn.textContent) {
          case "Phát ngẫu nhiên":
            checkActiveRandom = "click-random-playlist";
            randomBtn.click();
            randomPlayList();

            textsliderPlayBtn.textContent = "Dừng phát";
            textIconSliderPlayBtn.textContent = "pause";
            console.log("random index = ", playlistIndex);
            const sliderImage =
              sliderPlayBtn.parentElement.parentElement.firstElementChild;
            sliderImage.src = PLAYLIST[playlistIndex].image;
            console.log(sliderImage);
            console.log(liSong[playlistIndex]);
            break;
          case "Tiếp tục phát":
            playPauseBtn.click();
            audio.play();
            textsliderPlayBtn.textContent = "Dừng phát";
            textIconSliderPlayBtn.textContent = "pause";
            break;
          case "Dừng phát":
            playPauseBtn.click();
            audio.pause();
            textsliderPlayBtn.textContent = "Tiếp tục phát";
            textIconSliderPlayBtn.textContent = "play_arrow";
            break;
        }
      });
    })
  );
  const profileShowAllSong = document.querySelector(
    ".profile-action__item--all-song"
  );
  profileShowAllSong.addEventListener("click", (e) => {
    profileTabAllMusic.click();
  });
  const profileShowAllPlaylist = document.querySelector(
    ".profile-playlist__all"
  );
  profileShowAllPlaylist.addEventListener("click", (e) => {
    profileTabPlaylist.click();
  });
});
menuProfile.click();

menuAll.forEach((item) =>
  item.addEventListener("click", function (e) {
    if (!item.classList.contains("menu-item__profile")) {
      const message = document.querySelector(".message");
      const messageText = document.querySelector(".message-text");
      message.classList.add("show");
      messageText.textContent = "Chưa hoàn thiện vui lòng quay lại sau !";
      setTimeout(() => {
        message.classList.remove("show");
      }, 2000);
    }
  })
);

//* CHANGE COLOR THEME

const themeDynamic = [
  {
    //! UI COLOR THEME
    nameTheme: "Xám Tối",
    image: "./assets/data/image-theme/grey-dark.jpg",
    colorBg: "#282828",
    colorBtn: "#7200A1",
    colorCheck: "#7200A1",
    colorBorderImg: "#7200A1",

    //! UI COLOR APP
    colorActive: "#3F3F3F",
    colorMenu: "#292929",
    colorHeader: "#1E1E1E",
    colorContainer: "#1E1E1E",
    colorActiveAction: "#7200A1",
    colorControl: "#181818",
    colorSearchInput: "#353535",
    colorSearchHistory: "282828",
  },
  {
    //! UI COLOR THEME
    nameTheme: "Sáng Tối",
    image: "./assets/data/image-theme/grey-dark.jpg",
    colorBg: "red",
    colorBtn: "red",
    colorCheck: "red",
    colorBorderImg: "red",

    //! UI COLOR APP
    colorActive: "red",
    colorHeader: "#1E1E1E",
    colorMenu: "#292929",
    colorContainer: "1E1E1E",
    colorActiveAction: "red",
    colorControl: "#181818",
    colorSearchInput: "#353535",
    colorSearchHistory: "282828",
  },
];

const themeTheme = [
  {
    nameTheme: "House",
    image:
      "https://images.unsplash.com/photo-1652711061434-0832d53fcbe8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500",
    colorBg: "violet",
    colorBtn: "violet",
    colorScroll: "violet",
  },
];
const themeSingle = [
  {
    nameTheme: "Jack",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuikXyefxHit107VJKq7NiEJHeHf5fqkHP_w&usqp=CAU",
    colorBg: "violet",
    colorBtn: "violet",
    colorScroll: "violet",
  },
];
const themeDark = [
  {
    nameTheme: "Xám đen",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAACWCAMAAACcjiYKAAAAA1BMVEU1NTVxWBw0AAAANklEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODJAHuiAAE4vU0IAAAAAElFTkSuQmCC",
    colorBg: "violet",
    colorBtn: "violet",
    colorScroll: "violet",
  },
];
const themeLight = [
  {
    nameTheme: "Xám đen",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMPEhUSEhMVFRUXGBcVFxcVGBcVFxcYFRgaFxgVFxcYHSggGBolHRUWITEhJSkrLi4uGh8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALUBFgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIH/8QAIBABAAICAgMBAQEAAAAAAAAAAAERIfBh4UGhwbHRcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7aCqUBBBKEoAEUQSSAEVjf0yAKUADIoyCSQBJAkUAgqBQFIAQRQGQiCBFAUpAEJAkQCSIBQUA8cb4UogDCQDxxvhSrIBFAMVv4pRAIgEkgSKAQt2CAUooBC8b+GAClFAIXjfwgDIKAJIEjSAEUQShIARRBJIB+kUQQKAURRkEkqAI0qBJIFAIoCkgQSoDKSAIigKSBA0ASg2gGN9JEBu+1BUAMVwpRAKCgGK4+KVZAKCgGK421KsyA3fSKAY/e1O/FZAIgFCxXGOiLBSirAQsVwRYKUUAhYrggDIKAQiAIKAEEEoSAEUQSSAEUQQRAEUaBAoAlSoCkgUAwKApIFAIoCkqBQCKApKgQIBKCrAY30kQCgoGcVwZVkAoKAYrj4pVkAoKAYrjPalWQG76RQDvtTvxGwC3faICBiuMdNQLBSigELFcEWClFAIWK4IsFKIBIgCkAKSBKEgBFEEkgBFEEkgBBkEkgBCBIoFAMACgQQIoCkgUAgClIAggEoIBb/ErIDd9qCgGK4UqyAUFWAxXHz/AFSrIBQUAxXClWQG76RQDvtTvw2AUooBCxXGOiIkFKKAQsVwYFgpRQCFiuCLBSigEIgCCARBBKEIBGRRBIGABBBJIAQQSSAJEEkgUAgCEQEIigKBBAgCkgQIBJIEQQBhKAHjv6pW7CBKCAXjv6pW7BkAkQHjv6ZCkEkgSSAhIFC8d/VCAyFKBQsVxvkwN2ASRALxv6YG7AKSJICEQBSAFAgkkAshAUECSIJAgCCCQIBIgkkCgEAQUCBAFJAgQBSQBJAUECSQFBAqSQEQkCo0ECSQKiECIQESkBQQJUkCIQJUkBQQFUEBkJAQkD//2Q==",
    colorBg: "violet",
    colorBtn: "violet",
    colorScroll: "violet",
  },
];
const ulDynamic = document.querySelector(".theme-list--dynamic");
const ulTheme = document.querySelector(".theme-list--theme");
const ulSingle = document.querySelector(".theme-list--single");
const ulDark = document.querySelector(".theme-list--dark");
const ulLight = document.querySelector(".theme-list--light");

function renderViewTheme(arr, inner) {
  const htmls = arr.map((item, index) => {
    return `
    <li class="theme-item" data-index=${index}>
    <div class="theme-img">
      <img
        src="${item.image}"
        alt=""
      />
      <span class="material-icons theme-choose__check" style="font-size: 2rem">check</span>

      <div class="theme-img__overlay">
        <span class="theme-choose theme-choose--apply" >Áp dụng</span>
        <span class="theme-choose theme-choose--default" >Xem trước</span>
      </div>
    </div>
    <span class="theme-name">${item.nameTheme}</span>
  </li>
   `;
  });
  inner.innerHTML = htmls.join("");
}
const overlayTheme = document.querySelector(".overlay-theme");
const themeShow = document.querySelector(".theme-show");
const iconTheme = document.querySelector(".header-item--theme");
const theme = document.querySelector(".theme");
const themeContent = document.querySelector(".theme-content");
overlayTheme.onclick = function (e) {
  themeShow.classList.remove("active");
};

iconTheme.addEventListener("click", function (e) {
  themeShow.classList.add("active");
  renderViewTheme(themeDynamic, ulDynamic);
  renderViewTheme(themeTheme, ulTheme);
  renderViewTheme(themeSingle, ulSingle);
  renderViewTheme(themeDark, ulDark);
  renderViewTheme(themeLight, ulLight);

  const button = document.querySelectorAll(".theme-choose");
  const buttonApply = button[0];
  const buttonDefault = button[1];
  ulDynamic.querySelectorAll(".theme-choose").forEach((item) =>
    item.addEventListener("click", function (e) {
      const index =
        e.target.parentElement.parentElement.parentElement.dataset.index;
      if (this.classList.contains("theme-choose--apply")) {
        //* HANDLE
        theme.style.backgroundColor = themeDynamic[index].colorBg;
        ulDynamic.querySelectorAll(".theme-choose").forEach((item) => {
          if (item.classList.contains("theme-choose--apply")) {
            item.style.backgroundColor = themeDynamic[index].colorBtn;
          }
        });
        changeThemeColor(themeDynamic[index]);
      } else {
        console.log("Default");
      }
    })
  );
});
const HEADER = document.querySelector(".header");
const MENU = document.querySelector(".menu");
const CONTAINER = document.querySelector(".container");
const CONTROL = document.querySelector(".control");
const MENUNEWLIST = document.querySelector(".menu-newlist");
const LIMENU = document.querySelectorAll(".menu-item");
const HEADERSEARCHINPUT = document.querySelector(".header-search__input");
const CARDPLAYLIST = document.querySelectorAll(".card-img img");
// HADLE COLOR

function changeThemeColor(colorData) {
  menuAll.forEach(
    (item) =>
      item.classList.contains("active") &&
      (item.style.backgroundColor = colorData.colorActive)
  );
  menuAll.forEach((item) =>
    item.addEventListener("click", function (e) {
      menuAll.forEach((item) => (item.style.backgroundColor = "transparent"));
      if (item.classList.contains("active")) {
        item.style.backgroundColor = colorData.colorActive;
      }
    })
  );

  MENU.style.backgroundColor = colorData.colorMenu;
  MENUNEWLIST.style.backgroundColor = colorData.colorMenu;
  CONTROL.style.backgroundColor = colorData.colorControl;
  HEADER.style.backgroundColor = colorData.colorHeader;
  CONTAINER.style.backgroundImage = "none";
  CONTAINER.style.backgroundColor = colorData.colorContainer;
  HEADERSEARCHINPUT.style.backgroundColor = colorData.colorSearchInput;
}
//! STOP CODE 16/3/2022 -> 20/5/2022
