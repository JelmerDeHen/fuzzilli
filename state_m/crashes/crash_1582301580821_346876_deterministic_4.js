function main() {
const v2 = [13.37];
const v4 = {__proto__:"toPrimitive",length:1337,b:v2,a:1337,valueOf:13.37};
const v7 = [];
const v8 = {length:1337,e:1337,c:v7,a:1337,toString:"symbol"};
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        for (let v18 = 0; v18 < 100; v18++) {
            const v19 = v10(v4);
        }
        for (const v21 of Symbol) {
        }
    } catch(v22) {
    }
}
const v23 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
const v25 = new Proxy(v8,v23);
v25[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
