console.log("Welcome to News website");

// https://newsapi.org/v2/top-headlines?country=in&apiKey=20fc699e07f2403ea94d6f448821300d
/*let country = 'in';
let apikey = '20fc699e07f2403ea94d6f448821300d'
let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=20fc699e07f2403ea94d6f448821300d', 'true');
xhr.getResponseHeader('content-type', 'application/json');
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles); 
        let newsHtml="";
        articles.forEach(function(element, index){
            // console.log(element, index);  
            let news = `<p>
            <button class="btn  mt-3" style="background-color:#C0C0C0; color: #000000" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample${index} " aria-expanded="false" aria-controls="collapseExample${index}"><span style="color:#000033"><b>Breaking News ${index+1}: </b></span>
                        ${element['title']}
                    </button>
                    </p>
                    <div class="collapse mb-2 mt-0" id="collapseExample${index}">
                    <div class="card card-body">${element["description"]}<a href=${element["url"]} target="_blank">Read more here </a>
                    </div>
                    </div>`;
                    newsHtml += news;        
                });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("some error occured");
    }
}
xhr.send();*/
let apikey = '20fc699e07f2403ea94d6f448821300d';


function getData() {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=20fc699e07f2403ea94d6f448821300d').then((response)=>{
        return response.text();
    }).then((data)=>{
            let json = JSON.parse(data);
            let articles = json.articles;
            // console.log(data);
            console.log(articles); 
            let newsHtml="";
            articles.forEach(function(element, index){
                // console.log(element, index);  
                let news = `<p>
                <button class="btn  mt-3" style="background-color:#C0C0C0; color: #000000" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseExample${index} " aria-expanded="false" aria-controls="collapseExample${index}"><span style="color:#000033"><b>Breaking News ${index+1}: </b></span>
                            ${element['title']}
                        </button>
                        </p>
                        <div class="collapse mb-2 mt-0" id="collapseExample${index}">
                        <div class="card card-body">${element["description"]}<a href=${element["url"]} target="_blank">Read more here </a>
                        </div>
                        </div>`;
                        newsHtml += news;        
                    });
            newsAccordion.innerHTML = newsHtml;
    })
}

getData();

