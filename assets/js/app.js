// Topbar JS Start
const mouseOver = () => {
    const logo = document.getElementById('logo');
    logo.innerText = 'Disorder Eradication learning System';
}

const mouseOut = () => {
    const logo = document.getElementById('logo');
    logo.innerText = 'DELS';
}

const showContent = (id) => {
    const contentValue = document.getElementById(id);
    const watchBox = document.getElementById('watchBox');
    const loginBox = document.getElementById('loginBox');

    if(contentValue == watchBox){
        watchBox.classList.remove('d-none');
        loginBox.classList.add('d-none');
    }if(contentValue == loginBox){
        loginBox.classList.remove('d-none');
        watchBox.classList.add('d-none');
    }

}
// //Topbar JS End

// All Videos JS Start
const showVideoList = () => {
    const videoListContainer = document.getElementById('allVideos');
    videoListContainer.classList.add('allVideosStyle');

    const showBtn = document.getElementById('show');
    showBtn.classList.add('d-none');

    const hideBtn = document.getElementById('hide');
    hideBtn.classList.remove('d-none');
}

const hideVideoList = () => {
    const videoListContainer = document.getElementById('allVideos');
    videoListContainer.classList.remove('allVideosStyle');

    const showBtn = document.getElementById('show');
    showBtn.classList.remove('d-none');
    
    const hideBtn = document.getElementById('hide');
    hideBtn.classList.add('d-none');
}
// //All Videos JS End

// watch Video JS Start
const displayBlock = (id) => {
    const getId = document.getElementById(id);
    const d_c = document.getElementById('d_c');
    const playlist = document.getElementById('playlist');
    const quiz = document.getElementById('quizBox');

    const d_c_Btn = document.getElementById('d_c_Btn');
    const playlistBtn = document.getElementById('playlistBtn');
    const quizBtn = document.getElementById('quizBtn');

    if(getId == d_c) {
        d_c.classList.remove('d-none');
        playlist.classList.add('d-none');
        quiz.classList.add('d-none');

        d_c_Btn.classList.add('active');
        playlistBtn.classList.remove('active');
        quizBtn.classList.remove('active');
    }
    if(getId == playlist){
        playlist.classList.remove('d-none');
        d_c.classList.add('d-none');
        quizBox.classList.add('d-none');

        playlistBtn.classList.add('active');
        d_c_Btn.classList.remove('active');
        quizBoxBtn.classList.remove('active');
    }
    if(getId == quiz){
        quiz.classList.remove('d-none');
        d_c.classList.add('d-none');
        playlist.classList.add('d-none');

        quizBtn.classList.add('active');
        d_c_Btn.classList.remove('active');
        playlistBtn.classList.remove('active');
    }
}
// //watch Video JS End

// SignUp Login show JS Start
const signUpLogin = (id) => {
    const ls_Value = document.getElementById(id);
    const signUpBox = document.getElementById('signUpBox');
    const loginBox = document.getElementById('loginBox');


    if(ls_Value == signUpBox){
        signUpBox.classList.remove('d-none');
        loginBox.classList.add('d-none');
    }
    if(ls_Value == loginBox){
        loginBox.classList.remove('d-none');
        signUpBox.classList.add('d-none');
    }
}
// //SignUp Login show JS End
