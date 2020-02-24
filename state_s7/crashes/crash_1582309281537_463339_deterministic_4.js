function main() {
const v3 = [1337];
const v4 = [1337,v3,-61354574,WeakSet];
const v7 = [1337,1337,1337,1337,1337];
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        const v13 = v4.fill(v11,1337);
        const v14 = v12 << v13;
    } catch(v15) {
    }
    const v18 = [1337,1337,1337,1337];
    const v19 = {valueOf:v18,length:eval};
    const v22 = [1337,1337,1337,1337,1337];
    function v23(v24,v25,v26,v27) {
        'use strict'
        try {
            v27[3] = v27;
        } catch(v28) {
            const v34 = {length:"N0Xx92zvHQ"};
            const v35 = {constructor:13.37,length:13.37,__proto__:v34,toString:Number,a:"N0Xx92zvHQ"};
            const v37 = v27 instanceof v23;
            let v38 = v26;
            const v39 = gc();
            const v40 = {toString:v19,valueOf:"MIN_VALUE",d:v34,constructor:v22,c:Number,length:v22};
            const v41 = v22.__proto__;
            const v42 = {isExtensible:eval,setPrototypeOf:v24,has:v23,preventExtensions:v23,getPrototypeOf:v23,call:Object,apply:v23,ownKeys:v23,set:v28,deleteProperty:v25,getOwnPropertyDescriptor:Number,construct:eval};
            const v46 = [13.37,13.37];
            Reflect[Symbol] = v46;
        }
        return v22;
    }
    const v47 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
    const v49 = new Proxy(v22,v47);
    v49[1] = "MIN_VALUE";
}
const v50 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
const v52 = new Proxy(v7,v50);
v52[1] = "MIN_VALUE";
const v53 = v8(v50,v7,v7);
}
%NeverOptimizeFunction(main);
main();
