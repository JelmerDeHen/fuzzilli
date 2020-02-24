function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {b:13.37,constructor:1337};
const v8 = {b:v7,constructor:1337,toString:Array};
let v9 = -65536;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
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
            const v39 = new ArrayBuffer();
            const v40 = v39.slice();
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
                    const v65 = v61.__proto__(v57,v64,19873,Symbol,eval);
                    const v67 = [13.37,13.37,13.37,13.37];
                    const v69 = new Uint32Array();
                    const v70 = v69.slice();
                    const v72 = Object.defineProperty(this,1337,v47);
                } catch(v73) {
                    try {
                        const v74 = v44[3];
                    } catch(v75) {
                        v73.valueOf = v73;
                    }
                }
                return v43;
            }
            const v76 = {deleteProperty:v43,set:v43,getPrototypeOf:v43,call:v43,preventExtensions:v43,isExtensible:v43,construct:v43,get:v43,ownKeys:v43,setPrototypeOf:v43,has:v43};
            const v78 = new Proxy(v42,v76);
            v78[1] = "MIN_VALUE";
        }
        const v79 = v33();
    }
}
const v80 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v82 = new Proxy(v19,v80);
v82[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
