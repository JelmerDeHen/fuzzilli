function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [];
const v7 = {constructor:1337};
const v8 = {__proto__:v7,d:1337,valueOf:v5,b:"undefined",toString:4294967296};
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
                        return v23;
                    }
                    const v54 = v48.toLocaleString();
                    const v56 = [];
                    const v57 = {a:v56};
                    const v58 = {__proto__:eval,constructor:v57,length:v56};
                    let v61 = 0;
                    const v62 = v58.__proto__(v54,v61,19873,Symbol);
                    const v64 = Object.defineProperty(this,1337,v44);
                } catch(v65) {
                    try {
                        const v66 = v41[3];
                    } catch(v67) {
                        v65.valueOf = v65;
                    }
                }
                return v40;
            }
            function v68(v69,v70) {
            }
            const v72 = [1337];
            let v73 = v72;
            const v74 = v68();
            const v75 = v68();
            const v76 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
            const v78 = new Proxy(v39,v76);
            v78[1] = "MIN_VALUE";
        }
        const v79 = v33();
    }
}
const v80 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v82 = new Proxy(v19,v80);
v82[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
