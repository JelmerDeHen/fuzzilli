function main() {
const v3 = [1337,13.37,1337,Uint8Array];
let v4 = v3;
const v6 = [1337,1337,1337,1337,1337];
const v7 = {valueOf:v6,__proto__:v6};
let v9 = 13.37;
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        const v21 = [1337,1337];
        const v23 = new ArrayBuffer();
        v9 = v16;
        let v26 = 0;
        do {
            const v27 = v26 + 1;
            v26 = v27;
        } while (v26 < 4);
        let v30 = 0;
        const v31 = v23.slice(v9,4);
        const v32 = v30 + 1;
        const v33 = [13.37];
        const v35 = [1337,13.37,v33,-1155643050];
        let v36 = v33;
        const v38 = [1337,1337];
        const v39 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v36,__proto__:1337,a:v33};
        const v41 = [1337,1337,1337,1337,1337];
        const v42 = [v41];
        const v43 = v38[-4096];
        const v44 = v35[-3357639552];
        const v45 = 13.37 == v35;
        let v47 = 0;
        const v48 = v36.flat();
        v17[3] = v17;
        const v49 = v7();
        const v50 = v49[-2900725722];
        let v52 = 0;
    } catch(v53) {
        const v55 = [13.37,13.37,13.37,13.37];
        const v57 = [1337,1337];
        const v60 = ArrayBuffer();
        let v62 = 0;
        const v63 = v62 + 1;
        const v64 = v60.slice();
        let v66 = undefined;
        const v67 = DataView(v64,v57,v66);
        function v68(v69,v70) {
            const v71 = v67.getInt16();
        }
        const v73 = [1337];
        let v74 = v73;
        const v75 = v68();
        const v76 = v68();
        const v77 = v68();
    }
}
const v78 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v80 = new Proxy(v12,v78);
v80[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
