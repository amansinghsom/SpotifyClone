//Music Pause code 
function Pause() {
    if (currentIndexValue) {
        Music_player[currentIndexValue].pause();
    }
}


export default Pause