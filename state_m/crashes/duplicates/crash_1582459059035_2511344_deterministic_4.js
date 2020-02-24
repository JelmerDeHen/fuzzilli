function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [];
const v7 = {e:String,a:13.37,__proto__:String,valueOf:String};
const v8 = {d:v3,a:v7,toString:v3,b:"boolean",__proto__:v6,valueOf:v5};
let v9 = "boolean";
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        v24[3] = v24;
    } catch(v25) {
        const v30 = [-2331916614,-2331916614,-2331916614];
        const v31 = [1808204246,1808204246,"string","string"];
        const v32 = {valueOf:v31,length:v30,toString:parseFloat,constructor:"string",c:parseFloat};
        function v33(v34,v35) {
            const v39 = [1337,1337,1337,1337,1337];
            function v40(v41,v42,v43,v44) {
                'use strict'
                try {
                    const v45 = new Float64Array(v43);
                    const v49 = new Uint8ClampedArray();
                    const v50 = v49.slice();
                    function v51(v52,v53,v54,v55,v56) {
                        'use strict'
                    }
                    const v57 = v51.toLocaleString();
                    const v59 = [];
                    const v60 = {a:v59};
                    const v61 = {__proto__:eval,constructor:v60,length:v59};
                    let v64 = 0;
                    const v65 = v61.__proto__(v57,v64,-1,Symbol);
                    const v67 = Object.defineProperty(this,1337,v44);
                } catch(v68) {
                    try {
                        const v69 = v41[3];
                    } catch(v70) {
                        v68.valueOf = v68;
                    }
                }
                return v40;
            }
            const v71 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
            const v73 = new Proxy(v39,v71);
            v73[1] = "MIN_VALUE";
        }
        const v74 = v33();
    }
}
const v75 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v77 = new Proxy(v19,v75);
v77[1] = "MIN_VALUE";
const v79 = [5.0,5.0,5.0,5.0];
function v80(v81,v82) {
}
const v83 = v79.sort();
let v84 = v80;
}
%NeverOptimizeFunction(main);
main();
