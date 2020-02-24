function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [1337,"string",v4,Infinity];
const v8 = {e:"string"};
const v9 = {e:v8,b:v7,valueOf:"string",length:Infinity,__proto__:1337,d:2493082875,c:v6};
let v10 = v8;
const v14 = [1337,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    function v20(v21,v22) {
        const v26 = [1337,1337,1337,1337,1337];
        function v27(v28,v29,v30,v31) {
            'use strict'
            try {
                const v32 = new Float64Array(v30);
                function v34(v35,v36,v37,v38,v39) {
                    'use strict'
                    return v32;
                }
                const v40 = v34.toLocaleString();
                const v42 = [];
                const v43 = {__proto__:eval,constructor:v9,length:v42};
                let v45 = 0;
                const v46 = v43.__proto__(v40);
                const v48 = Object.defineProperty(this,1337,v31);
            } catch(v49) {
                try {
                    const v50 = v28[3];
                } catch(v51) {
                    v49.valueOf = v49;
                }
            }
            return v27;
        }
        const v52 = {deleteProperty:v27,set:v27,getPrototypeOf:v27,call:v27,preventExtensions:v27,isExtensible:v27,construct:v27,get:v27,ownKeys:v27,setPrototypeOf:v27,has:v27};
        const v54 = new Proxy(v26,v52);
        v54[1] = "MIN_VALUE";
    }
    const v55 = v20();
}
const v56 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:"string",get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v58 = new Proxy(v14,v56);
v58[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
