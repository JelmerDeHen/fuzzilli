function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337];
const v7 = [-2147483649];
const v8 = {e:eval,__proto__:13.37,c:"boolean",d:13.37,constructor:-2147483649,b:"boolean",valueOf:-2147483649};
const v9 = {length:v4,d:-2147483649,toString:v6,valueOf:"boolean",e:1337};
let v10 = "boolean";
const v12 = [13.37,13.37,13.37,13.37];
try {
    const v14 = false();
} catch(v15) {
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
                        return v42;
                    }
                    const v53 = v47.toLocaleString();
                    const v55 = Object.defineProperty(this,1337,v44);
                } catch(v56) {
                    try {
                        const v57 = v41[3];
                    } catch(v58) {
                        v56.valueOf = v56;
                    }
                }
                return v40;
            }
            const v59 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
            const v61 = new Proxy(v39,v59);
            v61[1] = "MIN_VALUE";
        }
        const v62 = v33();
    }
}
const v63 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v65 = new Proxy(v19,v63);
v65[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
