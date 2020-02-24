function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337];
const v7 = [13.37,ArrayBuffer,"c"];
const v8 = {d:3243497857,constructor:3243497857,b:13.37,valueOf:"c",e:1337,toString:v6};
const v10 = new Uint16Array();
const v11 = v10.slice();
const v12 = {__proto__:v7,constructor:13.37,toString:v4,a:3243497857,b:"c",d:"c",length:v6};
let v13 = ArrayBuffer;
let v18 = 0;
const v19 = v18 + 1;
const v21 = [13.37,ArrayBuffer];
const v23 = [1337,1337,1337];
const v24 = [13.37,"arguments",v23,3243497857];
const v25 = {e:v24,b:13.37,c:v24,toString:13.37,constructor:13.37,length:1536414840,__proto__:"arguments",a:1536414840};
const v26 = {e:v25,c:v23,valueOf:v21};
let v27 = v26;
const v31 = [1337,1337,1337,1337,1337];
function v32(v33,v34,v35,v36) {
    'use strict'
    try {
        v36[3] = v36;
    } catch(v37) {
        const v42 = [-2331916614,-2331916614,-2331916614];
        const v43 = [3664180981,3664180981,"string","string"];
        const v44 = {valueOf:v43,length:v42,toString:parseFloat,constructor:"string",c:parseFloat};
        function v45(v46,v47) {
            const v51 = [1337,1337,1337,1337,1337];
            function v52(v53,v54,v55,v56) {
                'use strict'
                try {
                    const v57 = new Float64Array(v55);
                    function v60(v61,v62,v63,v64,v65) {
                        'use strict'
                    }
                    const v66 = v60.toLocaleString();
                    const v68 = [];
                    const v69 = {a:v68};
                    const v70 = {__proto__:eval,constructor:v69,length:v68};
                    let v73 = 0;
                    const v74 = v70.__proto__(v66,v73,19873,Symbol);
                    const v76 = Object.defineProperty(this,1337,v56);
                } catch(v77) {
                    try {
                        const v78 = v53[3];
                    } catch(v79) {
                        v77.valueOf = v77;
                    }
                }
                return v52;
            }
            const v80 = {deleteProperty:v52,set:v52,getPrototypeOf:v52,call:v52,preventExtensions:v52,isExtensible:v52,construct:v52,get:v52,ownKeys:v52,setPrototypeOf:v52,has:v52};
            const v82 = new Proxy(v51,v80);
            v82[1] = "MIN_VALUE";
        }
        const v83 = v45();
    }
}
const v84 = {deleteProperty:v32,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v32,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:v32,has:v32};
const v86 = new Proxy(v31,v84);
v86[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
