function main() {
const v3 = [13.37,13.37];
const v5 = [1337];
const v6 = [13.37,13.37,v3,"number"];
const v7 = {c:1337,__proto__:v6,valueOf:1000,toString:"number",constructor:1337};
const v8 = {c:1337,__proto__:v3,toString:13.37,constructor:v6};
const v10 = new Int16Array();
for (let v14 = 0; v14 < 6; v14++) {
    const v15 = v3[979485618];
}
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
                    function v47(v48,v49,v50,v51,v52) {
                        'use strict'
                        return v47;
                    }
                    const v53 = v47.toLocaleString();
                    const v55 = [];
                    const v56 = {a:v55};
                    const v57 = {__proto__:eval,constructor:v56,length:v55};
                    const v59 = Object.defineProperty(this,1337,v44);
                } catch(v60) {
                    try {
                        const v61 = v41[3];
                    } catch(v62) {
                        v60.valueOf = v60;
                    }
                }
                return v40;
            }
            const v63 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
            const v65 = new Proxy(v39,v63);
            v65[1] = "MIN_VALUE";
        }
        const v66 = v33();
    }
}
const v67 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v69 = new Proxy(v19,v67);
v69[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
