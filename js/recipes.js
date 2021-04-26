const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const recipe_wrap = document.getElementById('recipe_wrap');
let wrap = document.getElementById('recipe_wrap');
let recipeContent = document.getElementById('recipe_content');


btn1.addEventListener('click', loadDatos);

function loadDatos(){
    const ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'js/recipes.json', true);
    ourRequest.send();
    ourRequest.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            // console.log(this.responseText);
            let dados = JSON.parse(this.responseText);
            // console.log(dados);
            let newDados = dados.slice(0,10);
            wrap.innerHTML = '';
            for(let item of newDados) {
                // console.log(item.Name);
                wrap.innerHTML += `
                <div id="recipe_content"> 
                    <div class="content_text">
                        <h2 class="Name">${item.Name}</h2>
                        <h3 class="url"><a href="${item.url}">${item.url}</a></h3>
                        <h3 class="Description">Description: <br> ${item.Description}</p></h3>
                        <h3 class="Author">Author: ${item.Author}</h3>
                    </div>
                    <div class="content_img">
                        <img src="img/foto.jpg" alt="">
                    </div>
                </div>
                <div class="recipe_method">
                <div class="ingredients-wrap"> 
                    <h3>Ingredients:</h3>                   
                    <ul class="ingredients">
                        <li>${item.Ingredients}<li>
                    </ul>    
                </div>
                <div class="method-wrap">
                    <h3>Method:</h3>
                    <ul class="method">
                        <li>${item.Method}</li>
                    </ul>
                </div>
            </div>  
                `
            }
        }
    };
};

