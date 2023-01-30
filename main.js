var app = new Vue({
  el: "#app",
  data: {
    message: "Bienvenido!",
    db: [
      { user: "admin", password: 1234 },
      { user: "secretario", password: 2345 },
      { user: "vendedor", password: 3456 },
      { user: "ensamblador", password: 4567 },
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

    showSalary() {
      this.show = {
        salary: true,
        max: false,
        amount: false,
        commission: false,
      };
    },

    showMax() {
      this.show = {
        salary: false,
        max: true,
        amount: false,
        commission: false,
      };
    },

    showAmount() {
      this.show = {
        salary: false,
        max: false,
        amount: true,
        commission: false,
      };
    },

    showCommission() {
      this.show = {
        salary: false,
        max: false,
        amount: false,
        commission: true,
      };
    },

    showExtras() {
      this.showEnsamblador = {
        extras: true,
        cantidadEnsambles: false,
      };
    },

    showCantidadEnsambles() {
      this.showEnsamblador = {
        extras: false,
        cantidadEnsambles: true,
      };
    },
  },
});
