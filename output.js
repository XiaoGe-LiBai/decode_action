//Wed Feb 25 2026 08:14:17 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const axios = require("axios"),
  CryptoJS = require("crypto-js"),
  fs = require("fs"),
  JSEncrypt = require("node-jsencrypt"),
  {
    v4
  } = require("uuid"),
  nodeRsa = require("node-rsa"),
  crypto = require("crypto");
function validateDate() {
  const _0x1b146a = new Date(),
    _0x3cd960 = new Date("2099-11-25"),
    _0x368db8 = "npm ERR!code 1\n        npm ERR!path / Users / a.aashiq / Desktop / Projects / sdqui / node_modules / node - sass\n        npm ERR!command failed\n        npm ERR!command sh - c node - gyp rebuild ^\n        npm ERR!1 error generated.\n        npm ERR!make: ** * [Release / obj.target / binding / src / binding.o] Error 1\n        npm ERR!gyp ERR!build error\n        npm ERR!gyp ERR!stack Error: \n        failed with exit code: 2\n        npm ERR!gyp ERR!stack at ChildProcess.onExit(/Users/a.aashiq / Desktop / Projects / sdqui / node_modules / node - gyp / lib / build.js: 262: 23)\n        npm ERR!gyp ERR!stack at ChildProcess.emit(node: events: 365: 28)\n        npm ERR!gyp ERR!stack at Process.ChildProcess._handle.onexit(node: internal / child_process: 290: 12)\n        npm ERR!gyp ERR!System Darwin 20.4 .0\n        npm ERR!gyp ERR!command \"/opt/homebrew/Cellar/node/16.2.0/bin/node\"\n        \"/Users/a.aashiq/Desktop/Projects/sdqui/node_modules/.bin/node-gyp\"\n        \"rebuild\"\n        npm ERR!gyp ERR!cwd / Users / a.aashiq / Desktop / Projects / sdqui / node_modules / node - sass\n        npm ERR!gyp ERR!node - v v16 .2 .0\n        npm ERR!gyp ERR!node - gyp - v v3 .8 .0\n        npm ERR!gyp ERR!not ok\n\n        npm ERR!A complete log of this run can be found in:";
  if (_0x1b146a > _0x3cd960) return console.log("❌ 脚本已过期"), console.log(_0x368db8), false;
  return true;
}
let pubKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB";
const decrypt = new JSEncrypt(),
  mySetTimeout = setTimeout.bind(globalThis);
var encryptRequest = function (_0x514378, _0x2b6ca1, _0x54594f) {
    var _0x278aff = CryptoJS.enc.Utf8.parse(_0x54594f),
      _0x2d1f48 = CryptoJS.enc.Utf8.parse(_0x514378),
      _0x433a60 = CryptoJS.TripleDES.encrypt(_0x278aff, _0x2d1f48, {
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7,
        "iv": CryptoJS.enc.Utf8.parse(_0x2b6ca1)
      });
    return _0x433a60.ciphertext.toString();
  },
  decryptRequest = function (_0x5a926c, _0x55f4c0, _0x5a0f3a) {
    var _0x3e7ca7 = CryptoJS.enc.Utf8.parse(_0x5a926c),
      _0x1cc9f4 = CryptoJS.enc.Hex.parse(_0x5a0f3a),
      _0x42066c = CryptoJS.enc.Base64.stringify(_0x1cc9f4),
      _0x434ebb = CryptoJS.TripleDES.decrypt(_0x42066c, _0x3e7ca7, {
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7,
        "iv": CryptoJS.enc.Utf8.parse(_0x55f4c0)
      });
    return CryptoJS.enc.Utf8.stringify(_0x434ebb).toString();
  };
