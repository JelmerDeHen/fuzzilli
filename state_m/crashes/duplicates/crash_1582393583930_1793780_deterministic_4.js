function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [1947301208,"iterator",v3];
const v7 = {};
const v8 = {constructor:v5,c:v5};
let v9 = 13.37;
for (const v11 in "object") {
    const v16 = [1337];
    const v17 = [];
    const v18 = {valueOf:v17,constructor:v16,b:1,toString:1337,__proto__:1};
    for (const v19 in v18) {
        const v20 = v19 + v19;
    }
    const v21 = [1337,1337,1337,1337,1337];
    function v22(v23,v24,v25,v26) {
        'use strict'
        try {
            v26[3] = v26;
            const v29 = [];
            const v30 = {__proto__:9007199254740991,length:16,constructor:16,a:v29};
            const v32 = Uint16Array();
            const v33 = v32.slice();
        } catch(v34) {
            let v36 = 0;
            const v37 = v36 + 1;
            const v40 = 2.2250738585072014e-308 / 3890419937;
            const v41 = [v40];
            let v42 = v41;
            const v44 = Math.acosh(v42);
        }
        return v21;
    }
    const v45 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
    const v47 = new Proxy(v21,v45);
    v47[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
