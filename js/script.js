//* CARROSSEL
var btVoltar  = document.getElementById("btVoltar")
var btAvancar = document.getElementById("btAvancar")
var moldura   = document.getElementById("moldura")

var path = "img/"
var imgs = [
    'CAPA_FACEBOOK.png',
    'PLACAS E ADESIVOS MEDITA&AMA.png'
    ] //! ALTERAR !!!!!!!!!!!!!!!!!

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
    }, 2000)
}