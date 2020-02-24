function main() {
const v3 = typeof Uint8Array;
const v5 = v3 === "symbol";
let v6 = "symbol";
const v8 = [13.37,13.37,13.37,13.37,13.37];
const v10 = [1337,1337,1337];
const v11 = [9007199254740991];
const v12 = {valueOf:13.37,constructor:v8,toString:13.37,e:13.37};
const v13 = {a:1337,valueOf:v12};
let v14 = "symbol";
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
                    const v67 = v63.__proto__(v59,v66,19873,Symbol);
                    const v69 = new Uint16Array();
                    const v70 = v69.slice();
                    const v72 = Object.defineProperty(this,1337,v49);
                } catch(v73) {
                    try {
                        const v74 = v46[3];
                    } catch(v75) {
                        v73.valueOf = v73;
                    }
                }
                return v45;
            }
            const v76 = {deleteProperty:v45,set:v45,getPrototypeOf:v45,call:v45,preventExtensions:v45,isExtensible:v45,construct:v45,get:v45,ownKeys:v45,setPrototypeOf:v45,has:v45};
            const v78 = new Proxy(v44,v76);
            v78[1] = "MIN_VALUE";
        }
        const v79 = v38();
    }
}
const v80 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
const v82 = new Proxy(v24,v80);
v82[1] = "MIN_VALUE";
const v83 = v8[Proxy];
}
%NeverOptimizeFunction(main);
main();
