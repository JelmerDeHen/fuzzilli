function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
let v6 = -128;
const v7 = [];
const v8 = {a:v4,length:1337,toString:v7,constructor:v4,valueOf:-3574697863};
const v9 = {};
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    for (const v19 in "prototype") {
        const v21 = [v14,1337];
        const v22 = v21.shift();
        const v23 = (1337).constructor;
        const v24 = {set:v23,a:v23};
        const v26 = Object.seal();
        const v29 = arguments + 1;
        const v31 = [1337,1337,"MIN_VALUE",1337,1337];
        function v32(v33,v34,v35,v36) {
            'use strict'
            try {
                let v38 = 0;
                v36[3] = 0;
            } catch(v39) {
                let v40 = v29;
                const v41 = [];
                const v42 = {a:v41};
                const v43 = {__proto__:v36,constructor:v42,length:v41};
                const v44 = v40 in v43;
            }
            return v36;
        }
        const v45 = {deleteProperty:v32,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v32,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:1337,has:v32};
        const v47 = new Proxy(v31,v45);
        v47[1] = "MIN_VALUE";
        const v49 = new Uint32Array();
        const v50 = v49.slice();
    }
}
const v51 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,c:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v53 = new Proxy(v12,v51);
v53[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
