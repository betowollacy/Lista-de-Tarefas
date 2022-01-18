function inserir(){

    let input = document.getElementById('input');
    let lista = document.getElementById('ulLista');
    let item = document.createElement('li');
    let btnDel = document.createElement('button');

         //ADICIONA O ITEM A LISTA
         lista.appendChild(item);
         item.innerText = (input.value);
         input.value = ""      
             
         
         
      //ADICIONANDO UM BOTÃO PARA DELETAR OS ITENS
        item.appendChild(btnDel)
        btnDel.appendChild(document.createTextNode("x"))

        btnDel.addEventListener('click',function(){
            lista.removeChild(item)
        })
        
            item.addEventListener('click',function(green){
                item.style.color = 'green'
            })

}
function informe(){
    document.getElementById('informe').innerHTML = "Clique no item para marcar como feito";
}


