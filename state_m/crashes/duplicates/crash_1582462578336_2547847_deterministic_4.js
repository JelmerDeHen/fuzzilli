function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337];
const v5 = [];
const v6 = {};
const v7 = {a:v2,constructor:v4,c:9007199254740992};
let v8 = v6;
const v11 = new Uint32Array();
const v14 = v11.slice(-2147483649,1337);
const v15 = [13.37,13.37,13.37,13.37];
const v17 = [1337,1337,1337,1337];
const v18 = [];
const v19 = {b:1337,c:v15,d:13.37,a:v17,length:v18,valueOf:1337};
const v22 = [1337,1337,1337,1337,1337];
function v23(v24,v25,v26,v27) {
    'use strict'
    try {
        v27[3] = v27;
    } catch(v28) {
        const v33 = [-2331916614,-2331916614,-2331916614];
        const v34 = [3664180981,3664180981,"string","string"];
        const v35 = {valueOf:v34,length:v33,toString:parseFloat,constructor:"string",c:parseFloat};
        function v36(v37,v38) {
            const v42 = [1337,1337,1337,1337,1337];
            function v43(v44,v45,v46,v47) {
                'use strict'
                try {
                    const v48 = new Float64Array(v46);
                    function v51(v52,v53,v54,v55,v56) {
                        'use strict'
                    }
                    const v57 = v51.toLocaleString();
                    const v59 = [];
                    const v60 = {a:v59};
                    const v61 = {__proto__:eval,constructor:v60,length:v59};
                    let v64 = 0;
                    const v65 = v61.__proto__(v57,v64,19873,Symbol);
                    const v67 = Object.defineProperty(this,1337,v47);
                } catch(v68) {
                    try {
                        const v69 = v44[3];
                    } catch(v70) {
                        v68.valueOf = v68;
                    }
                }
                return v43;
            }
            const v71 = {deleteProperty:v43,set:v43,getPrototypeOf:v43,call:v43,preventExtensions:v43,isExtensible:v43,construct:v43,get:v43,ownKeys:v43,setPrototypeOf:v43,has:v43};
            const v73 = new Proxy(v42,v71);
            v73[1] = "MIN_VALUE";
        }
        const v74 = v36();
    }
}
const v75 = {};
const v76 = v23();
}
%NeverOptimizeFunction(main);
main();
