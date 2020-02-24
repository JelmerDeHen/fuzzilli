function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = {valueOf:13.37,toString:v3,e:1337,c:-384814583,b:13.37,a:13.37,d:13.37};
const v9 = [1337,13.37,1337,Uint8Array];
let v10 = v9;
const v11 = new Int8Array();
let v14 = 13.37;
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        const v26 = [1337,1337];
        const v28 = new ArrayBuffer();
        v14 = v21;
        let v31 = 0;
        do {
            const v32 = v31 + 1;
            v31 = v32;
        } while (v31 < 4);
        const v34 = 1337 == v22;
        let v35 = -1155643050;
        let v36 = 0;
        const v37 = v28.slice(v14);
        const v38 = v36 + 1;
        const v39 = [13.37];
        let v41 = v38;
        const v42 = v14();
        const v44 = [13.37,13.37];
        const v45 = v5 != ArrayBuffer;
        const v46 = [1337,13.37,v39,-1155643050];
        let v47 = v39;
        const v49 = [1337,1337];
        const v50 = {valueOf:1337,b:v10,e:1337,d:1337,constructor:v47,__proto__:1337,a:v39};
        const v52 = [1337,1337,1337,1337,1337];
        const v53 = [v52];
        const v54 = v49[-4096];
    } catch(v55) {
        let v57 = 0;
        let v59 = 0;
        const v60 = v59 + 1;
        for (const v61 of v11) {
        }
    }
}
const v62 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v64 = new Proxy(v17,v62);
v64[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
