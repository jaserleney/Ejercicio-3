var salarioBase = 1000000;
var horasExtrasTrabajadas = 10;
var precioHoraExtra = salarioBase * 1.2; // 220% del valor de una hora normal de trabajo según el salario
var salarioTotal =
  salarioBase +
  horasExtrasTrabajadas * precioHoraExtra +
  zapatosEnsamblados * incrementoZapatos +
  zapatillasEnsambladas * incrementoZapatillas +
  auxilioTransporte +
  bonoHijos;
console.log(salarioTotal);

// Zapatos ensamblados
var zapatosEnsamblados = 1200;

// Zapatillas ensambladas
var zapatillasEnsambladas = 2000;

// Incremento por zapatos ensamblados
var incrementoZapatos = 0;
if (zapatosEnsamblados > 1000) {
  incrementoZapatos = 0.1;
}
if (zapatosEnsamblados > 2000) {
  incrementoZapatos = 0.2;
}

// Incremento por zapatillas ensambladas
var incrementoZapatillas = 0;
if (zapatillasEnsambladas > 1700) {
  incrementoZapatillas = 0.15;
}
if (zapatillasEnsambladas > 3000) {
  incrementoZapatillas = 0.3;
}

// Auxilio de transporte según lo establecido por la ley
var auxilioTransporte = 30000;

// Bono por hijos
var numeroHijos = 2;
var bonoHijos = numeroHijos * 60000;

salarioTotal +=
  zapatosEnsamblados * incrementoZapatos +
  zapatillasEnsambladas * incrementoZapatillas;

class Vendedor {
  constructor(salarioBase, comision, ventas, subsidioTransporte) {
    this.salarioBase = salarioBase;
    this.comision = comision;
    this.ventas = ventas;
    this.subsidioTransporte = subsidioTransporte;
  }

  calcularSalario() {
    let salario = this.salarioBase + this.comision * this.ventas;
    let bonificacion = this.calcularBonificacion();
    salario += bonificacion + this.subsidioTransporte;
    return salario;
  }

  calcularBonificacion() {
    let bonificacion = 0;
    if (this.ventas > 5000000) {
      bonificacion = this.salarioBase * 0.1;
    }
    if (this.ventas > 10000000) {
      bonificacion = this.salarioBase * 0.2;
    }
    return bonificacion;
  }
}

let vendedor1 = new Vendedor(1000000, 0.05, 6000000, 850000);
console.log(vendedor1.calcularSalario());
