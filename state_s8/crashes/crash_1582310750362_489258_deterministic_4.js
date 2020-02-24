function main() {
for (const v2 in "boolean") {
    const v6 = [13.37,13.37,13.37,13.37,13.37];
    const v8 = [v6,1337,13.37];
    const v9 = {b:"toStringTag",c:v8};
    const v11 = {get:eval};
    const v13 = Object.defineProperty(v9,"e",v11);
}
function v14(v15,v16,v17,v18) {
    'use strict'
    const v21 = [13.37,13.37,13.37];
    function v22(v23,v24) {
        for (const v26 in "object") {
            const v29 = [1337,1337,1337,1337,1337];
            function v30(v31,v32,v33,v34) {
                'use strict'
                try {
                    const v36 = new Float32Array();
                    v34[3] = v34;
                } catch(v37) {
                    const v39 = -Infinity;
                    const v40 = [v39];
                    const v42 = {constructor:-4294967295,b:1337,__proto__:v40};
                    const v43 = v40.includes();
                }
                return v29;
            }
            const v44 = {deleteProperty:v30,set:v30,getPrototypeOf:v30,call:v30,preventExtensions:v30,isExtensible:v30,construct:v30,get:v30,ownKeys:v30,setPrototypeOf:v30,has:v30};
            const v46 = new Proxy(v29,v44);
            v46[1] = "MIN_VALUE";
        }
    }
    const v47 = ["undefined",v21];
    const v50 = new Int16Array(19873);
    const v51 = v22(...v47,...v50);
}
const v52 = v14(13.37);
}
%NeverOptimizeFunction(main);
main();
