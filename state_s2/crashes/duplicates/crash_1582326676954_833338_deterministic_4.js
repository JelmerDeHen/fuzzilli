function main() {
for (const v1 in "isConcatSpreadable") {
}
for (const v3 in "object") {
    const v6 = [1337,1337,1337,1337,1337];
    function v7(v8,v9,v10,v11) {
        'use strict'
        try {
            v11[3] = v11;
        } catch(v12) {
            const v17 = [1337,1337,1337];
            const v18 = [3664180981,3664180981,"string","string"];
            const v19 = {valueOf:v18,length:v17,toString:parseFloat,constructor:"string",c:parseFloat};
            const v20 = v17.__proto__;
            const v24 = [v7];
            const v26 = [255,255,255];
            let v28 = 0;
            const v29 = {a:255,toString:arguments,c:v24,__proto__:v26,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v6;
    }
    const v30 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
    const v32 = new Proxy(v6,v30);
    v32[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
