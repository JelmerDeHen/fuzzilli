function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = ["function",v6,"function"];
let v8 = 13.37;
const v9 = {isExtensible:v6,getPrototypeOf:v8,set:v4,preventExtensions:13.37,construct:1337,setPrototypeOf:v7,get:Function,call:Function,getOwnPropertyDescriptor:v6,deleteProperty:2711499288,ownKeys:"function"};
const v11 = new Proxy(v4,v9);
const v12 = "function".__proto__;
const v13 = {e:13.37,constructor:13.37,a:v4};
const v14 = {c:2711499288,e:v4,length:"function",b:v6};
let v15 = v14;
const v17 = [13.37,13.37,13.37,13.37];
const v19 = [1337,1337,1337,1337];
const v20 = [];
const v21 = {b:1337,c:v17,d:13.37,a:v19,length:v20,valueOf:1337};
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
                    const v62 = [];
                    const v63 = {a:v62};
                    const v64 = {__proto__:eval,constructor:v63,length:v62};
                    try {
                        const v68 = true();
                    } catch(v69) {
                    }
                    let v70 = 0;
                    const v71 = v64.__proto__(v60,v70,19873,Symbol,eval);
                    const v73 = Object.defineProperty(this,1337,v50);
                } catch(v74) {
                    try {
                        const v75 = v47[3];
                    } catch(v76) {
                        v74.valueOf = v74;
                    }
                }
                return v46;
            }
            const v77 = {deleteProperty:v46,set:v46,getPrototypeOf:v46,call:v46,preventExtensions:v46,isExtensible:v46,construct:v46,get:v46,ownKeys:v46,setPrototypeOf:v46,has:v46};
            const v79 = new Proxy(v45,v77);
            v79[1] = "MIN_VALUE";
        }
        const v80 = v39();
    }
}
const v81 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
const v83 = new Proxy(v25,v81);
v83[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
