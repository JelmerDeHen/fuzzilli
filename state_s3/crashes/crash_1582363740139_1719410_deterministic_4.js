function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [1337,2147483647,1337];
const v7 = {c:"unscopable",valueOf:2147483647};
const v8 = {__proto__:v7};
let v9 = 2147483647;
const v12 = [13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [v12,13.37,v14];
const v16 = {constructor:13.37};
const v17 = {toString:v12,constructor:v12,valueOf:v14};
let v18 = Symbol;
const v21 = [13.37,13.37,13.37,13.37];
const v22 = v21.shift();
const v23 = 13.37 === v22;
const v24 = v14[1941688260];
const v26 = [1337,1337,v14];
const v27 = [1337,"U8Sf0oI+2+"];
const v31 = [1337,1337,1337,1337,1337];
function v32(v33,v34,v35,v36) {
    'use strict'
    try {
        const v38 = new Uint32Array();
        v36[3] = v36;
    } catch(v39) {
        const v44 = [-2331916614,-2331916614,-2331916614];
        const v45 = [3664180981,3664180981,"string","string"];
        const v46 = {valueOf:v45,length:v44,toString:parseFloat,constructor:"string",c:parseFloat};
        const v49 = [1337,1337,1337,1337,1337];
        function v50(v51,v52,v53,v54) {
            'use strict'
            try {
                const v55 = new Float64Array(v53);
                let v56 = "MIN_VALUE";
                const v57 = v56.__proto__;
                function v58(v59,v60,v61,v62,v63) {
                    'use strict'
                }
                const v64 = v58.toLocaleString();
                let v67 = 0;
                do {
                    const v68 = v67 + 1;
                    v67 = v68;
                } while (v67 < 7);
                Symbol[v54] = "U8Sf0oI+2+";
            } catch(v69) {
            }
            v34[4096] = v46;
        }
        const v70 = {deleteProperty:v50,set:v50,getPrototypeOf:v50,call:v50,preventExtensions:v50,isExtensible:v50,construct:v50,get:v50,ownKeys:v50,setPrototypeOf:v50,has:v50};
        const v72 = new Proxy(v49,v70);
        v72[1] = "MIN_VALUE";
    }
}
const v73 = {deleteProperty:v32,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v32,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:v32,has:v32};
const v75 = new Proxy(v31,v73);
v75[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
