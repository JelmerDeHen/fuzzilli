function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = ["matchAll",-755124004];
const v7 = {length:v6,constructor:v6,b:1337,a:-755124004,e:13.37,c:1337};
const v8 = {toString:v5,b:-755124004,constructor:13.37};
const v12 = {valueOf:13.37,e:-92412138,toString:"0DeB1+Gn+W",__proto__:-92412138};
const v14 = v12.__proto__;
const v16 = {get:parseFloat};
const v18 = Object.defineProperty(v14,"length",v16);
const v21 = [1337,1337,1337,1337,1337];
function v22(v23,v24,v25,v26) {
    'use strict'
    let v27 = "length";
    const v28 = v27 + 1;
    try {
        const v33 = [];
        for (let v37 = 0; v37 < 100; v37++) {
            const v38 = v22();
        }
        for (const v39 in v33) {
        }
        const v40 = {valueOf:v33,length:13.37,d:127,e:127};
        const v41 = {c:v33,valueOf:v40,d:Array,a:1337};
    } catch(v42) {
    }
}
const v43 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
const v45 = new Proxy(v21,v43);
v45[1] = "MIN_VALUE";
let v47 = 0;
}
%NeverOptimizeFunction(main);
main();
