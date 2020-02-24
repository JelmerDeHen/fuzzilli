function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v3 = [1337,1337];
const v4 = [1337];
for (const v6 in "object") {
    const v9 = [1337,v6,1337,1337,1337];
    function v10(v11,v12,v13,v14) {
        'use strict'
        try {
            v14[3] = v14;
        } catch(v15) {
            let v17 = 0;
            const v18 = v17 + 1;
            const v20 = 2.2250738585072014e-308 / v18;
            const v21 = [];
            let v22 = v21;
            const v26 = [246894.76681851153,-784574.8915542257,9007199254740991,246894.76681851153];
            const v29 = [13.37,13.37];
            const v31 = [1337,1337,1337,1337,1337];
            const v32 = [13.37,1337];
            const v33 = {a:v22,length:v31,__proto__:v29,c:v32,toString:v31};
            function v34(v35,v36,v37,v38) {
                'use strict'
            }
            const v39 = {deleteProperty:v34,set:v34,getPrototypeOf:v34,call:v34,preventExtensions:v34,isExtensible:v34,construct:v34,get:v34,ownKeys:v34,setPrototypeOf:v34,has:v34};
            const v41 = new Proxy(v33,v39);
            v26.__proto__ = v41;
            const v42 = new Uint8ClampedArray();
            const v43 = 1337 > v42;
        }
        return v9;
    }
    const v44 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
    const v46 = new Proxy(v9,v44);
    v46[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
