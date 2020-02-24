function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [1337,-3225574190,-3225574190];
const v7 = {constructor:1337,__proto__:v6,valueOf:1337,length:v3};
const v8 = {c:1337,valueOf:Uint16Array,length:13.37};
let v9 = -3225574190;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,d:v14,valueOf:1337};
const v19 = [-1024,-1024,-1024,-1024,-1024];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        v24[3] = v24;
    } catch(v25) {
        const v30 = [-2331916614,-2331916614,-2331916614];
        const v31 = [3664180981,3664180981,"string","string"];
        const v32 = {valueOf:v31,length:v30,toString:parseFloat,constructor:"string",c:parseFloat};
        function v33(v34,v35) {
            const v39 = [1337,1337,1337,1337,1337];
            function v40(v41,v42,v43,v44) {
                'use strict'
                try {
                    const v45 = new Float64Array(v43);
                    function v48(v49,v50,v51,v52,v53) {
                        'use strict'
                    }
                    const v54 = v48.toLocaleString();
                    const v56 = [];
                    const v57 = {a:v56};
                    const v58 = {__proto__:eval,constructor:v57,length:v56};
                    let v60 = eval;
                    const v61 = v58.__proto__(v54,v60,19873,Symbol);
                    const v63 = Object.defineProperty(this,1337,v44);
                } catch(v64) {
                    try {
                        const v65 = v41[3];
                    } catch(v66) {
                        v64.valueOf = v64;
                    }
                }
                return v40;
            }
            const v67 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
            const v69 = new Proxy(v39,v67);
            v69[1] = "MIN_VALUE";
        }
        const v70 = v33();
    }
}
const v71 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v73 = new Proxy(v19,v71);
v73[1] = "MIN_VALUE";
const v74 = 13.37 * v7;
const v75 = v6.join();
let v76 = v73;
const v77 = v20(v5,v11,Proxy,v5);
}
%NeverOptimizeFunction(main);
main();
