function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337];
const v7 = [];
const v8 = {c:Infinity,valueOf:v7,toString:"function"};
const v9 = {valueOf:3891201376,toString:"function",a:1337,c:v6,length:"function",e:v6,__proto__:v7};
let v10 = 1337;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [];
const v16 = {b:1337,c:v12,d:13.37,a:v14,length:v15,valueOf:1337};
const v20 = [1337,1337,1337,1337,1337];
function v21(v22,v23,v24,v25) {
    'use strict'
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
                }
                const v53 = v47.toLocaleString();
                const v55 = [];
                const v56 = {a:v55};
                const v57 = {__proto__:eval,constructor:v56,length:v55};
                const v59 = Object.defineProperty(this,1337,v44);
                v45.b = v39;
            } catch(v60) {
                try {
                    const v61 = v41[3];
                } catch(v62) {
                    v60.valueOf = v60;
                }
            }
            return v40;
        }
        const v63 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
        const v65 = new Proxy(v39,v63);
        v65[1] = "MIN_VALUE";
    }
    const v66 = v33();
}
const v67 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v69 = new Proxy(v20,v67);
v69[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
