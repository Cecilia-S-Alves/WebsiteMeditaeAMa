//* HEADER NAV
let paginaAtual = window.location.pathname.split("/").pop();

// Seleciona todos os links do menu
let links = document.querySelectorAll("header nav a");

// Percorre os links
links.forEach(link => {
    let paginaLink = link.getAttribute("href");

    if (paginaLink === paginaAtual) {
        link.classList.add("paginaAtual");
    }
});


//* CARROSSEL
var btVoltar  = document.getElementById("btVoltar")
var btAvancar = document.getElementById("btAvancar")
var moldura   = document.getElementById("moldura")

var path = "img/"
var imgs = [
    'Banner 1.png',
    'Banner 2.png',
    'Banner 3.png'
    ]

var idx  = 0
var temp = null

window.onload = Inicio

function Inicio()
{
    btAvancar.onclick = AvancarImg
    btVoltar.onclick  = VoltarImg

    MostrarFoto()
    ResetarTemporizador()
}

function AvancarImg()
{
    if(idx < (imgs.length - 1))
    {
        idx++
    }
    else idx = 0
    
    MostrarFoto()
    ResetarTemporizador()
}

function VoltarImg()
{
    if(idx > 0)
    {
        idx--
    }
    else idx = imgs.length - 1
    
    MostrarFoto()
    ResetarTemporizador() 
}

function MostrarFoto()
{
    moldura.src = path + imgs[idx]
}

function ResetarTemporizador()
{
    clearInterval(temp)
    
    temp = setInterval(() => {
        if(idx < (imgs.length - 1))
        {
            idx++
        }
        else idx = 0
        
        MostrarFoto()
    }, 3000)
}