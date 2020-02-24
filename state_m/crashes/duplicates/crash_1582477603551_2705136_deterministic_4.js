function main() {
const v1 = [13.37];
const v3 = [1337,1337,1337];
const v7 = [1337,1337,1337,1337,1337];
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        v12[3] = v12;
    } catch(v13) {
        function v14(v15,v16) {
            const v20 = [1337,1337,1337,1337,1337];
            function v21(v22,v23,v24,v25) {
                'use strict'
                try {
                    const v26 = new Float64Array(v24);
                    function v28(v29,v30,v31,v32,v33) {
                        'use strict'
                        return v24;
                    }
                    const v35 = [13.37,13.37,13.37];
                    const v37 = [1337,1337,1337,1337,1337];
                    function v38(v39,v40,v41,v42) {
                        'use strict'
                    }
                    const v43 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v35,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,__proto__:v38,has:v38};
                    const v45 = new Proxy(v37,v43);
                    const v47 = Object.defineProperty(this,1337,v25);
                } catch(v48) {
                    try {
                        const v49 = v22[3];
                    } catch(v50) {
                        v48.valueOf = v48;
                    }
                }
                return v21;
            }
            const v51 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
            const v53 = new Proxy(v20,v51);
            v53[1] = "MIN_VALUE";
        }
        const v54 = v14();
    }
}
const v55 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
const v57 = new Proxy(v7,v55);
v57[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
