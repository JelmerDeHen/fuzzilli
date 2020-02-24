function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [1947301208,"iterator",v4];
const v8 = {};
const v9 = {constructor:v6,c:v6};
let v10 = 13.37;
for (const v12 in "object") {
    const v17 = [1337];
    const v18 = [];
    const v19 = {valueOf:v18,constructor:v17,b:1,toString:1337,__proto__:1};
    for (const v20 in v19) {
        const v21 = v20 + v20;
    }
    const v22 = [1337,1337,1337,1337,1337];
    function v23(v24,v25,v26,v27) {
        'use strict'
        try {
            v27[3] = v27;
        } catch(v28) {
            let v30 = 0;
            const v31 = v30 + 1;
            const v34 = 2.2250738585072014e-308 / 3890419937;
            const v35 = [v34];
            let v36 = v35;
            const v38 = Math.acosh(v36);
        }
        return v22;
    }
    const v39 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
    const v41 = new Proxy(v22,v39);
    v41[1] = "MIN_VALUE";
}
const v42 = typeof "object";
const v44 = v42 === "function";
const v45 = {get:parseInt};
const v47 = Object.defineProperty();
}
%NeverOptimizeFunction(main);
main();
