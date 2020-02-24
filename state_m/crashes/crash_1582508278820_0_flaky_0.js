function main() {
const v3 = [13.37];
let v7 = undefined;
const v9 = [1337,1337];
const v10 = v9.shift();
const v12 = Object.values(v9);
const v13 = [1337,1337,1337,1337];
const v14 = [v3,-2875872810];
const v15 = {constructor:13.37,b:v3,valueOf:-2875872810,d:gc};
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
                    function v47(v48,v49,v50,v51,v52) {
                        'use strict'
                        const v53 = v47[v48];
                    }
                    const v54 = v47.toLocaleString();
                    const v56 = [];
                    const v57 = {a:v56};
                    const v58 = {__proto__:eval,constructor:v57,length:v56};
                    const v60 = Object.defineProperty(this,1337,v44);
                } catch(v61) {
                    try {
                        const v62 = v41[3];
                    } catch(v63) {
                        v61.valueOf = v61;
                    }
                }
                return v40;
            }
            const v64 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
            const v66 = new Proxy(v39,v64);
            v66[1] = "MIN_VALUE";
        }
        const v67 = v33();
    }
}
const v68 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v70 = new Proxy(v19,v68);
v70[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
