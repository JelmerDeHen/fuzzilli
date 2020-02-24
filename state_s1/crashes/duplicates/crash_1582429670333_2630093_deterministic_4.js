function main() {
const v3 = [13.37,13.37];
const v5 = ["string"];
const v6 = {c:JSON,constructor:v3,__proto__:"string",toString:v5,valueOf:1337};
const v10 = [];
const v11 = {length:"constructor",e:1337,c:v10,a:1337,toString:"symbol"};
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        for (let v21 = 0; v21 < 100; v21++) {
            const v22 = v13();
        }
        const v23 = v17 - 1;
        const v24 = {};
        let v25 = v24;
        let v28 = 0;
        let v29 = v28;
        const v30 = v28 + 1;
        const v31 = [13.37,13.37,13.37];
    } catch(v32) {
    }
}
const v33 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v35 = new Proxy(v11,v33);
v35[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
