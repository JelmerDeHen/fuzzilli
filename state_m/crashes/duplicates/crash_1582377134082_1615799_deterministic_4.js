function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v12 = new Int16Array();
        const v13 = typeof v12;
        const v15 = v13 === "function";
        let v16 = v5;
        if (v7) {
            for (const v17 in v2) {
                v5[1] = v17;
            }
        } else {
            const v18 = new WeakSet(v9);
            v16 = v7;
        }
        const v19 = new Int16Array();
        const v20 = v19.subarray();
        const v22 = [1337];
        let v23 = v22;
        const v24 = v20.copyWithin(v23,v9,v10);
        const v27 = [1337,1337,1337];
        const v28 = {length:2395520983,b:v27,__proto__:1337,constructor:1337,a:v27,valueOf:v27};
        let v30 = DataView;
        const v33 = [1337,1337,1337,1337,1337];
        function v34(v35,v36,v37,v38) {
            'use strict'
        }
        const v39 = {deleteProperty:v34,set:v34,getPrototypeOf:v34,call:v34,preventExtensions:v34,isExtensible:v34,construct:v34,get:v34,ownKeys:v34,setPrototypeOf:1337,has:v30};
        const v40 = Proxy();
        for (const v41 in v40) {
        }
    } catch(v42) {
        v7.__proto__ = v42;
    }
}
const v43 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
const v45 = new Proxy(v5,v43);
v45[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
