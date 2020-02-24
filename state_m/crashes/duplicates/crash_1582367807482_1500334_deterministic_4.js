function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337];
const v5 = [];
const v6 = {__proto__:Reflect,e:v2,d:1337,a:v2,c:13.37};
const v7 = {__proto__:v2,d:Reflect,a:v6};
let v8 = 1337;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337];
let v13 = v12;
let v15 = undefined;
let v17 = v13;
const v19 = [Infinity,"boolean",Infinity];
const v20 = [v17,v19];
const v21 = v20.toLocaleString();
let v22 = v21;
const v24 = "boolean".toLocaleString();
const v28 = [1337,1337,1337,1337,1337];
function v29(v30,v31,v32,v33) {
    'use strict'
    try {
        v33[3] = v33;
    } catch(v34) {
        const v39 = [-2331916614,-2331916614,-2331916614];
        const v40 = [3664180981,3664180981,"string","string"];
        const v41 = {valueOf:v40,length:v39,toString:parseFloat,constructor:"string",c:parseFloat};
        function v42(v43,v44) {
            const v48 = [1337,1337,1337,1337,1337];
            function v49(v50,v51,v52,v53) {
                'use strict'
                try {
                    const v54 = new Float64Array(v52);
                    function v57(v58,v59,v60,v61,v62) {
                        'use strict'
                    }
                    const v63 = v57.toLocaleString();
                    const v65 = [];
                    const v66 = {a:v65};
                    const v67 = {__proto__:eval,constructor:v66,length:v65};
                    let v70 = 0;
                    const v71 = v67.__proto__(v63,v70,19873,Symbol);
                    const v73 = Object.defineProperty(this,1337,v53);
                } catch(v74) {
                    try {
                        const v75 = v50[3];
                    } catch(v76) {
                        v74.valueOf = v74;
                    }
                }
                return v49;
            }
            const v77 = {deleteProperty:v49,set:v49,getPrototypeOf:v49,call:v49,preventExtensions:v49,isExtensible:v49,construct:v49,get:v49,ownKeys:v49,setPrototypeOf:v49,has:v49};
            const v79 = new Proxy(v48,v77);
            v79[1] = "MIN_VALUE";
        }
        const v80 = v42();
    }
}
const v81 = {deleteProperty:v29,set:v29,getPrototypeOf:v29,call:v29,preventExtensions:v29,isExtensible:v29,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:v29,has:v29};
const v83 = new Proxy(v28,v81);
v83[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
