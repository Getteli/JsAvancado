/**
 * POO
 * Metodos de instancia e estaticos
 */

class ControleRemoto
{
    constructor(tv)
    {
        this.tv = tv;
        this.volume = 0;
    }

    // metodos de instancia
    aumentarVol()
    {
        this.volume += 1;
        this.volume = this.volume >= 100 ? 100 : this.volume;
    }

    diminuirVol()
    {
        this.volume -= 1;
        this.volume = this.volume <= 0 ? 0 : this.volume;
    }

    // metodo estatico
    static trocarPilha()
    {
        console.log("Troca a pilha");
    }
}

const controle1 = new ControleRemoto("Panasonic");

// chamar metodo de instancia via instancia
controle1.aumentarVol();
// chamar o metodo estatico é via a classe
ControleRemoto.trocarPilha();

console.log(controle1);