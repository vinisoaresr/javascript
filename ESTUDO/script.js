class Caneta{
    modelo;
    cor;
    ponta;

    adicionar(){
        alert('vamos adicionar um produto');
    }
    excluir(){
        alert('Excluindo')
    }
    constructor(modelo, cor, ponta){
        this.modelo = modelo;
        this.cor = cor;
        this.ponta = ponta;
    }
}

const caneta_bica = new Caneta('bic', 'transparente', '0.7')


/// Tipos de dados
/// 
///
///
///
///
///
///
///
///
///
///
///