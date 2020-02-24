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
        let v42 = 0;
        const v44 = {__proto__:536870912};
        const v46 = [13.37,13.37,13.37];
        const v48 = [];
        try {
            const v51 = [1337,13.37];
            const v52 = v51[1024];
            let v54 = 0;
            const v55 = [];
            const v57 = Int16Array();
            const v58 = v55.__proto__;
            const v59 = v54 + 1;
            const v60 = {has:Array,construct:v52,toString:v52,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v52,isExtensible:v52,call:v52,set:Array,getOwnPropertyDescriptor:Array};
            const v62 = Proxy();
            for (const v63 in v62) {
            }
        } catch(v64) {
        }
        const v65 = [1337,1337,1337,1337,1337];
        const v66 = [v65];
        const v67 = v38[-4096];
        const v68 = v35[-3357639552];
        const v69 = 13.37 == v35;
        let v71 = 0;
        const v72 = v36.flat();
        v17[3] = v17;
        const v73 = v7();
        const v74 = v73[-2900725722];
        let v76 = 0;
    } catch(v77) {
        const v78 = {construct:v77};
    }
}
const v79 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v81 = new Proxy(v12,v79);
v81[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
