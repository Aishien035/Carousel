// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data.json":[function(require,module,exports) {
module.exports = [{
  "name": "nolasco",
  "role": "Web Developer",
  "description": "A developer who creating websites. They are either front-end developers, back-end developers, middle-tier developers or full-stack developers.",
  "image": "https://scontent.fmnl26-1.fna.fbcdn.net/v/t1.6435-1/p480x480/89288220_226124545450193_4386018927637954560_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeEkua4NFF1HIExAsbdwhjijG4FW7OU-lmsbgVbs5T6WazBVDmRaWLo62SLUFuSIYTo6RsXoOVOEDMi9HK4XSTV5&_nc_ohc=bqgI6dPU0hUAX-EIVIB&_nc_ht=scontent.fmnl26-1.fna&oh=33fbfe6217702af511c59df9cfd1959c&oe=61614C54"
}, {
  "name": "catarroja",
  "role": "Software Development Engineer",
  "description": "A developer who responsible for writing software to validate the quality of software systems. They create automated tests, tools and systems to make sure that products and processes run as expected.",
  "image": "https://scontent.fmnl26-2.fna.fbcdn.net/v/t1.6435-9/104684784_1855107987962882_5273128194320165606_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_eui2=AeE_aPOcR-ns-ifz3Bt7Cl5ukZRHMczZJs-RlEcxzNkmz712519JYlJ8kbSRXx14B7euUrbOZau6b357PAHOz-AO&_nc_ohc=Qz42aKKNDlAAX8CTgwb&tn=2GEftDT8ixu9RVdv&_nc_ht=scontent.fmnl26-2.fna&oh=827ea144590e2e45d9277dbb1d5223ed&oe=615FE8C2"
}, {
  "name": "baredo",
  "role": "Web Developer",
  "description": "A developer who creating websites. They are either front-end developers, back-end developers, middle-tier developers or full-stack developers.",
  "image": "https://scontent.fmnl26-1.fna.fbcdn.net/v/t1.6435-1/p320x320/150914021_1448371415370046_6319058480568475986_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFfnimt7nLsYVYp7rNkH8AtyQMavz9qfRvJAxq_P2p9G-6_PWRtC_Jrky29Rmlg6CGV6Z9g72Lcc-SPE41pVwfT&_nc_ohc=3SFVmgVJR74AX912mp7&_nc_ht=scontent.fmnl26-1.fna&oh=9dc61202faeffc409a0cee85f5258847&oe=6161557E"
}, {
  "name": "Navarette",
  "role": "Embedded Developer",
  "description": "Who work with hardware that isn’t commonly classified as computers. For example, microcontrollers, real-time systems, electronic interfaces, set-top boxes, consumer devices, iOT devices, hardware drivers, and serial data transmission fall into this category.",
  "image": "https://scontent.fmnl26-1.fna.fbcdn.net/v/t1.6435-1/p720x720/161377598_1846000505577264_7715820284529659134_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGkKqo2pLjU4O0b6Y2_ANGz2NrXQO4ZpL_Y2tdA7hmkv9eRksOUEAWl0BQJn-bLpgg30OmFbHG-YONGpo8k5frb&_nc_ohc=NXIjjkfjDu0AX8qtoPb&_nc_ht=scontent.fmnl26-1.fna&oh=3c5abf7c03bb05b108fc569dac76b061&oe=61604314"
}, {
  "name": "Felomino",
  "role": "CRM Developer",
  "description": "This type of developer specializes in the field of systems that collect user and consumer data. These developers are tasked with improving customer satisfaction and sales by improving the tooling used by customer support representatives, account managers, and sale representatives.",
  "image": "https://scontent.fmnl26-1.fna.fbcdn.net/v/t1.6435-9/p640x640/83867377_2447983558787557_8614310769082761216_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGjz89V8-rGXRT4y7PI9HdXV4pLXjuOe2BXikteO457YN_x3O8OI65tT0gevg_WvsR5m6mTuA7qAS-psgEzdx2-&_nc_ohc=95mCyKjAqGMAX9-mR3B&_nc_ht=scontent.fmnl26-1.fna&oh=97c95b9b81d09ac4c5a2bbd77f0f8e43&oe=61622F78"
}, {
  "name": "Ramirez",
  "role": "Mobile Developer",
  "description": "Who understands the intricacies of mobile operating systems such as iOS and Android, and the development environment and frameworks used to write software on those operating systems.",
  "image": "https://scontent.fmnl26-1.fna.fbcdn.net/v/t1.6435-9/123916539_2051409488324784_4347581225291071516_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeETyj_se8ZJjQYuOnjeNQPbskTYG4KyvqOyRNgbgrK-o6ew-bY6y9h_iJjXv27WbV_PsOD5vLfVCepq8g1buyif&_nc_ohc=WyFWvZ-maf8AX-zjCyf&tn=2GEftDT8ixu9RVdv&_nc_ht=scontent.fmnl26-1.fna&oh=ca5b1063de93f064ab3208e359f330a9&oe=61620647"
}, {
  "name": "Dela Cruz",
  "role": "Desktop Developer",
  "description": "This is a developer who works on software applications that run natively on desktop operating systems (such as Mac OS, Windows, and Linux). Desktop developers often use GUI Toolkits such as Cocoa, XAML, WinForms, Gtk, etc.",
  "image": "https://scontent.fmnl26-1.fna.fbcdn.net/v/t1.18169-9/10403151_1074880555886009_8061285177487090421_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHdsOF34vdIDkTG8-LcfnGvYzIFbvK5SdNjMgVu8rlJ045HCBLk9FpOfvUaTlJrSX9k6GfXIzg-fW8aF4hcgDrl&_nc_ohc=Va7Tjzi71w0AX8hZ9Zh&_nc_ht=scontent.fmnl26-1.fna&oh=3eedaf45f34e62a896c101feb057915d&oe=61607958"
}, {
  "name": "Coronel",
  "role": "Game Developer",
  "description": "This is a generic term to identify a developer specialized in writing games. Game developers can fall into one of the other categories of developers, but they often have specific knowledge and skills in designing and implementing engaging and interactive gaming experiences.",
  "image": "https://scontent.fmnl26-2.fna.fbcdn.net/v/t1.6435-9/141573223_5487179031296018_6910293500864995330_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE2S15_5m5zNTjNZy44QOFnA_kVp3br4ZwD-RWnduvhnIJmH5gxmrW1N48ZgpQ0ryFyEQIl0ySBW_0tL-Bb2aJX&_nc_ohc=bEsEwLyiOw4AX_G7HoW&_nc_ht=scontent.fmnl26-2.fna&oh=e9f6eafc7fd48e8cb41b582dc01e0116&oe=6161956C"
}, {
  "name": "Agana",
  "role": "Game Developer",
  "description": "This is a generic term to identify a developer specialized in writing games. Game developers can fall into one of the other categories of developers, but they often have specific knowledge and skills in designing and implementing engaging and interactive gaming experiences.",
  "image": "https://scontent.fmnl26-1.fna.fbcdn.net/v/t1.6435-9/126533345_3528560127230025_2744968695047098261_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEdwKgRlFbixiKDF7q-dAj-xv0SGs6q45fG_RIazqrjl-BbuDBFpe2ETj_fglohJ5QwbkUXm6xlh2lmtfXjmC_w&_nc_ohc=H4wtGLApjHUAX_0F7xH&_nc_ht=scontent.fmnl26-1.fna&oh=20360e1cef6db8a7d6f96d6d8e76e633&oe=61628F4E"
}, {
  "name": "Bernas",
  "role": "Game Developer",
  "description": "This is a generic term to identify a developer specialized in writing games. Game developers can fall into one of the other categories of developers, but they often have specific knowledge and skills in designing and implementing engaging and interactive gaming experiences.",
  "image": "https://scontent.fmnl26-1.fna.fbcdn.net/v/t39.30808-1/c39.3.252.251a/p320x320/234303916_4158225324298042_3257528540449212763_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGVWY5T5NQzN24PwzJsnBVmNbS_LDs32901tL8sOzfb3fPi_rYpp9BEqw8Xzq-20f_tI2nn9MDCs7VBc8JYtRB1&_nc_ohc=LoZlsUt5g-0AX809oXw&_nc_ht=scontent.fmnl26-1.fna&oh=66043387d737bf0001f607a38c0f03e9&oe=61418D44"
}, {
  "name": "Caldito",
  "role": "Mobile Developer",
  "description": "Who understands the intricacies of mobile operating systems such as iOS and Android, and the development environment and frameworks used to write software on those operating systems.",
  "image": "https://scontent.fmnl26-1.fna.fbcdn.net/v/t1.6435-9/136771785_2788108448172578_7319118051049914649_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGEs1jWoMFtFcPiFgD-rrIhvRPO5xeU6yC9E87nF5TrIOMZ_7YB--etv46-68J2mvjK4x1ufd2zV5_wTgAyK_xF&_nc_ohc=6cOnY6EU9TsAX9q4qRr&_nc_ht=scontent.fmnl26-1.fna&oh=8324feef97e0de7ecdaaa4f87fe874f1&oe=616043E3"
}, {
  "name": "Mosca",
  "role": "Graphics Developer",
  "description": "This is a type of developer specialized in writing software for rendering, lighting, shadowing, shading, culling, and management of scenes. These developers are often responsible for integrating technologies in the gaming and video production industry.",
  "image": "https://scontent.fmnl26-2.fna.fbcdn.net/v/t1.6435-9/168396909_2967649586848336_1132735976478614830_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGumM7lH8xXaZGA2Ru76ETsREpyY_2en8RESnJj_Z6fxOBJZB-lHhAt0AmxKvxxFOs4RQX5fwpQfZSslEbjQR4_&_nc_ohc=OHRlD2vgqDkAX-DUIob&_nc_ht=scontent.fmnl26-2.fna&oh=c54a567c104ecf2f5ceeaaad72e9de71&oe=6161A6A4"
}, {
  "name": "Ambeguia",
  "role": "DevOps Developer",
  "description": "This is a type of developer familiar with technologies required for the development of systems to build, deploy, integrate and administer back-end software and distributed systems.",
  "image": "https://scontent.fmnl26-1.fna.fbcdn.net/v/t1.6435-9/s640x640/184065588_1642459402608742_9108787070443098802_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFJlYq4d_vIDFz39jLTscIQgLdJZXXnrpaAt0lldeeulpL7YUnOlrppUctVUN245Bur774_KxPLAa-h2Jv4Xda1&_nc_ohc=_eSWKjRnVnIAX_7lcUt&_nc_ht=scontent.fmnl26-1.fna&oh=e5d5297d91ea4b6d3359a0846f364add&oe=6163332B"
}, {
  "name": "Berenguer",
  "role": "Security Developer",
  "description": "Developer specializes in creating systems, methods, and procedures to test the security of a software system and exploit and fix security flaws. This type of developer often work as “white-hat” ethical hacker and attempts to penetrate systems to discover vulnerabilities.",
  "image": "https://scontent.xx.fbcdn.net/v/t1.15752-9/p173x172/241405373_580618129645904_169735212263326760_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGw5hrWsO2_X5KQhHUmxfTvcUGUq1_XHq5xQZSrX9cerkOvGmifmjP4Uc_lfrVK5biF8NN0SHXITFDZb5BXzHXT&_nc_ohc=_YPfl7VQb2YAX_UyYYs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=0fa616b0e9f6b6dfc13afd9a9d0ec0e9&oe=6162527D"
}, {
  "name": "Medina",
  "role": "DevOps Developer",
  "description": "This is a type of developer familiar with technologies required for the development of systems to build, deploy, integrate and administer back-end software and distributed systems.",
  "image": "https://scontent.fmnl26-2.fna.fbcdn.net/v/t1.6435-9/114705501_3197907246961357_5004855065717173987_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFanH9Dcxr09n2aOBiQHA-IVf_HukTZuWVV_8e6RNm5Zd_rPHs8dbssLrvHV3WZQjzQuGXHSe0GoHqTiBQgbFlm&_nc_ohc=SaHMujy0dbEAX8K_-St&tn=2GEftDT8ixu9RVdv&_nc_ht=scontent.fmnl26-2.fna&oh=9e965c7eff1f3dc747151bb981f66408&oe=61635399"
}, {
  "name": "Mateo",
  "role": "Security Developer",
  "description": "Developer specializes in creating systems, methods, and procedures to test the security of a software system and exploit and fix security flaws. This type of developer often work as “white-hat” ethical hacker and attempts to penetrate systems to discover vulnerabilities.",
  "image": "https://scontent.fmnl26-2.fna.fbcdn.net/v/t1.6435-9/238875539_6627553170595479_6346555860736937261_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGj4CjJV3SS3GP2-XNKm7nMyvGUmqVLWgbK8ZSapUtaBlLAq91hF_NGY6ttFYRBXntybK6qCVMhr1AaVKlSKLka&_nc_ohc=0Tiyx6ObxjQAX8laxxO&_nc_ht=scontent.fmnl26-2.fna&oh=409d196b9873b28d5a37181bdde35ad8&oe=61619C61"
}, {
  "name": "Todoc",
  "role": "Graphics Developer",
  "description": "This is a type of developer specialized in writing software for rendering, lighting, shadowing, shading, culling, and management of scenes. These developers are often responsible for integrating technologies in the gaming and video production industry.",
  "image": "https://scontent.fmnl26-2.fna.fbcdn.net/v/t1.6435-9/241512783_4636262449757439_3844797676864068993_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE-zCmBd2MDTEuWa0hicgf4leUU1uUr8EeV5RTW5SvwR-VLiXbMgWxdFe1T_z8hVebMqV9-QO6HxN5ZPCBtiLty&_nc_ohc=ZGfumb0FJoUAX8dO1Gc&tn=2GEftDT8ixu9RVdv&_nc_ht=scontent.fmnl26-2.fna&oh=d54629478389ca4ea0c03d953b8ac525&oe=6163C50F"
}, {
  "name": "Fernandez",
  "role": "Desktop Developer",
  "description": "This is a developer who works on software applications that run natively on desktop operating systems (such as Mac OS, Windows, and Linux). Desktop developers often use GUI Toolkits such as Cocoa, XAML, WinForms, Gtk, etc.",
  "image": "https://scontent.fmnl26-2.fna.fbcdn.net/v/t1.18169-9/p640x640/15965804_732147153601329_2217805952211306192_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGgiTg-cPCkhEKxtcM171PljwAZmaw9cRWPABmZrD1xFX6s7bQmAcKL7AeMGqApdoxa6pzeP3GHiern1Ss8K38w&_nc_ohc=3fPwJ3muXnEAX9_2lex&tn=2GEftDT8ixu9RVdv&_nc_ht=scontent.fmnl26-2.fna&oh=da88b3819dae6e803d609fbcdd5cf2a5&oe=6160B0E6"
}, {
  "name": "Torino",
  "role": "Desktop Developer",
  "description": "This is a developer who works on software applications that run natively on desktop operating systems (such as Mac OS, Windows, and Linux). Desktop developers often use GUI Toolkits such as Cocoa, XAML, WinForms, Gtk, etc.",
  "image": "https://scontent.fmnl26-1.fna.fbcdn.net/v/l/t1.6435-9/133794857_1373264119689972_2274560105363536335_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHlofoRJzeBUkhUqudes5fZo-n89YGo7bSj6fz1gajttHItV0IUs7WX5TGjkXwS-VH17tMc4revAPItEktZrWX0&_nc_ohc=Jz_aUDMKNKsAX_n__SO&tn=W27kyFdHeUsVifGa&_nc_ht=scontent.fmnl26-1.fna&oh=f696162aa63a77cefafe412a7d5b86e8&oe=6163A808"
}];
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49674" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","data.json"], null)
//# sourceMappingURL=/data.9936e108.js.map