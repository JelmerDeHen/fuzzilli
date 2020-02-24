function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337];
const v7 = ["size"];
const v8 = {a:v4,constructor:v4,valueOf:1337,b:65537,e:v4,__proto__:parseInt};
const v9 = {d:13.37,valueOf:v4,__proto__:v7,e:v4,a:v8};
let v10 = v6;
for (const v12 in "object") {
    const v15 = [1337,1337,1337,1337,1337];
    function v16(v17,v18,v19,v20) {
        'use strict'
        try {
            v20[3] = v20;
        } catch(v21) {
            let v25 = 0;
            const v27 = [13.37,13.37,13.37,13.37,13.37];
            function v28(v29,v30,v31,v32) {
                'use strict'
                const v35 = [13.37,13.37,13.37,13.37,13.37];
                const v37 = [256,v35,13.37,6];
                const v41 = Object.freeze(this,"a",v37);
                return v16;
            }
            const v42 = v27.filter(v28,v27);
            let v47 = -5.0;
            const v50 = [-1000000000000.0,-1000000000000.0,-1000000000000.0,-1000000000000.0];
            const v52 = [v50,-2,-4294967297];
            const v56 = [13.37,-1532474081,-516360.4478126964];
            let v59 = 0;
            while (v59 < 1337) {
                const v60 = v56.push(v47);
                v47 = 1337;
                const v61 = v59 + 1;
                v59 = v61;
            }
            let v62 = -516360.4478126964;
            const v63 = v52[v62];
            const v64 = new Int32Array(v56);
            const v65 = v64.sort(v63);
            let v67 = 1337;
            const v68 = v25 + 1;
            v25 = v68;
        }
        return v15;
    }
    const v69 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
    const v71 = new Proxy(v15,v69);
    v71[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
