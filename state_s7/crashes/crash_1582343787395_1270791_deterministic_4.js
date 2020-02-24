function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [-3590784207,"symbol"];
const v7 = {};
const v8 = {toString:v5};
let v9 = v3;
for (const v11 in "object") {
    let v13 = 13.37;
    const v17 = [1337];
    const v18 = {__proto__:v17,a:v17,constructor:v13,e:13.37,length:"number",b:13.37};
    const v21 = [-1825918256];
    let v22 = v21;
    const v24 = [1337,Infinity,Infinity];
    const v25 = [v22,v24];
    const v26 = v25.toLocaleString();
    const v27 = {c:v26,d:v24};
    let v30 = 0;
    let v31 = v27;
    const v32 = [0,v31,v31];
    const v33 = JSON.stringify();
    const v36 = [1337,1337,1337,1337,1337];
    function v37(v38,v39,v40,v41) {
        'use strict'
        try {
            v41[3] = v41;
        } catch(v42) {
            let v44 = 0;
            const v45 = v44 + 1;
            const v48 = 2.2250738585072014e-308 / 3890419937;
            const v49 = [v48];
            let v50 = v49;
            const v52 = Math.acosh(v50);
        }
        return v36;
    }
    const v53 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
    const v55 = new Proxy(v36,v53);
    v55[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
