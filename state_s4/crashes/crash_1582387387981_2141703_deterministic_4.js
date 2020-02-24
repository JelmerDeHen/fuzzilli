function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337];
const v5 = [1337,-2147483648,v4,v4];
const v6 = {a:v5,e:-2147483648,valueOf:v4,constructor:-2147483648};
const v7 = {a:v6,e:v6,d:v2};
let v8 = v4;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v13 = [];
const v14 = {b:1337,c:v10,d:13.37,a:v12,length:v13,valueOf:1337};
const v19 = [1337,1337,1337,1337];
const v21 = new Uint8ClampedArray();
const v22 = [1337,1337,1337,1337,1337];
function v23(v24,v25,v26,v27) {
    'use strict'
    try {
        v27[3] = v27;
    } catch(v28) {
        const v33 = [-2331916614,-2331916614,-2331916614];
        const v34 = [3664180981,3664180981,"string","string"];
        const v35 = {valueOf:v34,length:v33,toString:parseFloat,constructor:"string",c:parseFloat};
        function v36(v37,v38) {
            const v42 = [1337,1337,1337,1337,1337];
            function v43(v44,v45,v46,v47) {
                'use strict'
                try {
                    const v48 = new Float64Array(v46);
                    function v51(v52,v53,v54,v55,v56) {
                        'use strict'
                    }
                    const v57 = v51.toLocaleString();
                    const v59 = [];
                    const v60 = {a:v59};
                    const v61 = {__proto__:eval,constructor:v60,length:v59};
                    let v64 = 0;
                    const v65 = v61.__proto__(v57,v64,3,Symbol,eval);
                    const v68 = {__proto__:Float32Array};
                    const v70 = new Int16Array();
                    const v71 = v70.slice();
                    const v72 = Object.defineProperty(this,1337,v47);
                } catch(v73) {
                    try {
                        const v74 = v44[3];
                    } catch(v75) {
                        v73.valueOf = v73;
                    }
                }
                return v43;
            }
            const v76 = {deleteProperty:v43,set:v43,getPrototypeOf:v43,call:v43,preventExtensions:v43,isExtensible:v43,construct:v43,get:v43,ownKeys:v43,setPrototypeOf:v43,has:v43};
            const v78 = new Proxy(v42,v76);
            v78[1] = "MIN_VALUE";
        }
        const v79 = v36();
    }
}
const v80 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
const v82 = new Proxy(v22,v80);
v82[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
