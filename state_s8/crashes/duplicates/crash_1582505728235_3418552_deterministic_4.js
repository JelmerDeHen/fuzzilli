function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [DataView,v4];
const v6 = {length:v4,toString:DataView,a:v2,e:DataView,c:1337};
const v7 = {c:v2,d:v5,__proto__:v5};
let v8 = DataView;
const v11 = new Uint8Array();
const v12 = v11.slice();
const v13 = [13.37,13.37,13.37,13.37];
const v15 = [1337,1337,1337,1337];
const v16 = [];
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
const v63 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
let v66 = 0;
const v67 = v66 + 1;
const v68 = v18(Proxy,v63,0);
}
%NeverOptimizeFunction(main);
main();
