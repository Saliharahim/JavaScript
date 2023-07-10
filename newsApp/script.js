fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=091bbf618f2740d0b9c14fe9e8e23e80`).then(res=>res.json()).then(data=>displayNews(data))

function displayNews(data){
    let htmlData=``
    for (let article of data.articles){
        let name=article.title
        let description=article.description
        let image=article.urlToImage
        let publisher=article.publishedAt
        let Content= article.content

        htmlData+=`<div class="col-4  mt-3">
                <div class="card" style="width: 100%;">
                        <img src="${image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${description}</p>
                        <a href="${article.url}" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
            </div>`

    }
    document.querySelector("#result").innerHTML=htmlData
}


var categories=["General","Bussiness","Technology","Entertainment","Health","Science","Sports"]

function displayCategories(categories){
    let data=``
    for (let cat of categories){
        data+=`
        <div>
            <button class="option" onclick="filterNewsByCategories('${cat}')" value="${cat}">${cat}</button>
        </div>`
    }
    document.querySelector("#id_category").innerHTML=data

}


function filterNewsByCategory(Category){
let filteredNewsApi=`https://newsapi.org/v2/top-headlines?country=us&caregory=${category}&apiKey=091bbf618f2740d0b9c14fe9e8e23e80
`

fetch(filteredNewsApi).then(res=>res.json()).then(data=>displayNews(data))
  }