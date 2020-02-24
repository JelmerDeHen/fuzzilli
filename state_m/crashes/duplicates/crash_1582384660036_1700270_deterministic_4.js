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
        const v54 = [];
        for (const v56 in "object") {
            const v58 = [1337,1337,1337,1337,1337];
            function v59(v60,v61,v62,v63) {
                'use strict'
            }
            const v64 = {deleteProperty:v59,set:v59,getPrototypeOf:v59,call:v59,preventExtensions:v59,isExtensible:v59,construct:v59,get:v59,ownKeys:v59,setPrototypeOf:1337,has:v59};
            const v66 = [];
            const v67 = {__proto__:v66};
            const v70 = [13.37,13.37];
            const v71 = v70[1024];
            const v72 = {has:Array,construct:v71,toString:v71,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v71,isExtensible:v71,call:v71,set:Array,getOwnPropertyDescriptor:Array};
            const v73 = Proxy();
        }
        const v74 = {construct:v53};
    }
}
const v75 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v77 = new Proxy(v12,v75);
v77[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
