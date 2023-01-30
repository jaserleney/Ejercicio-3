var app = new Vue({
  el: "#app",
  data: {
    message: "Bienvenido!",
    db: [
      { user: "admin", password: 1234 },
      { user: "secretario", password: 2345 },
      { user: "vendedor", password: 6789 },
      { user: "ensamblador", password: 0987 },
    ],
    selected: null,
    password: null,
    is: [
      { isAdmin: false },
      { isSecretario: false },
      { isVendedor: false },
      { isEnsamblador: false },
    ],
  },
  methods: {
    login() {},
  },
});
