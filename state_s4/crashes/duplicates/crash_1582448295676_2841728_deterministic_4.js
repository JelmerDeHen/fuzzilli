function main() {
const v2 = [13.37];
const v4 = [1337];
const v5 = [];
const v6 = {};
const v7 = {c:v5,length:-65535};
let v8 = 1337;
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
                    const v46 = [13.37,13.37,13.37,13.37];
                    const v48 = new Uint32Array();
                    function v51(v52,v53,v54,v55,v56) {
                        'use strict'
                    }
                    const v57 = v51.toLocaleString();
                    const v59 = [];
                    const v60 = {a:v59};
                    const v61 = {__proto__:eval,constructor:v60,length:v59};
                    let v64 = 0;
                    const v65 = v61.__proto__(v57,v64,19873,Symbol);
                    const v67 = Object.defineProperty(this,1337,v43);
                } catch(v68) {
                    try {
                        const v69 = v40[3];
                    } catch(v70) {
                        v68.valueOf = v68;
                    }
                }
                return v39;
            }
            const v71 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
            const v73 = new Proxy(v38,v71);
            v73[1] = "MIN_VALUE";
        }
        const v74 = v32();
    }
}
const v75 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v77 = new Proxy(v18,v75);
v77[1] = "MIN_VALUE";
const v79 = [13.37,13.37,13.37,13.37,13.37];
const v80 = [];
function v81(v82,v83) {
}
const v84 = v79.some(v81);
}
%NeverOptimizeFunction(main);
main();
