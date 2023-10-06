
    const ul = document.getElementById('lista')
    const detalhes = document.getElementById('detalhes')
    lista = JSON.parse(localStorage.getItem('lista_produtos')) || []

    function renderisarProdutos() {
        ul.innerHTML = ''

        lista.map((produto, index) => {
            const divImg = document.createElement('div')
            const liDados = document.createElement('li')
            const a_eliminar = document.createElement('a')
            const p_desconto = document.createElement('p')
            const divDados = document.createElement('div')
            const span_desconto = document.createElement('span')

            const br = document.createElement('br')
            const labelPreco = document.createElement('label')
            const labelDescricao = document.createElement('label')

            /* ATRIBUIDO VALORES EM TAGS HTML*/
            a_eliminar.appendChild(document.createTextNode('Eliminar Produto'))
            labelPreco.appendChild(document.createTextNode('KZ' + produto.preco))
            labelPreco.appendChild(br)
            labelPreco.appendChild(p_desconto)
            span_desconto.appendChild(document.createTextNode('KZ' + produto.desconto))
            p_desconto.appendChild(span_desconto)
            labelDescricao.appendChild(document.createTextNode(produto.descricao.slice(0, 20) + '...'))

            /*CSS*/{
                /* CSS LABEL PREÇO*/{
                    labelPreco.style.fontSize="19px"
                    labelPreco.style.fontWeight = "bolder"
                    labelPreco.style.marginBottom = "-5px"
                }

                /* CSS LABEL PREÇO*/{
                    labelDescricao.style.textTransform ="lowercase"
                }

                /* CSS DIV-DADOS */{
                    divDados.style.marginTop = "1px"
                }

            }

            novaImagem = document.createElement('img')
            novaImagem.src = produto.caminho

            liDados.setAttribute('class', 'pintar')
            divImg.setAttribute('class','divImg')
            novaImagem.setAttribute('class','novaImagem')
            divImg.setAttribute('onClick', `detalhesProduto(${index})`)

            a_eliminar.setAttribute('href', `#`)
            a_eliminar.setAttribute('onClick', `eliminarProduto(${index})`)

            divImg.appendChild(novaImagem)
            divDados.appendChild(labelPreco)
            divDados.appendChild(labelDescricao)
            divDados.appendChild(br)
            divDados.appendChild(a_eliminar)
            liDados.appendChild(divImg)
            liDados.appendChild(divDados)
            ul.appendChild(liDados)
        })
    }

    renderisarProdutos()

    function eliminarProduto(index){
        lista.splice(index,1)
        sauvaItem()
        renderisarProdutos()
    }
    
    function detalhesProduto(index) {
        ul.style.display = "none"
        detalhes.innerHTML = ''

        prodImg = document.createElement('img')
        h1Detalhes = document.createElement('h1')
        btnSair = document.createElement('button')
        divImgProd = document.createElement('div')
        divDetalhes = document.createElement('div')
        divDadosprod = document.createElement('div')
        nomeProdLabel = document.createElement('label')
        precoProdLabel = document.createElement('label')
        descontoProdLabel = document.createElement('label')
        descricaoProdLabel = document.createElement('label')
        // freetProdLabel = document.createElement('label')

        lista = JSON.parse(localStorage.getItem('lista_produtos')) || []

        nomeCor = (lista[index].name)
        prodImg.src = lista[index].caminho
        btnSair.appendChild(document.createTextNode('Sair'))
        h1Detalhes.appendChild(document.createTextNode('Detalhes do Produto.'))
        nomeProdLabel.appendChild(document.createTextNode('Nome: ' + lista[index].nome))
        precoProdLabel.appendChild(document.createTextNode('Agora a: ' + lista[index].preco + 'Kz'))
        descontoProdLabel.appendChild(document.createTextNode('Antes a: ' + lista[index].desconto + 'Kz'))
        descricaoProdLabel.appendChild(document.createTextNode('Descrição: ' + lista[index].descricao))

        btnSair.setAttribute('id', 'btnSair')
        prodImg.setAttribute('id', 'prodImg')
        divImgProd.setAttribute('id', 'divIgmProd')
        divDetalhes.setAttribute('id', 'divDetalhes')
        divDadosprod.setAttribute('id', 'divDadosprod')
        btnSair.setAttribute('onClick', `buttonSairDetalhes(${index})`)

        divDadosprod.appendChild(nomeProdLabel)
        divDadosprod.appendChild(descontoProdLabel)
        divDadosprod.appendChild(precoProdLabel)
        divDadosprod.appendChild(descricaoProdLabel)
        divImgProd.appendChild(prodImg)
        divDetalhes.appendChild(divImgProd)
        divDetalhes.appendChild(divDadosprod)
        detalhes.appendChild(h1Detalhes)
        detalhes.appendChild(divDetalhes)
        detalhes.appendChild(btnSair)

        detalhes.style.display = "flex"
    }


    function buttonSairDetalhes(index){
        document.getElementById("detalhes").style.display="none"
        ul.style.display = "flex"
    }


    function sauvaItem() {
        localStorage.setItem('lista-produtos', JSON.stringify(lista))
    }