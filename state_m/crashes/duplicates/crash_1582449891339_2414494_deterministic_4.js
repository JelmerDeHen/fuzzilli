function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [1337,"MIN_SAFE_INTEGER",v3,13.37];
const v7 = {a:eval,b:v6,e:"MIN_SAFE_INTEGER",valueOf:v6,c:"MIN_SAFE_INTEGER",constructor:v3,d:13.37};
const v8 = {c:13.37};
let v9 = v6;
let v12 = 0;
let v13 = v3;
const v14 = v12 + 1;
for (const v15 in "replace") {
    const v18 = [1337,1337,1337,1337,1337];
    function v19(v20,v21,v22,v23) {
        'use strict'
        try {
            v23[3] = v23;
        } catch(v24) {
            const v27 = new Float32Array();
            const v33 = [1.7976931348623157e+308];
            const v35 = [255,255,13.37];
            const v36 = {a:255,toString:isFinite,c:v33,toString:v35,valueOf:"object",constructor:"number"};
            let v38 = RegExp;
            let v39 = v38;
            const v44 = [1337];
            const v45 = {__proto__:v44,a:v44,constructor:Number,e:13.37,length:"number",b:13.37};
            const v46 = 13.37 && v45;
            let v49 = "p8Xp0R1moN";
            const v50 = JSON.stringify();
            let v52 = v46;
            const v53 = JSON.stringify(v52);
            const v54 = JSON.parse(v53);
            const v56 = new Promise(v39);
            const v57 = {toString:v33,valueOf:v36,d:255,constructor:536870912};
        }
        return v18;
    }
    const v58 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
    const v60 = new Proxy(v18,v58);
    v60[129132512] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
