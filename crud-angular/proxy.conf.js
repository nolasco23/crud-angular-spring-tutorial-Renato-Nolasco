const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://localhost:8080/",
    secure: "false", //SSL se for para prod habilitar
    logLevel: "debug",
  },
];

module.exports = PROXY_CONFIG
