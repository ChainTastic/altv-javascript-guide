(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{448:function(t,a,s){"use strict";s.r(a);var e=s(25),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"veniti-de-pe-alt-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#veniti-de-pe-alt-client"}},[t._v("#")]),t._v(" Veniți de pe alt Client?")]),t._v(" "),s("p",[t._v("Ei bine, nu ești singurul care a făcut asta.")]),t._v(" "),s("p",[t._v("alt:V are o gramada de oferit, dar există câteva considerații atunci când utilizați acest client.")]),t._v(" "),s("ul",[s("li",[t._v("Codul serverului poate fi numai în JavaScript, C# sau LUA.")]),t._v(" "),s("li",[t._v("Codul clientului poate fi numai în JavaScript.")]),t._v(" "),s("li",[t._v("Un modul este creat pentru a permite "),s("strong",[t._v("orice")]),t._v(" limbă cu WASM.")]),t._v(" "),s("li",[t._v("Nativele se bazează pe numele reale ale nativelor din Rockstar.")])]),t._v(" "),s("p",[t._v("Acestea sunt singurele lucruri majore de luat în considerare despre alt:V.")]),t._v(" "),s("p",[t._v("În caz contrar, iată câteva alte aspecte importante.")]),t._v(" "),s("p",[t._v("✔️ Da! alt:V suportă clothing addons")]),t._v(" "),s("p",[t._v("✔️ Da! alt:V acceptă majoritatea modificărilor.")]),t._v(" "),s("p",[t._v("✔️ Da! alt:V suportă MLOs.")]),t._v(" "),s("p",[t._v("✔️ Da! alt:V suportă mape custom.")]),t._v(" "),s("p",[t._v("Iată câteva lucuri pe care alt:V nu le are.")]),t._v(" "),s("p",[t._v("❌ Fără LUA în client-side")]),t._v(" "),s("p",[t._v("❌ Fără ESX")]),t._v(" "),s("p",[t._v("❌ Fără ELS (Dex++ lucrează la asta)")]),t._v(" "),s("p",[t._v("❌ No censorship if you poke the wrong person")]),t._v(" "),s("p",[t._v("❌ Nu, nu acceptăm fișiere .asi, .dll sau fisiere ENB.")]),t._v(" "),s("p",[t._v("❌ Nu, nu acceptăm ScriptHookV.")]),t._v(" "),s("br"),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"fivem-to-alt-v"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fivem-to-alt-v"}},[t._v("#")]),t._v(" FiveM to alt:V")]),t._v(" "),s("p",[t._v("Iată câteva diferențe cheie între alt:V și FiveM.")]),t._v(" "),s("h3",{attrs:{id:"server-side-si-client-side"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-side-si-client-side"}},[t._v("#")]),t._v(" Server Side și Client Side")]),t._v(" "),s("p",[t._v("Da, avem de fapt server-side și client-side. Ceea ce înseamnă că injecțiile nu sunt o problemă foarte frecventă pentru alt:V. Să nu vorbim de manipularea client-ului. Cu toate acestea, nimic nu este sigur de la un programator expert.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.youtube.com/watch?v=z-knlYI_QZM",target:"_blank",rel:"noopener noreferrer"}},[t._v("Iată un video care acoperă serverside-ul și clientside-ul"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"local-player"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-player"}},[t._v("#")]),t._v(" Local Player?")]),t._v(" "),s("p",[t._v("Nu folosim "),s("code",[t._v("local playerPed = PlayerPedId()")]),t._v(" pentru a obține player-ul nostru local.")]),t._v(" "),s("p",[t._v("Folosim "),s("code",[t._v("alt.Player.local.scriptID")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"local-player-vehicle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-player-vehicle"}},[t._v("#")]),t._v(" Local Player Vehicle?")]),t._v(" "),s("p",[t._v("Nu folosim native atunci când nu trebuie.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"threads"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threads"}},[t._v("#")]),t._v(" Threads?")]),t._v(" "),s("p",[t._v("Folosim intervals și timeouts pentru a genera threads.")]),t._v(" "),s("p",[t._v("Avem de asemenea, acces la "),s("code",[t._v("alt.everyTick")]),t._v(", care este practic un interval de 0ms.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myInterval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myTimeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomethingElse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("This was called at every 5 seconds.")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingElse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("This was called after 10 seconds.")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nalt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("everyTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Your console will die with this every tick")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events?")]),t._v(" "),s("p",[t._v("Evenimentele vin în toate formele și dimensiunile. Aruncați un ochi în secțiunea "),s("a",{attrs:{href:"../api/events"}},[t._v("API:Events.")])]),t._v(" "),s("h3",{attrs:{id:"natives"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#natives"}},[t._v("#")]),t._v(" Natives?")]),t._v(" "),s("p",[t._v("Nativele sunt importante și accesibile doar din client-side.")]),t._v(" "),s("p",[t._v("Puteți arunca un ochi în "),s("a",{attrs:{href:"https://natives.altv.mp",target:"_blank",rel:"noopener noreferrer"}},[t._v("alt:V Native Database"),s("OutboundLink")],1),t._v(" pentru a înțelege mai bine ce este disponibil.")]),t._v(" "),s("h3",{attrs:{id:"loading-screens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-screens"}},[t._v("#")]),t._v(" Loading Screens?")]),t._v(" "),s("p",[t._v("În prezent nu acceptam loading screens de niciun fel. Considerăm că este o caracteristică inutilă pentru multiplayer.")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"rage-mp-to-alt-v"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rage-mp-to-alt-v"}},[t._v("#")]),t._v(" RAGE:MP to alt:V")]),t._v(" "),s("p",[t._v("Iată câteva diferențe cheie între alt:V si RAGE:MP.")]),t._v(" "),s("h3",{attrs:{id:"local-player-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-player-2"}},[t._v("#")]),t._v(" Local Player?")]),t._v(" "),s("p",[t._v("Nu folosim "),s("code",[t._v("local playerPed = PlayerPedId()")]),t._v(" pentru a obține player-ul nostru local.")]),t._v(" "),s("p",[t._v("Folosim "),s("code",[t._v("alt.Player.local.scriptID")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"mp-events-add-render"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mp-events-add-render"}},[t._v("#")]),t._v(" mp.events.add('render')")]),t._v(" "),s("p",[t._v("Folosim intervals și timeouts pentru a genera threads.")]),t._v(" "),s("p",[t._v("Avem, de asemenea, acces la "),s("code",[t._v("alt.everyTick")]),t._v(", care este practic un interval de 0ms.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myInterval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myTimeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomethingElse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("This was called at every 5 seconds.")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingElse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("This was called after 10 seconds.")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nalt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("everyTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Your console will die with this every tick")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"mp-events-add-mp-events-call"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mp-events-add-mp-events-call"}},[t._v("#")]),t._v(" mp.events.add & mp.events.call")]),t._v(" "),s("p",[t._v("Evenimentele vin în toate formele și dimensiunile. Aruncați un ochi în secțiunea "),s("a",{attrs:{href:"../api/events"}},[t._v("API:Events.")])]),t._v(" "),s("p",[t._v("Obținem un control mult mai finuț asupra evenimentelor noaste din alt:V.")]),t._v(" "),s("h3",{attrs:{id:"text-labels-markers-etc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text-labels-markers-etc"}},[t._v("#")]),t._v(" Text Labels, Markers, etc.")]),t._v(" "),s("p",[t._v("Consultați secțiunea snippets din acest document.")])])}),[],!1,null,null,null);a.default=n.exports}}]);