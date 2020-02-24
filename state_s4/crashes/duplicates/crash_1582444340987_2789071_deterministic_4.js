function main() {
const v2 = [13.37];
const v4 = [1337];
const v5 = [v4,1337];
const v6 = {b:v4,a:v4,toString:v2,e:13.37,constructor:13.37,c:9007199254740992};
const v7 = {e:v2,valueOf:9007199254740992,constructor:v4};
let v8 = v4;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v13 = [];
const v14 = {b:1337,c:v10,d:13.37,a:v12,length:v13,valueOf:1337};
const v18 = [1337,1337,1337,1337,1337];
const v21 = [13.37,"DPtrqeeOKz"];
const v23 = [1337];
let v24 = v23;
let v26 = undefined;
function v27(v28,v29,v30,v31) {
    'use strict'
    try {
        v31[3] = v31;
    } catch(v32) {
        const v37 = [-2331916614,-2331916614,-2331916614];
        const v38 = [3664180981,3664180981,"string","string"];
        const v39 = {valueOf:v38,length:v37,toString:parseFloat,constructor:"string",c:parseFloat};
        function v40(v41,v42) {
            const v46 = [1337,1337,1337,1337,1337];
            function v47(v48,v49,v50,v51) {
                'use strict'
                try {
                    const v52 = new Float64Array(v50);
                    function v54(v55,v56,v57,v58,v59) {
                        'use strict'
                        return v50;
                    }
                    const v60 = v54.toLocaleString();
                    const v62 = Object.defineProperty(this,1337,v51);
                } catch(v63) {
                    try {
                        const v64 = v48[3];
                    } catch(v65) {
                        v63.valueOf = v63;
                    }
                }
                return v47;
            }
            const v66 = {deleteProperty:v47,set:v47,getPrototypeOf:v47,call:v47,preventExtensions:v47,isExtensible:v47,construct:v47,get:v47,ownKeys:v47,setPrototypeOf:v47,has:v47};
            const v68 = new Proxy(v46,v66);
            v68[1] = "MIN_VALUE";
        }
        const v69 = v40();
    }
}
const v70 = {deleteProperty:v27,set:v27,getPrototypeOf:v27,call:v27,preventExtensions:v27,isExtensible:v27,construct:v27,get:v27,ownKeys:v27,setPrototypeOf:v27,has:v27};
const v72 = new Proxy(v18,v70);
v72[1] = "MIN_VALUE";
if (v72) {
} else {
    function v73(v74,v75,v76,v77) {
    }
}
}
%NeverOptimizeFunction(main);
main();
