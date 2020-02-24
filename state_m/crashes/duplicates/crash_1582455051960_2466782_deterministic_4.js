function main() {
const v1 = [13.37];
const v3 = [1337];
const v4 = [13.37,13.37,13.37,1337];
const v5 = {};
const v6 = {length:v4,__proto__:v3,valueOf:v5,d:v4,b:v4,a:v3};
let v7 = v4;
const v9 = [13.37,13.37,13.37,13.37];
const v11 = new Uint32Array();
const v12 = v11.slice();
const v14 = new Uint8ClampedArray();
const v16 = [13.37,13.37,13.37,13.37];
const v18 = [1337,1337,1337,1337];
const v19 = [];
const v20 = {b:1337,c:v16,d:13.37,a:v18,length:v19,valueOf:1337};
const v24 = [1337,1337,1337,1337,1337];
function v25(v26,v27,v28,v29) {
    'use strict'
    try {
        v29[3] = v29;
    } catch(v30) {
        const v35 = [-2331916614,-2331916614,-2331916614];
        const v36 = [3664180981,3664180981,"string","string"];
        const v37 = {valueOf:v36,length:v35,toString:parseFloat,constructor:"string",c:parseFloat};
        function v38(v39,v40) {
            const v44 = [1337,1337,1337,1337,1337];
            function v45(v46,v47,v48,v49) {
                'use strict'
                try {
                    const v50 = new Float64Array(v48);
                    function v53(v54,v55,v56,v57,v58) {
                        'use strict'
                    }
                    const v59 = v53.toLocaleString();
                    const v61 = [];
                    const v62 = {a:v61};
                    const v63 = {__proto__:eval,constructor:v62,length:v61};
                    let v66 = 0;
                    let v68 = 8;
                    const v69 = v63.__proto__(v59,v66,19873,Symbol,eval);
                    const v71 = Object.defineProperty(this,1337,v49);
                } catch(v72) {
                    try {
                        const v73 = v46[3];
                    } catch(v74) {
                        v72.valueOf = v72;
                    }
                }
                return v45;
            }
            const v75 = {deleteProperty:v45,set:v45,getPrototypeOf:v45,call:v45,preventExtensions:v45,isExtensible:v45,construct:v45,get:v45,ownKeys:v45,setPrototypeOf:v45,has:v45};
            const v77 = new Proxy(v44,v75);
            v77[1] = "MIN_VALUE";
        }
        const v78 = v38();
    }
}
const v79 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
const v81 = new Proxy(v24,v79);
v81[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
