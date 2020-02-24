function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = [v6,v4];
const v8 = {d:ArrayBuffer,valueOf:v4,e:v4,a:2147483649,toString:1337};
const v9 = {d:"string",e:v4};
let v10 = v8;
const v12 = [13.37,13.37,13.37,13.37];
const v13 = [];
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        v21[3] = v21;
    } catch(v22) {
        function v23(v24,v25) {
            const v29 = [1337,1337,1337,1337,1337];
            function v30(v31,v32,v33,v34) {
                'use strict'
                try {
                    const v35 = new Float64Array(v33);
                    function v38(v39,v40,v41,v42,v43) {
                        'use strict'
                    }
                    const v44 = v38.toLocaleString();
                    const v46 = [];
                    const v47 = {a:v46};
                    const v48 = {__proto__:eval,constructor:v47,length:v46};
                    let v51 = 0;
                    const v52 = v48.__proto__(v44,v51,19873,Float32Array);
                    const v54 = Object.defineProperty(Uint8Array,1337,v34);
                } catch(v55) {
                    try {
                        const v56 = v31[3];
                    } catch(v57) {
                        v55.valueOf = v55;
                    }
                }
                return v30;
            }
            const v58 = {deleteProperty:v30,set:v30,getPrototypeOf:v30,call:v30,preventExtensions:v30,isExtensible:v30,construct:v30,get:v30,ownKeys:v30,setPrototypeOf:v30,has:v30};
            const v60 = new Proxy(v29,v58);
            v60[1] = "MIN_VALUE";
        }
        const v61 = v23();
    }
}
const v62 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v64 = new Proxy(v16,v62);
const v65 = !v16;
const v66 = v17(v13,v6,v64);
const v67 = {};
const v68 = [v67,v67,v67,v67,v67];
}
%NeverOptimizeFunction(main);
main();
