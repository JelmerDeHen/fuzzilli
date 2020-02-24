function main() {
const v4 = [13.37,13.37];
const v6 = Boolean();
for (const v7 in v4) {
    let v8 = v6;
    const v9 = typeof v7;
    const v11 = v9 === "undefined";
}
const v12 = v4.__proto__;
const v13 = v12 | 13.37;
const v14 = [1337,1337,1337];
const v15 = [v4,64];
const v16 = {valueOf:v15,c:64,e:"symbol",length:v4};
const v17 = {constructor:Boolean,a:Boolean,d:v16,length:v16};
let v18 = 64;
for (const v20 in "object") {
    for (const v22 of "MIN_VALUE") {
        for (const v23 of v22) {
        }
    }
    const v25 = [1337,1337,1337,1337,1337];
    function v26(v27,v28,v29,v30) {
        'use strict'
        try {
            v30[3] = v30;
        } catch(v31) {
            let v33 = 0;
            const v34 = v33 + 1;
            const v37 = 2.2250738585072014e-308 / 3890419937;
            const v38 = [v37];
            let v39 = v38;
            const v41 = Math.acosh(v39);
        }
        return v25;
    }
    const v42 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
    const v44 = new Proxy(v25,v42);
    v44[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
