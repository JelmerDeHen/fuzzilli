function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [v5,Proxy,v3,Proxy];
const v7 = {valueOf:Proxy,e:1337,__proto__:256};
const v8 = {b:v6,valueOf:256,c:v6,__proto__:256,constructor:Proxy,length:v7};
let v9 = v7;
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
            for (const v37 in "ruHq55V2**") {
                const v41 = [1337,1337,1337,1337,1337];
                function v42(v43,v44,v45,v46) {
                    'use strict'
                    try {
                        const v47 = new Float64Array(v45);
                        function v50(v51,v52,v53,v54,v55) {
                            'use strict'
                        }
                        const v56 = v50.toLocaleString();
                        const v57 = 3664180981 && v22;
                        const v59 = new Int32Array();
                        const v61 = [];
                        const v62 = {a:v61};
                        const v63 = {__proto__:eval,constructor:v62,length:v61};
                        let v66 = 0;
                        const v67 = v63.__proto__(v56,v66,19873,Symbol);
                        const v69 = Object.defineProperty(this,1337,v46);
                        const v71 = [-1000.0,-1000.0,-1000.0,-1000.0];
                        const v72 = v71.sort();
                        let v73 = v46;
                    } catch(v74) {
                        try {
                            const v75 = v43[3];
                        } catch(v76) {
                            v74.valueOf = v74;
                        }
                    }
                    return v42;
                }
                const v77 = {deleteProperty:v42,set:v42,getPrototypeOf:v42,call:v42,preventExtensions:v42,isExtensible:v42,construct:v42,get:v42,ownKeys:v42,setPrototypeOf:v42,has:v42};
                const v79 = new Proxy(v41,v77);
                v79[1] = "MIN_VALUE";
            }
        }
        const v80 = v30.__proto__;
        const v81 = v33();
    }
}
const v82 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,d:v20};
const v84 = new Proxy(v19,v82);
v84[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
