//index.js

const r2 = require('../../wxapp-r2');

var app = getApp();
Page({
  data: {
    success: 0,
    fail: 0
  },
  onLoad: async function() {
    console.dir(r2);

    r2.debug = true;

    try {
      const text1 = await r2('https://www.baidu.com').text;
      console.log(text1);
    } catch (err) {}

    try {
      const text2 = await r2.put('https://www.baidu.com').text;
      console.log(text2);
    } catch (err) {}

    try {
      const text3 = await r2.post('https://www.baidu.com').text;
      console.log(text3);
    } catch (err) {}

    try {
      const text4 = await r2.delete('https://www.baidu.com').text;
      console.log(text4);
    } catch (err) {}
  }
});
