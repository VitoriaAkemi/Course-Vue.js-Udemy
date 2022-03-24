new Vue({
    el: '#desafio',

    data: {
        valor: 'Variavel valor '
    },

    methods: {
        alerta(){
            alert('Condicoes atendidas para gerar alert!!')
        },
        alteraValor(event){
          this.valor = event.target.value
        }
    }

})