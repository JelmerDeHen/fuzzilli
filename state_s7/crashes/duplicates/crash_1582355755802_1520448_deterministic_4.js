function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = ["EbVA7q923p","EbVA7q923p",13.37,13.37];
const v8 = {length:13.37,c:-1802196748,__proto__:v4,b:Int8Array,a:Int8Array,d:v6};
const v9 = {valueOf:1337,toString:13.37,c:v6,e:v8,d:-1802196748};
for (const v11 in "object") {
    const v14 = [1337,1337,1337,1337,1337];
    function v15(v16,v17,v18,v19) {
        'use strict'
        try {
            v19[3] = v19;
        } catch(v20) {
            let v22 = 0;
            const v24 = [13.37,13.37,13.37,13.37,13.37];
            function v25(v26,v27,v28,v29) {
                'use strict'
                const v32 = Object.freeze(this);
            }
            const v33 = v24.filter(v25,v24);
            const v34 = v22 + 1;
            const v36 = [1337,1337,1337,1337];
            const v39 = [1337,1337,1337,1337,"d"];
            const v41 = new Uint8Array();
        }
        return v14;
    }
    const v42 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
    const v44 = new Proxy(v14,v42);
    v44[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
