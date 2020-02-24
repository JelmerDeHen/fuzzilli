function main() {
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    function v9(v10,v11) {
        const v15 = [1337,1337,1337,1337,1337];
        function v16(v17,v18,v19,v20) {
            'use strict'
            const v25 = [13.37];
            const v27 = [1337,1337,1337];
            const v28 = ["isConcatSpreadable",2,2];
            const v29 = {constructor:Uint8ClampedArray,toString:1337};
            const v30 = {d:v28};
            let v31 = v29;
            let v34 = 2;
            let v36 = v34;
            const v37 = [1337,1337,-65535];
            const v38 = v37.shift();
            let v41 = 0;
            do {
                const v42 = v41 + 1;
                v41 = v42;
            } while (v41 < 10);
            try {
                const v43 = new Float64Array(v19);
                const v45 = [];
                const v46 = {a:v45};
                const v48 = Object.defineProperty(this,1337,v20);
            } catch(v49) {
            }
            return v16;
        }
        const v50 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
        const v52 = new Proxy(v15,v50);
        v52[1] = "MIN_VALUE";
    }
    const v53 = v9();
}
const v54 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v56 = new Proxy(v3,v54);
v56[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
