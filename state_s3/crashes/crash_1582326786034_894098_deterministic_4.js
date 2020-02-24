function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [1337,13.37,13.37,v2];
const v6 = {d:isNaN,a:v5,constructor:v4};
const v7 = {valueOf:v2,constructor:isNaN,length:v2,b:v5};
let v8 = v7;
const v12 = [1000000.0,13.37,-268435456,1000000.0];
for (const v14 in "object") {
    const v17 = [1337,1337,1337,1337,1337];
    function v18(v19,v20,v21,v22) {
        'use strict'
        try {
            v22[3] = v22;
        } catch(v23) {
            delete (0)[1000000.0];
            let v25 = v22;
            if (v20) {
                v23.constructor = v2;
                v25 = v14;
            } else {
                const v26 = v20.substring(v21,0);
            }
            let v27 = 0;
            const v28 = v27 + 1;
            const v31 = 2.2250738585072014e-308 / 3890419937;
            const v32 = [v31];
            let v33 = v32;
            const v35 = Math.acosh(v33);
        }
        return v17;
    }
    const v36 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
    const v38 = new Proxy(v17,v36);
    v38[1] = "MIN_VALUE";
}
function v40(v41,v42,v43,v44) {
    'use strict'
}
const v45 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:-1,ownKeys:v40,setPrototypeOf:v40,has:v40};
}
%NeverOptimizeFunction(main);
main();
