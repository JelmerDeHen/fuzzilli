function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = {b:13.37,c:4294967297};
const v6 = {d:4294967297,b:v5,valueOf:v2,__proto__:v2,toString:v2};
const v10 = [1337,13.37,1337,Uint8Array];
let v11 = v10;
const v13 = [1337,1337,1337,1337,1337];
const v14 = {valueOf:v13,__proto__:v13};
let v16 = 13.37;
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        const v28 = [1337,1337];
        const v31 = new ArrayBuffer();
        v16 = v23;
        let v34 = 0;
        do {
            const v35 = v34 + 1;
            v34 = v35;
        } while (v34 < 4);
        let v38 = v6;
        const v39 = v38[10];
        let v40 = 0;
        const v41 = v31.slice(v16,4);
        const v42 = v40 + 1;
        const v43 = [13.37];
        const v45 = [1337,13.37,v43,-1155643050];
        let v46 = v43;
        const v48 = [1337,1337];
        const v49 = {valueOf:1337,b:v11,e:1337,d:1337,constructor:v46,__proto__:1337,a:v43};
        const v51 = [];
        const v52 = {b:v22,constructor:v14,toString:v23,...1337,...13.37};
        const v53 = [1337,1337,1337,1337,1337];
        const v54 = v24 + 1;
        const v56 = [13.37];
        const v57 = [v53];
        const v58 = v39(v21,...v24,1337,1337,v48);
        const v59 = v58();
        const v60 = v16 in v21;
        const v61 = [...1337];
        const v62 = 1337 === v39;
        const v63 = v48[-4096];
        const v64 = v45[-3357639552];
        const v65 = 13.37 == v45;
        let v67 = 0;
        const v68 = v46.flat();
        const v69 = v14();
        const v70 = v69[-2900725722];
        const v71 = v4.__proto__;
    } catch(v72) {
        const v73 = {construct:v72};
    }
}
const v74 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v76 = new Proxy(v19,v74);
v76[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
