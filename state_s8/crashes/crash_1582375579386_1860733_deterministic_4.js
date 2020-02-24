function main() {
const v2 = [13.37,13.37];
const v8 = ["object",13.37,1866940554];
const v9 = {get:NaN};
const v11 = Object.seal();
const v12 = [1337,1337,1337];
const v13 = [13.37,"undefined"];
const v14 = {};
const v15 = {valueOf:v2,b:1337,constructor:13.37,d:v13,a:v2,toString:v2};
let v16 = v12;
const v18 = [13.37,13.37,13.37,13.37];
const v20 = [1337,1337,1337,1337];
const v21 = [];
const v25 = [1337,1337,1337,1337,1337];
function v26(v27,v28,v29,v30) {
    'use strict'
    try {
        v30[3] = v30;
    } catch(v31) {
        const v36 = [-2331916614,-2331916614,-2331916614];
        const v37 = [3664180981,3664180981,"string","string"];
        const v38 = {valueOf:v37,length:v36,toString:parseFloat,constructor:"string",c:parseFloat};
        function v39(v40,v41) {
            const v45 = [1337,1337,1337,1337,1337];
            function v46(v47,v48,v49,v50) {
                'use strict'
                try {
                    const v51 = new Float64Array(v49);
                    function v54(v55,v56,v57,v58,v59) {
                        'use strict'
                    }
                    const v60 = v54.toLocaleString();
                    const v62 = new Int8Array();
                    let v64 = 0;
                    let v66 = 0;
                    const v68 = [];
                    const v69 = {a:v68};
                    const v70 = {__proto__:eval,constructor:v69,length:v68};
                    let v73 = 0;
                    const v74 = v70.__proto__(v60,v73,19873,Symbol,eval);
                    const v76 = Object.defineProperty(this,1337,v50);
                } catch(v77) {
                    try {
                        const v78 = v47[3];
                    } catch(v79) {
                        v77.valueOf = v77;
                    }
                }
                return v46;
            }
            const v80 = {deleteProperty:v46,set:v46,getPrototypeOf:v46,call:v46,preventExtensions:v46,isExtensible:v46,construct:v46,get:v46,ownKeys:v46,setPrototypeOf:v46,has:v46};
            const v82 = new Proxy(v45,v80);
            v82[1] = "MIN_VALUE";
        }
        const v83 = v39();
    }
}
const v84 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
const v86 = new Proxy(v25,v84);
v86[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
