function main() {
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    function v9(v10,v11) {
        const v15 = [1337,1337,1337,1337,1337];
        function v16(v17,v18,v19,v20) {
            'use strict'
            try {
                const v22 = [13.37,13.37];
                const v23 = {b:v22};
                const v27 = [Uint8ClampedArray,13.37,2];
                const v30 = [];
                const v31 = {length:1337,e:1337,c:v30,a:1337,toString:"symbol"};
                function v32(v33,v34,v35,v36) {
                    'use strict'
                    const v37 = v27.includes();
                }
                const v38 = {deleteProperty:v23,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v32,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:v32,has:v32};
                const v40 = new Proxy(v31,v38);
                const v41 = new Float64Array(v19);
                const v44 = [];
                const v45 = {a:v44};
                const v46 = {__proto__:eval,constructor:v45,length:v44};
                const v48 = Object.defineProperty(this,1337,v20);
            } catch(v49) {
                try {
                    const v50 = v17[3];
                } catch(v51) {
                    v49.valueOf = v49;
                }
            }
            return v16;
        }
        const v52 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
        const v54 = new Proxy(v15,v52);
        v54[1] = "MIN_VALUE";
    }
    const v55 = v9();
}
const v56 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v58 = new Proxy(v3,v56);
v58[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
