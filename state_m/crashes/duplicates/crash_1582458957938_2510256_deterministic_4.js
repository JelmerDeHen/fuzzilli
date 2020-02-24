function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = ["string",13.37,1705716425,parseInt];
const v8 = {d:13.37,d:1337,e:v6,constructor:"string",b:"string"};
const v9 = {__proto__:v7,e:1705716425,constructor:parseInt,b:1705716425};
let v10 = v4;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,13.37,1337,1337];
const v15 = [];
const v16 = {b:1337,c:v12,d:13.37,a:v14,length:v15,valueOf:1337};
const v19 = [13.37,13.37];
const v20 = {b:v19};
const v25 = [1337,1337];
const v26 = [Uint8ClampedArray,13.37,2];
let v27 = v25;
const v28 = [];
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
                    let v72 = v68;
                    const v73 = v70.__proto__(v66,v72,19873,Symbol);
                    const v75 = Object.defineProperty(this,2470680664,v56);
                } catch(v76) {
                    try {
                        const v77 = v53[3];
                    } catch(v78) {
                        v76.valueOf = v76;
                    }
                }
                return v52;
            }
            const v79 = {deleteProperty:v52,set:v52,getPrototypeOf:v52,call:v52,preventExtensions:v52,isExtensible:v52,construct:v52,get:v52,ownKeys:v52,setPrototypeOf:v52,has:v52};
            const v81 = new Proxy(v51,v79);
            v81[1] = "MIN_VALUE";
        }
        const v82 = v45();
    }
}
const v83 = {deleteProperty:v32,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v32,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:v32,has:v32};
const v85 = new Proxy(v31,v83);
v85[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
