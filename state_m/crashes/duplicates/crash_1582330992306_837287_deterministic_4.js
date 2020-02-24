function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [1337,Float32Array,13.37,13.37];
const v6 = {c:v2};
const v7 = {b:13.37,a:v2,valueOf:v5,c:13.37,__proto__:1337,d:v5};
let v8 = v5;
let v10 = -377090.66331994825;
const v12 = String.fromCharCode();
const v15 = [13.37,13.37,13.37,13.37,13.37];
const v17 = [v15,1337,13.37];
const v19 = 1337 > eval;
const v21 = [3.0,3.0];
for (let v25 = 0; v25 < 5; v25++) {
    const v27 = gc();
    const v28 = v21.splice();
}
let v30 = 0;
const v32 = Symbol.isConcatSpreadable;
const v33 = v30 + 1;
for (const v35 in "object") {
    const v38 = [1337,1337,1337,1337,1337];
    function v39(v40,v41,v42,v43) {
        'use strict'
        try {
            v43[3] = v43;
        } catch(v44) {
            const v49 = [1337,1337,1337];
            const v50 = [3664180981,3664180981,"string","string"];
            const v51 = {valueOf:v50,length:v49,toString:parseFloat,constructor:"string",c:parseFloat};
            const v52 = v49.__proto__;
            const v56 = [v39];
            const v58 = [255,255,255];
            let v60 = 0;
            const v61 = {a:255,toString:arguments,c:v56,__proto__:v58,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v38;
    }
    const v62 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
    const v64 = new Proxy(v38,v62);
    v64[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
