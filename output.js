//Sun Jan 25 2026 09:28:09 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const axios = require("axios"),
  crypto = require("crypto"),
  qs = require("querystring");
function _dk(_0x1d1ee1) {
  const _0xe4220f = "xK9mP2nQ5rT8wY3",
    _0x3f75ab = Buffer.from(_0x1d1ee1, "base64").toString("binary");
  let _0x3f2fc7 = "";
  const _0x54a577 = _0xe4220f.length;
  for (let _0x113ee9 = 0; _0x113ee9 < _0x3f75ab.length; _0x113ee9++) {
    _0x3f2fc7 += String.fromCharCode(_0x3f75ab.charCodeAt(_0x113ee9) ^ _0xe4220f.charCodeAt(_0x113ee9 % _0x54a577));
  }
  return _0x3f2fc7;
}
const IP_SECRET_KEY = _dk("EzhmDCVGAQ5cAgtLEjpBHT9mBjVLMWMFQGA="),
  KM_SECRET_KEY = _dk("EzhmBj1tDyFcLSddFCtWDBRSCCltXGEHRg=="),
  IP_AUTO_ADD_API_URL = _dk("ED9NHWodQWADQnoKR2sdSngBQ2EBVmsMSm0IWDhDEWRYHTkcHjlF"),
  KM_VERIFY_API_URL = _dk("ED9NHWodQWADQnoKR2sdSngBQ2EBVmsMSm0IWDhDEWRSAH5CBiE="),
  MT_API_URL = _dk("ED9NHWodQWADQnoKR2sdSngBQ2EBVmsMSm0IWDhDEWRUGX5CBiE="),
  ANNOUNCEMENT_API_URL = _dk("ED9NHWodQWADQnoKR2sdSngBQ2EBVmsMSm0IWDhDEWRYHTkcHjlFTTVbAzBcFnZeCCRtDz9bHSFWFDxeHSVN"),
  TERMS_CONTENT = "\n══════════════════════════════════════════════════\n          使用协议\n══════════════════════════════════════════════════\n\n1. 本脚本永久免费使用，不收取任何费用\n2. 我们不抽成、不偷ck、不卖卡密\n3. 脚本仅供学习交流使用，请勿用于非法用途\n4. 使用本脚本需要卡密验证，请加Q群获取：1034077503\n5. 使用脚本前必须将IP添加到白名单\n6. 禁止倒卖、破解、修改脚本后再分发\n7. 使用者必须遵守相关法律法规，否则后果自负\n8. 如遇到问题，请在Q群反馈，我们会及时处理\n";
