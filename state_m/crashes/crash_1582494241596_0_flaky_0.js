function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337];
const v7 = [-9007199254740992];
const v8 = {};
let v10 = 0;
const v11 = v10 + 1;
const v12 = {...WeakMap};
const v13 = {a:v8,constructor:v7,__proto__:"isConcatSpreadable",c:13.37};
let v14 = v7;
const v16 = [13.37,13.37,13.37,13.37];
const v18 = [1337,1337,1337,1337];
const v19 = [];
const v20 = {b:1337,c:v16,d:13.37,a:v18,length:v19,valueOf:1337};
const v23 = [1337,1337,1337,1337,1337];
function v24(v25,v26,v27,v28) {
    'use strict'
    try {
        v28[3] = v28;
    } catch(v29) {
        const v31 = [-2331916614,-2331916614,-2331916614];
        function v32(v33,v34) {
            const v38 = [1337,1337,1337,1337,1337];
            function v39(v40,v41,v42,v43) {
                'use strict'
                try {
                    const v44 = new Float64Array(v42);
                    function v47(v48,v49,v50,v51,v52) {
                        'use strict'
                    }
                    const v53 = v47.toLocaleString();
                    const v55 = [];
                    const v56 = {a:v55};
                    const v57 = {__proto__:eval,constructor:v56,length:v55};
                    let v60 = 0;
                    const v61 = v57.__proto__(v53,v60,19873,Symbol);
                    const v63 = Object.defineProperty(this,1337,v43);
                } catch(v64) {
                    try {
                        const v65 = v40[3];
                    } catch(v66) {
                        v64.valueOf = v64;
                    }
                }
                return v39;
            }
            const v67 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
            const v69 = new Proxy(v38,v67);
            v69[1] = "MIN_VALUE";
        }
        const v70 = v32();
    }
}
const v71 = v6 - 1;
for (let v75 = 0; v75 < 100; v75++) {
    const v76 = v24(1337);
}
}
%NeverOptimizeFunction(main);
main();
