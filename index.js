function newItem() {
    
    let content = document.getElementById('inputContent').value;
    let title = document.getElementById('inputTitle').value;
    let benefits = [];

    if (content ==='' || title === ''){
        alert('You must enter content ')
    }else{
        // My elements and it's classes.
        const wrapper = document.querySelector('.element-wrapper')
        const contentDiv = document.createElement('div');
        contentDiv.setAttribute('class', 'contentDiv');
        const div = document.createElement('div');
        div.setAttribute('class', 'container');
        const button = document.createElement('button');
        button.setAttribute('class', 'collapsible');
        const span = document.createElement('span');
        span.setAttribute('class', 'btnText');
        
        // Storing in LocalStorage 
        storeLocal(title, content);
        addToLocalStorage(benefits)

        // Displaying on page
        div.appendChild(button);
        button.appendChild(span);
        span.innerText = title;
        
        wrapper.appendChild(div);
        
        contentDiv.innerText = content;
        div.appendChild(contentDiv);
        
        // Removing the input values after 'enter' key/add button.
        document.getElementById('inputContent').value = "";
        document.getElementById('inputTitle').value = "";
        
        // Collapsible functionality
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

        function storeLocal(title, content){
            const myBenefits = {
                id: Date.now(),
                title: title,
                content: content,

            };
            benefits.push(myBenefits);
            addToLocalSotrage(benefits);
        }    
        console.log(benefits)
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

renderTodos(benefits)

function addToLocalStorage(benefits) {
    localStorage.setItem('benefits', JSON.stringify(benefits));
    renderTodos(benefits);
}
getFromLocalStorage()
toggle(id)
deleteTodo(id)
