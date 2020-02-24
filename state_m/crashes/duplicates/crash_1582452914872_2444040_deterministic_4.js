function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [v2,1337];
for (let v9 = 0; v9 < 8; v9++) {
    let v12 = 0;
    do {
        const v14 = Symbol.species;
        const v15 = v12 + 1;
        v12 = v15;
    } while (v12 < 4);
}
const v16 = {length:v2,constructor:13.37,d:v2,a:1388980155,valueOf:v4};
const v19 = new Int32Array();
const v20 = v19.slice();
const v22 = [1337,1337,1337,1337];
const v23 = [v22,2485132437,v22,2485132437];
function v24(v25,v26,v27,v28) {
    'use strict'
    try {
        for (let v32 = 0; v32 < 9; v32++) {
        }
        const v33 = v24();
        for (const v34 in v2) {
        }
    } catch(v35) {
    }
}
const v37 = {getOwnPropertyDescriptor:v24,set:v24,call:v24,getPrototypeOf:v24,defineProperty:v24};
const v39 = new Proxy(v23,v37);
v39[Proxy] = v20;
}
%NeverOptimizeFunction(main);
main();
