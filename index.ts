/**
 * Created by axetroy on 17-6-23.
 */
/// <reference path="./index.d.ts" />

interface MethodOptions$ {
  body?: string | Object;
  header?: HttpHeader$;
}

interface Options$ extends MethodOptions$ {
  method: string;
  url: string;
}

const defaultOptions: Options$ = {
  method: 'GET',
  url: '',
  body: '',
  header: {}
};

type R2ConstructorArgv$ = Options$ | string;

function resolve(data) {
  return Promise.resolve(data);
}

function reject(data) {
  return Promise.reject(data);
}

let isDebug: boolean = false;

class R2 {
  private options: Options$;
  constructor(argv: R2ConstructorArgv$) {
    if (typeof argv === 'string') {
      this.options = { ...defaultOptions, ...{ url: argv } };
    } else if (typeof argv === 'object') {
      this.options = { ...defaultOptions, ...argv };
    }
  }

  /**
   * set request method
   * @param {string} method
   * @returns {R2}
   * @private
   */
  public _setMethod(method: string): R2 {
    this.options.method = method;
    return this;
  }

  private async request(): Promise<any> {
    const method: string = this.options.method;
    const url: string = this.options.url;
    return new Promise((resolve, reject) => {
      wx.request({
        method,
        url,
        data: this.options.body,
        header: this.options.header,
        dataType: 'json',
        success: res => {
          if (res.statusCode >= 400) {
            reject(res.data);
          } else {
            resolve(res.data);
          }
        },
        fail: res => {
          reject(res.data);
        }
      });
    })
      .then(data => {
        if (isDebug) {
          console.log(`%c[${method}]%c: ${url}`, 'color:green', 'color:black');
        }
        return resolve(data);
      })
      .catch(data => {
        if (isDebug) {
          console.log(`%c[${method}]%c: ${url}`, 'color:red', 'color:black');
        }
        return reject(data);
      });
  }

  /**
   * get response text
   * @returns {Promise<any>}
   */
  public get text(): Promise<any> {
    return this.request().then(data => {
      if (typeof data !== 'object') {
        try {
          data = JSON.stringify(data);
        } catch (err) {
          return reject(err);
        }
      }
      return resolve(data);
    });
  }

  /**
   * get response json
   * @returns {Promise<any>}
   */
  public get json(): Promise<any> {
    return this.request().then(data => {
      if (typeof data !== 'object') {
        try {
          data = JSON.parse(data);
        } catch (err) {
          return reject(err);
        }
      }
      return resolve(data);
    });
  }
}

function main(opts: R2ConstructorArgv$) {
  return new R2(opts);
}

Object.defineProperty(main, 'debug', {
  set(val: boolean) {
    isDebug = val;
  }
});

module.exports = main;

module.exports['get'] = (argv: R2ConstructorArgv$, opts: MethodOptions$) =>
  new R2(argv)._setMethod('GET');

module.exports['post'] = (argv: R2ConstructorArgv$, opts: MethodOptions$) =>
  new R2(argv)._setMethod('POST');

module.exports['put'] = (argv: R2ConstructorArgv$, opts: MethodOptions$) =>
  new R2(argv)._setMethod('PUT');

module.exports['delete'] = (argv: R2ConstructorArgv$, opts: MethodOptions$) =>
  new R2(argv)._setMethod('DELETE');
