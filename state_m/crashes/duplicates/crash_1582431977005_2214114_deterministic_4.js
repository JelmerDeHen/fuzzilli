function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = ["symbol",v4,WeakMap];
const v9 = new Float64Array();
const v10 = {d:13.37,length:"symbol"};
const v11 = {toString:1337,constructor:-1262549997,__proto__:v7,e:v7,length:WeakMap};
let v12 = -1262549997;
const v14 = [13.37,13.37,13.37,13.37,13.37];
const v16 = (1337).__proto__;
let v17 = v14;
let v18 = v17;
const v21 = new Proxy(v18,Object);
const v22 = typeof "symbol";
const v23 = v17.concat(v22,v9,v6);
const v27 = [1337,1337,1337,1337,1337];
function v28(v29,v30,v31,v32) {
    'use strict'
    try {
        v32[3] = v32;
    } catch(v33) {
        const v38 = [-2331916614,-2331916614,-2331916614];
        const v39 = [3664180981,3664180981,"string","string"];
        const v40 = {valueOf:v39,length:v38,toString:parseFloat,constructor:"string",c:parseFloat};
        function v41(v42,v43) {
            const v47 = [1337,1337,1337,1337,1337];
            function v48(v49,v50,v51,v52) {
                'use strict'
                try {
                    const v53 = new Float64Array(v51);
                    function v56(v57,v58,v59,v60,v61) {
                        'use strict'
                    }
                    const v62 = v56.toLocaleString();
                    const v64 = [];
                    const v65 = {a:v64};
                    const v66 = {__proto__:eval,constructor:v65,length:v64};
                    let v69 = 0;
                    const v70 = v66.__proto__(v62,v69,19873,Symbol);
                    const v72 = Object.defineProperty(this,1337,v52);
                } catch(v73) {
                    try {
                        const v74 = v49[3];
                    } catch(v75) {
                        v73.valueOf = v73;
                    }
                }
                return v48;
            }
            const v76 = {deleteProperty:v48,set:v48,getPrototypeOf:v48,call:v48,preventExtensions:v48,isExtensible:v48,construct:v48,get:v48,ownKeys:v48,setPrototypeOf:v48,has:v48};
            const v78 = new Proxy(v47,v76);
            v78[1] = "MIN_VALUE";
        }
        const v79 = v41();
    }
}
const v80 = {deleteProperty:v28,set:v28,getPrototypeOf:v28,call:v28,preventExtensions:v28,isExtensible:v28,construct:v28,get:v28,ownKeys:v28,setPrototypeOf:v28,has:v28};
const v82 = new Proxy(v27,v80);
v82[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
