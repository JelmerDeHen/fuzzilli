function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337];
const v5 = [1337,1073741824,v4,v4];
const v6 = {};
const v7 = v6[4294967296];
const v8 = [v5,v5];
const v10 = {set:v7};
const v12 = Object.defineProperty(v5,"c",v10);
const v13 = {a:v5,e:1073741824,valueOf:v4,constructor:1073741824};
const v14 = {a:v13,e:v13,d:v2};
let v15 = v4;
const v17 = [13.37,13.37,13.37,13.37];
const v19 = [1337,1337,1337,1337];
const v20 = [];
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
                    const v69 = Object.defineProperty(this,1337,v49);
                } catch(v70) {
                    try {
                        const v71 = v46[3];
                    } catch(v72) {
                        v70.valueOf = v70;
                    }
                }
                return v45;
            }
            const v73 = {deleteProperty:v45,set:v45,getPrototypeOf:v45,call:v45,preventExtensions:v45,isExtensible:v45,construct:v45,get:v45,ownKeys:v45,setPrototypeOf:v45,has:v45};
            const v75 = new Proxy(v44,v73);
            v75[1] = "MIN_VALUE";
        }
        const v76 = v38();
    }
}
const v77 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
const v79 = new Proxy(v24,v77);
v79[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
