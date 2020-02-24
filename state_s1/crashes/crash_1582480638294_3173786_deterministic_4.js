function main() {
const v1 = [13.37,13.37];
const v3 = [1337,1337,1337];
const v4 = {b:1337,valueOf:v1};
const v5 = [];
const v9 = [1337,1337,1337,1337,1337];
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        v14[3] = v14;
    } catch(v15) {
        const v17 = v12.__proto__;
        const v20 = [-2331916614,-2331916614,-2331916614];
        const v21 = [3664180981,3664180981,"string","string"];
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
                    const v44 = [];
                    const v45 = {a:v44};
                    const v46 = {__proto__:eval,constructor:v45,length:v44};
                    const v47 = v46.__proto__(v42);
                    const v49 = Object.defineProperty(this,1337,v33);
                } catch(v50) {
                    try {
                        const v51 = v30[3];
                    } catch(v52) {
                        v50.valueOf = v50;
                    }
                }
                return v29;
            }
            const v53 = {deleteProperty:v29,set:v29,getPrototypeOf:v29,call:v29,preventExtensions:v29,isExtensible:v29,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:v29,has:v29};
            const v55 = new Proxy(v28,v53);
            v55[1] = "MIN_VALUE";
        }
        const v56 = v22();
    }
}
const v57 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
for (let v61 = 0; v61 < 100; v61++) {
    const v62 = v10(v3,v4,v9,v5);
}
const v64 = new Proxy(v9,v57);
v64[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
