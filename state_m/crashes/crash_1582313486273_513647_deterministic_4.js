function main() {
const v2 = [13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [];
const v6 = {c:v4,d:65536,valueOf:v5,e:1337,b:1337};
const v7 = {};
for (const v9 in "object") {
    const v12 = [1337,1337,1337,1337,1337];
    function v13(v14,v15,v16,v17) {
        'use strict'
        try {
            v17[3] = v17;
        } catch(v18) {
            const v23 = [1337,1337,1337,1337];
            const v24 = {valueOf:v23};
            const v26 = {e:v24,d:"d"};
            function v27(v28,v29) {
                let v32 = -128;
                while (v32 < 5) {
                    const v33 = v32 + 1;
                    v32 = v33;
                }
            }
            const v35 = [1337];
            let v36 = v35;
            const v37 = v27();
            const v41 = [13.37,13.37];
            const v42 = [10,DataView,"symbol"];
            const v43 = {toString:v41,e:"symbol",a:13.37,d:DataView,constructor:v42,valueOf:v41};
            const v44 = {length:v43,a:"symbol"};
            const v45 = v44.a;
            for (const v47 in "boolean") {
                let v49 = 0;
                const v50 = v49 + 1;
            }
            const v51 = Math.hypot();
            const v57 = {length:"N0Xx92zvHQ"};
            const v58 = {constructor:13.37,length:13.37,__proto__:v57,toString:Number,a:"N0Xx92zvHQ"};
            const v65 = "object".constructor;
            const v66 = {apply:v65,deleteProperty:gc,preventExtensions:Object,ownKeys:v65,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
            const v68 = new Proxy(v58,v66);
            const v69 = v68[4088076774];
            const v71 = [1337];
            let v72 = v71;
            let v73 = v72;
            const v79 = [1.7976931348623157e+308];
            const v81 = [255,255,255];
            const v82 = {a:255,toString:isFinite,c:v79,__proto__:v81,valueOf:DataView,constructor:"gM8oAednYn"};
            const v83 = {toString:v79,valueOf:v82,d:255,constructor:536870912};
        }
        return v12;
    }
    const v84 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
    const v86 = new Proxy(v12,v84);
    v86[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
