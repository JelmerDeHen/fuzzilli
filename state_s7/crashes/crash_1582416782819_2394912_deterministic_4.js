function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337];
const v7 = [-4054097377,1337,-4054097377,1337];
const v8 = {b:1337,constructor:"undefined",valueOf:"undefined"};
const v9 = {constructor:"undefined",b:-4054097377,toString:Object,d:Object,e:13.37};
let v10 = Object;
const v14 = [1337,13.37,1337,Uint8Array];
let v15 = v14;
const v17 = [1337,1337,1337,1337,1337];
const v18 = {valueOf:v17,__proto__:v17};
let v20 = 13.37;
const v23 = [1337,1337,1337,1337,1337];
function v24(v25,v26,v27,v28) {
    'use strict'
    try {
        const v32 = [1337,1337];
        const v34 = new ArrayBuffer();
        v20 = v27;
        let v37 = 0;
        do {
            v15[-128] = v23;
            const v39 = v25 == -634370.7935069938;
            const v40 = v37 + 1;
            v37 = v40;
        } while (v37 < 4);
        let v43 = 0;
        const v44 = v34.slice(v20,4);
        const v45 = v43 + 1;
        const v46 = [13.37];
        const v48 = [1337,13.37,v46,-1155643050];
        let v49 = v46;
        const v51 = [1337,1337];
        const v52 = {valueOf:1337,b:v15,e:1337,d:1337,constructor:v49,__proto__:1337,a:v46};
        const v54 = [1337,1337,1337,1337,1337];
        const v55 = [v54];
        const v56 = v51[-4096];
        const v57 = v48[-3357639552];
        const v58 = typeof v43;
        const v60 = v58 === "symbol";
        const v61 = 13.37 == v48;
        let v63 = 0;
        const v64 = v49.flat();
        v28[3] = v28;
        const v65 = v18();
        const v66 = v65[-2900725722];
        let v68 = undefined;
        function v69(v70,v71,v72,v73,v74) {
            'use strict'
            v68 = v32;
        }
    } catch(v75) {
        const v76 = {construct:v75};
    }
}
const v77 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
const v79 = new Proxy(v23,v77);
v79[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
