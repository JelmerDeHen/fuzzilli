function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [13.37,v3,"SERlx3G0Tv"];
const v7 = {a:"SERlx3G0Tv",c:v3,valueOf:v3};
const v8 = {e:v7,valueOf:1337};
let v9 = v3;
const v11 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        v19[3] = v19;
    } catch(v20) {
        function v21(v22,v23) {
            const v27 = [1337,1337,1337,1337,1337];
            function v28(v29,v30,v31,v32) {
                'use strict'
                try {
                    const v33 = new Float64Array(v31);
                    function v36(v37,v38,v39,v40,v41) {
                        'use strict'
                    }
                    const v42 = v36.toLocaleString();
                    const v44 = [];
                    const v45 = {a:v44};
                    const v46 = {__proto__:eval,constructor:v45,length:v44};
                    let v49 = 0;
                    const v50 = v46.__proto__(v42,v49,19873,Symbol);
                    const v52 = Object.defineProperty(this,1337,v32);
                } catch(v53) {
                    try {
                        const v54 = v29[3];
                    } catch(v55) {
                        v53.valueOf = v53;
                    }
                }
                return v28;
            }
            const v56 = {deleteProperty:v28,set:v28,getPrototypeOf:v28,call:v28,preventExtensions:v28,isExtensible:v28,construct:v28,get:v28,ownKeys:v28,setPrototypeOf:v28,has:v28};
            const v58 = new Proxy(v27,v56);
            v58[1] = "MIN_VALUE";
        }
        const v59 = v21();
    }
}
const v60 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v62 = new Proxy(v14,v60);
for (let v66 = 0; v66 < 6; v66++) {
    const v67 = v15[v66];
}
for (let v71 = 0; v71 < 100; v71++) {
    const v72 = RegExp();
}
const v73 = v15(v62,v5,1);
}
%NeverOptimizeFunction(main);
main();
