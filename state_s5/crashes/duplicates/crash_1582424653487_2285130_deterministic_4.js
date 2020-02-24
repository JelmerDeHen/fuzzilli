function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337];
const v7 = [13.37,v6];
const v8 = {__proto__:1337,a:v6,d:-1,constructor:v6,valueOf:"boolean",c:Boolean};
const v9 = {e:1337,d:v4,constructor:v6,valueOf:-1,c:v8};
let v10 = 1337;
const v13 = new Int32Array();
const v15 = "boolean".toPrimitive;
const v16 = !"boolean";
const v18 = v13.slice(-268435456,1337);
const v20 = [1337,1337,1337,1337];
const v21 = [v20,2485132437,v20,2485132437];
function v22(v23,v24,v25,v26) {
    'use strict'
    try {
        let v28 = 0;
        for (let v32 = 0; v32 < 100; v32++) {
            const v33 = v22();
        }
        const v34 = v28 + 1;
        const v35 = v21.constructor;
        const v36 = v25[v6];
        const v39 = Object.defineProperties(this,v26,v26);
        let v41 = 0;
    } catch(v42) {
    }
}
const v44 = {getOwnPropertyDescriptor:v22,set:v22,call:v22,getPrototypeOf:v22,defineProperty:v22};
const v46 = new Proxy(v21,v44);
v46[Proxy] = v18;
}
%NeverOptimizeFunction(main);
main();
