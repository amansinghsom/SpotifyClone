
const Card = (data) => {
    const Songs=data.map((current)=>{
        return `
        <div class="card">
        <img  src="${current.img}" alt="${current.id}" />
        <h2>${current.name}</h2>
        <h4>${current.Author}</h4>
        <audio class="audio_class" src="${current.src}" ></audio>

    </div>

        `
    })
    return `
    <div class="card_container">
        <div class="card_inner">
        ${
            Songs.toString()
        }
    
    </div>
    </div>

    `
}


export default Card;
