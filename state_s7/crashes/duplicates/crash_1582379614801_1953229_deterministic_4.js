function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {valueOf:v3,b:"symbol",c:v3};
const v8 = {valueOf:13.37,a:13.37,e:1628329797,d:1337,toString:v7};
let v9 = v8;
const v13 = [1337,13.37,1337,Uint8Array];
let v14 = v13;
const v16 = [1337,1337,1337,1337,1337];
const v17 = {valueOf:v16,__proto__:v16};
let v19 = 13.37;
const v23 = [13.37];
const v24 = ~13.37;
const v25 = [1337,1337,1337,1337,1337];
function v26(v27,v28,v29,v30) {
    'use strict'
    try {
        const v34 = [1337,1337];
        const v36 = new ArrayBuffer();
        v19 = v29;
        let v39 = 0;
        do {
            const v40 = v39 + 1;
            v39 = v40;
        } while (v39 < 4);
        let v42 = 0;
        const v43 = v36.slice(v19);
        const v44 = v42 + 1;
        const v45 = [13.37];
        const v47 = new Uint8Array();
        const v50 = v47.slice(129,257);
        const v52 = [1337,13.37,v45,-1155643050];
        let v53 = v45;
        const v55 = [1337,1337];
        const v56 = {valueOf:1337,b:v14,e:1337,d:1337,constructor:v53,__proto__:1337,a:v45};
        const v58 = [1337,1337,1337,1337,1337];
        const v59 = [v58];
        const v60 = v55[-4096];
        const v61 = v52[-3357639552];
        const v62 = 13.37 == v52;
        let v64 = 0;
        const v65 = v53.flat();
        v30[3] = v30;
        const v66 = v17();
        const v67 = v66[-2900725722];
        let v69 = 0;
    } catch(v70) {
        const v71 = {construct:v70};
    }
}
const v72 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
const v73 = [1337];
const v75 = new Proxy(v25,v72);
v75[1] = "MIN_VALUE";
const v76 = Uint8Array instanceof 13.37;
for (let v80 = 0; v80 < 100; v80++) {
    const v81 = v75(1,v9,1337);
}
const v82 = v73 >> v14;
const v83 = Proxy();
}
%NeverOptimizeFunction(main);
main();
