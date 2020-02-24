function main() {
for (const v1 in "boolean") {
    const v5 = [13.37];
    const v7 = [1337,1337,1337];
    const v8 = ["N*d4*m/H0F","N*d4*m/H0F",v7];
    const v9 = {valueOf:v7,b:-1662380622,c:v5,a:v5,__proto__:1337,constructor:v8};
}
for (const v11 in "object") {
    const v14 = [1337,1337,1337,1337,1337];
    function v15(v16,v17,v18,v19) {
        'use strict'
        try {
            v19[3] = v19;
        } catch(v20) {
            const v25 = [1337,1337,1337];
            const v26 = [3664180981,3664180981,"string","string"];
            const v27 = {valueOf:v26,length:v25,toString:parseFloat,constructor:"string",c:parseFloat};
            const v28 = v25.__proto__;
            const v32 = [v15];
            const v34 = [255,255,255];
            let v36 = 0;
            const v37 = {a:255,toString:arguments,c:v32,__proto__:v34,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v14;
    }
    const v38 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
    const v40 = new Proxy(v14,v38);
    v40[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
