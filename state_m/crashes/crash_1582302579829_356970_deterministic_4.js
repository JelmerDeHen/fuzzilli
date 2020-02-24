function main() {
const v1 = [13.37];
const v3 = [1337];
const v4 = [];
const v5 = {valueOf:1337};
const v6 = {toString:v3,d:v1,c:13.37,e:v1,a:13.37,b:v4};
for (const v8 in "symbol") {
    const v11 = [1337,1337,1337,1337,1337];
    function v12(v13,v14,v15,v16) {
        'use strict'
        try {
            v16[3] = v16;
        } catch(v17) {
            const v24 = {length:"N0Xx92zvHQ"};
            const v25 = {constructor:13.37,length:13.37,__proto__:v24,toString:Number,a:"N0Xx92zvHQ"};
            const v29 = [1337];
            const v33 = [v29,3609309068,13.37];
            const v35 = [1337];
            const v36 = {a:3609309068,c:"undefined"};
            const v37 = {e:1337,__proto__:v33,constructor:1337,a:v35,c:"undefined",valueOf:v36};
            const v39 = new Float64Array();
            const v44 = "object".constructor;
            const v45 = {apply:v44,deleteProperty:gc,preventExtensions:Object,ownKeys:v44,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
            const v47 = new Proxy(v25,v45);
            const v48 = v47[4088076774];
            const v50 = [1337];
            let v51 = v50;
            let v52 = v51;
            const v54 = [13.37,13.37,13.37,13.37];
            let v55 = v54;
            const v57 = [13.37,v55,13.37];
            const v59 = [1337];
            const v60 = [1337,v57,v59,1337];
            const v62 = [65536,v60];
            const v64 = new Int16Array(v62);
            const v65 = v62.constructor;
        }
        return v11;
    }
    const v66 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,toString:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
    const v68 = new Proxy(v11,v66);
    v68[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
