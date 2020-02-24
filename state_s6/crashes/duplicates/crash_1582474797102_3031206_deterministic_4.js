function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {c:"MIN_VALUE",valueOf:v5,a:1337,__proto__:1337,constructor:"MIN_VALUE",toString:13.37};
const v8 = {length:v6,valueOf:1337,b:v3,toString:"MIN_VALUE",c:v7};
let v9 = 13.37;
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
        const v31 = [3664180981,3664180981,"string","string"];
        const v32 = {valueOf:v31,length:v30,toString:parseFloat,constructor:"string",c:parseFloat};
        function v33(v34,v35) {
            const v39 = [1337,1337,1337,1337,1337];
            function v40(v41,v42,v43,v44) {
                'use strict'
                try {
                    const v45 = new Float64Array(v43);
                    function v48(v49,v50,v51,v52,v53) {
                        'use strict'
                    }
                    const v54 = v48.toLocaleString();
                    const v57 = new Uint8ClampedArray();
                    const v58 = v57.slice();
                    const v59 = [];
                    const v60 = {a:v59};
                    const v61 = {__proto__:eval,constructor:v60,length:v59};
                    let v64 = 0;
                    const v65 = v61.__proto__(v54,v64,19873,Symbol);
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
const v75 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:Float64Array,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v77 = new Proxy(v19,v75);
v77[1] = "MIN_VALUE";
const v78 = 13.37 & 1337;
const v79 = v20("MIN_VALUE",v77,Promise,v6);
}
%NeverOptimizeFunction(main);
main();
