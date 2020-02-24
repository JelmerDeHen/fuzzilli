function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337,v4];
const v7 = ["hasInstance"];
const v8 = {constructor:1818622568,b:13.37,valueOf:v6,d:v7,a:13.37,e:"hasInstance",c:v7};
const v9 = {c:v4,__proto__:v6,constructor:v7,length:Boolean,a:"hasInstance",valueOf:13.37};
let v10 = Boolean;
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
                        return v43;
                    }
                    const v52 = v46.toLocaleString();
                    const v54 = [];
                    const v55 = {a:v54};
                    const v56 = {__proto__:eval,constructor:v55,length:v54};
                    const v57 = v56.__proto__(v52);
                    const v59 = Object.defineProperty(this,1337,v43);
                } catch(v60) {
                    try {
                        const v61 = v40[3];
                    } catch(v62) {
                        v60.valueOf = v9;
                    }
                }
                return v39;
            }
            const v63 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
            const v65 = new Proxy(v38,v63);
            v65[1] = "MIN_VALUE";
        }
        const v66 = v32();
    }
}
const v67 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v69 = new Proxy(v18,v67);
v69[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
