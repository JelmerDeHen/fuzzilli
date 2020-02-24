function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337];
const v7 = "PI".__proto__;
const v10 = [...v7,6,"PI",1];
const v11 = v10[0];
const v16 = [1337,1337];
const v17 = [1468489541,13.37,2];
let v18 = v16;
const v21 = [];
const v24 = Object.seal(v17,65537);
const v25 = {length:1337,e:1337,c:v21,a:1337,toString:"symbol"};
function v26(v27,v28,v29,v30) {
    'use strict'
}
const v31 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
const v33 = new Proxy(v25,v31);
const v34 = [v3,"VCBsKx7AW4",String,v5];
const v38 = [1337,1337,1337,1337,1337];
function v39(v40,v41,v42,v43) {
    'use strict'
    try {
        v43[3] = v43;
    } catch(v44) {
        const v49 = [-2331916614,-2331916614,-2331916614];
        const v50 = [3664180981,3664180981,"string","string"];
        const v51 = {valueOf:v50,length:v49,toString:parseFloat,constructor:"string",valueOf:parseFloat};
        function v52(v53,v54) {
            const v58 = [1337,1337,1337,1337,1337];
            function v59(v60,v61,v62,v63) {
                'use strict'
                try {
                    const v64 = new Float64Array(v62);
                    function v67(v68,v69,v70,v71,v72) {
                        'use strict'
                    }
                    const v73 = v67.toLocaleString();
                    const v75 = [];
                    const v76 = {a:v75};
                    const v77 = {__proto__:eval,constructor:v76,length:v75};
                    let v80 = 0;
                    const v81 = v77.__proto__(v73,v80,19873,Symbol);
                    const v83 = Object.defineProperty(this,-65537,v63);
                } catch(v84) {
                    try {
                        const v85 = v60[3];
                    } catch(v86) {
                        v84.valueOf = v84;
                    }
                }
                return v59;
            }
            const v87 = {deleteProperty:v59,set:v59,getPrototypeOf:v59,call:v59,preventExtensions:v59,isExtensible:v59,construct:v59,get:v59,ownKeys:v59,setPrototypeOf:v59,has:v59};
            const v89 = new Proxy(v58,v87);
            v89[1] = "MIN_VALUE";
        }
        const v90 = v52();
    }
}
const v91 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
const v93 = new Proxy(v38,v91);
v93[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
