function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337];
const v5 = [];
const v6 = {length:Number};
const v7 = {b:13.37};
let v8 = v4;
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
            const v38 = [1337,1337,1337,1337,1337];
            function v39(v40,v41,v42,v43) {
                'use strict'
                try {
                    const v44 = new Float64Array(v42);
                    const v48 = [];
                    let v49 = Object;
                    const v51 = [1337,1337,1337,1337];
                    const v52 = v51 + 1;
                    const v54 = [13.37,13.37,v52];
                    const v55 = Object();
                    try {
                        const v56 = v55.getOwnPropertySymbols();
                    } catch(v57) {
                    }
                    const v58 = v29.toLocaleString();
                    const v60 = [];
                    const v61 = {a:v60};
                    const v62 = {__proto__:eval,constructor:v61,length:v60};
                    let v65 = 0;
                    const v66 = v62.__proto__(v58,v65,19873,Symbol);
                    const v68 = Object.defineProperty(this,1337,v43);
                } catch(v69) {
                    try {
                        const v70 = v40[3];
                    } catch(v71) {
                        v69.valueOf = v69;
                    }
                }
                return v39;
            }
            const v72 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
            const v74 = new Proxy(v38,v72);
            v74[1] = "MIN_VALUE";
        }
        const v75 = v32();
    }
}
const v76 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v78 = new Proxy(v18,v76);
v78[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
