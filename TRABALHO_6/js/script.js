const produtos = [
  {
    id: 1,
    nome: "Pizza de tomate",
    img: "pizza1.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit magnam, similique repudiandae laboriosam vel iste harum beatae, fugiat quidem",
    preco: 35.90
  },
  {
    id: 2,
    nome: "Hamburguer de guisado",
    img: "burger1.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit magnam, similique repudiandae laboriosam vel iste harum beatae, fugiat quidem",
    preco: 10.00
  },
  {
    id: 3,
    nome: "Cachorro quente",
    img: "hotdog2.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit magnam, similique repudiandae laboriosam vel iste harum beatae, fugiat quidem",
    preco: 6.50
  },
  {
    id: 4,
    nome: "Batata frita",
    img: "batata-frita.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit magnam, similique repudiandae laboriosam vel iste harum beatae, fugiat quidem",
    preco: 9.90
  },
  {
    id: 5,
    nome: "Batata frita + Hamburguer",
    img: "batata-frita-com-sanduiche.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit magnam, similique repudiandae laboriosam vel iste harum beatae, fugiat quidem",
    preco: 15.90
  },
  {
    id: 6,
    nome: "Hamburguer de frango",
    img: "burguer2.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit magnam, similique repudiandae laboriosam vel iste harum beatae, fugiat quidem",
    preco: 12.00
  },
  {
    id: 7,
    nome: "Pizza calabresa",
    img: "pizza2.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit magnam, similique repudiandae laboriosam vel iste harum beatae, fugiat quidem",
    preco: 32.90
  },
  {
    id: 8,
    nome: "Pizza de frango",
    img: "pizza3.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit magnam, similique repudiandae laboriosam vel iste harum beatae, fugiat quidem",
    preco: 37.90
  },
  {
    id: 9,
    nome: "Pão com carne",
    img: "sandwiches.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit magnam, similique repudiandae laboriosam vel iste harum beatae, fugiat quidem",
    preco: 8.80
  },
  {
    id: 10,
    nome: "Sorvete de chocolate",
    img: "sorvete.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit magnam, similique repudiandae laboriosam vel iste harum beatae, fugiat quidem",
    preco: 11.78
  },
  {
    id: 11,
    nome: "Pizza de queijo",
    img: "pizza4.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit magnam, similique repudiandae laboriosam vel iste harum beatae, fugiat quidem",
    preco: 35.00
  },
  {
    id: 12,
    nome: "Pastel",
    img: "pastel.jpg",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit magnam, similique repudiandae laboriosam vel iste harum beatae, fugiat quidem",
    preco: 5.00
  },
]

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector('a').innerHTML = "<div></div><div></div><div></div>";
    } else {
        menu.classList.add("active");
        toggle.querySelector('a').innerHTML = "<i class='close'></i>";//adiciona no html elemento para fechar o menu
    }
    //se quando clicar estiver com a classe active significa que o menu está aberto, estão será fechado
    //se não tiver, a classe active será adicionada e os items do menu vão aparecer
}
 
// Event Listener de click no elemento com classe toggle
toggle.addEventListener("click", toggleMenu, false);



const items = document.querySelectorAll(".item");
 
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    //se caso o dropdown tiver aberto ele é fechado
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    //fecha todos os outros dropdowns caso estejam abertos
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    //se o dropdown tiver fechado ele é aberto adionando uma classe com display block
    this.classList.add("submenu-active");
  }
}
 
/* quando um elemento com classe .item for clicado dispara um evento e chama a função toggleItem */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}


