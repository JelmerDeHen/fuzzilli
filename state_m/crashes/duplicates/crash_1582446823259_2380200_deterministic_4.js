function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337];
const v5 = [v4,1337];
const v6 = {length:13.37};
const v7 = {b:v5,c:this,toString:v6,length:v5};
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
                    const v47 = (1337).toLocaleString();
                    const v49 = [];
                    const v50 = {a:v49};
                    const v51 = {__proto__:eval,constructor:v50,length:v49};
                    let v54 = 0;
                    const v55 = v51.__proto__(v47,v54,19873,Symbol);
                    const v57 = Object.defineProperty(this,1337,v43);
                } catch(v58) {
                    try {
                        const v59 = v40[3];
                    } catch(v60) {
                        v58.valueOf = v58;
                        let v62 = -849961.8330764936;
                        const v64 = [13.37,13.37];
                        const v65 = {length:v64};
                        const v70 = [1337,1337];
                        const v71 = [NaN,13.37,2];
                        let v72 = v70;
                        const v73 = {get:NaN};
                    }
                }
                return v39;
            }
            const v74 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
            const v76 = new Proxy(v38,v74);
            v76[1] = "MIN_VALUE";
        }
        const v77 = v32();
    }
}
const v78 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v80 = new Proxy(v18,v78);
v80[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
