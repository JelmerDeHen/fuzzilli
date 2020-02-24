function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337];
const v6 = [eval,v5,v5];
const v7 = {valueOf:v5};
const v8 = {valueOf:v7,c:v5,constructor:"string",e:1337};
let v9 = v7;
const v11 = [13.37,13.37,13.37];
const v13 = [1337];
const v14 = [];
const v15 = {a:13.37};
for (const v17 in "object") {
    const v20 = [1337,1337,1337,1337,1337];
    function v21(v22,v23,v24,v25) {
        'use strict'
        try {
            v25[3] = v25;
        } catch(v26) {
            for (let v32 = 0; v32 < 0; v32 = v32 | 1) {
            }
            const v37 = [1337,1337,1337];
            const v38 = [3664180981,3664180981,"string","string"];
            const v39 = {valueOf:v38,length:v37,toString:ArrayBuffer,constructor:"string",c:ArrayBuffer};
            const v40 = v37.__proto__;
            const v43 = Math.hypot(-1970853828,13.37,"boolean");
            for (let v48 = 0; v48 < 3; v48++) {
                const v49 = v48 < 3;
                let v51 = 0;
                const v52 = v51 + 1;
            }
            const v55 = [v21];
            const v57 = [255,255,255];
            let v59 = 0;
            const v60 = {a:255,toString:arguments,c:v55,__proto__:v57,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v20;
    }
    const v61 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
    const v63 = new Proxy(v20,v61);
    v63[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
