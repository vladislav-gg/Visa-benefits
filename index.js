
function newItem() {
    // li.onclick=removeItem;
    
    let content = document.getElementById('inputContent').value;
    let title = document.getElementById('inputTitle').value;
    if (content ==='' || title === ''){
        alert('You must enter content ')
    }else{
        const wrapper = document.querySelector('.element-wrapper')
        const contentDiv = document.createElement('div');
        contentDiv.setAttribute('class', 'contentDiv');
        
        const div = document.createElement('div');
        div.setAttribute('class', 'container');
        
        const button = document.createElement('button');
        button.setAttribute('class', 'collapsible');
        
        const span = document.createElement('span');
        span.setAttribute('class', 'btnText');
        
        // span.createTextNode(title)
        localStorage.setItem('benefits', div);
        localStorage.getItem(div)
        
        div.appendChild(button);
        button.appendChild(span);
        span.innerText = title;
        
        console.log(wrapper);
        wrapper.appendChild(div);
        
        contentDiv.innerText=content;
        div.appendChild(contentDiv);
        // span.appendChild(document.createTextNode(title));
        
        document.getElementById('inputContent').value = "";
        document.getElementById('inputTitle').value = "";
        
        
        
        let col = document.getElementsByClassName('collapsible');
        let i;
         for (i=0; i<col.length; i++){
           col[i].addEventListener('click', function(){
               let content = this.nextSibling; 
               if (content.style.display === "block") {
                   content.style.display = "none";
                 } else {
                   content.style.display = "block";
               }
           });
        }



    }
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


// Editor for textarea
CKEDITOR.replace( 'editor1' );


// Adding localStorage 

function addToLocalStorage(div) {
    localStorage.setItem('benefits', div);
    // render them to screen
    renderTodos(div);
  }

// get value from localStorage 

function getFromLocalStorage() {
    return localStorage.getItem('benefits');
}