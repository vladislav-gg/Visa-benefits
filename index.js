let col = document.getElementsByClassName('collapsible');
let i;
 

for (i=0; i<col.length; i++){
    col[i].addEventListener('click', function(){
        let content = this.nextElementSibling; 
        if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
        }
    });
}


    

function newItem() {
    console.log('Inside newItem');
    let item = document.getElementById('inputContent').value;
    console.log (item);


    const ul = document.getElementById('list');

    const li = document.createElement('li');

    li.appendChild(document.createTextNode('-' + item));

    ul.appendChild(li);

    document.getElementById('inputContent').value = "";

    li.onclick=removeItem;
};

document.body.onkeyup = function(e){
    if (e.key == 'Enter'){
        console.log ('enter clicked')
        newItem();
    }
};


function removeItem (e){
    e.target.remove()
}