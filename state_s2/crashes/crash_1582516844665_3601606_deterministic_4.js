function main() {
const v1 = [13.37];
const v3 = [1337,1337,1337];
const v4 = [13.37,v1,13.37];
const v5 = {d:v4,toString:v1,constructor:v3};
const v6 = {a:v3};
let v7 = 1337;
const v9 = [13.37,13.37,13.37,13.37];
const v11 = [1337,1337,1337,1337];
const v12 = [];
const v13 = {b:1337,c:v9,d:13.37,a:v11,length:v12,valueOf:1337};
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        v22[3] = v22;
    } catch(v23) {
        const v28 = [-2331916614,-2331916614,-2331916614];
        const v29 = [3664180981,3664180981,"string","string"];
        const v30 = {valueOf:v29,length:v28,toString:parseFloat,constructor:"string",c:parseFloat};
        function v31(v32,v33) {
            for (const v35 in "ruHq55V2**") {
                const v38 = [1337,1337,1337,1337,1337];
                function v39(v40,v41,v42,v43) {
                    'use strict'
                    try {
                        const v44 = new Float64Array();
                        const v46 = 1337 instanceof v31;
                        let v47 = v35;
                        if (v33) {
                            const v48 = v39();
                            v47 = v19;
                        } else {
                            const v50 = {set:v31};
                            const v52 = Object.defineProperty(v41,-65535);
                        }
                        v28.__proto__ = this;
                        const v53 = v40.__proto__;
                        const v54 = [v35,v42];
                        const v55 = v33();
                        function v56(v57,v58,v59,v60,v61) {
                            'use strict'
                            return v42;
                        }
                    } catch(v62) {
                    }
                    return v39;
                }
                const v63 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
                const v65 = new Proxy(v38,v63);
                v65[1] = "MIN_VALUE";
            }
        }
        const v66 = v28.__proto__;
        const v67 = v31(v30,v66);
    }
}
const v68 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v70 = new Proxy(v17,v68);
v70[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
