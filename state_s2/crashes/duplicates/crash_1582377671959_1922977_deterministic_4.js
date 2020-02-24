function main() {
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    function v9(v10,v11) {
        const v15 = [1337,1337,1337,1337,1337];
        function v16(v17,v18,v19,v20) {
            'use strict'
            try {
                const v21 = new Float64Array(v19);
                function v23(v24,v25,v26,v27,v28) {
                    'use strict'
                }
                const v29 = v23.toLocaleString();
                const v31 = [];
                const v32 = {a:v31};
                const v33 = {__proto__:eval,constructor:v32,length:v31};
                const v34 = v33.__proto__(v29);
                const v36 = Object.defineProperty(this,1337,v20);
            } catch(v37) {
                try {
                    const v39 = new Int16Array();
                    const v40 = v39.slice();
                } catch(v41) {
                    v37.valueOf = v37;
                }
            }
            return v16;
        }
        const v42 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
        const v44 = new Proxy(v15,v42);
        v44[1] = "MIN_VALUE";
    }
    const v45 = v9();
}
const v46 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v48 = new Proxy(v3,v46);
v48[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
