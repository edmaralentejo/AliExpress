
    lista = JSON.parse(localStorage.getItem('lista_produtos')) || []

    let img_preview = document.querySelector("#img")
    let input_preview = document.querySelector("#imagem")

    img_preview.addEventListener('click', () => {
        input_preview.click()
    })

    input_preview.addEventListener('input', () => {
        Input_previeW()
        function Input_previeW(){
            ca = ''
            input_preview.innerHTML = ''
            let reader = new FileReader()
            reader.onload = () => {
                img_preview.src = reader.result
            }
            reader.readAsDataURL(input_preview.files[0])
        }    
    })
    
    
    function addItem() {
        input_nome = document.querySelector("#name")
        input_descricao = document.querySelector("#descricao")
        input_preco = document.querySelector("#preco")
        input_imagem = document.querySelector('imagem')

        newNome = input_nome.value,
        newDescricao = input_descricao.value,
        newPreco = input_preco.value
        oldPreco = parseFloat(newPreco - ((newPreco * 10) / 100))

        validar(newNome, newDescricao, newPreco, oldPreco, input_imagem)
        
    }

    function sauvaItem() {
        localStorage.setItem('lista_produtos', JSON.stringify(lista))
    }

    function validar(newNome, newDescricao, newPreco, oldPreco){
        testar = input_preview.files.length
        if(testar > 0) {
            // if(newNome.length > 0 && newDescricao > 0 && newPreco.length > 0 &&  testar> 0) {
            url = 'img/produtos/' + input_preview.files[0].name
                alert('PRODUTO CADASTRADO COM SUCESSO.')
                lista.push(objItem = {
                    caminho: url,
                    nome: newNome,
                    preco: oldPreco,
                    desconto: newPreco,
                    descricao: newDescricao,
                });
                sauvaItem()
            // }
        }  if (newNome.length == 0 || newDescricao == 0 || newPreco.length == 0 || testar == 0) {
            alert('EXISTE CAMPO VAZIO, POR FAVOR PREENCHA-O!')
        }
        // input_nome.value = '', input_descricao.value = '', input_preco.value = ''
    }

    document.querySelector("#addItem").addEventListener('click',()=>{
        addItem()
    });