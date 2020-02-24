function main() {
const v1 = [13.37,13.37];
const v3 = new Float32Array();
const v4 = v3.slice();
const v6 = [1337];
const v7 = [1337,v6,v6];
const v8 = {b:v6};
const v9 = {b:v6,length:1337,constructor:v8,d:1337};
let v10 = v1;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [];
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        v24[3] = v24;
    } catch(v25) {
        const v30 = [-2331916614,-2331916614,-2331916614];
        const v31 = [3664180981,3664180981,"string","string"];
        const v32 = {valueOf:v31,length:v30,toString:parseFloat,constructor:"string",c:parseFloat};
        function v33(v34,v35) {
            const v40 = new Uint8Array();
            const v41 = v40.slice();
            const v42 = [1337,1337,1337,1337,1337];
            function v43(v44,v45,v46,v47) {
                'use strict'
                try {
                    const v48 = new Float64Array(v46);
                    function v51(v52,v53,v54,v55,v56) {
                        'use strict'
                    }
                    const v57 = v51.toLocaleString();
                    const v59 = [];
                    const v60 = {a:v59};
                    const v61 = {__proto__:eval,constructor:v60,length:v59};
                    let v64 = 0;
                    const v65 = v61.__proto__(v57,v64,19873,Symbol);
                    const v67 = Object.defineProperty(this,1337,v47);
                } catch(v68) {
                    try {
                        const v69 = v44[3];
                    } catch(v70) {
                        v68.valueOf = v68;
                    }
                }
                return v43;
            }
            const v71 = {deleteProperty:v43,set:v43,getPrototypeOf:v43,call:v43,preventExtensions:v43,isExtensible:v43,construct:v43,get:v43,ownKeys:v43,setPrototypeOf:v43,has:v43};
            const v73 = new Proxy(v42,v71);
            v73[1] = "MIN_VALUE";
        }
        const v74 = v33();
    }
}
const v75 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v77 = new Proxy(v19,v75);
v77[1] = "MIN_VALUE";
function v78(v79,v80,v81,v82) {
    'use strict'
}
const v83 = {deleteProperty:v78,set:v78,getPrototypeOf:v78,call:v78,preventExtensions:v78,isExtensible:v78,construct:v78,get:v78,ownKeys:v78,setPrototypeOf:v78,has:v78};
const v85 = Proxy();
}
%NeverOptimizeFunction(main);
main();
