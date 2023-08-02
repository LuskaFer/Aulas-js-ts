// Converter a Calculadora de função fabrica para construtora.

function Calculadora() { // criei a função construtora da calculadora 
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
        this.capturaBackSpace();
    };

    this.capturaBackSpace = () => {
        document.addEventListener('keydown', e => {
            if (e.keyCode === 8) { 
                e.preventDefault();
                this.del();
            }
        });
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
          if (e.keyCode === 13) { 
            this.realizaConta();
        }
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear(el);
            if (el.classList.contains('btn-del')) this.del(el);
            if (el.classList.contains('btn-eq')) this.realizaConta(el);
        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta){
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert ('Conta inválida');
            return;
        }
    };



    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora(); // criei nova instancia do objeto calculadora
calculadora.inicia(); // chamando o metodo iniciar do objeto 