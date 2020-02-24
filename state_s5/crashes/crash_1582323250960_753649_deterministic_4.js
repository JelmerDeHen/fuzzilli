function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = [-1511813568,1337];
const v8 = {__proto__:"name",length:v6,d:v7,valueOf:"name",e:v6};
const v9 = {b:-1511813568,d:v6,__proto__:v6,length:v8,constructor:Function,e:v7,a:1337};
let v10 = 13.37;
for (const v12 in "object") {
    const v15 = [1337,1337,1337,1337,1337];
    function v16(v17,v18,v19,v20) {
        'use strict'
        try {
            v20[3] = v20;
        } catch(v21) {
            const v26 = [13.37,13.37,13.37];
            const v27 = ["byteOffset",Proxy,v26,2695331796];
            let v28 = v27;
            const v30 = [1337,1337,1337,1337,1337];
            const v34 = [-2588121454];
            let v35 = v34;
            const v38 = [13.37,13.37,13.37,13.37];
            const v40 = [v38,-2,-4294967297];
            const v43 = -Infinity;
            const v44 = [13.37,v28,v43];
            v44[1337] = 0;
            const v47 = v44.push();
            let v49 = 129;
            while (v49 < 1337) {
                const v50 = v44.push(v35);
                const v51 = v49 + 1;
                v49 = v51;
            }
            const v52 = [-1242988596,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
            let v53 = v52;
            const v54 = v40[v53];
            const v55 = new Uint32Array(v44);
            const v56 = v55.sort();
            let v58 = 0;
            const v59 = v58 + 1;
            for (const v62 in "boolean") {
                const v64 = 13.37 << v62;
                let v65 = 0;
                const v66 = v65 != v64;
            }
        }
        return v15;
    }
    const v67 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
    const v69 = new Proxy(v15,v67);
    v69[1] = "MIN_VALUE";
}
const v70 = -1511813568 <= v8;
}
%NeverOptimizeFunction(main);
main();
