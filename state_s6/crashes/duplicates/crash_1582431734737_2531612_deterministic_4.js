function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [];
const v10 = [1337,1337,1337,1337,1337];
function v11(v12,v13,v14,v15) {
    'use strict'
    function v16(v17,v18) {
        const v22 = [1337,1337,1337,1337,1337];
        function v23(v24,v25,v26,v27) {
            'use strict'
            try {
                const v28 = new Float64Array(v26);
                function v30(v31,v32,v33,v34,v35) {
                    'use strict'
                }
                const v36 = v30.toLocaleString();
                const v38 = [];
                const v39 = {a:v38};
                const v40 = {__proto__:eval,constructor:v39,length:v38};
                let v42 = 0;
                const v43 = v40.__proto__(v36);
                const v45 = Object.defineProperty(this,1337,v27);
            } catch(v46) {
                try {
                    const v47 = v24[3];
                } catch(v48) {
                    v46.valueOf = v46;
                }
            }
            return v23;
        }
        const v49 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
        const v51 = new Proxy(v22,v49);
        v51[1] = "MIN_VALUE";
    }
    const v52 = v16();
}
const v53 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
const v55 = new Proxy(v10,v53);
v55[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
