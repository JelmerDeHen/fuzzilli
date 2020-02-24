function main() {
for (const v2 in "object") {
    const v5 = [1337,1337,1337,1337,1337];
    function v6(v7,v8,v9,v10) {
        'use strict'
        try {
            v10[3] = 6;
        } catch(v11) {
            const v16 = [1337,1337,1337];
            const v17 = [3664180981,v2,"string","string"];
            const v18 = {valueOf:v17,length:v16,toString:parseFloat,constructor:"string",c:parseFloat};
            const v22 = [v6];
            const v24 = [255,255,255];
            const v25 = {a:255,toString:arguments,c:v22,__proto__:v24,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v5;
    }
    const v26 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
    const v28 = new Proxy(v5,v26);
    v28[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
