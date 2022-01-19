const inquirer = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");
require("colors");
var colors = require("colors");
const { mt, qf, pr } = require("../helpers/matrizT");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué deseas hacer?",
    choices: [
      {
        value: "1",
        name: `${"1.".green}Verificar Cadena`,
      },
      {
        value: "2",
        name: `${"2.".green}Integrantes`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("   Seleccione una opcion".white);
  console.log("===========================\n".green);

  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const leerInput = async (mensaje) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message: mensaje,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const verificarCadena = async (cadena) => {
  console.log("cadena:".green + " " + colors.blue(cadena));
  let e = "";

  // imprimir cadena
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == " ") {
      e = e + `"_"`;
    } else {
      e = e + cadena[i] + ", ";
    }
  }
  console.log(`E = { ${e} }`);

  // Verficar Cadena
  console.log(colors.magenta("TRANSICIONES DE LA CADENA : "));
  let estado = 0;
  let i = 0;
  let simbolo = 0;
  console.log("estado inicial : q0");
  while ((estado != qf[0], estado != 72 && i < cadena.length)) {
    const sub = cadena[i];

    // obteniendo el numero para el simbolo
    for (let j = 0; j < pr.length; j++) {
      if (pr[j] == sub) {
        simbolo = j;
      }
    }

    estado = mt[estado][simbolo];
    if (estado) {
      console.log(colors.yellow("siguiente estado : q" + estado + ""));
    } else {
      console.log(colors.red("No existe siguiente estado"));
      return;
    }

    // incrementando i
    i++;
  }

  // mostrando resultado
  console.log("Estado final "+estado);
  console.log(colors.magenta("RESULTADO: "));
  if (
    estado == qf[0] ||
    estado == qf[1] ||
    estado == qf[2] ||
    estado == qf[3] ||
    estado == qf[4] ||
    estado == qf[5] ||
    estado == qf[6] ||
    estado == qf[7] ||
    estado == qf[8] ||
    estado == qf[9] ||
    estado == qf[10] ||
    estado == qf[11] ||
    estado == qf[12] ||
    estado == qf[13] ||
    estado == qf[14] ||
    estado == qf[15] ||
    estado == qf[16] ||
    estado == qf[17]
  ) {
    console.log("Cadena Aceptada".green);
    
    if (
      estado == 6 ||
      estado == 9 ||
      estado == 13 ||
      estado == 26 ||
      estado == 31 ||
      estado == 41 ||
      estado == 47
    ) {
      console.log(colors.green("Palabra reservada"));
    }
    if (estado == 71) {
      console.log(colors.green("Indicador"));
    }
    if (estado == 55 || estado == 58 || estado == 61 || estado == 64 || estado == 70) {
      console.log(colors.green("Número Real"));
    }
    if (estado == 49 || estado == 51 || estado == 53) {
      console.log("Operador relacional".green);
    }
  } else {
    console.log(estado);
    console.log("Cadena Rechazada".red);
  }
};

module.exports = { inquirerMenu, pausa, leerInput, verificarCadena };
