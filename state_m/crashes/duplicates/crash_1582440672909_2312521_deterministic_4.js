function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [v3,v5];
const v7 = {};
const v8 = {length:v3,__proto__:"a",c:eval,constructor:v5};
let v9 = "a";
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
                    let v61 = 0;
                    const v62 = v58.__proto__(v54,v61,19873,Symbol,eval);
                    const v64 = Object.defineProperty(this,1337,v44);
                    const v67 = [13.37,13.37,13.37,13.37,13.37];
                    const v68 = Set();
                    const v69 = v68.entries();
                    const v71 = Uint32Array();
                    const v72 = v71.slice();
                } catch(v73) {
                    try {
                        const v74 = v41[3];
                    } catch(v75) {
                        v73.valueOf = v73;
                    }
                }
                return v40;
            }
            const v76 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
            const v78 = new Proxy(v39,v76);
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
