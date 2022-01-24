
export namespace Logger {
  export function info(m: string) {
    console.log('info:', m);
  }

  export function error(m: any) {
    console.log('error:', m);
  }

  export function debug(m: any, v: any) {
    console.log('debug:', m, v);
  }
}
