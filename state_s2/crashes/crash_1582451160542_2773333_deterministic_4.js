function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [Uint8ClampedArray,v2,13.37];
const v6 = {toString:1337,b:Uint8ClampedArray};
const v7 = {a:v4,d:v4};
let v8 = v5;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v13 = [];
const v14 = {b:1337,c:v10,d:13.37,a:v12,length:v13,valueOf:1337};
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        v23[3] = v23;
    } catch(v24) {
        const v29 = [-2331916614,-2331916614,-2331916614];
        const v30 = [3664180981,3664180981,"string","string"];
        const v31 = {valueOf:v30,length:v29,toString:parseFloat,constructor:"string",c:parseFloat};
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
                    const v61 = new Uint8ClampedArray();
                    let v62 = 0;
                    const v63 = v57.__proto__(v53,v62,19873,Symbol);
                    const v66 = new Int16Array();
                    const v67 = v66.slice();
                    const v69 = {__proto__:536870912};
                    const v70 = Object.defineProperty(this,1337,v43);
                } catch(v71) {
                    try {
                        const v72 = v40[3];
                    } catch(v73) {
                        v71.valueOf = v71;
                    }
                }
                return v39;
            }
            const v74 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
            const v76 = new Proxy(v38,v74);
            v76[1] = "MIN_VALUE";
        }
        const v77 = v32();
    }
}
const v78 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v80 = new Proxy(v18,v78);
v80[1] = "MIN_VALUE";
const v81 = v14.length;
const v82 = v81();
}
%NeverOptimizeFunction(main);
main();
