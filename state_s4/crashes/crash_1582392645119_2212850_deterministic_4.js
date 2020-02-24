function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [];
const v6 = {e:v2};
const v7 = {c:1337,e:Proxy,b:1337,valueOf:1337,toString:v6};
let v8 = v5;
const v13 = [1337];
const v14 = {__proto__:parseFloat,a:v13,toString:"byteLength",length:13.37};
const v18 = [1337,1337,1337,1337,ArrayBuffer];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        const v24 = v14.caller;
    } catch(v25) {
        try {
            const v28 = [13.37,13.37,13.37,13.37];
            const v30 = [1337,1337,1337,1337];
            const v31 = [];
            const v32 = {b:1337,c:v28,d:13.37,a:v30,length:v31,valueOf:1337};
            const v36 = [1337,1337,1337,1337,1337];
            function v37(v38,v39,v40,v41) {
                'use strict'
                try {
                    v41[3] = v41;
                } catch(v42) {
                    const v47 = [-2331916614,-2331916614,-2331916614];
                    const v48 = [3664180981,3664180981,"string","string"];
                    const v49 = {valueOf:v48,length:v47,toString:parseFloat,constructor:"string",c:parseFloat};
                    function v50(v51,v52) {
                        const v56 = [1337,1337,1337,1337,1337];
                        function v57(v58,v59,v60,v61) {
                            'use strict'
                            try {
                                const v62 = new Float64Array(v60);
                                function v65(v66,v67,v68,v69,v70) {
                                    'use strict'
                                }
                                const v71 = v65.toLocaleString();
                                const v73 = [];
                                const v74 = {a:v73};
                                const v75 = {__proto__:eval,constructor:v74,length:v73};
                                let v78 = 0;
                                const v79 = v75.__proto__(v71,v78,19873,Symbol);
                                const v81 = Object.defineProperty(this,1337,v61);
                            } catch(v82) {
                                try {
                                    const v83 = v58[3];
                                } catch(v84) {
                                    v82.valueOf = v82;
                                }
                            }
                            return v57;
                        }
                        const v85 = {deleteProperty:v57,set:v57,getPrototypeOf:v57,call:v57,preventExtensions:v57,isExtensible:v57,construct:v57,get:v57,ownKeys:v57,setPrototypeOf:v57,has:v57};
                        const v87 = new Proxy(v56,v85);
                        v87[1] = "MIN_VALUE";
                    }
                    const v88 = v50();
                }
            }
            const v89 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
            const v91 = new Proxy(v36,v89);
            v91[1] = "MIN_VALUE";
            const v92 = Function();
        } catch(v93) {
        }
    }
}
const v94 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v96 = new Proxy(v18,v94);
v96[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
