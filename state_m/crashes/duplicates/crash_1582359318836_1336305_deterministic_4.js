function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {a:v3,__proto__:1337,b:NaN,d:"undefined",constructor:v3,c:"undefined",e:v6};
const v8 = 1337 + 1;
const v9 = NaN / NaN;
const v10 = 13.37 === 1337;
const v11 = v3.length;
const v12 = {valueOf:"undefined",__proto__:v5,e:v5,c:v5,length:NaN};
let v13 = v6;
const v15 = [13.37,13.37,13.37,13.37];
const v19 = 1337 - -1024210776;
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
                    let v62 = Infinity;
                    const v64 = [];
                    const v65 = {a:v64};
                    const v66 = {__proto__:eval,constructor:v65,length:v64};
                    let v69 = 0;
                    const v70 = v66.__proto__(v60,v69,19873,Symbol,eval);
                    const v72 = Object.defineProperty(this,1337,v50);
                } catch(v73) {
                    try {
                        const v74 = v47[3];
                    } catch(v75) {
                        v73.valueOf = v73;
                    }
                }
                return v46;
            }
            const v76 = {deleteProperty:v46,set:v46,getPrototypeOf:v46,call:v46,preventExtensions:v46,isExtensible:v46,construct:v46,get:v46,ownKeys:v46,setPrototypeOf:v46,has:v46};
            const v78 = new Proxy(v45,v76);
            v78[1] = "MIN_VALUE";
        }
        const v79 = v39();
    }
}
const v80 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
const v82 = new Proxy(v25,v80);
v82[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
