function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337];
const v5 = [v4,1858232703];
const v6 = {valueOf:v4,d:13.37};
const v7 = {d:v6,b:v4,toString:v5,__proto__:1858232703};
let v8 = 1337;
const v10 = [1337];
let v11 = v10;
const v14 = [13.37,13.37,13.37,13.37];
const v16 = [1337,1337,1337,1337];
const v17 = [];
const v18 = {b:1337,c:v14,d:13.37,a:v16,length:v17,valueOf:1337};
const v22 = [1337,1337,1337,1337,1337];
function v23(v24,v25,v26,v27) {
    'use strict'
    try {
        v27[3] = v27;
    } catch(v28) {
        const v33 = [-2331916614,-2331916614,-2331916614];
        const v34 = [3664180981,3664180981,"string","string"];
        const v35 = {valueOf:v34,length:v33,toString:parseFloat,constructor:"string",c:parseFloat};
        function v36(v37,v38) {
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
        const v74 = v36();
    }
}
const v75 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
const v77 = new Proxy(v22,v75);
v77[1] = "MIN_VALUE";
const v78 = Uint8Array();
const v79 = v78.slice();
const v81 = Uint8ClampedArray();
const v82 = v81.slice();
}
%NeverOptimizeFunction(main);
main();
