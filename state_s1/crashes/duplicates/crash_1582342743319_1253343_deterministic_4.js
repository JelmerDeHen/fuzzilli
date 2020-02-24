function main() {
let v3 = 0;
do {
    for (const v4 in "boolean") {
    }
    const v5 = v3 + 1;
    v3 = v5;
} while (v3 < 5);
for (const v7 in "object") {
    const v10 = [1337,1337,1337,1337,1337];
    function v11(v12,v13,v14,v15) {
        'use strict'
        try {
            v15[3] = v15;
        } catch(v16) {
            const v21 = [1337,1337,1337];
            const v22 = [3664180981,3664180981,"string","string"];
            const v23 = {valueOf:v22,length:v21,toString:parseFloat,constructor:"string",c:parseFloat};
            const v24 = v21.__proto__;
            const v28 = [v11];
            const v30 = [255,255,255];
            let v32 = 0;
            const v33 = {a:255,toString:arguments,c:v28,__proto__:v30,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v10;
    }
    const v34 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
    const v36 = new Proxy(v10,v34);
    v36[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
