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
        const v43 = [13.37,13.37];
        const v45 = [1337,1337,1337,1337,1337];
        const v46 = [1337,Object,v45];
        const v47 = {__proto__:Object,valueOf:v43,b:v46,a:v45,c:Object};
        const v49 = [1337];
        let v50 = v49;
        let v52 = undefined;
        let v54 = 0;
        let v56 = 0;
        const v57 = v56 + 1;
        const v58 = v54 + 1;
        let v60 = 0;
        const v62 = [-719260299,-719260299];
        const v65 = [13.37,13.37,13.37,13.37];
        const v66 = [v65,-2,v62];
        const v68 = Object.preventExtensions();
        const v70 = Object.freeze();
        let v72 = -256;
        const v73 = v72 + 1;
        const v74 = v60 + 1;
        let v76 = 0;
        let v78 = 0;
        const v79 = v78 + 1;
        const v80 = v76 + 1;
        const v81 = [1337,1337,1337,1337,1337];
        const v82 = [v81];
        const v83 = v38[-4096];
        const v84 = v35[-3357639552];
        const v85 = 13.37 == v35;
        let v87 = 0;
        const v88 = v36.flat();
        v17[3] = v17;
        const v89 = v7();
        const v90 = v89[-2900725722];
        let v92 = 0;
    } catch(v93) {
        const v94 = {construct:v93};
    }
}
const v95 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v97 = new Proxy(v12,v95);
v97[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
