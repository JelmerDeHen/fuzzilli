function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [2147483647,v3,v5,2147483647];
const v7 = {valueOf:13.37,c:2147483647,d:v6,constructor:1337};
const v8 = {a:v3,b:v7,__proto__:v5,d:v7};
for (const v10 in "boolean") {
    const v12 = [1337];
    let v14 = undefined;
}
let v16 = v7;
for (const v19 in "object") {
    const v22 = [1337,1337,1337,1337,1337];
    function v23(v24,v25,v26,v27) {
        'use strict'
        try {
            const v29 = 2147483647 + 1;
            const v30 = new Float32Array();
            v27[3] = v27;
        } catch(v31) {
            const v33 = [1337,1337];
            v31[2] = v16;
            const v37 = typeof 1337;
            const v39 = v37 === "string";
            const v40 = "unscopable".length;
            const v42 = "unscopable".concat(100);
            const v43 = Function();
            let v46 = 0;
            const v49 = [1337,1337,1337,1337,1337];
            const v50 = {c:1337,valueOf:v49,b:13.37,e:-4294967296};
            let v56 = Uint16Array;
            const v58 = ["object",v50,Float64Array,-3.0,-1000.0];
            const v59 = new Int16Array();
        }
        return v22;
    }
    const v60 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
    const v62 = new Proxy(v22,v60);
    v62[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
