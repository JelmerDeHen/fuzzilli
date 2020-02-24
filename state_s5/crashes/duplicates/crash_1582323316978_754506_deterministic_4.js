function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = [-1511813568,1337];
const v8 = {__proto__:"name",length:v6,d:v7,valueOf:"name",e:v6};
const v9 = {b:-1511813568,d:v6,__proto__:v6,length:v8,constructor:Function,e:v7,a:1337};
let v10 = 13.37;
let v12 = v6;
try {
    function v13(v14,v15,v16) {
    }
} catch(v17) {
}
for (const v18 in "object") {
    const v21 = [1337,1337,1337,1337,1337];
    function v22(v23,v24,v25,v26) {
        'use strict'
        try {
            v26[3] = v26;
        } catch(v27) {
            const v32 = [13.37,13.37,13.37];
            const v33 = ["byteOffset",Proxy,v32,2695331796];
            let v34 = v33;
            const v36 = [1337,1337,1337,1337,1337];
            const v40 = [-2588121454];
            let v41 = v40;
            const v44 = [13.37,13.37,13.37,13.37];
            const v46 = [v44,-2,-4294967297];
            const v49 = -Infinity;
            const v50 = [13.37,v34,v49];
            v50[1337] = 0;
            const v53 = v50.push();
            let v55 = 129;
            while (v55 < 1337) {
                const v56 = v50.push(v41);
                const v57 = v55 + 1;
                v55 = v57;
            }
            const v58 = [-1242988596,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
            let v59 = v58;
            const v60 = v46[v59];
            const v61 = new Uint32Array(v50);
            const v62 = v61.sort();
            for (const v65 in "boolean") {
                const v67 = 13.37 << v65;
                let v68 = 0;
                const v69 = v68 != v67;
            }
        }
        return v21;
    }
    const v70 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
    const v72 = new Proxy(v21,v70);
    v72[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
