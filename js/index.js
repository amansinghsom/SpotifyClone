import NavBar from "./Components/Navbar.js";
import Card from "./Components/Card.js";
import Json from "./Components/MusicData.js";
import Player from "./Components/player/index.js";
import Play from "./lib/play.js";
import Pause from "./lib/pause.js";

const Navbar = document.querySelector('.root')
Navbar.innerHTML = NavBar();
Navbar.insertAdjacentHTML("afterend", Card(Json()));
Navbar.insertAdjacentHTML("afterend", Player());
const cardImg = document.querySelectorAll('.card img')
const player_container = document.querySelector('.player_container')
const prograss = document.querySelector('.prograss')
const PlayerImg = document.querySelector('.player_inner img');
const player_inner_details = document.querySelector('.player_inner_details');
const MusicCon = document.querySelector('.music_con ');
const Music_player = document.querySelectorAll('.audio_class')
const Second_span = document.querySelector('.controler span:nth-of-type(2)');
const Next = document.querySelector('.controler span:nth-of-type(3)');
const Prev = document.querySelector('.controler span:nth-of-type(1)');


Second_span.style.backgroundColor = "#1ed760"
var currentIndexValue = -1;
var isPlay = true;
var lengthOfData = Json().length;

//Controler Wrapper 
function ControlerWrapper() {
    const data = Json().filter(current => current.id == currentIndexValue)
    PlayerImg.src = data[0]?.img
    Second_span.textContent = 'pause'
    player_inner_details.children[0].innerText = data[0]?.name
    player_inner_details.children[1].innerText = data[0]?.Author
    Music_player[currentIndexValue].addEventListener('timeupdate', (event) => {
        const { currentTime, duration } = event.srcElement;
        const min_Duration = Math.floor(duration / 60)
        const sec_Duration = Math.floor(duration % 60);
        const min_currentTime = Math.floor(currentTime / 60)
        const sec_currentTime = Math.floor(currentTime % 60);
        //set time 
        MusicCon.children[2].innerText = `${min_Duration}:${sec_Duration < 10 ? 0 : ""}${sec_Duration}`
        MusicCon.children[0].innerText = `${min_currentTime}:${sec_currentTime < 10 ? 0 : ""}${sec_currentTime}`
        //increase prograss bar 
        MusicCon.children[1].children[0].style.width = `${((Music_player[currentIndexValue].currentTime / Music_player[currentIndexValue].duration) * 100).toFixed(1)}%`
        if (currentTime == duration) {
            NextSongCaller();

        }

    })

}
//error
cardImg.forEach((event) => {
    event.addEventListener('click', (event) => {
        const index = event.target.alt
        player_container.style.display = 'block'


        currentIndexValue = Play(index, currentIndexValue, Music_player);

        ControlerWrapper();
        PlayerImg.classList.add('anime')
        Music_player?.[currentIndexValue].addEventListener('ended', () => {
            PlayerImg.classList.remove('anime')

        })

    })
})

Second_span.addEventListener('click', () => {
    if (isPlay) {
        Second_span.textContent = 'play_arrow'
        isPlay = false;
        PlayerImg.classList.remove('anime')
        currentIndexValue !== -1 && Music_player[currentIndexValue].pause();

    } else {

        PlayerImg.classList.add('anime')
        Second_span.textContent = 'pause'
        currentIndexValue !== -1 && Music_player[currentIndexValue].play();
        isPlay = true;

    }
})

//progreass bar 

prograss.addEventListener('click', (event) => {
    Music_player[currentIndexValue].currentTime = (event.offsetX / event.srcElement.clientWidth) * Music_player[currentIndexValue].duration

})

//Controler
function NextSongCaller() {
    Music_player[currentIndexValue].parentNode.classList.remove('back');

    Music_player[currentIndexValue].currentTime = 0;
    Music_player[currentIndexValue].pause();

    currentIndexValue = (currentIndexValue + 1) % lengthOfData;
    ControlerWrapper();
    Music_player[currentIndexValue].parentNode.classList.add('back');
    Music_player[currentIndexValue].play();
    Music_player[currentIndexValue].volume = .2;
}

function PrevSongCaller() {
    Music_player[currentIndexValue].parentNode.classList.remove('back');

    Music_player[currentIndexValue].currentTime = 0;
    Music_player[currentIndexValue].pause();

    currentIndexValue = (currentIndexValue - 1 + lengthOfData) % lengthOfData;
    Music_player[currentIndexValue].parentNode.classList.add('back');

    ControlerWrapper();
    Music_player[currentIndexValue].play();
    Music_player[currentIndexValue].volume = .2;
}

Next.addEventListener('click', NextSongCaller)
Prev.addEventListener('click', PrevSongCaller)

