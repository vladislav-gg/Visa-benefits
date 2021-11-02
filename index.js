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
    // const wrapper = document.getElementsByClassName('element-wrapper')
    // const collapsibleButtn = document.getElementsByClassName('btnText');
    // const ul = document.getElementsByClassName('list');
    // const collapsible = document.getElementsByClassName('collapsible');
    // let titleText = document.createTextNode(content)
    // let contentText = document.createTextNode(title);

    const div = document.createElement('div')
    div.setAttribute('class', 'container');

    const button = document.createElement('button');
    button.setAttribute('class', 'collapsible');

    const span = document.createElement('span');
    span.setAttribute('id', 'btnText');

    
    div.appendChild(button);
    button.appendChild(span);
    span.appendChild(document.createTextNode(title));


    
    // create new task div



    document.getElementById('inputContent').value = "";
    document.getElementById('inputTitle').value = "";
    
    // li.onclick=removeItem;
    
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