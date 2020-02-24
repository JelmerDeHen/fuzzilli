function main() {
const v2 = [-1000.0,-1000.0,-1000.0,-1000.0];
function v3(v4,v5) {
    const v9 = arguments + 1;
    const v11 = [1337,1337,"MIN_VALUE",1337,1337];
    function v12(v13,v14,v15,v16) {
        'use strict'
        try {
            let v19 = 0;
            while (v19 <= 4) {
                const v20 = v19 + 1;
                v19 = v20;
            }
            v16[3] = 0;
        } catch(v21) {
            let v22 = v9;
            const v23 = [];
            const v24 = {a:v23};
            let v25 = v15;
            try {
            } catch(v26) {
                const v27 = (1337)[v26];
            }
            let v28 = 1337;
            if (v21) {
                let v29 = arguments;
            } else {
                const v30 = v21();
            }
            const v31 = {__proto__:v16,constructor:v24,length:v23};
            const v32 = v22 in v31;
        }
        return v16;
    }
    const v33 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:1337,has:v12};
    const v35 = new Proxy(v11,v33);
    v35[1] = "MIN_VALUE";
}
const v36 = v2.sort(v3);
}
%NeverOptimizeFunction(main);
main();
