function main() {
const v4 = [13.37];
const v6 = [1337];
const v7 = ["object","object",13.37];
const v8 = {c:-9007199254740991};
const v9 = {e:1337,constructor:v4};
let v10 = Object;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [];
const v16 = {b:1337,c:v12,d:13.37,a:v14,length:v15,valueOf:1337};
const v20 = [1337,1337,1337,1337,1337];
function v21(v22,v23,v24,v25) {
    'use strict'
    try {
        v25[3] = v25;
    } catch(v26) {
        const v31 = [-2331916614,-2331916614,-2331916614];
        const v32 = [3664180981,3664180981,"string","string"];
        const v33 = {valueOf:v32,length:v31,toString:parseFloat,constructor:"string",c:parseFloat};
        function v34(v35,v36) {
            const v40 = [1337,1337,1337,1337,1337];
            function v41(v42,v43,v44,v45) {
                'use strict'
                try {
                    const v46 = new Float64Array(v44);
                    function v49(v50,v51,v52,v53,v54) {
                        'use strict'
                    }
                    const v55 = v49.toLocaleString();
                    const v57 = [];
                    const v58 = {a:v57};
                    const v59 = {__proto__:eval,constructor:v58,length:v57};
                    let v62 = 0;
                    const v63 = v59.__proto__(v55,v62,19873,Symbol);
                    const v65 = Object.defineProperty(this,1337,v45);
                } catch(v66) {
                    try {
                        const v67 = v42[3];
                    } catch(v68) {
                        v66.valueOf = v66;
                    }
                }
                return v41;
            }
            const v69 = {deleteProperty:v41,set:v41,getPrototypeOf:v41,call:v41,preventExtensions:v41,isExtensible:v41,construct:v41,get:v41,ownKeys:v41,setPrototypeOf:v41,has:v41};
            const v71 = new Proxy(v40,v69);
            v71[1] = "MIN_VALUE";
        }
        const v72 = v34();
    }
}
const v74 = new Float32Array();
const v75 = v74.slice();
const v76 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v78 = new Proxy(v20,v76);
v78[1] = "MIN_VALUE";
const v79 = {call:v21,construct:v10,apply:v10};
const v81 = Proxy();
const v82 = {e:Object,isExtensible:v21,length:Float64Array,...v21,...v79,...v21,...v7};
const v83 = v12.__proto__;
}
%NeverOptimizeFunction(main);
main();
