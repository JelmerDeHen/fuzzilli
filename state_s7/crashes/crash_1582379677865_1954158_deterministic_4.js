function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337];
const v7 = [];
const v8 = {valueOf:v4,b:"symbol",c:v4};
const v9 = {valueOf:13.37,a:13.37,e:1628329797,d:1337,toString:v8};
let v10 = v9;
const v14 = [1337,13.37,1337,Uint8Array];
let v15 = v14;
const v17 = [1337,1337,1337,1337,1337];
const v18 = {valueOf:v17,__proto__:v17};
let v20 = 13.37;
const v24 = [13.37];
const v25 = ~13.37;
const v26 = [1337,1337,1337,1337,1337];
function v27(v28,v29,v30,v31) {
    'use strict'
    try {
        const v35 = [1337,1337];
        const v37 = new ArrayBuffer();
        v20 = v30;
        let v40 = 0;
        do {
            const v41 = v40 + 1;
            v40 = v41;
        } while (v40 < 4);
        let v43 = 0;
        const v44 = v37.slice(v20);
        const v45 = v43 + 1;
        const v46 = [13.37];
        const v48 = new Uint8Array();
        const v51 = v48.slice(129,257);
        const v53 = [1337,13.37,v46,-1155643050];
        let v54 = v46;
        const v56 = [1337,1337];
        const v57 = {valueOf:1337,b:v15,e:1337,d:1337,constructor:v54,__proto__:1337,a:v46};
        const v59 = [1337,1337,1337,1337,1337];
        const v60 = [v59];
        const v61 = v56[-4096];
        const v62 = v53[-3357639552];
        const v63 = 13.37 == v53;
        let v65 = 0;
        const v66 = v54.flat();
        v31[3] = v31;
        const v67 = v18();
        const v68 = v67[-2900725722];
        let v70 = 0;
    } catch(v71) {
        const v72 = {construct:v71};
    }
}
const v73 = {deleteProperty:v27,set:v27,getPrototypeOf:v27,call:v27,preventExtensions:v27,isExtensible:v27,construct:v27,get:v27,ownKeys:v27,setPrototypeOf:v27,has:v27};
const v74 = [1337];
const v76 = new Proxy(v26,v73);
v76[1] = "MIN_VALUE";
const v77 = {c:13.37,valueOf:13.37,toString:1,d:v15,...v20,...v73,...1628329797};
for (let v81 = 0; v81 < 100; v81++) {
    const v82 = v76();
}
const v83 = v27(v8,Int8Array,v27,"MIN_VALUE");
}
%NeverOptimizeFunction(main);
main();
