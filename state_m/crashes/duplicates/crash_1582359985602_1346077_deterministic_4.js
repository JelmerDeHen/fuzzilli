function main() {
const v1 = {e:1337};
for (const v3 in "object") {
    const v6 = [1337,1337,1337,1337,1337];
    function v7(v8,v9,v10,v11) {
        'use strict'
        try {
            v11[3] = v11;
        } catch(v12) {
            const v17 = [1337,1337,1337];
            const v18 = [3664180981,3664180981,"string","string"];
            const v19 = {valueOf:v18,length:v1,toString:parseFloat,constructor:"string",c:parseFloat};
            const v23 = [v7];
            const v25 = [255,255,255];
            const v26 = {a:255,toString:arguments,c:v23,__proto__:v25,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v6;
    }
    const v27 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
    const v29 = new Proxy(v6,v27);
    v29[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
