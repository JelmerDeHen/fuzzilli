function main() {
const v0 = [];
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [];
const v9 = [1337,1337,1337,1337,1337];
function v10(v11,v12,v13,v14) {
    'use strict'
    function v15(v16,v17) {
        const v21 = [1337,1337,1337,1337,1337];
        function v22(v23,v24,v25,v26) {
            'use strict'
            try {
                const v27 = new Float64Array(v25);
                function v29(v30,v31,v32,v33,v34) {
                    'use strict'
                }
                const v35 = v29.toLocaleString();
                const v37 = [];
                const v38 = {a:v37};
                const v39 = {__proto__:eval,constructor:v38,length:v37};
                let v41 = 0;
                const v42 = v39.__proto__(v35);
                const v44 = Object.defineProperty(this,1337,v26);
            } catch(v45) {
                try {
                    const v46 = v23[3];
                } catch(v47) {
                    v45.valueOf = v45;
                }
            }
            return v22;
        }
        const v48 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
        const v50 = new Proxy(v21,v48);
        v50[1] = "MIN_VALUE";
    }
    const v51 = v15();
}
const v52 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
const v54 = new Proxy(v9,v52);
v54[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
