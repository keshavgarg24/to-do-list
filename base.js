const todolist = [];
rendertodolist();

function rendertodolist(){
    let todolistHtml = '';

    for( let i =0; i<todolist.length; i++){
        const tempObject = todolist[i];
        const name = tempObject.name;
        const duedate = tempObject.duedate;
        const html =
         `<div>${name}</div>
         <div>${duedate}</div>
        <button onclick =" todolist.splice(${i},1);
            rendertodolist();
            " 
           class="button2" > Delete </button>
        `;
        todolistHtml += html ;
    }
    console.log(todolistHtml);
    document.querySelector('.js-list').innerHTML = todolistHtml;

}

function todo(){
    const input = document.querySelector('.js-input');
    const name = input.value ;
    const date = document.querySelector('.js-duedate');
    const duedate = date.value;
    todolist.push({
        name : name ,
        duedate : duedate} );

    console.log(todolist);
    input.value = '';
    rendertodolist();}







/*const todolist2 = [];
rendertodolist2();

function rendertodolist2(){
    let todolistHtml2 = '';

    for( let i =0; i<todolist2.length; i++){
        const temp2 = todolist2[i];
        const html = `<p>${temp2}</p>`;
        todolistHtml2 += html ;
    }
    console.log(todolistHtml2);
    document.querySelector('.js-list2').innerHTML = todolistHtml2;

}


function todo2(){
    const input2 = document.querySelector('.js-input2');
    const name2 = input2.value ;
    todolist2.push(name2);

    console.log(todolist2);
    input2.value = '';
    rendertodolist2();

}*/