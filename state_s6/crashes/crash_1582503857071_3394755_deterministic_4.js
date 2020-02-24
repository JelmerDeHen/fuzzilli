function main() {
const v2 = [-1000.0,-1000.0,-1000.0,-1000.0];
const v4 = [1337,1337];
const v5 = [];
const v6 = {__proto__:-1000.0,valueOf:WeakSet,a:-1000.0};
const v7 = {constructor:-1000.0,toString:1337};
let v8 = v5;
const v9 = {};
const v11 = [13.37,13.37,13.37,13.37];
let v13 = 0;
const v15 = [13.37,13.37,13.37,13.37];
const v17 = [1337,1337,1337,1337];
const v18 = [];
const v19 = {b:1337,c:v15,d:13.37,a:v17,length:v18,valueOf:1337};
function v21(v22,v23,v24,v25) {
    'use strict'
    try {
        v25[-2850632648] = v25;
    } catch(v26) {
        function v27(v28,v29) {
            const v33 = [1337,1337,1337,1337,1337];
            function v34(v35,v36,v37,v38) {
                'use strict'
                try {
                    const v39 = new Float64Array(v37);
                    function v42(v43,v44,v45,v46,v47) {
                        'use strict'
                    }
                    const v48 = v42.toLocaleString();
                    const v50 = [];
                    const v51 = {a:v50};
                    const v52 = {__proto__:eval,constructor:v51,length:v50};
                    let v55 = 0;
                    const v56 = v52.__proto__(v48,v55,19873,Symbol);
                    const v58 = Object.defineProperty(this,1337,v38);
                } catch(v59) {
                    try {
                        const v60 = v35[3];
                    } catch(v61) {
                        v59.valueOf = v59;
                    }
                }
                return v34;
            }
            const v62 = {deleteProperty:v34,set:v34,getPrototypeOf:v34,call:v34,preventExtensions:v34,isExtensible:v34,construct:v34,get:v34,ownKeys:v34,setPrototypeOf:v34,has:v34};
            const v64 = new Proxy(v33,v62);
            v64[1] = "MIN_VALUE";
        }
        const v65 = v27();
    }
}
const v66 = v11.sort();
const v67 = v21(v19,v4,v5);
}
%NeverOptimizeFunction(main);
main();
