require("colors");
const { inquirerMenu, pausa,leerInput,verificarCadena} = require("./helpers/inquirer");
const main = async () => {
  let op = "";

  do {
    opt = await inquirerMenu();

    switch (opt) {
        case '1':
            const cadena = await leerInput('Ingrese una cadena:');
            verificarCadena(cadena);
            break;
    }
    await pausa();
  } while (opt != 0);
};

main();
