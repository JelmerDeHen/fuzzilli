function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337];
const v6 = [1337,3927264711];
const v7 = {b:v3,valueOf:1337,__proto__:13.37,constructor:Function,c:1337};
const v8 = {b:3927264711,valueOf:v6,__proto__:Function,length:v5,constructor:v7,d:13.37};
let v9 = Function;
const v14 = [13.37,13.37,13.37,13.37];
const v16 = [1337,1337,1337,1337,1337];
const v17 = [259427568,Uint8Array,"nR5Qlc.4Rf",v14];
const v18 = {valueOf:13.37,e:v14,constructor:v14};
const v19 = {length:1337,valueOf:v14,a:v14,c:v17,d:1337};
let v20 = v16;
let v23 = 10000;
const v26 = [13.37,gc,-4294967297,-4294967297];
const v28 = [v26,-9007199254740992,v26];
let v30 = -1762360175;
while (v30 < 10000) {
    const v31 = v28.push(v23);
    let v32 = v31;
    const v33 = v31 + 1;
    v30 = v33;
}
const v34 = gc();
const v38 = [1337,1337,1337,1337,1337];
function v39(v40,v41,v42,v43) {
    'use strict'
    try {
        v43[3] = v43;
    } catch(v44) {
        const v49 = [-2331916614,-2331916614,-2331916614];
        const v50 = [3664180981,3664180981,"string","string"];
        const v51 = {valueOf:v50,length:v49,toString:parseFloat,constructor:"string",c:parseFloat};
        function v52(v53,v54) {
            const v58 = [1337,1337,1337,1337,1337];
            function v59(v60,v61,v62,v63) {
                'use strict'
                try {
                    const v64 = new Float64Array(v62);
                    function v66(v67,v68,v69,v70,v71) {
                        'use strict'
                        return v63;
                    }
                    const v72 = v66.toLocaleString();
                    const v74 = [];
                    const v75 = {a:v74};
                    const v76 = {__proto__:eval,constructor:v75,length:v74};
                    const v77 = v76.__proto__(v72);
                    const v79 = Object.defineProperty(this,1337,v63);
                } catch(v80) {
                    try {
                        const v81 = v60[3];
                    } catch(v82) {
                        v80.valueOf = v80;
                    }
                }
                return v59;
            }
            const v83 = {deleteProperty:v59,set:v59,getPrototypeOf:v59,call:v59,preventExtensions:v59,isExtensible:v59,construct:v59,get:v59,ownKeys:v59,setPrototypeOf:v59,has:v59};
            const v85 = new Proxy(v58,v83);
            v85[1] = "MIN_VALUE";
        }
        const v86 = v52();
    }
}
const v87 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
const v89 = new Proxy(v38,v87);
v89[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
