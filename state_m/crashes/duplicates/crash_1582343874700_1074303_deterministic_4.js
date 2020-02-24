function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [13.37,13.37];
const v6 = {a:v5,e:65537,d:v4};
const v7 = {__proto__:v2,length:65537,valueOf:v4,b:13.37,c:13.37,a:v2};
let v8 = 13.37;
const v12 = [-848743.1396674996,-848743.1396674996,-848743.1396674996];
const v14 = [1337,1337,1337,1337,1337];
const v15 = [-848743.1396674996];
const v16 = {};
const v17 = {d:"constructor",a:-848743.1396674996,length:v14,c:v12,valueOf:v16,toString:1320432668,e:v12};
let v18 = 1320432668;
const v20 = [1337];
let v21 = v20;
let v23 = 0;
const v27 = [1337,13.37,1337,Uint8Array];
let v28 = v27;
const v30 = [1337,1337,1337,1337,1337];
const v31 = {valueOf:v30,__proto__:v30};
let v33 = 13.37;
const v36 = [1337,1337,1337,1337,1337];
function v37(v38,v39,v40,v41) {
    'use strict'
    try {
        const v45 = [1337,1337];
        let v47 = 0;
        const v48 = v47 + 1;
        const v50 = new ArrayBuffer();
        v33 = v40;
        let v53 = 0;
        do {
            const v54 = v53 + 1;
            v53 = v54;
        } while (v53 < 4);
        let v57 = 0;
        const v58 = v50.slice(v33,4);
        const v59 = v57 + 1;
        const v60 = [13.37];
        const v62 = [1337,13.37,v60,-1155643050];
        let v63 = v60;
        const v65 = [1337,1337];
        const v66 = {valueOf:1337,b:v28,e:1337,d:1337,constructor:v63,__proto__:1337,a:v60};
        const v68 = [1337,1337,1337,1337,1337];
        const v69 = [v68];
        const v70 = v65[-4096];
        const v71 = v62[-3357639552];
        const v72 = 13.37 == v62;
        let v74 = 0;
        const v75 = v63.flat();
        v41[3] = v41;
        const v76 = v31();
        const v77 = v76[-2900725722];
        let v79 = 0;
    } catch(v80) {
        const v81 = {construct:v80};
    }
}
const v82 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
const v84 = new Proxy(v36,v82);
v84[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