function getEnvAccounts() {
  const _0x1a3ab8 = [],
    _0x5d8ab8 = process.env.mtck || "";
  _0x5d8ab8 && _0x1a3ab8.push(_0x5d8ab8);
  for (let _0x58c32f = 1; _0x58c32f <= 9; _0x58c32f++) {
    {
      const _0xc9224f = process.env["mtck" + _0x58c32f] || "";
      _0xc9224f && _0x1a3ab8.push(_0xc9224f);
    }
  }
  return _0x1a3ab8;
}
const CONFIG = {
  "apiUrl": MT_API_URL,
  "cardSecret": process.env.km || "",
  "meituanAccounts": getEnvAccounts(),
  "delay": parseInt(process.env.MT_DELAY) || 1000,
  "announcementUrl": ANNOUNCEMENT_API_URL,
  "pushToken": process.env.push || "",
  "agreement": process.env.agreement || ""
};
let COUPON_MAP = {};
async function fetchCouponList() {
  try {
    {
      log("正在从后台获取券列表...");
      const _0x38b24d = await axios.post(CONFIG.apiUrl, new URLSearchParams({
        "action": "get_coupons"
      }), {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": 10000
      });
      if (_0x38b24d.data && _0x38b24d.data.success && _0x38b24d.data.data) {
        COUPON_MAP = _0x38b24d.data.data;
        const _0x4bbbb0 = Object.values(COUPON_MAP).join(", ");
        log("[成功] 已加载 " + _0x38b24d.data.count + " 个券: " + _0x4bbbb0, "success");
        return true;
      } else {
        const _0x3d8a11 = _0x38b24d.data?.["message"] || "未知错误";
        log("[错误] 获取券列表失败: " + _0x3d8a11, "error");
        _0x38b24d.data?.["code"] === 403 ? (log("[提示] 您的IP可能未在白名单中，请重新运行脚本", "warn"), log("[提示] 当前IP: " + (_0x38b24d.data?.["ip"] || "未知"), "warn")) : log("请在后台\"美团券管理\"中添加并启用券", "error");
        return false;
      }
    }
  } catch (_0x36f830) {
    {
      if (_0x36f830.response && _0x36f830.response.status === 403) {
        log("[错误] 获取券列表失败: IP未在白名单中 (403)", "error");
        log("[提示] 请稍等片刻后重新运行脚本，或联系管理员手动添加IP", "warn");
        _0x36f830.response.data?.["ip"] && log("[提示] 需要添加的IP: " + _0x36f830.response.data.ip, "warn");
      } else log("[错误] 获取券列表失败: " + _0x36f830.message, "error"), log("请检查网络连接或联系管理员", "error");
      return false;
    }
  }
}
function sleep(_0x1b19ce) {
  return new Promise(_0xbed716 => setTimeout(_0xbed716, _0x1b19ce));
}
function randomDelay() {
  const _0x1a0e32 = 30000,
    _0x6570fc = 90000,
    _0x1efebb = Math.floor(Math.random() * (_0x6570fc - _0x1a0e32 + 1)) + _0x1a0e32;
  return _0x1efebb;
}
function shuffleArray(_0xe7bb7f) {
  const _0x182994 = [..._0xe7bb7f];
  for (let _0x33600a = _0x182994.length - 1; _0x33600a > 0; _0x33600a--) {
    const _0x51631d = Math.floor(Math.random() * (_0x33600a + 1));
    [_0x182994[_0x33600a], _0x182994[_0x51631d]] = [_0x182994[_0x51631d], _0x182994[_0x33600a]];
  }
  return _0x182994;
}
async function sendPushNotification(_0x11f59c, _0x5b4d7a) {
  if (!CONFIG.pushToken) return;
  try {
    const _0x160715 = await axios.post("http://www.pushplus.plus/send", {
      "token": CONFIG.pushToken,
      "title": _0x11f59c,
      "content": _0x5b4d7a,
      "template": "html"
    }, {
      "timeout": 10000
    });
    if (_0x160715.data && _0x160715.data.code === 200) {
      log("[成功] 推送通知发送成功", "success");
    } else log("[失败] 推送通知发送失败: " + (_0x160715.data?.["msg"] || "未知错误"), "warn");
  } catch (_0x38af32) {
    log("[异常] 推送通知发送异常: " + _0x38af32.message, "warn");
  }
}
function log(_0x329f9e, _0x1b1098 = "info") {
  const _0x3a0199 = new Date(),
    _0x2a7224 = _0x3a0199.toLocaleTimeString("zh-CN", {
      "hour12": false
    });
  console.log("[" + _0x2a7224 + "] " + _0x329f9e);
}
async function fetchAnnouncement() {
  try {
    const _0x4af6fe = await axios.get(CONFIG.announcementUrl, {
      "timeout": 5000,
      "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });
    if (_0x4af6fe.data) {
      let _0x5e7b08 = [];
      if (_0x4af6fe.data.success && _0x4af6fe.data.data) _0x5e7b08 = Array.isArray(_0x4af6fe.data.data) ? _0x4af6fe.data.data : [_0x4af6fe.data.data];else {
        if (Array.isArray(_0x4af6fe.data)) _0x5e7b08 = _0x4af6fe.data;else (_0x4af6fe.data.title || _0x4af6fe.data.content) && (_0x5e7b08 = [_0x4af6fe.data]);
      }
      if (_0x5e7b08.length > 0) {
        {
          _0x5e7b08.forEach((_0x525832, _0x30d1ea) => {
            const _0x647f1b = _0x525832.title || "系统公告 " + (_0x30d1ea + 1),
              _0x4523b2 = _0x525832.content || "",
              _0x3082b8 = _0x4523b2.replace(/\\r\\n/g, "\n").replace(/\\n/g, "\n").replace(/<br>/g, "\n").replace(/<br\/>/g, "\n");
            console.log("\n" + _0x647f1b);
            console.log("═".repeat(50));
            console.log(_0x3082b8);
            console.log("═".repeat(50));
            _0x30d1ea < _0x5e7b08.length - 1 && console.log("");
          });
          return;
        }
      }
    }
  } catch (_0x617d8b) {
    {
      if (_0x617d8b.code === "ECONNREFUSED" || _0x617d8b.code === "ETIMEDOUT") console.log("远程公告服务暂时无法访问，继续执行脚本");else {
        if (_0x617d8b.response) console.log("远程公告获取失败 (HTTP " + _0x617d8b.response.status + ")，继续执行脚本");else {
          console.log("远程公告获取失败，继续执行脚本");
        }
      }
    }
  }
}
async function getPublicIP() {
  const _0x5a6fcc = ["https://api.ipify.org?format=json", "https://ipinfo.io/json", "https://api.ip.sb/ip"];
  for (const _0x1a6cb7 of _0x5a6fcc) {
    try {
      {
        const _0x27b893 = await axios.get(_0x1a6cb7, {
          "timeout": 5000
        });
        let _0x28dd2a = null;
        if (typeof _0x27b893.data === "string") _0x28dd2a = _0x27b893.data.trim();else {
          if (_0x27b893.data.ip) _0x28dd2a = _0x27b893.data.ip;else {
            if (_0x27b893.data.query) {
              _0x28dd2a = _0x27b893.data.query;
            }
          }
        }
        if (_0x28dd2a && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x28dd2a)) {
          return _0x28dd2a;
        }
      }
    } catch (_0x4c1d3d) {
      continue;
    }
  }
  return null;
}
async function verifyKm(_0xf40d20) {
  if (!_0xf40d20) return log("❌ 错误: 未设置km环境变量，无法运行脚本", "error"), log("请在环境变量中配置：km=你的卡密", "error"), log("获取卡密Q群：1034077503", "warn"), false;
  log("🔐 正在验证卡密...");
  try {
    {
      const _0x71305c = Math.floor(Date.now() / 1000).toString(),
        _0x4e3658 = crypto.createHash("md5").update(_0xf40d20 + _0x71305c + KM_SECRET_KEY).digest("hex"),
        _0x5a90b9 = await axios.post(KM_VERIFY_API_URL, JSON.stringify({
          "km": _0xf40d20,
          "timestamp": _0x71305c,
          "sign": _0x4e3658
        }), {
          "headers": {
            "Content-Type": "application/json"
          },
          "timeout": 10000
        }),
        _0x51e357 = _0x5a90b9.data;
      if (_0x51e357 && _0x51e357.success === true) {
        log("✅ 卡密验证成功，允许运行脚本", "success");
        return true;
      } else {
        log("❌ 卡密验证失败: " + (_0x51e357?.["message"] || "验证不通过"), "error");
        log("请检查卡密是否正确，或联系Q群：1034077503", "warn");
        return false;
      }
    }
  } catch (_0x285430) {
    log("❌ 卡密验证异常: " + _0x285430.message, "error");
    log("可能原因：网络连接失败或服务器无响应", "warn");
    log("请检查网络连接后重试，或联系Q群：1034077503", "warn");
    return false;
  }
}
async function autoAddIPToWhitelist() {
  let _0x5b1808 = await getPublicIP();
  if (!_0x5b1808) {
    const _0x2a3541 = process.env.ip;
    if (_0x2a3541 && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x2a3541)) log("自动获取IP失败，使用手动配置: " + _0x2a3541, "warn"), _0x5b1808 = _0x2a3541;else {
      log("无法获取公网IP，请检查网络连接或配置ip变量", "error");
      return false;
    }
  } else log("获取到公网IP: " + _0x5b1808, "success"), currentPublicIP = _0x5b1808;
  try {
    const _0x1790ef = Math.floor(Date.now() / 1000).toString(),
      _0x437c3d = "mt.js脚本",
      _0x272db6 = crypto.createHash("md5").update(_0x5b1808 + _0x437c3d + _0x1790ef + IP_SECRET_KEY).digest("hex"),
      _0x2e748a = await axios.post(IP_AUTO_ADD_API_URL, qs.stringify({
        "action": "auto_add_ip",
        "ip": _0x5b1808,
        "source": _0x437c3d,
        "timestamp": _0x1790ef,
        "sign": _0x272db6
      }), {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": 10000
      });
    if (_0x2e748a.data && _0x2e748a.data.success) return log("白名单添加成功: " + _0x5b1808, "success"), true;else {
      log("白名单自动添加失败: " + (_0x2e748a.data?.["message"] || "未知错误"), "warn");
      log("检查IP是否已在白名单中...");
      const _0x2d4c08 = Math.floor(Date.now() / 1000).toString(),
        _0x18ac3a = crypto.createHash("md5").update(_0x5b1808 + "heartbeat" + _0x2d4c08 + IP_SECRET_KEY).digest("hex"),
        _0xc562bc = await axios.post(IP_AUTO_ADD_API_URL, qs.stringify({
          "action": "check_whitelist",
          "ip": _0x5b1808,
          "timestamp": _0x2d4c08,
          "sign": _0x18ac3a
        }), {
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "timeout": 10000
        }),
        _0x8bb432 = _0xc562bc.data && _0xc562bc.data.in_whitelist === true || _0xc562bc.data && _0xc562bc.data.success === true;
      if (_0x8bb432) return log("IP已在白名单中（可能是管理员手动添加）: " + _0x5b1808, "success"), true;else {
        log("IP不在白名单中，脚本无法继续运行", "error");
        log("   返回数据: " + JSON.stringify(_0xc562bc.data));
        log("   提示: 请联系管理员确认白名单: " + _0x5b1808);
        return false;
      }
    }
  } catch (_0x544fc0) {
    log("IP白名单操作异常: " + _0x544fc0.message, "error");
    return false;
  }
}
let whitelistHeartbeatTimer = null,
  currentPublicIP = null;
