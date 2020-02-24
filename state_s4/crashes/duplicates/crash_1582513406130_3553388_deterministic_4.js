function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337];
const v5 = ["VWRB/B9pyh"];
const v6 = {e:13.37,toString:v5,c:v4,constructor:v2,valueOf:"VWRB/B9pyh",__proto__:v4};
const v7 = {a:v5,c:1337,e:1337};
let v8 = "VWRB/B9pyh";
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v13 = [];
const v14 = {b:1337,c:v10,d:13.37,a:v12,length:v13,valueOf:1337};
function v16(v17,v18,v19,v20) {
    'use strict'
    try {
        v20[3] = v20;
    } catch(v21) {
        function v22(v23,v24) {
            const v28 = [1337,1337,1337,1337,1337];
            function v29(v30,v31,v32,v33) {
                'use strict'
                try {
                    const v34 = new Float64Array(v32);
                    function v37(v38,v39,v40,v41,v42) {
                        'use strict'
                    }
                    const v43 = v37.toLocaleString();
                    const v45 = [];
                    const v46 = {a:v45};
                    const v47 = {__proto__:eval,constructor:v46,length:v45};
                    let v50 = 0;
                    const v51 = v47.__proto__(v43,v50,19873,Symbol);
                    const v53 = Object.defineProperty(this,1337,v33);
                } catch(v54) {
                    try {
                        const v55 = v30[3];
                    } catch(v56) {
                        v54.valueOf = v54;
                    }
                }
                return v29;
            }
            const v57 = {deleteProperty:v29,set:v29,getPrototypeOf:v29,call:v29,preventExtensions:v29,isExtensible:v29,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:v29,has:v29};
            const v59 = new Proxy(v28,v57);
            v59[1] = "MIN_VALUE";
        }
        const v60 = v22();
    }
}
const v61 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
function v62(v63,v64,v65,v66,v67) {
}
const v68 = v62(v5,v4,v4,v10);
const v69 = [];
const v70 = v16(v61,v10);
}
%NeverOptimizeFunction(main);
main();
