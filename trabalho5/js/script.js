const calc = () => {
    const option = document.getElementById("combo-select")
    const total = document.getElementById("total")

    if(option.value==='inscricao'){
        total.value=10
    }
    else if(option.value==='inscricao_copo'){
        total.value=20
    }
    else if(option.value==='inscricao_camiseta'){
        total.value=30
    }
    else{
        total.value=40
    }
}