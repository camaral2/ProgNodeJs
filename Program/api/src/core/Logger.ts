
export abstract class Logger {

  public static info(m: string): void {
    console.log('info:', m);
  }
  public static error(m: string | Error): void {
    let msgError: string;

    if (typeof (m) === 'string')
      msgError = m;
    else
      msgError = m.message;

    console.log('error:', msgError);
  }
  public static debug(m: string, v: string): void {
    console.log('debug:', m, v);
  }

}
