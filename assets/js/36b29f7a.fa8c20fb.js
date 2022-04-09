"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[8007],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7732:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Version 0.74",authors:["derandereandi"],tags:["release"],hide_table_of_contents:!1},u=void 0,c={permalink:"/blog/2021/12/19/version-0-74",editUrl:"https://github.com/evcc-io/docs/tree/main/blog/2021-12-19/version-0-74.md",source:"@site/blog/2021-12-19/version-0-74.md",title:"Version 0.74",description:"Heute gibt es ein kleines Update haupts\xe4chlich mit einigen Fehlerkorrekturen und weiteren Verbesserungen.",date:"2021-12-19T00:00:00.000Z",formattedDate:"19. Dezember 2021",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:.625,truncated:!1,authors:[{name:"Andreas Linde",title:"Core-Team, Allrounder",url:"https://github.com/DerAndereAndi",imageURL:"https://github.com/DerAndereAndi.png",key:"derandereandi"}],frontMatter:{title:"Version 0.74",authors:["derandereandi"],tags:["release"],hide_table_of_contents:!1},prevItem:{title:"Version 0.76",permalink:"/blog/2021/12/29/version-0-76"},nextItem:{title:"Version 0.73",permalink:"/blog/2021/12/12/version-0-73"}},s={authorsImageUrls:[void 0]},d=[{value:"Timer in der UI",id:"timer-in-der-ui",level:2},{value:"Zielladen",id:"zielladen",level:2},{value:"Download &amp; Installation",id:"download--installation",level:2},{value:"Changelog",id:"changelog",level:2}],p={toc:d};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Heute gibt es ein kleines Update haupts\xe4chlich mit einigen Fehlerkorrekturen und weiteren Verbesserungen."),(0,i.kt)("h2",{id:"timer-in-der-ui"},"Timer in der UI"),(0,i.kt)("p",null,"Die Oberfl\xe4che zeigt euch nun die im Hintergrund laufenden Timer an:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Timer Phasenumschaltung",src:n(81291).Z,width:"668",height:"263"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Im PV Modus:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Wann wird das Laden unterbrochen"),(0,i.kt)("li",{parentName:"ul"},"Wann wird mit dem Laden wieder begonnen"))),(0,i.kt)("li",{parentName:"ul"},"1p3p Phasenumschaltung:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Wann wird auf 3p hochgeschaltet"),(0,i.kt)("li",{parentName:"ul"},"Wann wird auf 1p heruntergeschaltet")))),(0,i.kt)("p",null,"Zus\xe4tzlich wird auch angezeigt mit wievielen Phasen geladen wird."),(0,i.kt)("h2",{id:"zielladen"},"Zielladen"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Zielladen UI",src:n(40416).Z,width:"780",height:"651"})),(0,i.kt)("p",null,"Die Zielladen Funktionalit\xe4t ist zur\xfcck. Hiermit kann man das EV auf ein bestimmtes Datum und Uhrzeit auf den geew\xfcnschten SoC Wert laden."),(0,i.kt)("h2",{id:"download--installation"},"Download & Installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/installation/linux"},"Debian, Ubuntu, Raspberry Pi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/installation/macos"},"macOS Homebrew")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/installation/docker"},"Docker, Synology")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/installation/manual"},"Manuell (inkl. Windows)"))),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.74"},"Detaillierte Liste der \xc4nderungen"))))}m.isMDXComponent=!0},81291:function(e,t,n){t.Z=n.p+"assets/images/1p3p-8f1844def0c5d2084b42c8e7406bfb43.png"},40416:function(e,t,n){t.Z=n.p+"assets/images/zielladen-7a10c18dd4f2bffb357f0d179d336355.png"}}]);