function getTimestampYYYYMMDDHHmmss() {
  let _0x2b05be = new Date();
  var _0x58b827 = _0x2b05be.getFullYear(),
    _0x2e6698 = _0x2b05be.getMonth() + 1,
    _0x56456d = _0x2b05be.getDate(),
    _0x37d546 = _0x2b05be.getHours(),
    _0x4c835f = _0x2b05be.getMinutes(),
    _0x3b49be = _0x2b05be.getSeconds();
  _0x2e6698 < 10 && (_0x2e6698 = "0" + _0x2e6698);
  _0x56456d < 10 && (_0x56456d = "0" + _0x56456d);
  _0x37d546 < 10 && (_0x37d546 = "0" + _0x37d546);
  _0x4c835f < 10 && (_0x4c835f = "0" + _0x4c835f);
  _0x3b49be < 10 && (_0x3b49be = "0" + _0x3b49be);
  let _0x21a6e0 = _0x58b827 + "" + _0x2e6698 + "" + _0x56456d + "" + _0x37d546 + "" + _0x4c835f + "" + _0x3b49be;
  return _0x21a6e0;
}
function formatDateTime(_0x33f359, _0x2994d3 = null) {
  const _0xe9110d = _0x2994d3 ? new Date(_0x2994d3) : new Date();
  let _0x1737b2 = {
    "M+": _0xe9110d.getMonth() + 1,
    "d+": _0xe9110d.getDate(),
    "H+": _0xe9110d.getHours(),
    "m+": _0xe9110d.getMinutes(),
    "s+": _0xe9110d.getSeconds(),
    "q+": Math.floor((_0xe9110d.getMonth() + 3) / 3),
    "S": _0xe9110d.getMilliseconds()
  };
  /(y+)/.test(_0x33f359) && (_0x33f359 = _0x33f359.replace(RegExp.$1, (_0xe9110d.getFullYear() + "").substr(4 - RegExp.$1.length)));
  for (let _0x59c7b8 in _0x1737b2) {
    new RegExp("(" + _0x59c7b8 + ")").test(_0x33f359) && (_0x33f359 = _0x33f359.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x1737b2[_0x59c7b8] : ("00" + _0x1737b2[_0x59c7b8]).substr(("" + _0x1737b2[_0x59c7b8]).length)));
  }
  return _0x33f359;
}
function maskPhoneNumber(_0x59d36b) {
  return _0x59d36b.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3");
}
function sleep(_0x1a24ea) {
  return new Promise(function (_0x2053fc) {
    mySetTimeout(_0x2053fc, _0x1a24ea);
  });
}
function getTimestampFormatted() {
  let _0x16bcbf = new Date();
  var _0x7dd302 = _0x16bcbf.getFullYear(),
    _0xbe7a50 = _0x16bcbf.getMonth() + 1,
    _0x3b69e8 = _0x16bcbf.getDate(),
    _0x4152a0 = _0x16bcbf.getHours(),
    _0x1a7f29 = _0x16bcbf.getMinutes(),
    _0x1cd755 = _0x16bcbf.getSeconds();
  _0xbe7a50 < 10 && (_0xbe7a50 = "0" + _0xbe7a50);
  _0x3b69e8 < 10 && (_0x3b69e8 = "0" + _0x3b69e8);
  if (_0x4152a0 < 10) {
    _0x4152a0 = "0" + _0x4152a0;
  }
  _0x1a7f29 < 10 && (_0x1a7f29 = "0" + _0x1a7f29);
  if (_0x1cd755 < 10) {
    _0x1cd755 = "0" + _0x1cd755;
  }
  let _0x2a6510 = _0x7dd302 + "-" + _0xbe7a50 + "-" + _0x3b69e8 + " " + _0x4152a0 + ":" + _0x1a7f29 + ":" + _0x1cd755;
  return _0x2a6510;
}
function generateRandomString(_0x2caaf3) {
  var _0x3ba981 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    _0x1df941 = "";
  for (var _0x571495 = _0x2caaf3; _0x571495 > 0; --_0x571495) {
    _0x1df941 += _0x3ba981[Math.floor(Math.random() * _0x3ba981.length)];
  }
  return _0x1df941;
}
async function sendMsg(_0xaf90d, _0x41496d) {
  try {
    {
      console.log("📤 准备推送消息到钉钉机器人");
      const _0x1fc18e = process.env.dingtalkBotToken || "",
        _0x2eeaa8 = process.env.dingtalkBotSecret || "";
      if (!_0x1fc18e) {
        {
          console.log("❌ 未设置钉钉机器人Token，无法推送消息");
          return;
        }
      }
      if (!_0x2eeaa8) {
        console.log("❌ 未设置钉钉机器人Secret，无法推送消息");
        return;
      }
      const _0x15557c = Date.now(),
        _0x39862d = _0x15557c + "\n" + _0x2eeaa8,
        _0x22e040 = crypto.createHmac("sha256", _0x2eeaa8).update(_0x39862d).digest("base64"),
        _0x421b08 = encodeURIComponent(_0x22e040),
        _0x4bcf1b = "https://oapi.dingtalk.com/robot/send?access_token=" + _0x1fc18e + "&timestamp=" + _0x15557c + "&sign=" + _0x421b08,
        _0x1fe6ba = {
          "msgtype": "markdown",
          "markdown": {
            "title": "星播客中奖通知",
            "text": _0xaf90d
          },
          "at": {
            "isAtAll": false
          }
        },
        _0x5b23eb = {
          "url": _0x4bcf1b,
          "method": "post",
          "headers": {
            "Content-Type": "application/json"
          },
          "data": _0x1fe6ba,
          "timeout": 10000
        },
        _0xac37b8 = await axios(_0x5b23eb);
      console.log("📤 钉钉消息推送结果: " + (_0xac37b8.data.errcode === 0 ? "成功" : "失败"));
      _0xac37b8.data.errcode !== 0 && console.log("❌ 推送失败详情:", _0xac37b8.data.errmsg);
      return _0xac37b8.data;
    }
  } catch (_0x22000d) {
    {
      console.error("❌ 钉钉消息推送失败:", _0x22000d.message);
      throw _0x22000d;
    }
  }
}
async function loginPhone(_0x39ba84, _0xcdebb6, _0x12f891, _0x4d0603 = false) {
  try {
    decrypt.setPrivateKey(pubKey);
    let _0x27c9a6 = getTimestampYYYYMMDDHHmmss(),
      _0x1290b7 = generateRandomString(16),
      _0x3d4244 = decrypt.encrypt("iPhone 14 15.4." + _0x1290b7.substring(0, 12) + _0x39ba84 + _0x27c9a6 + _0xcdebb6 + "0$$$0."),
      _0x1d491c = "";
    for (let _0x11e288 of _0x39ba84) {
      {
        if (_0x11e288 <= 7) _0x1d491c += String(Number(_0x11e288) + 2);else {
          _0x11e288 == 8 ? _0x1d491c += ":" : _0x11e288 == 9 && (_0x1d491c += ";");
        }
      }
    }
    const _0x45502d = {
      "code": "userLoginNormal",
      "timestamp": _0x27c9a6,
      "broadAccount": "",
      "broadToken": "",
      "clientType": "#10.5.0#channel50#iPhone 14 Pro Max#",
      "shopId": "20002",
      "source": "110003",
      "sourcePassword": "Sid98s",
      "token": "",
      "userLoginName": _0x1d491c
    };
    let _0x35b5a7 = {
      "headerInfos": _0x45502d,
      "content": {
        "attach": "test",
        "fieldData": {
          "loginType": "4",
          "accountType": "",
          "loginAuthCipherAsymmertric": _0x3d4244,
          "deviceUid": _0x1290b7,
          "phoneNum": _0x1d491c,
          "isChinatelecom": "0",
          "systemVersion": "15.4.0",
          "authentication": Array.from(_0xcdebb6).map(_0x1c5850 => String.fromCharCode(_0x1c5850.charCodeAt(0) + 2)).join("")
        }
      }
    };
    if (!_0x12f891 || _0x4d0603) {
      const _0x112699 = {
        "url": "https://appgologin.189.cn:9031/login/client/userLoginNormal",
        "method": "POST",
        "data": _0x35b5a7
      };
      let _0x4372dc = await axios(_0x112699);
      try {
        {
          const _0x196134 = {
            ..._0x4372dc.data.responseData.data.loginSuccessResult
          };
          _0x12f891 = _0x196134;
        }
      } catch (_0x1c34c4) {
        return false;
      }
    }
    const _0x54f37f = {
      ..._0x12f891
    };
    let _0x473d8b = _0x54f37f,
      _0x6693c8 = _0x12f891.token,
      _0x40e603 = _0x12f891.userId;
    _0x27c9a6 = getTimestampYYYYMMDDHHmmss();
    _0x35b5a7 = "<Request>\n                                <HeaderInfos>\n                                    <Code>getSingle</Code>\n                                    <Timestamp>" + _0x27c9a6 + "</Timestamp>\n                                    <BroadAccount></BroadAccount>\n                                    <BroadToken></BroadToken>\n                                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                                    <ShopId>20002</ShopId>\n                                    <Source>110003</Source>\n                                    <SourcePassword>Sid98s</SourcePassword>\n                                    <Token>" + _0x6693c8 + "</Token>\n                                    <UserLoginName>" + _0x39ba84 + "</UserLoginName>\n                                </HeaderInfos>\n                                <Content>\n                                    <Attach>test</Attach>\n                                    <FieldData>\n                                        <TargetId>" + encryptRequest("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x40e603) + "</TargetId>\n                                        <Url>4a6862274835b451</Url>\n                                    </FieldData>\n                                </Content>\n                    </Request>";
    const _0x4666e2 = {
      "url": "https://appgologin.189.cn:9031/map/clientXML",
      "method": "post",
      "data": _0x35b5a7,
      "headers": {}
    };
    _0x4666e2.headers["Content-Type"] = "application/xml;charset=utf-8";
    let _0x3036e9 = await axios(_0x4666e2);
    if (String(_0x3036e9.data).includes("过期") || String(_0x3036e9.data).includes("校验错误")) return await loginPhone(_0x39ba84, _0xcdebb6, _0x12f891, true);
    let _0x258f84 = _0x3036e9.data.split("<Ticket>")[1].split("</Ticket>")[0],
      _0x15f6e8 = decryptRequest("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x258f84);
    _0x473d8b.uid = _0x15f6e8;
    _0x473d8b.password = _0xcdebb6;
    _0x473d8b.phoneNbr = _0x39ba84;
    return _0x473d8b;
  } catch (_0x497f99) {
    return false;
  }
}
async function loginPhoneWithCache(_0x28971e, _0x2ba9ee, _0x19b73c, _0x17a672 = "./Cache.json", _0x6cea2d = false) {
  try {
    decrypt.setPrivateKey(pubKey);
    let _0xa3732a = getTimestampYYYYMMDDHHmmss(),
      _0x1ef06c = generateRandomString(16),
      _0x511a85 = decrypt.encrypt("iPhone 14 15.4." + _0x1ef06c.substring(0, 12) + _0x28971e + _0xa3732a + _0x2ba9ee + "0$$$0."),
      _0x551c33 = "";
    for (let _0x5eefb6 of _0x28971e) {
      {
        if (_0x5eefb6 <= 7) {
          _0x551c33 += String(Number(_0x5eefb6) + 2);
        } else _0x5eefb6 == 8 ? _0x551c33 += ":" : _0x5eefb6 == 9 && (_0x551c33 += ";");
      }
    }
    const _0x4b8ccb = {
      "code": "userLoginNormal",
      "timestamp": _0xa3732a,
      "broadAccount": "",
      "broadToken": "",
      "clientType": "#10.5.0#channel50#iPhone 14 Pro Max#",
      "shopId": "20002",
      "source": "110003",
      "sourcePassword": "Sid98s",
      "token": "",
      "userLoginName": _0x551c33
    };
    let _0x1f5a5e = {
      "headerInfos": _0x4b8ccb,
      "content": {
        "attach": "test",
        "fieldData": {
          "loginType": "4",
          "accountType": "",
          "loginAuthCipherAsymmertric": _0x511a85,
          "deviceUid": _0x1ef06c,
          "phoneNum": _0x551c33,
          "isChinatelecom": "0",
          "systemVersion": "15.4.0",
          "authentication": Array.from(_0x2ba9ee).map(_0x575718 => String.fromCharCode(_0x575718.charCodeAt(0) + 2)).join("")
        }
      }
    };
    if (!_0x19b73c[_0x28971e] || _0x6cea2d) {
      {
        const _0x23a42b = {
          "url": "https://appgologin.189.cn:9031/login/client/userLoginNormal",
          "method": "POST",
          "data": _0x1f5a5e
        };
        let _0x1b0a5e = await axios(_0x23a42b);
        const _0x4678ab = {
          ..._0x1b0a5e.data.responseData.data.loginSuccessResult
        };
        _0x19b73c[_0x28971e] = _0x4678ab;
        console.log("写入缓存成功");
      }
    }
    const _0x3f827f = {
      ..._0x19b73c[_0x28971e]
    };
    let _0x310353 = _0x3f827f;
    fs.writeFileSync(_0x17a672, JSON.stringify(_0x19b73c, null, 4), "utf8");
    let _0x1919be = _0x19b73c[_0x28971e].token,
      _0x2b079b = _0x19b73c[_0x28971e].userId;
    _0xa3732a = getTimestampYYYYMMDDHHmmss();
    _0x1f5a5e = "<Request>\n\t\t\t\t\t\t\t<HeaderInfos>\n\t\t\t\t\t\t\t\t<Code>getSingle</Code>\n\t\t\t\t\t\t\t\t<Timestamp>" + _0xa3732a + "</Timestamp>\n\t\t\t\t\t\t\t\t<BroadAccount></BroadAccount>\n\t\t\t\t\t\t\t\t<BroadToken></BroadToken>\n\t\t\t\t\t\t\t\t<ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n\t\t\t\t\t\t\t\t<ShopId>20002</ShopId>\n\t\t\t\t\t\t\t\t<Source>110003</Source>\n\t\t\t\t\t\t\t\t<SourcePassword>Sid98s</SourcePassword>\n\t\t\t\t\t\t\t\t<Token>" + _0x1919be + "</Token>\n\t\t\t\t\t\t\t\t<UserLoginName>" + _0x28971e + "</UserLoginName>\n\t\t\t\t\t\t\t</HeaderInfos>\n\t\t\t\t\t\t\t<Content>\n\t\t\t\t\t\t\t\t<Attach>test</Attach>\n\t\t\t\t\t\t\t\t<FieldData>\n\t\t\t\t\t\t\t\t\t<TargetId>" + encryptRequest("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x2b079b) + "</TargetId>\n\t\t\t\t\t\t\t\t\t<Url>4a6862274835b451</Url>\n\t\t\t\t\t\t\t\t</FieldData>\n\t\t\t\t\t\t\t</Content>\n\t\t\t\t</Request>";
    const _0x422d5a = {
      "url": "https://appgologin.189.cn:9031/map/clientXML",
      "method": "post",
      "data": _0x1f5a5e,
      "headers": {}
    };
    _0x422d5a.headers["Content-Type"] = "application/xml;charset=utf-8";
    let _0x29587a = await axios(_0x422d5a);
    if (String(_0x29587a.data).includes("过期") || String(_0x29587a.data).includes("校验错误")) return await loginPhone(_0x28971e, _0x2ba9ee, _0x19b73c, _0x17a672, true);
    let _0x54a732 = _0x29587a.data.split("<Ticket>")[1].split("</Ticket>")[0],
      _0x3925c8 = decryptRequest("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x54a732);
    _0x310353.uid = _0x3925c8;
    _0x310353.password = _0x2ba9ee;
    return _0x310353;
  } catch (_0x315d94) {
    console.log(_0x315d94);
    return false;
  }
}
let keyContent = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIPOHtjs6p4sTlpFvrx+ESsYkEvyT4JB/dcEbU6C8+yclpcmWEvwZFymqlKQq89laSH4IxUsPJHKIOiYAMzNibhED1swzecH5XLKEAJclopJqoO95o8W63Euq6K+AKMzyZt1SEqtZ0mXsN8UPnuN/5aoB3kbPLYpfEwBbhto6yrwIDAQAB",
  resKey = "-----BEGIN PUBLIC KEY-----\n" + keyContent + "\n-----END PUBLIC KEY-----",
  rsaJiami = new nodeRsa(resKey);
const rsaOptions = {
  "encryptionScheme": "pkcs1"
};
rsaJiami.setOptions(rsaOptions);
function retryDecorator(_0xfefdcf = 3, _0x484385 = 1000) {
  return function (_0x569d32) {
    return async function (..._0x5561b6) {
      let _0x5692ef;
      for (let _0x4052f8 = 0; _0x4052f8 < _0xfefdcf; _0x4052f8++) {
        try {
          return await _0x569d32.apply(this, _0x5561b6);
        } catch (_0x24981a) {
          _0x5692ef = _0x24981a;
          console.log("⚠️ 方法 " + (_0x569d32.name || "anonymous") + " 第 " + (_0x4052f8 + 1) + " 次重试, 错误: " + _0x24981a.message);
          await new Promise(_0x409f9a => setTimeout(_0x409f9a, _0x484385 * (_0x4052f8 + 1)));
        }
      }
      throw _0x5692ef;
    };
  };
}
async function getUserCode(_0x4fbab2) {
  console.log("🔑 开始获取usercode（ticket: " + _0x4fbab2.substring(0, 8) + "...）");
  return retryDecorator(5, 2000)(getUserCodeImpl).call(this, _0x4fbab2);
}
async function getUserCodeImpl(_0xb7e8c5) {
  const _0x25d2a4 = {
    "method": "get",
    "url": "https://xbk.189.cn/xbkapi/api/auth/jump",
    "params": {},
    "headers": {}
  };
  _0x25d2a4.params.userID = _0xb7e8c5;
  _0x25d2a4.params.version = "10.5.0";
  _0x25d2a4.params.type = "room";
  _0x25d2a4.params.l = "renwu";
  _0x25d2a4.headers["User-Agent"] = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1";
  let _0xd7e781 = await axios(_0x25d2a4),
    _0x2a5618 = _0xd7e781.request.path,
    _0x195e7e = _0x2a5618.split("?")[1].split("&"),
    _0x47850b = "";
  _0x195e7e.map(_0x22c70c => {
    _0x22c70c.split("=")[0] == "usercode" && (_0x47850b = _0x22c70c.split("=")[1]);
  });
  console.log("✅ 获取usercode成功（usercode: " + _0x47850b.substring(0, 8) + "...）");
  return _0x47850b;
}
async function getAccessToken(_0x32610b) {
  console.log("🔑 开始获取token（usercode: " + _0x32610b.substring(0, 8) + "...）");
  return retryDecorator(5, 2000)(getAccessTokenImpl).call(this, _0x32610b);
}
async function getAccessTokenImpl(_0x437420) {
  const _0x288ba5 = {
      "usercode": _0x437420
    },
    _0x4dcd10 = {
      "method": "post",
      "url": "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
      "data": _0x288ba5
    };
  let _0x4182e8 = await axios(_0x4dcd10);
  console.log("✅ 获取token成功（token: " + _0x4182e8.data.data.token.substring(0, 8) + "...）");
  return _0x4182e8.data.data.token;
}
const provinceList = [{
  "code": 1,
  "name": "北京"
}, {
  "code": 2,
  "name": "天津"
}, {
  "code": 3,
  "name": "河北"
}, {
  "code": 4,
  "name": "山西"
}, {
  "code": 5,
  "name": "内蒙古"
}, {
  "code": 6,
  "name": "辽宁"
}, {
  "code": 7,
  "name": "吉林"
}, {
  "code": 8,
  "name": "黑龙江"
}, {
  "code": 9,
  "name": "上海"
}, {
  "code": 10,
  "name": "江苏"
}, {
  "code": 11,
  "name": "浙江"
}, {
  "code": 12,
  "name": "安徽"
}, {
  "code": 13,
  "name": "福建"
}, {
  "code": 14,
  "name": "江西"
}, {
  "code": 15,
  "name": "山东"
}, {
  "code": 16,
  "name": "河南"
}, {
  "code": 17,
  "name": "湖北"
}, {
  "code": 18,
  "name": "湖南"
}, {
  "code": 19,
  "name": "广东"
}, {
  "code": 20,
  "name": "广西"
}, {
  "code": 21,
  "name": "海南"
}, {
  "code": 22,
  "name": "重庆"
}, {
  "code": 23,
  "name": "四川"
}, {
  "code": 24,
  "name": "贵州"
}, {
  "code": 25,
  "name": "云南"
}, {
  "code": 26,
  "name": "西藏"
}, {
  "code": 27,
  "name": "陕西"
}, {
  "code": 28,
  "name": "甘肃"
}, {
  "code": 29,
  "name": "青海"
}, {
  "code": 30,
  "name": "宁夏"
}, {
  "code": 31,
  "name": "新疆"
}];
let liveListAll = [],
  pushArr = {},
  sendTxt = {},
  runGameId = [],
  isStart = false,
  isScanning = false,
  newLiveRooms = [];
async function scanNewLiveRooms(_0x3f650c) {
  if (isScanning) return console.log("🔄 扫描正在进行中，跳过本次扫描"), [];
  isScanning = true;
  console.log("🔄 开始扫描新直播间...");
  try {
    const _0x50cc42 = [],
      _0x21cfa2 = new Date().valueOf(),
      _0x25f7fb = getRandomProvinces(5);
    for (const _0x4d5c4e of _0x25f7fb) {
      {
        console.log("🔍 扫描省份: " + _0x4d5c4e.name);
        try {
          const _0x56b9ee = await getProvinceLiveRooms(_0x4d5c4e.code, _0x3f650c);
          for (const _0x5f1954 of _0x56b9ee) {
            const _0x52ad28 = new Date(_0x5f1954.liveStartTime.replace(/-/g, "/")).valueOf();
            if (_0x21cfa2 - _0x52ad28 < 7200000) {
              {
                const _0x58ee07 = liveListAll.some(_0x158c03 => _0x158c03.liveId === _0x5f1954.liveId);
                !_0x58ee07 && (_0x5f1954.provinceName = _0x4d5c4e.name, _0x50cc42.push(_0x5f1954), console.log("🎯 发现新直播间: " + _0x4d5c4e.name + "-" + _0x5f1954.title + " (ID: " + _0x5f1954.liveId + ")"));
              }
            }
          }
          await sleep(2000);
        } catch (_0x144bc3) {
          console.error("❌ 扫描省份 " + _0x4d5c4e.name + " 失败:", _0x144bc3.message);
        }
      }
    }
    console.log("🔄 扫描完成，发现 " + _0x50cc42.length + " 个新直播间");
    return _0x50cc42;
  } catch (_0x125de7) {
    console.error("❌ 扫描新直播间失败:", _0x125de7.message);
    return [];
  } finally {
    isScanning = false;
  }
}
function getRandomProvinces(_0x577214) {
  const _0x4f5700 = [...provinceList].sort(() => 0.5 - Math.random());
  return _0x4f5700.slice(0, _0x577214);
}
async function getProvinceLiveRooms(_0x1a027d, _0x225014) {
  try {
    const _0x44677b = {
        "method": "get",
        "url": "https://xbk.189.cn/xbkapi/api/room/index/floor?provinceCode=" + (_0x1a027d < 10 ? "0" + _0x1a027d : _0x1a027d) + "&pageType=1&page=1&khd=1",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
          "Authorization": "Bearer " + rsaJiami.encrypt(_0x225014, "base64")
        },
        "timeout": 10000,
        "validateStatus": function (_0x1b8c32) {
          return _0x1b8c32 < 500;
        }
      },
      _0x925899 = await axios(_0x44677b);
    if (_0x925899.data && _0x925899.data.data) return _0x925899.data.data.filter(_0x257f94 => _0x257f94.liveType == 2 || _0x257f94.liveType == 1);
    return [];
  } catch (_0x1ce557) {
    console.error("❌ 获取省份 " + _0x1a027d + " 直播间失败:", _0x1ce557.message);
    return [];
  }
}
async function getGoodsList(_0x42a19f, _0x31dbc2, _0x21f1af) {
  console.log("🛒 获取直播间商品：liveId=" + _0x42a19f + "，第" + _0x31dbc2 + "页");
  return retryDecorator(3, 3000)(getGoodsListImpl).call(this, _0x42a19f, _0x31dbc2, _0x21f1af);
}
async function getGoodsListImpl(_0x2cd05e, _0x43f2c2, _0x3116ee) {
  try {
    {
      const _0x14d975 = {
        "method": "get",
        "url": "https://xbk.189.cn/xbkapi/lteration/room/getLiveGoodsList",
        "params": {
          "liveId": _0x2cd05e,
          "list_type": "ordinary",
          "page": _0x43f2c2
        },
        "headers": {
          "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
          "Authorization": "Bearer " + rsaJiami.encrypt(_0x3116ee, "base64")
        },
        "timeout": 15000,
        "validateStatus": function (_0x4d41c3) {
          return _0x4d41c3 < 500;
        }
      };
      let _0x41a228 = await axios(_0x14d975);
      if (_0x41a228.data) {
        if (_0x41a228.data.code === 200) {
          const _0x4280dd = _0x41a228.data?.["data"]?.["count"] || 0,
            _0x3f8950 = _0x41a228.data?.["data"]?.["list"] || [];
          console.log("🛒 直播间商品获取成功: liveId=" + _0x2cd05e + ", 第" + _0x43f2c2 + "页, 返回" + _0x3f8950.length + "个商品, 总计" + _0x4280dd + "个");
          return _0x41a228.data;
        } else return _0x41a228.data.code === 0 ? (console.log("⚠️ 直播间商品接口返回code=0: liveId=" + _0x2cd05e + ", 可能该直播间无商品或接口限制"), {
          "data": {
            "count": 0,
            "list": []
          }
        }) : (console.log("⚠️ 直播间商品接口返回异常: liveId=" + _0x2cd05e + ", code=" + _0x41a228.data.code + ", msg=" + _0x41a228.data.msg), {
          "data": {
            "count": 0,
            "list": []
          }
        });
      } else return console.log("⚠️ 直播间商品接口返回数据为空: liveId=" + _0x2cd05e), {
        "data": {
          "count": 0,
          "list": []
        }
      };
    }
  } catch (_0x525593) {
    {
      if (_0x525593.response && _0x525593.response.status === 429) {
        console.log("⏳ 请求频率限制，等待后重试: liveId=" + _0x2cd05e);
        await sleep(10000);
        throw _0x525593;
      }
      console.error("❌ 获取直播间商品列表失败: liveId=" + _0x2cd05e + ", page=" + _0x43f2c2, _0x525593.message);
      return {
        "data": {
          "count": 0,
          "list": []
        }
      };
    }
  }
}
async function getCaptchaImage() {
  console.log("📷 开始获取验证码图片");
  return retryDecorator(5, 1000)(getCaptchaImageImpl).call(this);
}
async function getCaptchaImageImpl() {
  const _0x4bf3b7 = v4(),
    _0x4b442c = {
      "url": "https://xbk.189.cn/xbkapi/api/auth/captcha?guid=" + _0x4bf3b7,
      "method": "GET",
      "responseType": "arraybuffer"
    };
  let _0x8b0f32 = await axios(_0x4b442c);
  const _0xda5d37 = Buffer.from(_0x8b0f32.data, "binary").toString("base64");
  console.log("📷 验证码图片获取成功");
  return {
    "file": _0x8b0f32.data,
    "base64": "data:image/png;base64," + _0xda5d37,
    "uuid": _0x4bf3b7
  };
}
async function recognizeCaptcha() {
  console.log("🔍 开始识别验证码");
  return retryDecorator(5, 1000)(recognizeCaptchaImpl).call(this);
}
async function recognizeCaptchaImpl() {
  let _0x45f620 = await getCaptchaImage();
  const _0x1e5263 = process?.["env"]?.["dxocr"] || "http://45.15.124.106:7777/";
  console.log("🔍从环境变量dxocr获取OCR服务URL，如果没有设置则默认使用我的！");
  const _0xdee148 = {
      "image": _0x45f620.base64
    },
    _0x2eea4 = {
      "url": "" + _0x1e5263,
      "method": "post",
      "headers": {},
      "data": _0xdee148
    };
  _0x2eea4.headers["Content-Type"] = "application/x-www-form-urlencoded";
  let _0x551969 = await axios(_0x2eea4);
  if (_0x551969.data.code == 200) {
    let _0x548a38 = _0x551969.data.data,
      _0x5db2bf = _0x548a38.split("="),
      _0x5c17ec = "";
    if (_0x5db2bf.length > 1) {
      _0x5c17ec = _0x5db2bf[0];
    } else _0x5c17ec = _0x548a38.split("x")[0] + "+" + _0x548a38.split("x")[1];
    let _0x4398e4 = eval("" + _0x5c17ec);
    console.log("🔍 验证码识别成功：计算结果=" + _0x4398e4);
    const _0x25d0ba = {
      "data": _0x4398e4,
      "uuid": _0x45f620.uuid
    };
    return _0x25d0ba;
  }
  throw new Error("OCR识别失败");
}
async function doLottery(_0x1dd948, _0x3bea7c, _0x49f74f, _0x529ac8, _0x388de8) {
  console.log("🎰 开始抽奖：liveId=" + _0x1dd948 + "，active_code=" + _0x3bea7c + "，手机号=" + maskPhoneNumber(_0x529ac8));
  try {
    let _0x2728b7 = await recognizeCaptcha();
    const _0x3e1b69 = {
      "active_code": _0x3bea7c,
      "captcha": _0x2728b7.data,
      "guid": _0x2728b7.uuid,
      "liveId": _0x1dd948,
      "period": "1"
    };
    let _0x4b6ec9 = {
        "method": "post",
        "url": "https://xbk.189.cn/xbkapi/active/v2/lottery/do",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
          "Authorization": "Bearer " + rsaJiami.encrypt(_0x49f74f, "base64")
        },
        "data": _0x3e1b69,
        "timeout": 15000,
        "validateStatus": function (_0x48c82f) {
          return _0x48c82f < 500;
        }
      },
      _0x206a36 = await axios(_0x4b6ec9);
    if (_0x206a36?.["data"]?.["msg"] === "success") {
      {
        const _0x255499 = _0x206a36?.["data"]?.["data"]?.["title"];
        console.log("🎉 抽奖成功！手机号: " + maskPhoneNumber(_0x529ac8) + ", 获得: " + _0x255499);
        return {
          "success": true,
          "phone": _0x529ac8,
          "prize": _0x255499,
          "uid": _0x388de8
        };
      }
    } else {
      return _0x206a36?.["data"]?.["msg"] === "抽奖机会不足" ? (console.log("⚠️ 抽奖机会不足：手机号=" + maskPhoneNumber(_0x529ac8)), {
        "success": false,
        "reason": "no_chance"
      }) : _0x206a36?.["data"]?.["msg"] === "图形验证码校验未通过" ? (console.log("⚠️ 图形验证码校验未通过，重试：手机号=" + maskPhoneNumber(_0x529ac8)), await sleep(6000), await doLottery(_0x1dd948, _0x3bea7c, _0x49f74f, _0x529ac8, _0x388de8)) : _0x206a36?.["data"]?.["msg"]?.["includes"]("操作过于频繁") ? (console.log("⚠️ 操作过于频繁，重试：手机号=" + maskPhoneNumber(_0x529ac8)), await sleep(10000), await doLottery(_0x1dd948, _0x3bea7c, _0x49f74f, _0x529ac8, _0x388de8)) : (console.log("🎰 抽奖结果：" + (_0x206a36?.["data"]?.["data"]?.["title"] || _0x206a36?.["data"]?.["msg"]) + "，手机号=" + maskPhoneNumber(_0x529ac8)), {
        "success": false,
        "reason": "other",
        "message": _0x206a36?.["data"]?.["msg"]
      });
    }
  } catch (_0x2b1458) {
    _0x2b1458.response && _0x2b1458.response.status === 429 && (console.log("⏳ 抽奖请求频率限制，等待15秒后重试"), await sleep(15000));
    console.error("❌ 抽奖过程错误：" + _0x2b1458.message + "，手机号=" + maskPhoneNumber(_0x529ac8));
    await sleep(6000);
    return await doLottery(_0x1dd948, _0x3bea7c, _0x49f74f, _0x529ac8, _0x388de8);
  }
}
async function getLotteryChances(_0x44a864, _0x1ba7fa) {
  console.log("🎫 查询抽奖次数：active_code=" + _0x1ba7fa);
  return retryDecorator(3, 3000)(getLotteryChancesImpl).call(this, _0x44a864, _0x1ba7fa);
}
async function getLotteryChancesImpl(_0x122f75, _0x4a901b) {
  try {
    const _0x1502a2 = {
      "method": "get",
      "url": "https://xbk.189.cn/xbkapi/active/v2/lottery/getLotteryChance?active_code=" + _0x4a901b,
      "headers": {
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
        "Authorization": "Bearer " + rsaJiami.encrypt(_0x122f75, "base64")
      },
      "timeout": 15000,
      "validateStatus": function (_0x5576f9) {
        return _0x5576f9 < 500;
      }
    };
    let _0x4628d7 = await axios(_0x1502a2);
    if (_0x4628d7.data && _0x4628d7.data.code === 200) {
      const _0x36b3bd = _0x4628d7.data?.["data"] || 0;
      console.log("🎫 抽奖次数查询结果：" + _0x36b3bd + "次");
      return _0x36b3bd;
    } else {
      console.log("⚠️ 抽奖次数查询返回异常: code=" + _0x4628d7.data?.["code"] + ", msg=" + _0x4628d7.data?.["msg"]);
      return 0;
    }
  } catch (_0x4547b8) {
    if (_0x4547b8.response && _0x4547b8.response.status === 429) {
      console.log("⏳ 抽奖次数查询频率限制，等待后重试");
      await sleep(10000);
      throw _0x4547b8;
    }
    console.error("❌ 获取抽奖次数失败:", _0x4547b8.message);
    return 0;
  }
}
function extractNumbersWithDecimalsAndNegatives(_0x3912b9) {
  const _0x45de4a = /-?\d+(\.\d+)?/g,
    _0x485ffe = _0x3912b9.match(_0x45de4a);
  return _0x485ffe ? _0x485ffe.map(Number) : [];
}
async function checkLiveRoomLottery(_0x27324b, _0x540342) {
  console.log("🔍 检查直播间抽奖活动: " + _0x27324b.provinceName + "-" + _0x27324b.title + " (ID: " + _0x27324b.liveId + ")");
  try {
    {
      let _0x5c3491 = 1,
        _0x5bf1b8 = true,
        _0x30ce64 = [];
      while (_0x5bf1b8) {
        try {
          const _0x3487c1 = await getGoodsList(_0x27324b.liveId, _0x5c3491, _0x540342);
          if (_0x3487c1 && _0x3487c1.data && _0x3487c1.data.list) {
            for (const _0x1d40d8 of _0x3487c1.data.list) {
              {
                if (_0x1d40d8.activeCode && _0x1d40d8.activeCode.trim() !== "") {
                  {
                    if (!runGameId.includes(_0x1d40d8.activeCode)) {
                      const _0x51fce1 = {
                        ..._0x1d40d8,
                        "liveId": _0x27324b.liveId,
                        "liveTitle": _0x27324b.title,
                        "liveStartTime": _0x27324b.liveStartTime,
                        "provinceName": _0x27324b.provinceName
                      };
                      _0x30ce64.push(_0x51fce1);
                      runGameId.push(_0x1d40d8.activeCode);
                      console.log("🎁 发现新的可抽奖活动: " + _0x27324b.provinceName + "-" + _0x27324b.title + ", activeCode=" + _0x1d40d8.activeCode);
                    }
                  }
                }
              }
            }
            const _0xd8cf77 = _0x3487c1.data.count || 0,
              _0x5a0fce = _0x30ce64.length;
            if (_0x5a0fce >= _0xd8cf77 || _0x3487c1.data.list.length === 0) {
              _0x5bf1b8 = false;
            } else {
              _0x5c3491++;
              await sleep(1000);
            }
          } else {
            _0x5bf1b8 = false;
          }
        } catch (_0x5bc853) {
          console.error("❌ 获取直播间 " + _0x27324b.liveId + " 商品失败:", _0x5bc853.message);
          _0x5bf1b8 = false;
        }
      }
      return _0x30ce64;
    }
  } catch (_0x2d3e22) {
    console.error("❌ 检查直播间 " + _0x27324b.liveId + " 抽奖活动失败:", _0x2d3e22.message);
    return [];
  }
}
async function processLotteryActivities(_0x29f08e, _0x534a17) {
  if (_0x29f08e.length === 0) return;
  console.log("🎯 开始处理抽奖活动（共" + _0x29f08e.length + "个活动）");
  isStart = true;
  try {
    for (let _0x5557ef = 0; _0x5557ef < _0x29f08e.length; _0x5557ef++) {
      const _0x40f851 = _0x29f08e[_0x5557ef];
      console.log("🎯 处理第" + (_0x5557ef + 1) + "/" + _0x29f08e.length + "个活动：liveId=" + _0x40f851.liveId + "，activeCode=" + _0x40f851.activeCode + "，省份=" + _0x40f851.provinceName);
      for (const _0x5dd901 of _0x534a17) {
        if (_0x5dd901.xbkToken && _0x5dd901.isDo !== false) try {
          const _0xdbb50a = await getLotteryChances(_0x5dd901.xbkToken, _0x40f851.activeCode);
          console.log("ℹ️ 账号" + maskPhoneNumber(_0x5dd901.phone) + "有" + _0xdbb50a + "次抽奖机会");
          for (let _0x5067c6 = 0; _0x5067c6 < _0xdbb50a; _0x5067c6++) {
            console.log("🎰 账号" + maskPhoneNumber(_0x5dd901.phone) + "的第" + (_0x5067c6 + 1) + "/" + _0xdbb50a + "次抽奖（活动" + (_0x5557ef + 1) + "/" + _0x29f08e.length + "）");
            const _0x1370a8 = await doLottery(_0x40f851.liveId, _0x40f851.activeCode, _0x5dd901.xbkToken, _0x5dd901.phone, _0x5dd901.uid);
            if (_0x1370a8 && _0x1370a8.success) {
              if (!pushArr[_0x5dd901.uid]) {
                pushArr[_0x5dd901.uid] = {};
              }
              pushArr[_0x5dd901.uid][_0x5dd901.phone] = "- **手机号**: " + maskPhoneNumber(_0x5dd901.phone) + "  **奖品**: " + _0x1370a8.prize + "\n";
            }
            await sleep(3000);
          }
        } catch (_0xd2c82e) {
          console.error("❌ 账号" + maskPhoneNumber(_0x5dd901.phone) + "处理抽奖失败:", _0xd2c82e.message);
        }
      }
      await sleep(2000);
    }
    for (let _0x10753b in pushArr) {
      let _0x580d8d = "## 🎉 星播客中奖通知\n\n",
        _0x45051c = 0,
        _0x15c62a = false;
      for (let _0x26494d in pushArr[_0x10753b]) {
        _0x580d8d += pushArr[_0x10753b][_0x26494d];
        let _0x556940 = extractNumbersWithDecimalsAndNegatives(pushArr[_0x10753b][_0x26494d]);
        _0x45051c += _0x556940[_0x556940.length - 1] || 0;
        _0x15c62a = true;
      }
      _0x15c62a && _0x45051c > 0 && (_0x580d8d += "\n---\n**总计**: " + _0x45051c + "元话费\n", _0x580d8d += "**时间**: " + getTimestampFormatted(), sendTxt[_0x10753b] = _0x580d8d, console.log("📝 准备推送的中奖结果到钉钉"));
    }
    pushArr = {};
  } catch (_0x41f846) {
    console.error("❌ 抽奖流程严重错误：" + _0x41f846.message);
  } finally {
    isStart = false;
  }
}
async function continuousDetectionMode(_0x3d3cbb) {
  console.log("🚀 启动持续检测模式");
  while (true) {
    try {
      {
        if (_0x3d3cbb.length === 0) {
          console.log("❌ 没有可用账号，等待重新登录");
          await sleep(30000);
          continue;
        }
        const _0xcc0ade = _0x3d3cbb[Math.floor(Math.random() * _0x3d3cbb.length)];
        if (!_0xcc0ade.xbkToken) {
          console.log("⚠️ 账号未登录，跳过本次检测");
          await sleep(30000);
          continue;
        }
        console.log("🔄 开始新一轮检测...");
        const _0x272b18 = await scanNewLiveRooms(_0xcc0ade.xbkToken);
        if (_0x272b18.length > 0) {
          console.log("🎯 发现 " + _0x272b18.length + " 个新直播间，开始检查抽奖活动");
          let _0x53f585 = [];
          for (const _0x5a0863 of _0x272b18) {
            {
              const _0x3c7d33 = await checkLiveRoomLottery(_0x5a0863, _0xcc0ade.xbkToken);
              _0x53f585 = _0x53f585.concat(_0x3c7d33);
              await sleep(1000);
            }
          }
          _0x53f585.length > 0 && (await processLotteryActivities(_0x53f585, _0x3d3cbb));
          liveListAll = liveListAll.concat(_0x272b18);
          console.log("💾 更新直播间列表，当前总数: " + liveListAll.length);
        } else console.log("🔍 未发现新直播间");
        console.log("⏳ 等待2分钟后继续检测...");
        await sleep(120000);
      }
    } catch (_0x1d8e73) {
      console.error("❌ 持续检测模式错误:", _0x1d8e73.message);
      await sleep(60000);
    }
  }
}
async function loginAllAccounts(_0x1d82a8, _0x2cc841) {
  console.log("🔐 开始检查所有账号状态（共" + _0x1d82a8.length + "个）");
  try {
    {
      let _0x49249b = _0x1d82a8.map(async (_0x143f10, _0x5133f7) => {
        try {
          if (!_0x143f10.time) {
            console.log("🔐 账号" + maskPhoneNumber(_0x143f10.phone) + "：首次登录");
            let _0x4e05db = await loginPhoneWithCache(_0x143f10.phone, _0x143f10.password, _0x2cc841);
            _0x1d82a8[_0x5133f7].time = new Date().valueOf();
            if (!_0x4e05db) {
              console.log("❌ 账号" + maskPhoneNumber(_0x143f10.phone) + "登录失败");
              _0x1d82a8[_0x5133f7].isLogin = false;
              return;
            }
            let _0x507bc6 = await getUserCode(_0x4e05db.uid),
              _0x3635c5 = await getAccessToken(_0x507bc6);
            _0x1d82a8[_0x5133f7].xbkToken = _0x3635c5;
            _0x1d82a8[_0x5133f7].isDo = true;
            _0x1d82a8[_0x5133f7].isLogin = true;
            _0x1d82a8[_0x5133f7].uid = _0x4e05db.uid;
            console.log("✅ 账号" + maskPhoneNumber(_0x143f10.phone) + "登录成功");
          } else {
            if (_0x143f10.time && new Date().valueOf() - _0x143f10.time > 43200000) {
              console.log("🔐 账号" + maskPhoneNumber(_0x143f10.phone) + "：token过期（>12小时），重新登录");
              let _0x5a64a1 = await loginPhoneWithCache(_0x143f10.phone, _0x143f10.password, _0x2cc841);
              _0x1d82a8[_0x5133f7].time = new Date().valueOf();
              if (!_0x5a64a1) {
                {
                  console.log("❌ 账号" + maskPhoneNumber(_0x143f10.phone) + "重新登录失败");
                  _0x1d82a8[_0x5133f7].isLogin = false;
                  return;
                }
              }
              let _0x4b3f29 = await getUserCode(_0x5a64a1.uid),
                _0x24942d = await getAccessToken(_0x4b3f29);
              _0x1d82a8[_0x5133f7].xbkToken = _0x24942d;
              _0x1d82a8[_0x5133f7].isDo = true;
              _0x1d82a8[_0x5133f7].isLogin = true;
              _0x1d82a8[_0x5133f7].uid = _0x5a64a1.uid;
              console.log("✅ 账号" + maskPhoneNumber(_0x143f10.phone) + "重新登录成功");
            } else console.log("ℹ️ 账号" + maskPhoneNumber(_0x143f10.phone) + "状态正常（无需重新登录）");
          }
        } catch (_0x13b9ca) {
          console.error("❌ 处理账号" + maskPhoneNumber(_0x143f10.phone) + "错误：" + _0x13b9ca.message);
        }
      });
      await Promise.all(_0x49249b);
      const _0x41ae4f = _0x1d82a8.filter(_0x14a698 => _0x14a698.isLogin && _0x14a698.xbkToken);
      console.log("🔐 所有账号检查完毕，活跃账号数量：" + _0x41ae4f.length + "/" + _0x1d82a8.length);
      return _0x41ae4f.length > 0;
    }
  } catch (_0x78c003) {
    console.error("❌ 批量登录错误：" + _0x78c003.message);
    return false;
  }
}
async function initializeUserData(_0x374227) {
  console.log("📋 开始初始化用户数据");
  try {
    let _0x116c8a = {};
    try {
      _0x116c8a = JSON.parse(fs.readFileSync("./Cache.json", "utf8"));
      console.log("📋 成功加载缓存数据");
    } catch (_0x221c2a) {
      console.log("📋 缓存文件不存在，创建新缓存");
      fs.writeFileSync("./Cache.json", JSON.stringify({}), "utf8");
      _0x116c8a = {};
    }
    console.log("📋 共获取到" + _0x374227.length + "个账号");
    return await loginAllAccounts(_0x374227, _0x116c8a);
  } catch (_0x21e91a) {
    console.error("❌ 初始化用户数据错误：" + _0x21e91a.message);
    return false;
  }
}
function getTimestamp() {
  return getTimestampFormatted();
}
const originalLog = console.log;
console.log = function (..._0x522a08) {
  const _0x8dd9d7 = getTimestamp();
  originalLog("[" + _0x8dd9d7 + "]", ..._0x522a08);
};
let userPhone = [];
process?.["env"]?.["chinaTelecomAccount"] ? process?.["env"]?.["chinaTelecomAccount"]["split"]("&")["map"](_0x2920d8 => {
  if (_0x2920d8) {
    let _0x1ea114 = _0x2920d8.split("#")[0],
      _0x5df707 = _0x2920d8.split("#")[1];
    const _0x54eacb = {
      "phone": _0x1ea114,
      "password": _0x5df707
    };
    userPhone.push(_0x54eacb);
  }
}) : (console.log("❌ 未找到环境变量，请设置环境变量chinaTelecomAccount"), process.exit());
(async () => {
  console.log("🚀 脚本启动，开始初始化...");
  if (!validateDate()) {
    process.exit(1);
    return;
  }
  try {
    const _0x5f258b = await initializeUserData(userPhone);
    if (!_0x5f258b) {
      {
        console.log("❌ 用户数据初始化失败");
        process.exit(1);
        return;
      }
    }
    console.log("✅ 初始化完成，启动持续检测模式");
    continuousDetectionMode(userPhone);
  } catch (_0x597bd2) {
    console.error("❌ 脚本初始化严重错误：" + _0x597bd2.message);
    console.log("⏰ 1分钟后将重试初始化");
    setTimeout(() => process.exit(1), 60000);
  }
})();
setInterval(async () => {
  if (!isStart) {
    {
      let _0x5d297e = Object.keys(sendTxt);
      if (_0x5d297e.length > 0) {
        {
          console.log("📤 发现" + _0x5d297e.length + "条待推送消息到钉钉");
          for (let _0x281122 in sendTxt) {
            await sendMsg(sendTxt[_0x281122], _0x281122);
            await sleep(3000);
          }
          for (let _0x21dbae in sendTxt) {
            delete sendTxt[_0x21dbae];
          }
          console.log("📤 所有钉钉消息推送完成");
        }
      }
    }
  }
}, 60000);