function main() {
const v2 = [13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [13.37];
const v6 = {};
const v7 = {};
let v8 = 13.37;
let v10 = undefined;
const v12 = {__proto__:536870912};
const v16 = {valueOf:13.37,e:-92412138,toString:"0DeB1+Gn+W",__proto__:-92412138};
const v18 = v16.__proto__;
const v20 = {get:parseFloat};
const v22 = Object.defineProperty(v18,"length",v20);
const v25 = [1337,1337,1337,1337,1337];
function v26(v27,v28,v29,v30) {
    'use strict'
    let v33 = 0;
    while (v33 < 1337) {
        const v34 = v33 + 1;
        v33 = v34;
    }
    try {
        const v36 = (127)[-2437571694];
        const v38 = [1337,1337,1337];
        const v39 = v26(127);
        const v40 = v38 + v39;
        const v44 = [];
        const v45 = {valueOf:v44,length:13.37,d:127,e:127};
        const v46 = {c:v44,valueOf:v45,d:Array,a:1337};
    } catch(v47) {
    }
}
const v48 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
const v50 = new Proxy(v25,v48);
v50[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
