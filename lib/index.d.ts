declare namespace dotty {

  function exists(obj: any, path: string | string[]): boolean;
  function get(obj: any, path: string | string[]): any;
  function put(obj: any, path: string | string[], value: any): boolean;
  function search(obj: any, path: string | Array<string | RegExp>, cb: SearchHandler): any[];
  function removeSearch(obj: any, path: string | Array<string | RegExp>): any;
  function remove(obj: any, path: string | string[]): boolean;
  function deepKeys(obj: any, options: { leavesOnly: boolean; asStrings: boolean; }, prefix: string): string[];

  interface SearchHandler {
    (value: any, parent: any, key: string | number): void;
  }
}

export = dotty;
