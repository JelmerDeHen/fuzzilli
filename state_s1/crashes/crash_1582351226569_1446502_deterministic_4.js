function main() {
for (const v2 in "object") {
    const v5 = [1337,1337,1337,1337,1337];
    function v6(v7,v8,v9,v10) {
        'use strict'
        try {
            v10[3] = v10;
        } catch(v11) {
            const v14 = [v6];
            const v16 = [255,255,255];
            let v18 = 0;
            const v19 = {a:255,toString:arguments,c:v14,__proto__:v16,valueOf:DataView,constructor:__proto__};
        }
        return v5;
    }
    const v20 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
    const v22 = new Proxy(v5,v20);
    v22[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
