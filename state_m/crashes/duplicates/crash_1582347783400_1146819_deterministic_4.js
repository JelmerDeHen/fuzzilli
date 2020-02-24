function main() {
for (const v1 in "object") {
    const v5 = [13.37,13.37,13.37,13.37,13.37];
    const v7 = [v5,1337,13.37];
    const v8 = {b:"toStringTag",c:v7};
    for (let v12 = 0; v12 < 9; v12++) {
    }
    const v14 = [1337,1337,1337,1337,1337];
    function v15(v16,v17,v18,v19) {
        'use strict'
        try {
            v19[3] = v19;
        } catch(v20) {
            const v27 = [1.7976931348623157e+308];
            const v29 = [255,255,255];
            const v30 = {a:255,toString:isFinite,c:v27,__proto__:v29,valueOf:DataView,constructor:"gM8oAednYn"};
            const v31 = {toString:v27,valueOf:v30,d:255,constructor:536870912};
            const v32 = RegExp.apply();
        }
        return v14;
    }
    const v33 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
    const v35 = new Proxy(v14,v33);
    v35[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
