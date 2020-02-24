function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
        } catch(v10) {
            const v12 = v7[9007199254740993];
            const v15 = [1337,1337,1337];
            const v16 = [3664180981,3664180981,"string","string"];
            const v20 = [v5];
            const v22 = [255,255,255];
            const v23 = {a:255,toString:arguments,c:v20,__proto__:v22,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v4;
    }
    const v24 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    const v26 = new Proxy(v4,v24);
    v26[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
