function main() {
const v6 = [1337];
const v7 = {d:13.37,a:"EPSILON",e:-4294967295,__proto__:1337};
const v8 = {c:v6,valueOf:13.37,a:1337,e:1337,d:v7};
const v11 = [1337,1337,v8];
const v14 = [1337,Infinity,1337];
const v15 = [undefined,v14];
const v16 = v15.toLocaleString();
let v17 = v16;
const v18 = [v11,..."jZZhI/kPfh",...v17];
for (const v20 in "object") {
    const v23 = [1337,1337,1337,1337,1337];
    function v24(v25,v26,v27,v28) {
        'use strict'
        try {
            v28[3] = v28;
        } catch(v29) {
            const v30 = Number[-65536];
            const v32 = Symbol.match;
            const v33 = "object"[v32];
            const v38 = [1337,1337,1337];
            const v39 = [3664180981,3664180981,"string","string"];
            const v40 = {valueOf:v39,length:v38,toString:parseFloat,constructor:"string",c:parseFloat};
            const v41 = v38.__proto__;
            let v43 = undefined;
            for (const v45 of "pvU0UUjoya") {
                const v48 = String();
                for (const v49 of "7f7Rh5ttYX") {
                }
            }
            const v51 = [-302538.50499003823];
        }
        return v23;
    }
    const v52 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
    const v54 = new Proxy(v23,v52);
    v54[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
