function main() {
const v2 = [13.37];
const v4 = [1337];
const v5 = [v4];
const v6 = {length:1337,b:13.37,c:-1,d:v5,a:v4};
const v7 = {__proto__:1337,b:-1,a:v2};
let v8 = -1;
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
            for (const v36 in "ruHq55V2**") {
                const v37 = {};
                let v40 = 0;
                do {
                    const v41 = v40 > v31;
                    const v42 = v40 + 1;
                    v40 = v42;
                } while (v40 < 7);
                const v46 = [1337,1337,1337,1337,1337];
                function v47(v48,v49,v50,v51) {
                    'use strict'
                    try {
                        const v52 = new Float64Array(v50);
                        function v54(v55,v56,v57,v58,v59) {
                            'use strict'
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
        }
        const v69 = v32(v31);
    }
}
const v70 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v72 = new Proxy(v18,v70);
v72[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
