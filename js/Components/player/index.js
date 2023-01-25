const Player = ()=>{
    return `
    <div class="player_container">
    <div class="player_inner">
        <img src="./images/index2.jpeg"  alt="">
        <div class="player_inner_details">
                <span></span>
                <span></span>
        </div>

        <div class="controler">
            <span class="material-symbols-outlined">
            skip_previous
            </span>
          
            <span class="material-symbols-outlined">
            pause
            </span>
            <span class="material-symbols-outlined">
            skip_next
            </span>

        </div>
        <div class="music_con">
            <div class="counter">0:00</div>
            <div class="prograss">
                <div class="progress_bar">
                </div>
            </div>
            <div class="counter">0:00</div>


        </div>
    </div>

</div>
    `
}


export default Player;