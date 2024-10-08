/**
 * Constructor Function
 * exercicio de calculadora convertida de factory para Constructor
 */
function Calculator()
{
	// atributes
	this.display = document.querySelector('.display'),

	// methods
	this.init = () =>
	{
		this.clickButtons();
		this.pressEnter();
		// da foco no display para poder começar digitando e pressionando enter
		this.display.focus();
	};

	this.clickButtons = () =>
	{
		document.addEventListener('click', function(e)
		{
			let el = e.target;

			if (el.classList.contains('btn-num'))
			{
				this.buttonToDisplay(el.innerText);
			}

			if(el.classList.contains('btn-clear'))
			{
				this.clearDisplay();
			}

			if(el.classList.contains('btn-del'))
			{
				this.delDisplay();
			}

			if(el.classList.contains('btn-eq'))
			{
				this.execCalc();
			}

			// obs: toda function (que seja hoisting) no js, possui alguns metodos (adicionando um "." depois de fechar o corpo)
			// o metodo bind serve para mudar o texto da funcion (q por pegar do document esta apontando
			// para o elemento DOM)

			// obs2: se fosse uma arrow function nao precisaria do bind, ele entenderia nativamente que o seu this continuaria
			// sendo o parent (a calculadora)
		}.bind(this)); // <- esse metodo serve para mudar o contexto do metodo, para manter o this
		// da calculadora.
	};

	this.buttonToDisplay = (value) =>
	{
		this.display.value += value;
	};
	
	this.clearDisplay = () =>
	{
		this.display.value = '';
	};

	this.delDisplay = () =>
	{
		this.display.value = this.display.value.slice(0, -1);
	};

	this.pressEnter = () =>
	{
		this.display.addEventListener("keyup", e =>
		{
			// enter
			if(e.keyCode === 13)
			{
				this.execCalc();
			}
		});
	};

	this.execCalc = () =>
	{
		let form = this.display.value;
		try
		{
			let result = eval(form);

			if(!result)
			{
				confirm("Conta inválida");
				return;
			}

			this.display.value = String(result);
		}
		catch (error)
		{
			confirm("Conta inválida");
			return;
		}
	};
}

// instance
const calculator = new Calculator();

// init
calculator.init();