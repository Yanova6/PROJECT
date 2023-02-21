const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");


const apiKey ="n6j+yt+N9tR5VMZ2vmMQhg==vLJj12l7eXUdVzHW";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

 async function getJoke() {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading..."
    const response = await fetch(apiUrl, options);
    const data =  await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE"

   jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click",getJoke)