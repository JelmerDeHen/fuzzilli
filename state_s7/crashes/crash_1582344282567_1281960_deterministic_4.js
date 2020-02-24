function main() {
for (const v1 in "object") {
    const v4 = [13.37,13.37,13.37,13.37];
    const v6 = [1337];
    const v7 = [v4,13.37,v6,v6];
    const v8 = {e:v4,__proto__:v6,a:v6,valueOf:13.37,constructor:1337};
    const v10 = [13.37,13.37,13.37,13.37];
    const v12 = [1337];
    function v13(v14,v15) {
    }
    const v17 = [1337,1337,1337,1337,1337];
    function v18(v19,v20,v21,v22) {
        'use strict'
        try {
            v22[3] = v22;
        } catch(v23) {
            const v29 = [1.7976931348623157e+308];
            const v31 = [255,255,255];
            const v32 = {a:255,toString:isFinite,c:v29,__proto__:v31,valueOf:DataView,constructor:"gM8oAednYn"};
            const v33 = {toString:v29,valueOf:v32,d:255,constructor:536870912};
            for (const v34 of v6) {
            }
        }
        return v17;
    }
    const v35 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
    const v37 = new Proxy(v17,v35);
    v37[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
