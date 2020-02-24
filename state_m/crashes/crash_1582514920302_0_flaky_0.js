function main() {
const v2 = [13.37,13.37];
const v4 = [v2,this,1337,v2];
const v6 = new Uint8ClampedArray();
const v8 = v6.slice();
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337,1337];
const v14 = [];
const v15 = {constructor:v13,toString:Promise,a:1337,__proto__:v14,b:Promise};
const v16 = {constructor:v13,valueOf:v13,d:v13,b:Promise};
let v17 = Promise;
const v19 = [13.37,13.37,13.37,13.37];
const v21 = [1337,1337,1337,1337];
const v22 = [];
const v23 = {b:1337,c:v19,d:13.37,a:v21,length:v22,valueOf:1337};
function v25(v26,v27,v28,v29) {
    'use strict'
    try {
        v29[3] = v29;
    } catch(v30) {
        function v31(v32,v33) {
            const v37 = [1337,1337,1337,1337,1337];
            function v38(v39,v40,v41,v42) {
                'use strict'
                try {
                    const v43 = new Float64Array(v41);
                    function v46(v47,v48,v49,v50,v51) {
                        'use strict'
                    }
                    const v52 = v46.toLocaleString();
                    const v54 = [];
                    const v55 = {a:v54};
                    const v56 = {__proto__:eval,constructor:v55,length:v54};
                    let v59 = 0;
                    const v60 = v56.__proto__(v52,v59,19873,Symbol);
                    const v62 = Object.defineProperty(this,1337,v42);
                } catch(v63) {
                    try {
                        const v64 = v39[3];
                    } catch(v65) {
                        v63.valueOf = v63;
                    }
                }
                return v38;
            }
            const v66 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
            const v68 = new Proxy(v37,v66);
            v68[1] = "MIN_VALUE";
        }
        const v69 = v31();
    }
}
const v71 = v25(Proxy,v25,-42667988);
}
%NeverOptimizeFunction(main);
main();
