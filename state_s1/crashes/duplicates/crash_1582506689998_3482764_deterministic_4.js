function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337];
const v7 = [];
const v8 = {c:Infinity,valueOf:v7,toString:"function"};
const v9 = {valueOf:3891201376,toString:"function",a:1337,c:v6,length:"function",e:v6,__proto__:v7};
let v10 = 1337;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
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
                    function v46(v47,v48,v49,v50,v51) {
                        'use strict'
                        let v52 = v41;
                    }
                    const v53 = v46.toLocaleString();
                    const v55 = Object.defineProperty(this,1337,v43);
                } catch(v56) {
                    try {
                        const v57 = v40[3];
                    } catch(v58) {
                        v56.valueOf = v56;
                    }
                }
                return v39;
            }
            const v59 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
            const v61 = new Proxy(v38,v59);
            v61[1] = "MIN_VALUE";
        }
        const v62 = v32();
    }
}
const v63 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v65 = new Proxy(v18,v63);
v65[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();