let mostrar = false;
function hideMenu()
{
    
    let div = document.getElementById('midrop'); 
    
    if(mostrar === false)
    {
        div.style.setProperty('display', 'block');
        mostrar = true;
    }
    else{
        div.style.setProperty('display', 'none');
        mostrar = false;
    }
    
    
}