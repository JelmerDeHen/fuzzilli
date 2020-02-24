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
            const v20 = [1337,1337,1337];
            const v24 = [v13];
            const v26 = [255,255,255];
            const v27 = {a:255,toString:arguments,c:v24,__proto__:v26,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v12;
    }
    const v28 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
    const v30 = new Proxy(v12,v28);
    v30[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