/* verifica se há um submenu aberto na tela e, se sim, 
também verifica se o usuário clicou dentro dele com a ajuda da propriedade target. 
Se o usuário clicou em qualquer outro lugar da tela e tiver um submenu aberto, 
a classe .submenu-active será tirada e o submenu sera fechado */
function closeSubmenu(event) {
  if (menu.querySelector(".submenu-active")) {
    let cliqueDentroDoSubMenu = menu.querySelector(".submenu-active").contains(event.target);

    if (!cliqueDentroDoSubMenu && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
}
 
//ouvinte para fechar o dropdown quando ele tiver aberto
//e houver um click em qualquer parte da tela
document.addEventListener("click", closeSubmenu, false);


/*lista os produtos quando a pagina e carregada */
const listarProdutos = function() {
  //div pai. onde serão exibidos os produtos
  const containerProdutos = document.querySelector("#row-produtos")

  let rows = [] //total de linhas, ideia e que cada row tenha no maximo 3 produtos

  for(let i=0;i<produtos.length;i+=3){
    rows.push(produtos.slice(i,i+3))
  }
  //O primeiro parâmetro do slice é a posição inclusive na qual os elementos serão considerados. 
  //O segundo é a posição final (não inclusiva).
    
  //na 1a iteracao i=0 o slice pega os indices 0,1,2
  //na 2a iteracao i=3 o slice pega os indices 3,4,5 e assim por diante
  //então rows será um array com 4 posicoes com cada indice contendo 3 arrays dentro, pois são 12 produtos
  //ex:[ [ [prod1],[prod2],[prod3] ], [ [prod4],[prod5],[prod6] ] ... ], essa logica foi feita para usar o grid corretamente

  for(let i=0;i<rows.length;i++){
    //serão 4 iterações pois rows tem 4 posicoes, e em cada iteração é criado uma div row
    const row = document.createElement('div')
    row.setAttribute('class','row produtos')

    for(let j=0;j<rows[i].length;j++){
      //em cada iteração de row, será criada 3 cols com os produtos
      const colProdutos = document.createElement('div')
      colProdutos.setAttribute('id',`produto-${rows[i][j].id}`)
      colProdutos.setAttribute('class', 'col-produtos')

      colProdutos.innerHTML = `
        <div class='card'>
          <img src='./imagens/${rows[i][j].img}' alt=${rows[i][j].nome}>
          <div class='card-body'>
            <h2>${rows[i][j].nome}</h2>
            <span class='preco'>R$ ${rows[i][j].preco.toFixed(2)}</span>
            <p>${rows[i][j].descricao}</p>
            <a href='./secoes/pedido.html?id=${rows[i][j].id}'>FAZER PEDIDO</a>
          </div>
        </div>`
      
      row.appendChild(colProdutos)//adiociona na row a col produto
    }
    containerProdutos.appendChild(row) //adiociona no elemento pai a row com os 3 produtos
  }

  // produtos.forEach(produto => {
  //   const colProdutos = document.createElement('div')
  //   colProdutos.setAttribute('id',`produto-${produto.id}`)
  //   colProdutos.setAttribute('class', 'col-produtos')

  //   colProdutos.innerHTML = `
  //       <div class='card'>
  //         <img src=${produto.img} alt=${produto.nome}>
  //         <div class='card-body'>
  //           <h2>${produto.nome}</h2>
  //           <span class='preco'>R$ ${produto.preco.toFixed(2)}</span>
  //           <p>${produto.descricao}</p>
  //           <a href='#'>FAZER PEDIDO</a>
  //         </div>
  //       </div>`
  //   rowProdutos.append(colProdutos)
  // })

  document.getElementById('load').style.display='none'
}

//document.addEventListener("DOMContentLoaded",listarProdutos, false)


//recebe o valor do digitado no input e filtra os produtos com base nele
const filtrarProdutos = (input) => {
  const rs = document.getElementById('row-produtos')

  //const colunas = document.getElementsByClassName('col-produtos')
  
  const msg = document.getElementById('msg')
  //filtra os produtos com base no valor do input, se o produto tiver a letra ou string digitado no input ele é retornado
  const produtosFiltrados = produtos.filter(p=>p.nome.toLowerCase().indexOf(input.value)>-1)

  //apaga todos os elementos filhos
  while(rs.firstChild){
    rs.removeChild(rs.firstChild)
  }

  let rows = []

  for(let i=0;i<produtosFiltrados.length;i+=3){
    rows.push(produtosFiltrados.slice(i,i+3))
  }

  for(i of rows){
    const row = document.createElement('row')
    row.setAttribute('class','row produtos')

    for(prod of i){
      const colProdutos = document.createElement('div')
      colProdutos.setAttribute('id',`produto-${prod.id}`)
      colProdutos.setAttribute('class','col-produtos')

      colProdutos.innerHTML = `
        <div class='card'>
          <img src='./imagens/${prod.img}' alt=${prod.nome}>
          <div class='card-body'>
            <h2>${prod.nome}</h2>
            <span class='preco'>R$ ${prod.preco.toFixed(2)}</span>
            <p>${prod.descricao}</p>
            <a href='./secoes/pedido.html?id=${prod.id}'>FAZER PEDIDO</a>
          </div>
        </div>
      `
      row.appendChild(colProdutos)
    }
    rs.appendChild(row)
  }


  /* um jeito mais simples seria adicionar col produtos dentro de uma row apenas
  produtosFiltrados.forEach(produto => {
    const colProdutos = document.createElement('div')
    colProdutos.setAttribute('id',`produto-${produto.id}`)
    colProdutos.setAttribute('class', 'col-produtos')

    colProdutos.innerHTML = `
        <div class='card'>
        <img src=${produto.img} alt=${produto.nome}>
        <div class='card-body'>
          <h2>${produto.nome}</h2>
          <span class='preco'>R$ ${produto.preco.toFixed(2)}</span>
          <p>${produto.descricao}</p>
          <a href='#'>FAZER PEDIDO</a>
        </div>
      </div>
    `
    rs.appendChild(colProdutos)
  })*/

  /* poderia ao invés de remover os elementos e adicionar os que batem com o filtro, 
  apenas botar display none nos elementos que não batem com o filtro
  for (let i = 0; i < colunas.length; i++) {
    const nomeProduto = colunas[i].getElementsByTagName("h2")[0]//pega os nomes dos produtos
    if(nomeProduto.textContent.toLowerCase().indexOf(input.value) > -1){ //compara o nome do produto com o que foi digitado
      colunas[i].style.display="block"
    }
    else{
      colunas[i].style.display="none"
    }
  } */

  //rs.childNodes retorna os filhos do elemento, ele não é do tipo array, por isso precisa ser convertido pra usar as funções de arrays
  //const filhos = Array.from(rs.childNodes).filter(elem => elem.className === 'col-produtos' && elem.style.display !== 'none')
                
  //se depois do filtro sobrarem 0 filhos então uma mensagem de não encontrado é mostrada
  produtosFiltrados.length === 0 ? msg.style.display = 'block' : msg.style.display = ''
}


/*pega o produto pelo id passado na url e mostra seus dados*/
const getProduct = () => {
  const url = window.location.search //retorna a url atual com os query params

  //A interface URLSearchParams define métodos utilitários para trabalhar com a string de consulta de uma URL
  const parametro = new URLSearchParams(url)

  const divPedidoProduto = document.getElementById('pedido-produto')
  let produto = null

  if(parametro.has('id')){ //verifica se existe o parametro id na url, e busca o produto e mostra na tela
    produto = produtos.find(prod => prod.id==parametro.get('id'))

    if(produto){//se o produto for achado oculta o select de produtos
      const colProduto = document.getElementById('info-pedido-produto')
      colProduto.innerHTML = ''
      colProduto.innerHTML = `
        <div class='foto'>
            <img src='../imagens/${produto.img}' alt='${produto.nome}'>
        </div>
        <div class="detalhes">
            <h1>${produto.nome}</h1>
            <h3 id='total-produto' class='total-produto'>R$ ${produto.preco.toFixed(2)}</h3>
            <div class='field'>
              <label>Quantidade</label>
              <input type='number' step=1 min=1 value='1' oninput='calculaPreco(this)'>
            </div>
            <h3 id='total-pagar' class='total-pagar'>Total a pagar: R$ ${produto.preco.toFixed(2)}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam 
            reprehenderit nihil, eaque aperiam praesentium unde dolorem consequuntur ad 
            vel molestiae, fugit facere minima? Reiciendis ipsum hic laudantium natus 
            tempora sequi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam 
            reprehenderit nihil, eaque aperiam praesentium unde dolorem consequuntur ad 
            vel molestiae, fugit facere minima? Reiciendis ipsum hic laudantium natus 
            tempora sequi.</p>
        </div>`
      divPedidoProduto.style.display="flex"
    }
  }
  
  //se não achar o produto ou não tiver o parametro id mostra o select pra escolher o produto
  if(!produto || !parametro.has('id')){
    const rowSelectProduto = document.getElementById('row-select-produtos')
    const selectProdutos = document.querySelector('#select-produtos')

    //percorre os produtos e cria um objeto do tipo Option
    //o primeiro parametro é o texto que aparece no select e o segundo o value da option
    //e adiciona no select a option, o segundo parametro é a posição, undefined faz com que adicione no fim
    produtos.forEach(produto => {
      let opcao = new Option(produto.nome+' R$'+produto.preco.toFixed(2),produto.id)
      selectProdutos.add(opcao,undefined)
    })

    /*outra forma de acionar options
    produtos.forEach(produto => {
      const opcao = document.createElement('option');
      const optionText = document.createTextNode(produto.nome+' R$'+produto.preco.toFixed(2));
      opcao.appendChild(optionText);
      opcao.setAttribute('value',produto.id)
      selectProdutos.appendChild(opcao);
    })*/

    rowSelectProduto.style.display='block'
  }
}


/*pega o value do select que tem o id do produto e usa pra procurar um produto*/
const escolherProduto = function() {
  const selectProdutos = document.querySelector('#select-produtos')
  const produto = produtos.find(produto => produto.id == selectProdutos.value)

  const divPedidoProduto = document.querySelector('#pedido-produto')
  const colProduto = document.getElementById('info-pedido-produto')

  colProduto.innerHTML = ''
  colProduto.innerHTML = `
    <div class='foto'>
      <img src='../imagens/${produto.img}' alt='${produto.nome}'>
    </div>
    <div class="detalhes">
      <h1>${produto.nome}</h1>
      <h3 id='total-produto' class='total-produto'>R$ ${produto.preco.toFixed(2)}</h3>
      <div class='field'>
        <label>Quantidade</label>
        <input type='number' step=1 min=1 value='1' oninput='calculaPreco(this)'>
      </div>
      <h3 id='total-pagar' class='total-pagar'>Total a pagar: R$ ${produto.preco.toFixed(2)}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam 
      reprehenderit nihil, eaque aperiam praesentium unde dolorem consequuntur ad 
      vel molestiae, fugit facere minima? Reiciendis ipsum hic laudantium natus 
      tempora sequi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam 
      reprehenderit nihil, eaque aperiam praesentium unde dolorem consequuntur ad 
      vel molestiae, fugit facere minima? Reiciendis ipsum hic laudantium natus 
      tempora sequi.</p>
    </div>`

  divPedidoProduto.style.display="flex"
}

/*calcula total a pagar*/
function calculaPreco(input){
  const precoProduto = document.getElementById('total-produto').textContent
  const valorTotal = (precoProduto.substring(3,precoProduto.length) * input.value).toFixed(2)//substring pega uma parte da string, no caso apartir do caractere na posicao 3
  document.getElementById('total-pagar').innerHTML = 'Total a pagar: R$ '+valorTotal
}

/*mascara para o cep*/
const maskCep = () => {
  let cep = document.getElementById('cep')
  cep.value = cep.value.replace(/\D/g, "")//tira todos os caracters não numeros

  if(cep.value.length > 5){
    cep.value = cep.value.replace(/(\d{5})(\d{1,3}).*/, "$1-$2")//se tiver 5 numeros digitados adiciona um traço
  }else{
    cep.value = cep.value.replace(/(\d{1,5})/g, '$1');
  }
}


/*busca o endereco com base no cep digitado*/
const buscarCep = function(){
  const cep = document.getElementById('cep').value
  const errorCep = document.getElementById('error-cep')

  if(cep.length !== 9){
    errorCep.style.display='block'
    return
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(response => {
      response.erro ? errorCep.style.display='block' : errorCep.style.display='none'

      document.getElementById('rua').value = response.logradouro
      document.querySelector('#bairro').value = response.bairro
      document.querySelector('#cidade').value = response.localidade+'/'+response.uf
    })
    .catch(() => alert('Houve um erro ao buscar o cep'))
}