function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337];
const v7 = [1000];
const v8 = {length:Proxy,b:1000};
const v9 = {constructor:v4,valueOf:Proxy};
let v10 = "boolean";
const v13 = [13.37,13.37,13.37,13.37,13.37];
const v15 = [v13,1337,13.37];
const v17 = 1337 > eval;
const v19 = {__proto__:536870912};
const v21 = Symbol.species;
let v24 = 0;
do {
    for (let v28 = 0; v28 < 2; v28++) {
    }
    const v29 = v24 + 1;
    v24 = v29;
} while (v24 < 9);
let v32 = 0;
do {
    const v33 = v32 + 1;
    v32 = v33;
} while (v32 < 5);
for (const v35 in "object") {
    const v38 = [1337,1337,1337,1337,1337];
    function v39(v40,v41,v42,v43) {
        'use strict'
        try {
            v43[3] = v43;
        } catch(v44) {
            const v50 = [1337,1337,1337];
            const v51 = [3664180981,3664180981,"string","string"];
            const v54 = Math.hypot(-1970853828,13.37,"boolean");
            const v58 = [v39];
            const v60 = [255,255,255];
            const v61 = {a:255,toString:arguments,c:v58,__proto__:v60,valueOf:DataView,constructor:"gM8oAednYn"};
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
