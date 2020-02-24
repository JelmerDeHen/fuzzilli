function main() {
const v3 = [];
const v4 = {length:"constructor",e:1337,c:v3,a:1337,toString:"symbol"};
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        v7.__proto__ = v10;
        const v12 = Uint8Array();
    } catch(v13) {
        let v16 = 0;
        do {
            const v17 = v16 + 1;
            v16 = v17;
        } while (v16 < 10);
        const v18 = 10 | v4;
    }
}
const v19 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
const v21 = new Proxy(v4,v19);
v21[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
