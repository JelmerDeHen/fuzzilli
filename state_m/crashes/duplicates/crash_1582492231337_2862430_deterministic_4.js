function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = ["unscopable",1337,v5,13.37];
const v7 = {e:13.37,d:-1424663080,c:13.37,constructor:v6};
const v8 = {};
let v9 = "unscopable";
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
}
const v23 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v25 = new Proxy(v17,v23);
const v29 = [1337,1337,1337,1337,1337];
function v30(v31,v32,v33,v34) {
    'use strict'
    try {
        v34[3] = v34;
    } catch(v35) {
        const v40 = [-2331916614,-2331916614,-2331916614];
        const v41 = [3664180981,3664180981,"string","string"];
        const v42 = {valueOf:v41,length:v40,toString:parseFloat,constructor:"string",c:parseFloat};
        function v43(v44,v45) {
            for (const v47 in "ruHq55V2**") {
                const v51 = [1337,1337,1337,1337,1337];
                function v52(v53,v54,v55,v56) {
                    'use strict'
                    try {
                        const v57 = new Float64Array(v55);
                        function v60(v61,v62,v63,v64,v65) {
                            'use strict'
                            return v32;
                        }
                        const v66 = v60.toLocaleString();
                        const v68 = [];
                        const v69 = {a:v68};
                        const v70 = {__proto__:eval,constructor:v69,length:v68};
                        let v73 = 0;
                        const v74 = v70.__proto__(v66,v73,19873,Symbol,eval);
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
        }
        const v83 = v40.__proto__;
        const v84 = v43();
    }
}
const v85 = {deleteProperty:v30,set:v30,getPrototypeOf:v30,call:v30,preventExtensions:v30,isExtensible:v30,construct:v30,get:v30,ownKeys:v30,setPrototypeOf:v30,has:v30};
const v87 = new Proxy(v29,v85);
v87[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
