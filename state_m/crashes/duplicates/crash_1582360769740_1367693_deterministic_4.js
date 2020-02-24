function main() {
const v2 = [1337,"match"];
for (let v6 = 0; v6 < 8; v6++) {
    for (const v7 in v2) {
    }
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
            const v26 = v23.__proto__;
            const v30 = [v13];
            const v32 = [255,255,255];
            let v34 = 0;
            const v35 = {a:255,toString:arguments,c:v30,__proto__:v32,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v12;
    }
    const v36 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
    const v38 = new Proxy(v12,v36);
    v38[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
