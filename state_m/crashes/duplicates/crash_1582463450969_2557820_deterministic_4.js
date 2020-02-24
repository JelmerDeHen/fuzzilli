function main() {
const v2 = [13.37,13.37,13.37];
const v4 = new Int16Array();
const v5 = v4.slice();
const v7 = [1337,1337,1337];
let v10 = 0;
const v14 = new Float32Array();
const v15 = v14.slice();
const v16 = [];
const v17 = {length:"constructor",e:1337,c:v16,a:1337,toString:"symbol"};
function v18(v19,v20,v21,v22) {
    'use strict'
}
const v23 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v25 = new Proxy(v17,v23);
const v26 = v10 + 1;
const v27 = [13.37,13.37,"function"];
const v28 = {d:1337,c:v2,b:v2,valueOf:"function",toString:v2};
const v30 = [13.37,13.37,13.37,13.37];
const v32 = [1337,1337,1337,1337];
const v33 = [];
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
                    function v65(v66,v67,v68,v69,v70) {
                        'use strict'
                    }
                    const v71 = v65.toLocaleString();
                    const v73 = [];
                    const v74 = {a:v73};
                    const v75 = {__proto__:eval,constructor:v74,length:v73};
                    const v76 = v75.__proto__(v71);
                    const v78 = Object.defineProperty(this,1337,v62);
                } catch(v79) {
                    try {
                        const v80 = v59[3];
                    } catch(v81) {
                        v79.valueOf = v79;
                    }
                }
                return v58;
            }
            const v82 = {deleteProperty:v58,set:v58,getPrototypeOf:v58,call:v58,preventExtensions:v58,isExtensible:v58,construct:v58,get:v58,ownKeys:v58,setPrototypeOf:v58,has:v58};
            const v84 = new Proxy(v57,v82);
            v84[1] = "MIN_VALUE";
        }
        const v85 = v51();
    }
}
const v86 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
const v88 = new Proxy(v37,v86);
v88[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
