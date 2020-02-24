function main() {
const v4 = [1337,1337,1337];
const v5 = [DataView,DataView];
const v6 = {length:v5,constructor:13.37,valueOf:v4,a:"9FB.w4AVIp",c:13.37,toString:v4};
const v8 = [13.37,13.37,13.37,13.37];
const v10 = [1337,1337,1337,1337];
const v11 = [];
const v12 = {b:1337,c:v8,d:13.37,a:v10,length:v11,valueOf:1337};
const v15 = [1337,1337,1337,1337,1337];
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
const v63 = new Proxy(v15,v61);
const v64 = v16 === v11;
let v65 = v6;
const v66 = v61 in v10;
const v67 = "9FB.w4AVIp" === 1337;
const v68 = v16(v12,Float64Array,v63);
}
%NeverOptimizeFunction(main);
main();
