export class Constanst {

  // Patterns de validacion de datos de formulario /^(([a-zA-Z0-9]([\.\-\_]){1})|([a-zA-Z0-9]))+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4}|[a-zA-Z]{1,3}\.[a-zA-Z]{1,3})$/
  public static Pattern = {
    Form: {
      email: /^(([a-zA-Z0-9]([\.\-\_]){1})|([a-zA-Z0-9]))+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4}|[a-zA-Z]{1,3}\.[a-zA-Z]{1,3})$/,
      name: /^([A-Za-zéáíóúÁÉÍÓÚñÑ']+(\s{1})?)+[A-Za-zéáíóúÁÉÍÓÚñÑ']$/,
    },
  };
  // Constantes de respuestas de servicios
  public static SUCCESS = 'SUCCESS';
  public static ERROR = 'ERROR';
  public static ACCEPT = 'accept';

}
