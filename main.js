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
    },

    maxZapatos: "",
    maxZapatillas: "",
    ensambleZapato: "",
    ensambleZapatilla: "",
    comisionVentas: "",
    salary: "",
    salaryBase: 1000000,
    button: true,
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
      };

      this.show = {
        salary: false,
        max: false,
        amount: false,
        commission: false,
      };
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
  },

  created() {
    let salarioBase = localStorage.getItem("salaryBase"),
      maxZapatos = localStorage.getItem("maxZapatos"),
      maxZap = localStorage.getItem("maxZap"),
      ensambleZto = localStorage.getItem("ensambleZto"),
      ensambleZap = localStorage.getItem("ensambleZap"),
      comisionVentas = localStorage.getItem("comisionVentas");

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
  },
});
