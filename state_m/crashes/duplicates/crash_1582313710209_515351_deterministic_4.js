function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [v4,13.37];
const v6 = {__proto__:"POSITIVE_INFINITY"};
const v7 = {d:"POSITIVE_INFINITY",toString:13.37};
let v8 = v2;
const v11 = [13.37,13.37,13.37,13.37,13.37];
const v13 = [v11,1337,13.37];
const v15 = 1337 > eval;
const v17 = {__proto__:536870912};
const v19 = Symbol.species;
let v21 = 0;
let v23 = 0;
for (let v27 = 0; v27 < 4; v27++) {
}
let v29 = 0;
const v30 = v29 + 1;
let v32 = 0;
const v33 = v32 + 1;
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
