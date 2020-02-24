function main() {
const v2 = [13.37];
const v4 = [1337];
const v5 = [4096,4096,v2];
const v6 = {a:4096,valueOf:13.37,constructor:v4,b:4096};
const v8 = [13.37,13.37,13.37,13.37];
const v10 = [1337,1337,1337,1337];
const v11 = [];
const v12 = {b:1337,c:v8,d:13.37,a:v10,length:v11,valueOf:1337};
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
                    const v52 = v48.__proto__(v44,v51,19873,Symbol);
                    const v54 = Object.defineProperty(this,1337,v34);
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
const v63 = 4096 in v62;
const v64 = v10[256];
const v65 = "MIN_VALUE" / v4;
const v66 = v16.__proto__;
const v67 = v17(v10,v11,v12);
}
%NeverOptimizeFunction(main);
main();
