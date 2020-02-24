function main() {
let v2 = 0;
do {
    const v6 = [13.37,13.37];
    const v8 = [1337];
    const v9 = [13.37];
    const v10 = {b:v6,c:13.37,valueOf:-2,d:v9,constructor:1337,__proto__:v8};
    const v11 = Math.clz32();
    const v13 = eval();
    const v14 = v2 + 1;
    v2 = v14;
} while (v2 < 8);
for (const v16 in "object") {
    const v19 = [1337,1337,1337,1337,1337];
    function v20(v21,v22,v23,v24) {
        'use strict'
        try {
            v24[3] = v24;
        } catch(v25) {
            const v31 = Math.hypot(-1970853828,13.37,"boolean",DataView);
            const v35 = [v20];
            const v37 = [255,255,255];
            const v38 = {a:255,toString:arguments,c:v35,__proto__:v37,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v21;
    }
    const v39 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
    const v41 = new Proxy(v19,v39);
    v41[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
