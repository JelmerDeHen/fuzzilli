function main() {
const v1 = [1337,1337,1337,1337,1337];
const v2 = {valueOf:v1,__proto__:v1};
let v4 = 13.37;
const v7 = [1337,1337,1337,1337,1337];
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        const v16 = [3536304147];
        let v17 = gc;
        const v19 = [Infinity,Infinity,Infinity];
        const v20 = [v17,v19];
        const v21 = v20.toLocaleString();
        const v22 = {c:v21,d:v16};
        let v23 = v22;
        const v24 = [gc,v23,v23];
        const v26 = [1337,1337];
        const v29 = [13.37,13.37,13.37,13.37];
        const v30 = [v29,-2,v26];
        let v32 = 0;
        const v33 = v32 + 1;
        const v34 = Function != v21;
        const v38 = [1337,1337];
        const v40 = new ArrayBuffer();
        v4 = v11;
        let v43 = 0;
        do {
            const v44 = v43 + 1;
            v43 = v44;
        } while (v43 < 4);
        let v46 = 0;
        const v47 = v40.slice(v4);
        const v48 = v46 + 1;
        const v49 = [13.37];
        const v51 = [1337,13.37,v49,-1155643050];
        let v52 = v49;
        const v54 = [1337,1337];
        const v56 = [1337,1337,1337,1337,1337];
        const v57 = [v56];
        const v58 = v54[-4096];
        const v59 = v51[-3357639552];
        const v60 = 13.37 == v51;
        let v62 = 0;
        const v63 = v52.flat();
        v12[3] = v12;
        const v64 = v2();
        const v65 = v64[-2900725722];
        let v67 = undefined;
    } catch(v68) {
        const v69 = {construct:v68};
    }
}
const v70 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
const v72 = new Proxy(v7,v70);
v72[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
