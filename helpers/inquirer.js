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
        name: `${"2.".green}Tokens`,
      },
      {
        value: "3",
        name: `${"3.".green}Integrantes`,
      },
    ],
  },
];

const tokens = [
  {
    type: "list",
    name: "opcion",
    message: "¿Elige una opción para saber su descripción?",
    choices: [
      {
        value: "1",
        name: `${"1.".green}Indicadores`,
      },
      {
        value: "2",
        name: `${"2.".green}Números reales`,
      },
      {
        value: "3",
        name: `${"3.".green}Operadores relacionales`,
      },
      {
        value: "4",
        name: `${"4.".green}Palabras reservadas`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("      PROYECTO INF 154".rainbow);
  console.log("   Seleccione una opcion".white);
  console.log("===========================\n".green);

  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const tokensDesc = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("   Seleccione una opcion".white);
  console.log("===========================\n".green);

  const { opcion } = await inquirer.prompt(tokens);
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

  while ((estado != qf[0], estado != 63 && i < cadena.length)) {
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
  console.log("Estado final " + estado);
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

    if (estado == 5) {
      console.log(colors.green("Indicador"));
    }
    if (estado == 7 || estado == 10 || estado == 63 || estado == 15) {
      console.log(colors.green("Número Real"));
    }
    if (estado == 17 || estado == 19 || estado == 21 || estado == 23) {
      console.log("Operador relacional".green);
    }
    if (
      estado == 28 ||
      estado == 30 ||
      estado == 32 ||
      estado == 37 ||
      estado == 47 ||
      estado == 43 ||
      estado == 53 ||
      estado == 62
    ) {
      console.log(colors.green("Palabra Reservada"));
    }
  } else {
    console.log(estado);
    console.log("Cadena Rechazada".red);
  }
};


const indicadoresDesc=  () => {
  console.log("===========================".green);
  console.log("   INDICADORES".rainbow);
  console.log("===========================\n".green);
  console.log(`
* Los únicos caracteres permitidos para los identificadores son todos los caracteres ${"alfanuméricos".green},
 ${"“$”".green}(signo de dólar) y ${"‘_’".green} (guión bajo).

* Los identificadores no deben comenzar con dígitos (). Por ejemplo, “123java” no es un identificador de Java válido.

* Los identificadores de Java distinguen entre mayúsculas y minúsculas.

* No hay límite en la longitud del identificador, pero es aconsejable usar solamente una longitud óptima de 4 a 15 caracteres.

* Las palabras reservadas no se pueden usar como un identificador.
  `)
}

const numerosDesc=  () => {
  console.log("===========================".green);
  console.log("   NÚMEROS REALES".rainbow);
  console.log("===========================\n".green);
  console.log(`
  Los números reales son cualquier número que corresponda a un punto en la recta real 
  y pueden clasificarse en números naturales, enteros, racionales e irracionales.
  
  ${"Ej".green}
      R = {-1, -2, -3 , 0 , 1 , 2 , 3 , 3.4 , 44.65 , -98.32 , etc..}
  `)
}

const operadoresDesc=  () => {
  console.log("===========================".green);
  console.log("   NÚMEROS REALES".rainbow);
  console.log("===========================\n".green);
  console.log(`
  Los operadores relacionales son símbolos que se usan para comparar dos valores. 
  Si el resultado de la comparación es correcto la expresión considerada es verdadera, en caso contrario es falsa.

  ${"Simbolos:".green}
            { < , > , == , != , >= , <= }
  `)
}

const palabrasDesc=  () => {
  console.log("===========================".green);
  console.log("   PALABRAS RESERVADAS".rainbow);
  console.log("===========================\n".green);
  console.log(`
  Cualquier lenguaje de programación reserva algunas palabras para representar funcionalidades definidas por ese lenguaje. 
  Estas palabras se llaman palabras reservadas.

  ${"Palabras reservadas en el proyecto : ".green}
          {while,  do, for, class, return, float, public, protected}
  `)
}

const integrantes =  () => {
  console.log("================================".green);
  console.log("   INTEGRANTES DEL PROYECTO".rainbow);
  console.log("================================\n".green);
  console.log(`
    * Ninahuanca Ayala Victor Manuel
    * Uruchi Quispe Dania Daniela
  `)
}



module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  verificarCadena,
  tokensDesc,
  indicadoresDesc,
  numerosDesc,
  operadoresDesc,
  palabrasDesc,
  integrantes
};
