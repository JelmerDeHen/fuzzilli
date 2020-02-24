function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = [127,v4,1337,"number"];
const v8 = {constructor:"number",length:13.37,toString:1337,a:127};
const v9 = {e:v8,valueOf:"number",__proto__:v7,length:Float32Array,d:v8};
let v10 = v9;
const v12 = [-1000000.0,-1000000.0,-1000000.0,-1000000.0];
const v14 = [1337,1337,1337,1337];
const v15 = [];
const v16 = {b:1337,c:v12,d:-1000000.0,a:v14,length:v15,valueOf:1337};
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
const v63 = 1337 & v16;
for (let v67 = 0; v67 < 7; v67++) {
    let v68 = v63;
    const v70 = Symbol.species;
}
const v71 = v18(7,v4,0);
}
%NeverOptimizeFunction(main);
main();
