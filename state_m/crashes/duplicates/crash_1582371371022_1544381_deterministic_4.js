function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [];
const v6 = {__proto__:v2,b:v5};
const v7 = {constructor:v4,e:1337};
let v8 = -2601946203;
for (const v10 in "object") {
    const v13 = [1337,1337,1337,1337,1337];
    function v14(v15,v16,v17,v18) {
        'use strict'
        try {
            for (const v19 in v2) {
                const v20 = v6[0];
            }
            const v21 = [v17,v16,v16];
            v18[3] = v18;
        } catch(v22) {
            let v24 = 0;
            const v25 = v24 + 1;
            const v28 = 2.2250738585072014e-308 / 3890419937;
            const v29 = [v28];
            let v30 = v29;
            const v32 = Math.acosh(v30);
        }
        return v13;
    }
    const v33 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
    const v35 = new Proxy(v13,v33);
    v35[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
