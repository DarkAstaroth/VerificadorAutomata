require("colors");
const {
  inquirerMenu,
  pausa,
  leerInput,
  verificarCadena,
  tokensDesc,
  indicadoresDesc,
  numerosDesc,
  operadoresDesc,
  palabrasDesc,
  integrantes,
} = require("./helpers/inquirer");
const main = async () => {
  let op = "";

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const cadena = await leerInput("Ingrese una cadena:");
        verificarCadena(cadena);
        break;
      case "2":
        const opt2 = await tokensDesc();
        switch (opt2) {
          case "1":
            indicadoresDesc();
            break;
          case "2":
            numerosDesc();
            break;
          case "3":
            operadoresDesc();
            break;
          case "4":
            palabrasDesc();
            break;

          default:
            break;
        }
        break;
      case "3":
        integrantes();
        break;
    }
    await pausa();
  } while (opt != 0);
};

main();
