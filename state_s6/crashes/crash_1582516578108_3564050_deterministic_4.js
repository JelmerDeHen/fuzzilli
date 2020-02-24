function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [];
const v7 = {constructor:1337};
const v8 = {__proto__:v7,d:1337,valueOf:v5,b:"undefined",toString:4294967296};
let v9 = v5;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        v21[3] = v21;
    } catch(v22) {
        function v23(v24,v25) {
            const v29 = [1337,1337,1337,1337,1337];
            function v30(v31,v32,v33,v34) {
                'use strict'
                try {
                    const v35 = new Float64Array(v33);
                    function v38(v39,v40,v41,v42,v43) {
                        'use strict'
                    }
                    const v44 = v38.toLocaleString();
                    const v46 = [];
                    const v47 = {a:v46};
                    const v48 = {__proto__:eval,constructor:v47,length:v46};
                    let v51 = 0;
                    const v52 = v48.__proto__(v44,v51,19873,Symbol);
                    const v54 = Object.defineProperty(this,1337,v34);
                } catch(v55) {
                    try {
                        const v56 = v31[3];
                    } catch(v57) {
                        v55.valueOf = v55;
                    }
                }
                return v30;
            }
            const v58 = {deleteProperty:v30,set:v30,getPrototypeOf:v30,call:v30,preventExtensions:v30,isExtensible:v30,construct:v30,get:v30,ownKeys:v30,setPrototypeOf:v30,has:v30};
            const v60 = new Proxy(v29,v58);
            v60[1] = "MIN_VALUE";
        }
        const v61 = v23();
    }
}
const v62 = (13.37)[v7];
const v63 = v5 + 1;
const v64 = "undefined".lastIndexOf();
const v65 = v7 <= v9;
const v66 = v17(v64,v14,v3);
}
%NeverOptimizeFunction(main);
main();
