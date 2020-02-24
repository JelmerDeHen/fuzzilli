function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [Function,v3];
const v7 = {toString:1,constructor:13.37};
const v8 = {};
let v9 = 13.37;
const v11 = [13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [v13,1337];
const v16 = [1337,1337];
for (const v18 in "object") {
    const v21 = [1337,1337,1337,1337,1337];
    function v22(v23,v24,v25,v26) {
        'use strict'
        try {
            v26[3] = v26;
        } catch(v27) {
            const v32 = [1337,1337,1337];
            const v33 = [3664180981,3664180981,"string","string"];
            const v34 = {valueOf:v33,length:v32,toString:parseFloat,constructor:"string",c:parseFloat};
            function v35(v36,v37) {
                v16[v32] = "MIN_VALUE";
                return v24;
            }
            const v38 = v32.__proto__;
            const v42 = [v22];
            const v44 = [255,255,255];
            const v45 = {a:255,toString:arguments,c:v42,__proto__:v44,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v21;
    }
    const v46 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
    const v48 = new Proxy(v21,v46);
    v48[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
