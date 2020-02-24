function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [];
const v7 = {constructor:13.37,a:"string",b:v6};
const v8 = {length:v6,toString:1337,b:13.37,valueOf:v6,constructor:gc};
let v9 = v5;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        v22[3] = v22;
    } catch(v23) {
        const v28 = [-2331916614,-2331916614,-2331916614];
        const v29 = [3664180981,3664180981,"string","string"];
        const v30 = {valueOf:v29,length:v28,toString:parseFloat,constructor:"string",c:parseFloat};
        function v31(v32,v33) {
            const v36 = [1337,1337,1337,1337,1337];
            function v37(v38,v39,v40,v41) {
                'use strict'
                try {
                    const v42 = new Float64Array(v40);
                    function v45(v46,v47,v48,v49,v50) {
                        'use strict'
                        return v42;
                    }
                    const v51 = v45.toLocaleString();
                    const v53 = [];
                    const v54 = {a:v53};
                    const v55 = {__proto__:eval,constructor:v54,length:v53};
                    let v57 = 0;
                    const v58 = v55.__proto__(v51);
                    const v60 = Object.defineProperty(this,Symbol,v41);
                } catch(v61) {
                    try {
                        const v62 = v38[3];
                    } catch(v63) {
                        v61.valueOf = v61;
                    }
                }
                return v37;
            }
            const v64 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
            const v66 = new Proxy(v36,v64);
            v66[1] = "MIN_VALUE";
        }
        const v67 = v31();
    }
}
const v68 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v70 = new Proxy(v17,v68);
v70[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
