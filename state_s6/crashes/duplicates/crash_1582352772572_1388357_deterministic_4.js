function main() {
let v2 = 0;
while (v2 < 1337) {
    const v3 = v2 + 1;
    v2 = v3;
}
for (const v5 in "object") {
    const v8 = [1337,1337,1337,1337,1337];
    function v9(v10,v11,v12,v13) {
        'use strict'
        try {
            v13[3] = v13;
        } catch(v14) {
            const v19 = [1337,1337,1337];
            const v20 = [3664180981,3664180981,"string","string"];
            const v21 = {valueOf:v20,length:v19,toString:parseFloat,constructor:"string",c:parseFloat};
            function v22(v23,v24) {
                return v22;
            }
            const v28 = [v9];
            const v30 = [255,255,255];
            let v32 = 0;
            const v33 = {a:255,toString:arguments,c:v28,__proto__:v30,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v8;
    }
    const v34 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
    const v36 = new Proxy(v8,v34);
    v36[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
