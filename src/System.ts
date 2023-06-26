export default class System {
  // singleton
  private static _handle: System;
  static get Handle(): System {
    if (System._handle === undefined) {
      System._handle = new System();
    }
    return System._handle
  }
  //-----------------------------------
  constructor() {
    
  }

  async loadJsFile(src: string): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
      const themejs = document.createElement('script');
      themejs.setAttribute('src', src);
      document.head.appendChild(themejs)
      themejs.onload = () => {
        resolve();
      }
    });
  }
}