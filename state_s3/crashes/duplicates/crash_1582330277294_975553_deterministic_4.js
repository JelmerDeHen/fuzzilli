function main() {
for (let v3 = 0; v3 < 100; v3++) {
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
                return v12;
            }
            const v25 = v19.__proto__;
            const v29 = [v9];
            const v31 = [255,255,255];
            const v32 = {a:255,toString:arguments,c:v29,__proto__:v31,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v8;
    }
    const v33 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
    const v35 = new Proxy(v8,v33);
    v35[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
