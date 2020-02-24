function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337];
const v7 = [1000];
const v8 = {length:Proxy,b:1000};
const v9 = {constructor:v4,valueOf:Proxy};
let v10 = "boolean";
for (const v12 in "object") {
    const v15 = [13.37,13.37,13.37,13.37];
    const v17 = [1337];
    const v18 = [v15,13.37,v17,v17];
    const v19 = {e:v15,__proto__:v17,a:v17,valueOf:13.37,constructor:1337};
    const v21 = [13.37,13.37,13.37,13.37];
    function v22(v23,v24) {
    }
    const v26 = [1337,1337,1337,1337,1337];
    function v27(v28,v29,v30,v31) {
        'use strict'
        try {
            v31[3] = v31;
        } catch(v32) {
            const v40 = [1.7976931348623157e+308];
            const v42 = [255,255,255];
            const v43 = {a:255,toString:isFinite,c:v40,__proto__:v42,valueOf:DataView,constructor:"gM8oAednYn"};
            let v46 = 1337;
            const v47 = JSON.stringify();
            const v49 = (0).toLocaleString();
            const v50 = v49.padStart();
            const v51 = v47 | v50;
            const v52 = {toString:v40,valueOf:v43,d:255,constructor:536870912};
            const v53 = RegExp.apply(v52,RegExp);
            const v54 = "object".split();
        }
        return v26;
    }
    const v55 = {deleteProperty:v27,set:v27,getPrototypeOf:v27,call:v27,preventExtensions:v27,isExtensible:v27,construct:v27,get:v27,ownKeys:v27,setPrototypeOf:v27,has:v27};
    const v57 = new Proxy(v26,v55);
    v57[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
