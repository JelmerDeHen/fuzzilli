function main() {
for (const v1 in "object") {
    const v4 = [13.37,13.37,13.37,13.37];
    const v6 = [1337];
    const v7 = [v4,13.37,v6,v6];
    const v8 = {e:v4,__proto__:v6,a:v6,valueOf:13.37,constructor:1337};
    const v10 = [13.37,13.37,13.37,13.37];
    function v11(v12,v13) {
    }
    const v15 = [1337,1337,1337,1337,1337];
    function v16(v17,v18,v19,v20) {
        'use strict'
        try {
            v20[3] = v20;
        } catch(v21) {
            const v25 = {a:v4,constructor:v8};
            const v26 = {};
            const v27 = [v26,v26,v26,v26];
            const v32 = [1.7976931348623157e+308];
            const v34 = [255,255,255];
            const v35 = {a:255,toString:isFinite,c:v32,__proto__:v34,valueOf:DataView,constructor:"gM8oAednYn"};
            const v36 = {toString:v32,valueOf:v35,d:255,constructor:536870912};
            const v37 = RegExp.apply();
            const v38 = "object".split();
        }
        return v15;
    }
    const v39 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
    const v41 = new Proxy(v15,v39);
    v41[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
