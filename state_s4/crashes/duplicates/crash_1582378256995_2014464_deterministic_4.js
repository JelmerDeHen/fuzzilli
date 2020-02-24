function main() {
for (const v1 in "object") {
    function v2(v3,v4,v5,v6) {
        'use strict'
    }
    const v7 = {deleteProperty:v2,set:v2,getPrototypeOf:v2,call:v2,preventExtensions:v2,isExtensible:v2,construct:v2,get:v2,ownKeys:v2,setPrototypeOf:v2,has:v2};
}
for (const v9 in "object") {
    const v12 = [1337,1337,1337,1337,1337];
    function v13(v14,v15,v16,v17) {
        'use strict'
        try {
            v17[3] = v17;
        } catch(v18) {
            const v23 = [1337,1337,1337];
            const v24 = [3664180981,3664180981,"string","string"];
            const v25 = {valueOf:v24,length:v23,toString:parseFloat,constructor:"string",c:parseFloat};
            let v26 = v15;
            const v27 = v23.__proto__;
            const v31 = [v13];
            const v33 = [255,255,255];
            const v34 = {a:255,toString:arguments,c:v31,__proto__:v33,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v12;
    }
    const v35 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
    const v37 = new Proxy(v12,v35);
    v37[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
