var cardContainer=document.getElementById('card-container');

for(var i=0;i<=10;i++){
    var cardDiv=document.createElement('div');

    cardDiv.className='col-md-4';

    cardDiv.innerHTML=`
        <div class="card mb-4">
          <img src="picsum.photos/300/200?random=${i}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `
    cardContainer.appendChild(cardDiv);
}