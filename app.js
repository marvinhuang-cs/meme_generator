document.addEventListener("DOMContentLoaded", function (){
   
    let form = document.getElementById("form");
    form.addEventListener("submit",function(e) {
        e.preventDefault();
        
        const source = document.getElementById("source").value;
        const topLine = document.getElementById("topText").value;
        const bottomLine = document.getElementById("bottomText").value;

        const meme = {source, topLine, bottomLine};

        console.log(meme);
        generateMeme(meme);

        form.reset()

    })

    const memeHolder = document.querySelector("#memeList");

    function generateMeme(meme) {
        const newMeme = document.createElement("div");
        newMeme.setAttribute("class", "memeStyle")
        
        newMeme.innerHTML = `<img src="${meme.source}" class="meme">
        <div class="topLine">${meme.topLine}</div>
        <div class="bottomLine">${meme.bottomLine}</div>
        <div class="delete" id="delete"> <button type="button" class="delete" > Delete </div> `

        memeHolder.prepend(newMeme);
        const deleteButton = document.getElementById("delete");
        deleteButton.addEventListener("click", function(event) {
            event.preventDefault();
            newMeme.remove();
        })
    }
})