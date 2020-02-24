function main() {
const v3 = [13.37];
const v5 = [1337];
const v6 = [v5,13.37];
const v7 = {d:Promise,toString:1337,constructor:1337,valueOf:v6,__proto__:v5,length:Promise,b:-256};
let v8 = v7;
let v10 = -128;
const v13 = [-1000.0,-1000.0,-1000.0,-1000.0];
function v14(v15,v16) {
    const v18 = new Uint8Array();
    const v22 = arguments + 1;
    const v24 = [1337,1337,"MIN_VALUE",1337,1337];
    function v25(v26,v27,v28,v29) {
        'use strict'
        try {
            let v32 = 0;
            while (v32 <= 4) {
                const v33 = v32 + 1;
                v32 = v33;
            }
            v29[3] = 0;
        } catch(v34) {
            let v35 = v22;
            const v36 = [];
            const v37 = {a:v36};
            const v38 = {__proto__:v29,constructor:v37,length:v36};
            const v39 = v35 in v38;
        }
        v10 = v29;
        const v40 = -128 / -128;
        v8 = v18;
        function v41(v42,v43) {
            const v44 = v26();
        }
        return v29;
    }
    const v45 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:1337,has:v25};
    const v47 = new Proxy(v24,v45);
    v47[1] = "MIN_VALUE";
    const v48 = v18.slice("arguments",1337);
}
const v49 = v13.sort(v14);
}
%NeverOptimizeFunction(main);
main();
