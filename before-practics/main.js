const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,sexist,explicit&type=single';

function getJoke(){
    jokeContainer.classList.remove('fade');
    fetch(url).then((res)=> res.json())
    .then((data)=>{
        jokeContainer.textContent = data.setup;
        jokeContainer.classList.add('fade');
    });

}

btn.addEventListener('click',getJoke);

getJoke();