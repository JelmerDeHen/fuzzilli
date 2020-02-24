function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [1337,v3,undefined,undefined];
const v7 = {d:undefined,e:v6,length:"match",__proto__:v5,a:v5};
const v8 = {d:"match",toString:"match"};
let v9 = v5;
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
                    let v57 = 0;
                    const v58 = v57 + 1;
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
const v75 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v77 = new Proxy(v19,v75);
v77[1] = "MIN_VALUE";
const v78 = 1337 == v9;
let v79 = v8;
const v80 = v77();
const v81 = v75.set();
}
%NeverOptimizeFunction(main);
main();
