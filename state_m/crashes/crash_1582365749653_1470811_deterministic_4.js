function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [];
const v6 = {length:this,c:v2};
const v7 = {b:v6,valueOf:this};
let v8 = v7;
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
                    function v47(v48,v49,v50,v51,v52) {
                        'use strict'
                    }
                    const v53 = v47.toLocaleString();
                    const v54 = [];
                    const v55 = {a:v54};
                    const v56 = {__proto__:v43,constructor:v55,length:v54};
                    let v59 = 0;
                    const v60 = v56.__proto__(v53,v59,19873,Symbol);
                    const v62 = Object.defineProperty(this,1337,v43);
                } catch(v63) {
                    try {
                        const v64 = v40[3];
                    } catch(v65) {
                        v63.valueOf = v63;
                    }
                }
                return v39;
            }
            const v66 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
            const v68 = new Proxy(v38,v66);
            v68[1] = "MIN_VALUE";
        }
        const v69 = v32();
    }
}
const v70 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v72 = new Proxy(v18,v70);
v72[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
