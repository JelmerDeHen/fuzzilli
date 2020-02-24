function main() {
const v4 = [13.37];
const v6 = [1337];
const v7 = [1337,"number"];
const v12 = [1337];
const v13 = {__proto__:parseFloat,a:v12,toString:"byteLength",length:13.37};
const v16 = [1337,1337,1337,1337,ArrayBuffer];
function v17(v18,v19,v20,v21) {
    'use strict'
}
const v22 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v24 = new Proxy(v16,v22);
const v25 = {e:v6,length:"number"};
const v26 = {length:"number",c:v6,d:-2055429257,toString:Uint32Array};
let v27 = v25;
const v29 = [13.37,13.37,13.37,13.37];
const v31 = [1337,1337,1337,1337];
const v32 = [];
const v33 = {b:1337,c:v29,d:13.37,a:v31,length:v32,valueOf:1337};
const v37 = [1337,1337,1337,1337,1337];
function v38(v39,v40,v41,v42) {
    'use strict'
    try {
        v42[3] = v42;
    } catch(v43) {
        const v48 = [-2331916614,-2331916614,-2331916614];
        const v49 = [3664180981,3664180981,"string","string"];
        const v50 = {valueOf:v49,length:v48,toString:parseFloat,constructor:"string",c:parseFloat};
        function v51(v52,v53) {
            const v57 = [1337,1337,1337,1337,1337];
            function v58(v59,v60,v61,v62) {
                'use strict'
                try {
                    const v63 = new Float64Array(v61);
                    function v66(v67,v68,v69,v70,v71) {
                        'use strict'
                    }
                    const v72 = v66.toLocaleString();
                    const v74 = [];
                    const v75 = {a:v74};
                    const v76 = {__proto__:eval,constructor:v75,length:v74};
                    let v79 = 0;
                    const v80 = v76.__proto__(v72,v79,19873,Symbol);
                    const v82 = Object.defineProperty(this,1337,v62);
                } catch(v83) {
                    try {
                        const v84 = v59[3];
                    } catch(v85) {
                        v83.valueOf = v83;
                    }
                }
                return v58;
            }
            const v86 = {deleteProperty:v58,set:v58,getPrototypeOf:v58,call:v58,preventExtensions:v58,isExtensible:v58,construct:v58,get:v58,ownKeys:v58,setPrototypeOf:v58,has:v58};
            const v88 = new Proxy(v57,v86);
            v88[1] = "MIN_VALUE";
        }
        const v89 = v51();
    }
}
const v90 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
const v92 = new Proxy(v37,v90);
v92[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
