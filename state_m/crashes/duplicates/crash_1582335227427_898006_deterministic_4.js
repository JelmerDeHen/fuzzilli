function main() {
let v2 = 0;
while (v2 < 1337) {
    const v3 = v2 + 1;
    v2 = v3;
}
const v6 = [1337,1337,1337,1337,1337];
const v7 = {toString:1337,valueOf:Array,constructor:v6,e:1337};
for (const v9 in "object") {
    const v13 = [1337,1337,1337,1337,13.37];
    function v14(v15,v16,v17,v18) {
        'use strict'
        try {
            v18[3] = v18;
        } catch(v19) {
            const v26 = [1.7976931348623157e+308];
            const v28 = [255,255,255];
            const v29 = {a:255,toString:isFinite,c:v26,__proto__:v28,valueOf:DataView,constructor:"gM8oAednYn"};
            const v30 = {toString:v26,valueOf:v7,d:255,constructor:536870912};
            const v31 = RegExp.apply();
        }
        return v13;
    }
    const v32 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
    const v34 = new Proxy(v13,v32);
    v34[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
