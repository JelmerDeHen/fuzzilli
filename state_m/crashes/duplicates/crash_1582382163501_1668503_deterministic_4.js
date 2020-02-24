function main() {
const v2 = [1337,1337,1337];
const v4 = [13.37,13.37,13.37,13.37];
const v8 = [1337,1337,1337,1337,1337];
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        v13[3] = eval;
    } catch(v14) {
        const v19 = [-2331916614,-2331916614,-2331916614];
        const v20 = [3664180981,3664180981,"string","string"];
        const v21 = {valueOf:v20,length:v19,toString:parseFloat,constructor:"string",c:parseFloat};
        function v22(v23,v24) {
            const v28 = [1337,1337,1337,1337,1337];
            function v29(v30,v31,v32,v33) {
                'use strict'
                try {
                    const v34 = new Float64Array(v32);
                    function v36(v37,v38,v39,v40,v41) {
                        'use strict'
                    }
                    const v42 = v36.toLocaleString();
                    const v44 = Object.defineProperty(this,1337,v33);
                } catch(v45) {
                    try {
                        const v46 = v30[3];
                    } catch(v47) {
                        v45.valueOf = v8;
                    }
                }
                return v29;
            }
            const v48 = {deleteProperty:v29,set:v29,getPrototypeOf:v29,call:v29,preventExtensions:v29,isExtensible:v29,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:v29,has:v29};
            const v50 = new Proxy(v28,v48);
            v50[1] = "MIN_VALUE";
        }
        const v51 = v22();
    }
}
const v52 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v54 = new Proxy(v8,v52);
v54[1] = "MIN_VALUE";
let v55 = v4;
for (const v56 of v55) {
}
}
%NeverOptimizeFunction(main);
main();
