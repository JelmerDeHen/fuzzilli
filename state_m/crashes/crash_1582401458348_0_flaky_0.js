function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [];
const v6 = {};
const v7 = {d:Float64Array};
let v8 = v2;
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    function v18(v19,v20) {
        const v24 = [1337,1337,1337,1337,1337];
        function v25(v26,v27,v28,v29) {
            'use strict'
            try {
                const v30 = new Float64Array(v28);
                function v32(v33,v34,v35,v36,v37) {
                    'use strict'
                }
                const v38 = v32.toLocaleString();
                const v40 = [];
                const v41 = {a:v40};
                const v42 = {__proto__:eval,constructor:v41,length:v40};
                const v43 = v42.__proto__(v38);
                const v45 = Object.defineProperty(this,1337,v29);
            } catch(v46) {
                try {
                    const v47 = v26[3];
                } catch(v48) {
                    v46.valueOf = v46;
                }
            }
            return v25;
        }
        const v49 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
        const v51 = new Proxy(v24,v49);
        v51[1] = "MIN_VALUE";
    }
    const v52 = v18();
}
const v53 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v55 = new Proxy(v12,v53);
v55[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
