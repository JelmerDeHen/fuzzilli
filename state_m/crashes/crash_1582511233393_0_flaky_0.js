function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337];
const v7 = [13.37,"number"];
const v8 = {valueOf:parseFloat,constructor:13.37,__proto__:1337,d:13.37,length:parseFloat,c:1337,e:v7,a:v7};
const v9 = {toString:parseFloat};
let v10 = v6;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [];
const v16 = {b:1337,c:v12,d:13.37,a:v14,length:v15,valueOf:1337};
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        v22[3] = v22;
    } catch(v23) {
        function v24(v25,v26) {
            const v30 = [1337,1337,1337,1337,1337];
            function v31(v32,v33,v34,v35) {
                'use strict'
                try {
                    const v36 = new Float64Array(v34);
                    function v39(v40,v41,v42,v43,v44) {
                        'use strict'
                    }
                    const v45 = v39.toLocaleString();
                    const v47 = [];
                    const v48 = {a:v47};
                    const v49 = {__proto__:eval,constructor:v48,length:v47};
                    let v52 = 0;
                    const v53 = v49.__proto__(v45,v52,19873,Symbol);
                    const v55 = Object.defineProperty(this,1337,v35);
                } catch(v56) {
                    try {
                        const v57 = v32[3];
                    } catch(v58) {
                        v56.valueOf = v56;
                    }
                }
                return v31;
            }
            const v59 = {deleteProperty:v31,set:v31,getPrototypeOf:v31,call:v31,preventExtensions:v31,isExtensible:v31,construct:v31,get:v31,ownKeys:v31,setPrototypeOf:v31,has:v31};
            const v61 = new Proxy(v30,v59);
            v61[1] = "MIN_VALUE";
        }
        const v62 = v24();
    }
}
let v63 = v7;
let v64 = v7;
const v65 = parseFloat();
const v66 = {a:256,...13.37};
const v67 = v18(v63,v4,v14);
}
%NeverOptimizeFunction(main);
main();
