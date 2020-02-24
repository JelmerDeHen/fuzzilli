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
            const v20 = [1337,1337,1337];
            const v21 = [3664180981,3664180981,"string","string"];
            const v24 = Math.hypot(-1970853828,13.37,"boolean");
            const v28 = [v9];
            const v30 = [255,255,255];
            const v31 = {a:255,toString:arguments,c:v28,__proto__:v30,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v8;
    }
    const v32 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
    const v34 = new Proxy(v8,v32);
    v34[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
