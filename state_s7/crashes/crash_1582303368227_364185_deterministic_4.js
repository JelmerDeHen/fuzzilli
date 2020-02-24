function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337,1337,1337];
const v4 = [];
const v5 = {d:v3,valueOf:1337,constructor:13.37};
const v6 = {a:v5,b:1337};
for (const v8 in "object") {
    const v11 = [1337,1337,1337,1337,1337];
    function v12(v13,v14,v15,v16) {
        'use strict'
        try {
            v16[3] = v16;
        } catch(v17) {
            const v24 = {length:"N0Xx92zvHQ"};
            const v25 = {constructor:13.37,length:13.37,__proto__:v24,toString:Number,a:"N0Xx92zvHQ"};
            const v32 = "object".constructor;
            const v33 = {apply:v32,deleteProperty:gc,preventExtensions:Object,ownKeys:v32,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
            const v35 = [1337];
            let v36 = v35;
            let v37 = v36;
            let v39 = 13.37;
            const v43 = [1337];
            const v44 = {__proto__:v43,a:v43,constructor:v39,e:13.37,length:"number",b:13.37};
            const v47 = [-1825918256];
            let v48 = v47;
            const v50 = [1337,-315074.8582556173,-315074.8582556173];
            const v51 = [v48,v50];
            const v52 = v51.toLocaleString();
            const v53 = {c:v52,d:v50};
            let v56 = 0;
            let v57 = v53;
            const v58 = [0,v57,v57];
            const v59 = JSON.stringify();
        }
        return v11;
    }
    const v60 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
    const v62 = new Proxy(v11,v60);
    v62[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
