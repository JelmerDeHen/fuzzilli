function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[1073741824] = v9;
        } catch(v10) {
            const v14 = [v5];
            const v16 = [255,255,255];
            const v17 = {a:255,toString:arguments,c:v14,__proto__:v16,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v4;
    }
    const v18 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    const v20 = new Proxy(v4,v18);
    v20[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
