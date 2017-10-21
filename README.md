# wxapp-r2

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/wxapp-r2.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/axetroy/wxapp-r2.svg?branch=master)](https://travis-ci.org/axetroy/wxapp-r2)
[![Dependency](https://david-dm.org/axetroy/wxapp-r2.svg)](https://david-dm.org/axetroy/wxapp-r2)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/wxapp-r2.svg)](https://badge.fury.io/js/wxapp-r2)

微信小程序的r2实现

## Installation
```bash
npm install wxapp-r2 --save
```

[example](https://github.com/axetroy/wxapp-r2/tree/master/example)

## Usage

```javascript

// es6
import r2 from 'wxapp-r2';

// commonJS
const r2 = require('wxapp-r2');

async function main(){
    const res = await r2('https://api.github.com').json;
    console.log(res);
}
```

## Related

[wxapp-fetch](https://github.com/axetroy/wxapp-fetch) fetch API implement for WeCHat App
[wxapp-fetch](https://github.com/axetroy/wxapp-http) 微信小程序的http模块，Tiny but Powerful
[wxapp-fetch](https://github.com/axetroy/wxapp-XMLHttpRequest) Web XMLHttpRequest implement for WeChat APP

## Contributing

```bash
git clone https://github.com/axetroy/wxapp-r2.git
cd ./wxapp-r2
yarn
yarn run start
```

1. 打开微信web开发者工具， 加载wxapp-r2/example目录
2. 修改index.ts

欢迎PR.

You can flow [Contribute Guide](https://github.com/axetroy/wxapp-r2/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/axetroy/wxapp-r2/commits?author=axetroy "Code") [🔌](#plugin-axetroy "Plugin/utility libraries") [⚠️](https://github.com/axetroy/wxapp-r2/commits?author=axetroy "Tests") [🐛](https://github.com/axetroy/wxapp-r2/issues?q=author%3Aaxetroy "Bug reports") [🎨](#design-axetroy "Design") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/wxapp-r2/blob/master/LICENSE)
