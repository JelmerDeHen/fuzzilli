function main() {
const v2 = "undefined" - 1;
const v5 = [13.37,13.37,"undefined"];
const v7 = [1337,1337];
const v10 = [13.37,"b"];
const v13 = [eval,13.37,v10];
let v14 = v13;
const v15 = [1337];
const v16 = {valueOf:v5,__proto__:v5,d:v7,toString:2147483649};
const v17 = {valueOf:2147483649,__proto__:2147483649,c:Object,b:"undefined",d:v15,a:v15};
let v18 = 13.37;
for (const v20 in "object") {
    const v24 = [1337,1337,1337,1337,1337];
    function v25(v26,v27,v28,v29) {
        'use strict'
        try {
            v29[3] = v29;
        } catch(v30) {
            const v34 = [v24];
            let v35 = v34;
            const v36 = Math.pow(v35,2);
            const v39 = [1337,Infinity,Infinity];
            const v40 = [v36,v39];
            const v41 = v40.toLocaleString();
            const v42 = [13.37,13.37,13.37];
            const v43 = 1337 / Infinity;
            const v44 = v29 instanceof Uint32Array;
            const v47 = 2.2250738585072014e-308 % 3890419937;
            const v48 = [v47];
            let v49 = v48;
            const v51 = Math.acosh();
        }
        return v24;
    }
    const v52 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
    let v54 = 0;
    const v56 = new Proxy(v24,v52);
    v56[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
