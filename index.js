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
    let content = document.getElementById('inputContent').value;
    let title = document.getElementById('inputTitle').value;
    const wrapper = document.querySelector('.element-wrapper')
    const collapsibleButtn = document.getElementById('btnText');
    const ul = document.getElementById('list');
    
    
    const li = document.createElement('li');
    const createButtn = document.createElement('button');
    
    wrapper.appendChild(createButtn);
    
    li.appendChild(document.createTextNode(content));
    ul.appendChild(li);
    
    collapsibleButtn.appendChild(document.createTextNode(title));
        
    document.getElementById('inputContent').value = "";
    document.getElementById('inputTitle').value = "";
    
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
// if (content ===''){
//     alert('You must enter content ')
// }else if (title ===''){
//     alert('You must enter title')
// }