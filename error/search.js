document.addEventListener("submit", (event) => {
    event.preventDefault();

});

function searchImg() {

    let request = document.getElementById("request").value;


    fetch('https://api.giphy.com/v1/gifs/search?api_key=FBnhPhFJgyY5BXCbRZUilVtKTun23z0N&q=' + request + '&limit=5&offset=0&rating=g&lang=en')

        .then(response => response.json())
        .then(search => {
            console.log(search)

            let parent = document.getElementById("content");
            parent.innerHTML = "";

            for (item of search.data) {
                let title = document.createElement('h2');
                title.innerHTML += item.title;
                let img = document.createElement('img');
                img.src = item.images.original.url;

                parent.append(title, img);
            }
        })
    // .catch(err => console.log(err));

    try {
        searchImg();
    } catch (error) {
        if (navigator.onLine) {
            console.log('online');
          } else {
            alert("нет подключения к Интернету");
          }
    }
}