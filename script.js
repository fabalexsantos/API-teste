const ul = document.getElementById('houses');
const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let houses = data;
  return houses.map(function(house) {
    let div = document.createElement("div");
    div.innerHTML = `
    <figure>
      <img src="${house.photo}" alt="Smiley face" height="200" width="200">
    </figure>
    <div class="text">
    <h1 class="name">${house.name}</h1>
    <h2 class="type">${house.property_type}</h2>
    <p class="price"> Preço: ${house.price} reais</p>
    </div>
    `;
    div.classList.add("card");
    document.getElementById("list").appendChild(div);

  })
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});   