async function checkWhitelistHeartbeat() {
  try {
    let _0x27c049 = currentPublicIP || (await getPublicIP());
    if (!_0x27c049) {
      log("白名单心跳检查异常: 无法获取IP，继续运行", "warn");
      return;
    }
    const _0x5954fc = Math.floor(Date.now() / 1000).toString(),
      _0x4f2454 = crypto.createHash("md5").update(_0x27c049 + "heartbeat" + _0x5954fc + IP_SECRET_KEY).digest("hex"),
      _0x231e9e = await axios.post(IP_AUTO_ADD_API_URL, qs.stringify({
        "action": "check_whitelist",
        "ip": _0x27c049,
        "timestamp": _0x5954fc,
        "sign": _0x4f2454
      }), {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": 10000
      }),
      _0x32cebc = _0x231e9e.data && _0x231e9e.data.in_whitelist === true || _0x231e9e.data && _0x231e9e.data.success === true;
    if (_0x32cebc) {} else log("白名单心跳检查失败: " + (_0x231e9e.data?.["message"] || "IP不在白名单中"), "error"), log("   返回数据: " + JSON.stringify(_0x231e9e.data)), log("可能原因: 1.白名单刚添加未生效 2.IP已过期被删除 3.网络波动", "warn"), log("将在下次检查时重新验证，暂不退出脚本", "warn");
  } catch (_0x17ff11) {
    log("白名单心跳检查异常: " + _0x17ff11.message + "，继续运行", "warn");
  }
}
function startWhitelistHeartbeat() {
  whitelistHeartbeatTimer && clearInterval(whitelistHeartbeatTimer);
  setTimeout(() => {
    checkWhitelistHeartbeat();
  }, 10000);
  whitelistHeartbeatTimer = setInterval(() => {
    checkWhitelistHeartbeat();
  }, 300000);
}
function parseUrl(_0x2634cf) {
  try {
    {
      const _0x2d2fec = new URL(_0x2634cf),
        _0x1a3e9a = _0x2d2fec.searchParams.get("userId"),
        _0x3feafc = _0x2d2fec.searchParams.get("token");
      if (!_0x1a3e9a || !_0x3feafc) throw new Error("URL中缺少userId或token参数");
      return {
        "userId": _0x1a3e9a,
        "token": _0x3feafc
      };
    }
  } catch (_0x46f8b0) {
    throw new Error("URL解析失败: " + _0x46f8b0.message);
  }
}
async function callAPI(_0xc94f4c, _0x345a34 = {}) {
  try {
    const _0x9be101 = new URLSearchParams();
    _0x9be101.append("action", _0xc94f4c);
    _0x9be101.append("card", CONFIG.cardSecret);
    for (const _0x27496c in _0x345a34) {
      _0x9be101.append(_0x27496c, _0x345a34[_0x27496c]);
    }
    const _0x1d7228 = await axios.post(CONFIG.apiUrl, _0x9be101, {
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      "timeout": 30000
    });
    return _0x1d7228.data;
  } catch (_0x3ebe4c) {
    {
      if (_0x3ebe4c.response) {
        return {
          "success": false,
          "message": "HTTP错误: " + _0x3ebe4c.response.status,
          "error": _0x3ebe4c.response.data
        };
      } else {
        if (_0x3ebe4c.request) return {
          "success": false,
          "message": "网络请求超时或无响应"
        };else {
          return {
            "success": false,
            "message": _0x3ebe4c.message
          };
        }
      }
    }
  }
}
async function receiveCoupon(_0x306fbd, _0x4916c9, _0xe05ad4) {
  const _0x166b45 = COUPON_MAP[_0x306fbd] || _0x306fbd;
  log("正在领取券: " + _0x166b45);
  const _0x2040c0 = await callAPI("meituan_receive", {
      "coupon_id": _0x306fbd,
      "user_id": _0x4916c9,
      "meituan_token": _0xe05ad4
    }),
    _0x15dc6c = _0x2040c0.message || "",
    _0x22fbd0 = _0x15dc6c.includes("失败") || _0x15dc6c.includes("已失效") || _0x15dc6c.includes("错误") || _0x15dc6c.includes("异常");
  if (_0x2040c0.success && !_0x22fbd0) {
    let _0x3bf533 = _0x15dc6c || "领券成功";
    if (_0x3bf533.includes(":")) {
      const _0x35cbf0 = _0x3bf533.split(":");
      _0x35cbf0.length > 1 && (_0x3bf533 = _0x35cbf0.slice(1).join(":").trim());
    }
    log("[成功] 券 " + _0x166b45 + " 领取成功: " + _0x3bf533, "success");
    return {
      "success": true,
      "couponId": _0x306fbd,
      "message": _0x3bf533
    };
  } else {
    let _0x237c53 = _0x15dc6c || "领券失败";
    _0x237c53.startsWith("失败:") && (_0x237c53 = _0x237c53.substring(3).trim());
    _0x237c53.startsWith("失败>") && (_0x237c53 = _0x237c53.substring(3).trim());
    const _0x573c9c = _0x2040c0.error_type || "unknown";
    if (_0x573c9c === "already_claimed" || _0x237c53.includes("已领") || _0x237c53.includes("已抽")) log("[已领] 券 " + _0x166b45 + " " + _0x237c53, "warn");else _0x573c9c === "limit_exceeded" || _0x237c53.includes("已失效") || _0x237c53.includes("链接") ? log("[失效] 券 " + _0x166b45 + " " + _0x237c53, "warn") : log("[失败] 券 " + _0x166b45 + " 领取失败: " + _0x237c53, "error");
    return {
      "success": false,
      "couponId": _0x306fbd,
      "message": _0x237c53,
      "error_type": _0x573c9c
    };
  }
}
async function receiveAllCoupons(_0x5d7029, _0x18eace, _0x110ec9) {
  log("========================================");
  log("开始批量领券");
  log("========================================");
  const _0x27b195 = shuffleArray(_0x5d7029);
  log("券顺序已随机打乱", "info");
  const _0x4c2fee = [];
  let _0x5b543a = 0,
    _0x118910 = 0,
    _0x28c9b4 = 0,
    _0x4efb3e = 0,
    _0x1a118c = 0;
  for (let _0x293551 = 0; _0x293551 < _0x27b195.length; _0x293551++) {
    const _0x24b2c9 = _0x27b195[_0x293551],
      _0x2c4ff7 = await receiveCoupon(_0x24b2c9, _0x18eace, _0x110ec9);
    _0x4c2fee.push(_0x2c4ff7);
    if (_0x2c4ff7.success) {
      _0x5b543a++;
      if (_0x293551 < _0x27b195.length - 1) {
        {
          const _0x43fd64 = randomDelay(),
            _0x13e924 = Math.round(_0x43fd64 / 1000);
          log("领券成功，等待 " + _0x13e924 + " 秒后继续...", "success");
          await sleep(_0x43fd64);
        }
      }
    } else {
      _0x118910++;
      if (_0x2c4ff7.error_type === "already_claimed") _0x28c9b4++;else {
        if (_0x2c4ff7.error_type === "limit_exceeded") _0x4efb3e++;else _0x2c4ff7.error_type === "daily_limit_exceeded" && _0x1a118c++;
      }
      _0x293551 < _0x27b195.length - 1 && (await sleep(CONFIG.delay));
    }
  }
  log("========================================");
  log("领券完成: 成功 " + _0x5b543a + " 个，失败 " + _0x118910 + " 个");
  if (_0x28c9b4 > 0) {
    log("其中已领取: " + _0x28c9b4 + " 个", "warn");
  }
  _0x4efb3e > 0 && log("其中限制: " + _0x4efb3e + " 个", "warn");
  log("========================================");
  return {
    "total": _0x27b195.length,
    "success": _0x5b543a,
    "failed": _0x118910,
    "already_claimed": _0x28c9b4,
    "limit_exceeded": _0x4efb3e,
    "results": _0x4c2fee
  };
}
async function processAccount(_0x179925, _0x51c380, _0x3fb058) {
  log("\n" + "═".repeat(50));
  log("开始处理账号 " + _0x51c380 + "/" + _0x3fb058);
  log("═".repeat(50));
  log("正在解析mt URL...");
  const {
    userId: _0xb48691,
    token: _0x1ba66e
  } = parseUrl(_0x179925);
  log("解析成功: userId=" + _0xb48691, "success");
  try {
    const _0x553497 = Object.keys(COUPON_MAP),
      _0x539025 = Object.values(COUPON_MAP);
    log("准备领取券: " + _0x539025.join(", "));
    const _0x46ff9d = Math.floor(Math.random() * 30000) + 30000,
      _0x179fdd = Math.round(_0x46ff9d / 1000);
    log("等待 " + _0x179fdd + " 秒后继续...");
    await sleep(_0x46ff9d);
    log("");
    let _0x44fe42;
    _0x553497.length === 1 ? _0x44fe42 = await receiveCoupon(_0x553497[0], _0xb48691, _0x1ba66e) : _0x44fe42 = await receiveAllCoupons(_0x553497, _0xb48691, _0x1ba66e);
    log("\n账号 " + _0x51c380 + " 领券完成", "success");
    return {
      "userId": _0xb48691,
      "result": _0x44fe42,
      "success": true
    };
  } catch (_0x109f79) {
    log("\n账号 " + _0x51c380 + " 执行出错: " + _0x109f79.message, "error");
    console.error(_0x109f79);
    return {
      "userId": "unknown",
      "result": null,
      "success": false,
      "error": _0x109f79.message
    };
  }
}
async function main() {
  await fetchAnnouncement();
  console.log(TERMS_CONTENT);
  CONFIG.agreement !== "我同意协议" && (console.log("[错误] 您尚未同意使用协议！"), console.log("请设置环境变量 agreement=我同意协议 以同意协议并继续使用脚本"), console.log("注意：必须完整输入\"我同意协议\"四个字，否则无法使用\n"), process.exit(1));
  !CONFIG.cardSecret && (log("错误：未配置卡密（km）", "error"), log("请在青龙面板设置环境变量：km", "error"), log("获取卡密Q群：1034077503", "warn"), process.exit(1));
  log("=".repeat(50));
  const _0x5cd2dc = await verifyKm(CONFIG.cardSecret);
  !_0x5cd2dc && (log("\n❌ 卡密验证失败，脚本终止运行", "error"), log("请设置正确的km环境变量后重试", "error"), log("获取卡密请加Q群：1034077503", "warn"), log("=".repeat(50)), process.exit(1));
  log("=".repeat(50));
  log("");
  if (CONFIG.meituanAccounts.length === 0) {
    {
      log("错误：未配置mt URL（mtck）", "error");
      log("请在青龙面板设置环境变量：mtck", "error");
      log("格式：https://i.meituan.com/mttouch/page/account?userId=xxx&token=xxx", "error");
      log("支持mtck到mtck9，最多10个账号", "error");
      process.exit(1);
    }
  }
  log("开始执行IP白名单自动添加...\n");
  const _0x57095a = await autoAddIPToWhitelist();
  !_0x57095a && (log("\nIP白名单添加失败，脚本终止运行", "error"), log("未添加IP白名单无法运行脚本，请检查网络连接或手动添加IP", "warn"), process.exit(1));
  log("\nIP白名单验证通过，继续执行脚本...\n");
  const _0x25b1b2 = await fetchCouponList();
  if (!_0x25b1b2) {
    {
      log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "error");
      log("券列表加载失败，脚本终止运行", "error");
      log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "error");
      log("\n可能的原因：", "warn");
      log("1. 后台未配置券列表 → 请在后台\"美团券管理\"中添加券并启用", "warn");
      log("2. IP白名单未同步 → 请等待5秒后重新运行脚本", "warn");
      log("3. 网络连接问题 → 请检查网络连接是否正常", "warn");
      log("\n如问题持续，请加Q群反馈：1034077503\n", "warn");
      process.exit(1);
    }
  }
  startWhitelistHeartbeat();
  log("\n检测到 " + CONFIG.meituanAccounts.length + " 个账号，开始批量处理...\n");
  const _0x19f869 = [];
  for (let _0x15b694 = 0; _0x15b694 < CONFIG.meituanAccounts.length; _0x15b694++) {
    const _0x53b377 = CONFIG.meituanAccounts[_0x15b694],
      _0x3adc45 = await processAccount(_0x53b377, _0x15b694 + 1, CONFIG.meituanAccounts.length);
    _0x19f869.push(_0x3adc45);
    if (_0x15b694 < CONFIG.meituanAccounts.length - 1) {
      const _0x1922d4 = 5;
      log("\n等待 " + _0x1922d4 + " 秒后处理下一个账号...\n");
      await sleep(_0x1922d4 * 1000);
    }
  }
  log("\n" + "═".repeat(50));
  log("所有账号处理完成");
  log("═".repeat(50));
  const _0x565b59 = _0x19f869.filter(_0x32344f => _0x32344f.success).length,
    _0x423812 = _0x19f869.length - _0x565b59;
  log("成功: " + _0x565b59 + " 个账号，失败: " + _0x423812 + " 个账号");
  if (CONFIG.pushToken) {
    {
      const _0x3d2bf9 = "美团领券通知";
      let _0x592681 = "<h3>批量领券结果</h3>";
      _0x592681 += "<p>总账号数: " + _0x19f869.length + "</p>";
      _0x592681 += "<p>成功: " + _0x565b59 + " 个</p>";
      _0x592681 += "<p>失败: " + _0x423812 + " 个</p>";
      _0x592681 += "<hr>";
      _0x19f869.forEach((_0x5300a5, _0x107860) => {
        _0x592681 += "<h4>账号 " + (_0x107860 + 1) + "</h4>";
        _0x592681 += "<p>用户ID: " + _0x5300a5.userId + "</p>";
        if (_0x5300a5.success && _0x5300a5.result) {
          const _0x2303e8 = _0x5300a5.result;
          if (_0x2303e8.couponId !== undefined) _0x592681 += "<p>券名称: " + (COUPON_MAP[_0x2303e8.couponId] || _0x2303e8.couponId) + "</p>", _0x592681 += "<p>状态: " + (_0x2303e8.success ? "成功" : "失败") + "</p>", _0x592681 += "<p>消息: " + _0x2303e8.message + "</p>";else {
            _0x592681 += "<p>总计: " + (_0x2303e8.total || 0) + " 张券</p>";
            _0x592681 += "<p>成功: " + (_0x2303e8.success || 0) + " 张</p>";
            _0x592681 += "<p>失败: " + (_0x2303e8.failed || 0) + " 张</p>";
            if (_0x2303e8.results && _0x2303e8.results.length > 0) {
              _0x592681 += "<ul>";
              _0x2303e8.results.forEach(_0x2e24dc => {
                {
                  const _0x4a5686 = COUPON_MAP[_0x2e24dc.couponId] || _0x2e24dc.couponId,
                    _0x43b26c = _0x2e24dc.success ? "[成功]" : "[失败]";
                  _0x592681 += "<li>" + _0x43b26c + " " + _0x4a5686 + ": " + _0x2e24dc.message + "</li>";
                }
              });
              _0x592681 += "</ul>";
            }
          }
        } else _0x592681 += "<p style=\"color:red;\">执行失败: " + (_0x5300a5.error || "未知错误") + "</p>";
        _0x107860 < _0x19f869.length - 1 && (_0x592681 += "<hr>");
      });
      _0x592681 += "<p>时间: " + new Date().toLocaleString("zh-CN") + "</p>";
      await sendPushNotification(_0x3d2bf9, _0x592681);
    }
  }
  log("\n脚本执行完成，即将退出...");
  process.exit(0);
}
require.main === module && main().catch(_0x50b7be => {
  console.error("未捕获的错误:", _0x50b7be);
  process.exit(1);
});
module.exports = {
  "main": main
};