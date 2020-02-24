function main() {
const v1 = [1337,1337,1337];
const v5 = [1337,13.37,1337,Uint8Array];
let v6 = v5;
const v8 = [1337,1337,1337,1337,1337];
const v9 = {valueOf:v8,__proto__:v8};
let v11 = 13.37;
const v14 = [1337,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        const v23 = [1337,1337];
        function v24(v25,v26) {
            return v19;
        }
        let v27 = 13.37;
        const v31 = {e:13.37,d:"d"};
        function v32(v33,v34) {
        }
        const v36 = [1337];
        let v37 = v36;
        const v38 = v32();
        const v39 = new ArrayBuffer();
        v11 = v18;
        let v42 = 0;
        do {
            const v43 = v42 + 1;
            v42 = v43;
        } while (v42 < 4);
        let v45 = 0;
        const v46 = v39.slice(v11);
        const v47 = v45 + 1;
        const v48 = [13.37];
        const v50 = [1337,13.37,v48,-1155643050];
        let v51 = v48;
        const v53 = [1337,1337];
        const v54 = {valueOf:1337,b:v6,e:1337,d:1337,constructor:v51,__proto__:1337,a:v48};
        const v56 = [1337,1337,1337,1337,1337];
        const v57 = [v56];
        const v58 = v53[-4096];
        const v59 = v50[-3357639552];
        const v60 = 13.37 == v50;
        let v62 = 0;
        const v63 = v51.flat();
        v19[3] = v19;
        const v64 = v9();
        const v65 = v64[-2900725722];
        let v67 = undefined;
        let v68 = v60;
        let v70 = 0;
        const v71 = {};
        const v72 = [v71,v71,v71,v71];
        const v73 = v70 + 1;
        const v74 = v23.__proto__;
    } catch(v75) {
        const v76 = {construct:v75};
    }
}
const v77 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v79 = new Proxy(v14,v77);
v79[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
