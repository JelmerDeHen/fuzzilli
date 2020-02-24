function main() {
const v1 = [13.37,13.37,13.37];
const v3 = [1337,1337];
const v4 = [1337,v1,v3];
const v5 = {};
const v6 = {length:v4,a:1337,b:1337,__proto__:v5};
let v7 = v4;
const v10 = [13.37,13.37];
for (const v13 in "object") {
    const v16 = [1337,1337,1337,1337,1337];
    function v17(v18,v19,v20,v21) {
        'use strict'
        try {
            v21[3] = v21;
        } catch(v22) {
            const v25 = [];
            const v26 = {length:1337,e:1337,c:v25,a:1337,toString:"symbol"};
            function v28(v29,v30,v31,v32) {
                'use strict'
            }
            const v33 = {deleteProperty:v28,set:v28,getPrototypeOf:v28,call:v28,preventExtensions:v28,isExtensible:v28,construct:v28,get:v28,ownKeys:v28,setPrototypeOf:v28,has:v28};
            const v35 = new Float64Array(v26,v33);
            v35[1] = "MIN_VALUE";
        }
        return v16;
    }
    const v36 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
    const v38 = new Proxy(v16,v36);
    v38[1] = "MIN_VALUE";
}
const v39 = [1337,1337,1337,1337];
const v40 = [1337,13.37,arguments,1337];
const v41 = {__proto__:v39,b:v10,d:v40,e:v40,c:13.37};
let v42 = v41;
let v44 = -1024;
const v47 = [-3.0,-828296917];
let v50 = 0;
do {
    function v51(v52,v53) {
    }
    const v55 = [1337];
    let v56 = v55;
    const v57 = v51();
    const v58 = v47.splice();
} while (v50 < 3);
}
%NeverOptimizeFunction(main);
main();
