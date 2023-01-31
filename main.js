var app = new Vue({
  el: "#app",
  data: {
    message: "Bienvenido!",
    db: [
      { user: "admin", password: 1234 },
      { user: "secretario", password: 1234 },
      { user: "vendedor", password: 1234 },
      { user: "ensamblador", password: 1234 },
    ],
    selected: null,
    password: null,
    is: {
      isAdmin: false,
      isSecretario: false,
      isVendedor: false,
      isEnsamblador: false,
    },

    show: {
      salary: true,
      max: false,
      amount: false,
      commission: false,
    },

    showEnsamblador: {
      extras: true,
      cantidadEnsambles: false,
      cantidadHijos: false,
    },

    maxZapatos: "",
    maxZapatillas: "",
    ensambleZapato: "",
    ensambleZapatilla: "",
    comisionVentas: "",
    salary: "",
    salaryBase: 1000000,
    subsTransporte: 140000,

    horasExtrasSecretario: "",
    horasExtrasEnsamblador: "",

    hijosEnsamblador: false,
    cantidadHijosEnsamblador: "",
    valorBonoHijosEnsamblador: "",
    hijoLiquidado: false,

    cantidadZapatos: "",
    cantidadZapatillas: "",
    valorBonoZapatos: "",
    valorBonoZapatillas: "",
    zapLiquidado: false,

    button: true,

    liquidacionSecretario: {},
    liquidacionEnsamblador: {},

    liquidaciones: [],
  },

  methods: {
    login() {
      if (
        this.selected === null ||
        this.password === null ||
        this.selected === "" ||
        this.password === "" ||
        this.selected === undefined ||
        this.password === undefined
      ) {
        alert("Debes seleccionar un usuario y escribir una contraseña");
      }

      if (
        this.selected === this.db[0].user &&
        parseInt(this.password) === this.db[0].password
      ) {
        this.is = {
          isAdmin: true,
          isSecretario: false,
          isVendedor: false,
          isEnsamblador: false,
        };
        this.message = `Bienvenido! ${this.selected}`;
      }

      if (
        this.selected === this.db[1].user &&
        parseInt(this.password) === this.db[1].password
      ) {
        this.is = {
          isAdmin: false,
          isSecretario: true,
          isVendedor: false,
          isEnsamblador: false,
        };
        this.message = `Bienvenido! ${this.selected}`;
      }

      if (
        this.selected === this.db[2].user &&
        parseInt(this.password) === this.db[2].password
      ) {
        this.is = {
          isAdmin: false,
          isSecretario: false,
          isVendedor: true,
          isEnsamblador: false,
        };
        this.message = `Bienvenido! ${this.selected}`;
      }

      if (
        this.selected === this.db[3].user &&
        parseInt(this.password) === this.db[3].password
      ) {
        this.is = {
          isAdmin: false,
          isSecretario: false,
          isVendedor: false,
          isEnsamblador: true,
        };
        this.message = `Bienvenido! ${this.selected}`;
      }
    },

    logout() {
      let isConfirm = confirm("Esta Seguro Que Desea cerrar sesión?");
      if (isConfirm) {
        this.is = {
          isAdmin: false,
          isSecretario: false,
          isVendedor: false,
          isEnsamblador: false,
        };

        location.reload();
      }
    },

    showSalary() {
      this.show = {
        salary: true,
        max: false,
        amount: false,
        commission: false,
      };
      this.showEnsamblador = {
        extras: false,
        cantidadEnsambles: false,
      };
    },

    showMax() {
      this.show = {
        salary: false,
        max: true,
        amount: false,
        commission: false,
      };
      this.showEnsamblador = {
        extras: false,
        cantidadEnsambles: false,
      };
    },

    showAmount() {
      this.show = {
        salary: false,
        max: false,
        amount: true,
        commission: false,
      };

      this.showEnsamblador = {
        extras: false,
        cantidadEnsambles: false,
      };
    },

    showCommission() {
      this.show = {
        salary: false,
        max: false,
        amount: false,
        commission: true,
      };

      this.showEnsamblador = {
        extras: false,
        cantidadEnsambles: false,
      };
    },

    showExtras() {
      this.showEnsamblador = {
        extras: true,
        cantidadEnsambles: false,
        cantidadHijos: false,
      };

      this.show = {
        salary: false,
        max: false,
        amount: false,
        commission: false,
      };
    },

    showCantidadEnsambles() {
      this.showEnsamblador = {
        extras: false,
        cantidadEnsambles: true,
        cantidadHijos: false,
      };

      this.show = {
        salary: false,
        max: false,
        amount: false,
        commission: false,
      };
    },

    showHijos() {
      let haveHijos = confirm("Si tiene hijos pulse OK");

      if (haveHijos) {
        this.showEnsamblador = {
          extras: false,
          cantidadEnsambles: false,
          cantidadHijos: true,
        };

        this.show = {
          salary: false,
          max: false,
          amount: false,
          commission: false,
        };
      } else {
        this.showEnsamblador = {
          extras: false,
          cantidadEnsambles: false,
          cantidadHijos: false,
        };

        this.show = {
          salary: false,
          max: false,
          amount: false,
          commission: false,
        };
        this.hijoLiquidado = true;
        localStorage.setItem("hijoLiquidado", this.hijoLiquidado);

        alert("Gracias por responder");
      }
    },

    verificarNum() {
      if (isNaN(this.salary || this.salaryBase)) {
        alert("Debes ingresar un valor numérico");
        this.button = false;
        return false;
      }
      if (
        typeof this.salary === "number" &&
        typeof this.salaryBase === "number"
      ) {
        this.button = true;
      }

      if (isNaN(this.maxZapatos || this.maxZapatillas)) {
        alert("Debes ingresar un valor numérico");
        this.button = false;
        return false;
      }
      if (
        typeof this.maxZapatos === "number" &&
        typeof this.maxZapatillas === "number"
      ) {
        this.button = true;
      }

      if (isNaN(this.ensambleZapatilla || this.ensambleZapatilla)) {
        alert("Debes ingresar un valor numérico");
        this.button = false;
        return false;
      }
      if (
        typeof this.ensambleZapatilla === "number" &&
        typeof this.ensambleZapatilla === "number"
      ) {
        this.button = true;
      }
    },

    changeSalary() {
      this.salaryBase = parseInt(this.salary);
      localStorage.setItem("salaryBase", this.salaryBase);
    },

    changeMaxZptos() {
      this.maxZapatos = parseInt(this.maxZapatos);
      localStorage.setItem("maxZapatos", this.maxZapatos);
    },

    changeMaxZtillas() {
      this.maxZapatillas = parseInt(this.maxZapatillas);
      localStorage.setItem("maxZap", this.maxZapatillas);
    },

    changePriceZpatos() {
      this.ensambleZapato = parseInt(this.ensambleZapato);
      localStorage.setItem("ensambleZto", this.ensambleZapato);
    },

    changePriceZtillas() {
      this.ensambleZapatilla = parseInt(this.ensambleZapatilla);
      localStorage.setItem("ensambleZap", this.ensambleZapatilla);
    },

    changeCommission() {
      this.comisionVentas = parseInt(this.comisionVentas);
      localStorage.setItem("comisionVentas", this.comisionVentas);
    },

    liquidarHijos() {
      if (this.cantidadHijosEnsamblador <= 0) {
        alert(
          "La cantidad de hijos ensamblador no puede ser negativa o igual a cero"
        );
      }

      if (parseInt(this.cantidadHijosEnsamblador) === 1) {
        this.valorBonoHijosEnsamblador = 80000;
        localStorage.setItem("bonoHijo", this.valorBonoHijosEnsamblador);
        this.hijoLiquidado = true;
        localStorage.setItem("hijoLiquidado", this.hijoLiquidado);
      }

      if (parseInt(this.cantidadHijosEnsamblador) >= 2) {
        this.valorBonoHijosEnsamblador =
          60000 * parseInt(this.cantidadHijosEnsamblador);
        localStorage.setItem("bonoHijo", this.valorBonoHijosEnsamblador);
        this.hijoLiquidado = true;
        localStorage.setItem("hijoLiquidado", this.hijoLiquidado);
      }
    },

    calcZapatosZapatillas() {
      if (
        !this.cantidadZapatos ||
        this.cantidadZapatos <= 0 ||
        !this.cantidadZapatillas ||
        this.cantidadZapatillas <= 0
      ) {
        alert(
          "La cantidad de zapatos/zapatillas no puede ser negativa o igual a cero"
        );
        return false;
      }

      if (this.cantidadZapatos >= 1 && this.cantidadZapatos <= 1000) {
        this.valorBonoZapatos = this.cantidadZapatos * this.ensambleZapato;
        // console.log(this.valorBonoZapatos);
        localStorage.setItem("bonoZapatos", this.valorBonoZapatos);
        this.zapLiquidado = true;
        localStorage.setItem("zapLiquidado", this.zapLiquidado);
      }

      if (this.cantidadZapatos > 1000 && this.cantidadZapatos <= 2000) {
        let valorBono = this.ensambleZapato * 1.1;
        this.valorBonoZapatos = this.cantidadZapatos * valorBono;
        // console.log(this.valorBonoZapatos);
        localStorage.setItem("bonoZapatos", this.valorBonoZapatos);
        this.zapLiquidado = true;
        localStorage.setItem("zapLiquidado", this.zapLiquidado);
      }

      if (this.cantidadZapatos > 2000) {
        let valorBono = this.ensambleZapato * 1.2;
        this.valorBonoZapatos = this.cantidadZapatos * valorBono;
        // console.log(this.valorBonoZapatos);
        localStorage.setItem("bonoZapatos", this.valorBonoZapatos);
        this.zapLiquidado = true;
        localStorage.setItem("zapLiquidado", this.zapLiquidado);
      }

      if (this.cantidadZapatillas >= 1 && this.cantidadZapatillas <= 1700) {
        this.valorBonoZapatillas =
          this.cantidadZapatillas * this.ensambleZapatilla;
        // console.log(this.valorBonoZapatillas);
        localStorage.setItem("bonoZapatillas", this.valorBonoZapatillas);
        this.zapLiquidado = true;
        localStorage.setItem("zapLiquidado", this.zapLiquidado);
      }

      if (this.cantidadZapatillas > 1700 && this.cantidadZapatillas <= 3000) {
        let valorBono = this.ensambleZapatilla * 1.15;
        this.valorBonoZapatillas = this.cantidadZapatillas * valorBono;
        // console.log(this.valorBonoZapatillas);
        localStorage.setItem("bonoZapatillas", this.valorBonoZapatillas);
        this.zapLiquidado = true;
        localStorage.setItem("zapLiquidado", this.zapLiquidado);
      }

      if (this.cantidadZapatillas > 3000) {
        let valorBono = this.ensambleZapatilla * 1.3;
        this.valorBonoZapatillas = this.cantidadZapatillas * valorBono;
        // console.log(this.valorBonoZapatillas);
        localStorage.setItem("bonoZapatillas", this.valorBonoZapatillas);
        this.zapLiquidado = true;
        localStorage.setItem("zapLiquidado", this.zapLiquidado);
      }
    },

    calcHorasExtrasSecretario() {
      let valorHora = Math.round(this.salaryBase / 30 / 8);
      const formatterPeso = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      });

      if (this.horasExtrasSecretario < 0) {
        alert("La cantidad de horas extras no puede ser negativa");
        return false;
      }

      if (!this.horasExtrasSecretario) {
        this.horasExtrasSecretario = 0;
      }

      if (this.horasExtrasSecretario >= 0 || this.horasExtrasSecretario) {
        let valorHorasExtrasSecretario = Math.round(
          valorHora * 1.8 * parseInt(this.horasExtrasSecretario)
        );

        this.liquidacionSecretario = {
          empleado: "secretario",
          liquidado: true,
          salarioBase: formatterPeso.format(this.salaryBase),
          valorHorasExtras: formatterPeso.format(valorHorasExtrasSecretario),
          total: formatterPeso.format(
            this.salaryBase + valorHorasExtrasSecretario
          ),
        };
        this.liquidaciones.push(this.liquidacionSecretario);

        localStorage.setItem(
          "liquiSecretario",
          JSON.stringify(this.liquidacionSecretario)
        );
        // console.log(this.liquidaciones);
        localStorage.setItem(
          "liquidaciones",
          JSON.stringify(this.liquidaciones)
        );
      }
    },

    calcHorasExtrasEnsamblador() {
      let valorHora = Math.round(this.salaryBase / 30 / 8);
      const formatterPeso = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      });

      if (this.horasExtrasEnsamblador < 0) {
        alert("La cantidad de horas extras no puede ser negativa");
        return false;
      }

      if (!this.horasExtrasEnsamblador) {
        this.horasExtrasEnsamblador = 0;
      }

      if (this.horasExtrasEnsamblador >= 0 || this.horasExtrasEnsamblador) {
        if (this.hijoLiquidado && this.zapLiquidado) {
          let valorHorasExtrasEnsamblador = Math.round(
            valorHora * 2.2 * parseInt(this.horasExtrasEnsamblador)
          );

          this.liquidacionEnsamblador = {
            empleado: "ensamblador",
            auxTransporte: this.subsTransporte,
            liquidado: true,
            salarioBase: formatterPeso.format(this.salaryBase),
            valorHorasExtras: formatterPeso.format(valorHorasExtrasEnsamblador),
            total: formatterPeso.format(
              this.salaryBase +
                parseInt(valorHorasExtrasEnsamblador) +
                this.valorBonoHijosEnsamblador +
                this.valorBonoZapatos +
                this.valorBonoZapatos +
                this.subsTransporte
            ),
            bonoHijo: 0 || formatterPeso.format(this.valorBonoHijosEnsamblador),
            bonoZap: formatterPeso.format(
              this.valorBonoZapatos + this.valorBonoZapatos
            ),
          };

          this.liquidaciones.push(this.liquidacionEnsamblador);

          localStorage.setItem(
            "liquiEnsamblador",
            JSON.stringify(this.liquidacionEnsamblador)
          );

          localStorage.setItem(
            "liquidaciones",
            JSON.stringify(this.liquidaciones)
          );
        } else {
          alert("Primero liquida Bono Hijos / Cantidad de ensambles");
        }
      }
    },
  },

  created() {
    let salarioBase = localStorage.getItem("salaryBase"),
      maxZapatos = localStorage.getItem("maxZapatos"),
      maxZap = localStorage.getItem("maxZap"),
      ensambleZto = localStorage.getItem("ensambleZto"),
      ensambleZap = localStorage.getItem("ensambleZap"),
      comisionVentas = localStorage.getItem("comisionVentas"),
      liquidaciones = localStorage.getItem("liquidaciones"),
      liquiSecretario = localStorage.getItem("liquiSecretario"),
      liquiEnsamblador = localStorage.getItem("liquiEnsamblador"),
      valorBonoHijosEnsamblador = localStorage.getItem("bonoHijo"),
      hijoLiquidado = localStorage.getItem("hijoLiquidado"),
      valorBonoZapatillas = localStorage.getItem("bonoZapatillas"),
      valorBonoZapatos = localStorage.getItem("bonoZapatos"),
      zapLiquidado = localStorage.getItem("zapLiquidado");

    if (maxZapatos !== null) {
      this.maxZapatos = parseInt(maxZapatos);
    }
    if (maxZap !== null) {
      this.maxZapatillas = parseInt(maxZap);
    }

    if (salarioBase !== null) {
      this.salaryBase = parseInt(salarioBase);
    }

    if (ensambleZto !== null) {
      this.ensambleZapato = parseInt(ensambleZto);
    }
    if (ensambleZap !== null) {
      this.ensambleZapatilla = parseInt(ensambleZap);
    }
    if (comisionVentas !== null) {
      this.comisionVentas = parseInt(comisionVentas);
    }
    if (liquidaciones !== null) {
      this.liquidaciones = JSON.parse(liquidaciones);
    }
    if (liquiSecretario !== null) {
      this.liquidacionSecretario = JSON.parse(liquiSecretario);
    }
    if (liquiEnsamblador !== null) {
      this.liquidacionEnsamblador = JSON.parse(liquiEnsamblador);
    }
    if (valorBonoHijosEnsamblador !== null) {
      this.valorBonoHijosEnsamblador = parseInt(valorBonoHijosEnsamblador);
    }
    if (hijoLiquidado !== null) {
      this.hijoLiquidado = hijoLiquidado;
    }
    if (valorBonoZapatillas !== null) {
      this.valorBonoZapatillas = parseInt(valorBonoZapatillas);
    }
    if (valorBonoZapatos !== null) {
      this.valorBonoZapatos = parseInt(valorBonoZapatos);
    }
    if (zapLiquidado !== null) {
      this.zapLiquidado = zapLiquidado;
    }
  },
});
