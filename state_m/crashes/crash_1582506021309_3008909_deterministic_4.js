function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337];
const v7 = [];
const v8 = {c:Infinity,valueOf:v7,toString:"function"};
const v9 = {valueOf:-9007199254740991,toString:"function",a:1337,c:v6,length:"function",e:v6,d:v7};
let v10 = 1337;
const v12 = [Uint8Array];
const v15 = [13.37];
let v18 = -1024;
while (v18 < 5) {
    const v20 = Object.defineProperty(v15,v18,Uint8ClampedArray);
    const v22 = new Uint8ClampedArray();
    const v23 = v22.slice();
    const v24 = v18 + 1;
    const v25 = v12.filter(Object);
    v18 = v24;
}
const v27 = new Uint8Array();
const v28 = v27.slice();
for (const v29 in v15) {
    const v31 = [13.37,13.37,13.37,13.37];
    const v33 = [1337,1337,1337,1337];
    const v34 = [];
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
                        }
                        const v72 = v66.toLocaleString();
                        const v74 = [];
                        const v75 = {a:v74};
                        const v76 = {__proto__:eval,constructor:v75,length:v74};
                        let v78 = 0;
                        const v79 = v76.__proto__(v72);
                        const v81 = Object.defineProperty(this,1337,v63);
                    } catch(v82) {
                        try {
                            const v83 = v60[3];
                        } catch(v84) {
                            v82.valueOf = v82;
                        }
                    }
                    return v59;
                }
                const v85 = {deleteProperty:v59,set:v59,getPrototypeOf:v59,call:v59,preventExtensions:v59,isExtensible:v59,construct:v59,get:v59,ownKeys:v59,setPrototypeOf:v59,has:v59};
                const v87 = new Proxy(v58,v85);
                v87[1] = "MIN_VALUE";
            }
            const v88 = v52();
        }
    }
    const v89 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
    const v91 = new Proxy(v38,v89);
    v91[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
