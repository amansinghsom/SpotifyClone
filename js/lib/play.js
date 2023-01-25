
function Play(index,currentIndexValue,Music_player) {
    if (currentIndexValue == -1) {
        currentIndexValue = index;

        Music_player[index].volume = .2;
        Music_player[index].play();
        // Music_player[index].classList.add('back')
        console.log(Music_player[index].parentNode.classList);
        Music_player[index].parentNode.classList.add('back');


    } else {
        //   background: rgba(28, 28, 38, 0.7);
        Music_player[currentIndexValue].parentNode.classList.remove('back');

        console.log(Music_player[index]);

        Music_player[currentIndexValue].pause();
        Music_player[currentIndexValue].currentTime = 0; //set music current time value 0;

        Music_player[index].play();
        Music_player[index].volume = .2;
        Music_player[index].parentNode.classList.add('back');
        console.log(Music_player[index]);

        currentIndexValue = index;



    }
    return Number(currentIndexValue);
}

export default Play;