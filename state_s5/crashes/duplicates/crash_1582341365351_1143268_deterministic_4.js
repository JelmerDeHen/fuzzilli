function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v3 = [13.37];
const v4 = v3 + 1;
const v6 = [1337,1337,1337,1337];
const v8 = [13.37,13.37,13.37,13.37];
const v10 = -Infinity;
const v11 = [v8,v10,v10];
const v12 = {length:1337,toString:v11,__proto__:v6};
function v14(v15,v16,v17,v18,v19) {
    'use strict'
}
const v20 = [v4];
const v22 = [v14,-3170815044,Infinity];
const v23 = [v11,v22];
const v24 = v23.toLocaleString();
const v25 = {c:v24,d:v20};
let v26 = v23;
const v30 = [1337,13.37,1337,Uint8Array];
let v31 = v30;
const v33 = [1337,1337,1337,1337,1337];
const v34 = {valueOf:v33,__proto__:v33};
let v36 = 13.37;
const v39 = [1337,1337,1337,1337,1337];
function v40(v41,v42,v43,v44) {
    'use strict'
    try {
        const v48 = [1337,1337];
        const v50 = new ArrayBuffer();
        v36 = v43;
        let v53 = 0;
        do {
            const v54 = v53 + 1;
            v53 = v54;
        } while (v53 < 4);
        let v57 = 0;
        const v58 = v50.slice(v36,4);
        const v60 = [1337];
        let v61 = v60;
        let v63 = undefined;
        const v64 = [13.37];
        const v66 = [1337,13.37,v64,-1155643050];
        let v67 = v64;
        const v69 = [1337,1337];
        const v70 = {valueOf:1337,b:v31,e:1337,d:1337,constructor:v67,__proto__:1337,a:v64};
        const v72 = [1337,1337,1337,1337,1337];
        const v73 = [v72];
        const v74 = v69[-4096];
        const v75 = v66[-3357639552];
        const v76 = 13.37 == v66;
        let v78 = 0;
        const v79 = v67.flat();
        v44[3] = v44;
        const v80 = v34();
        let v82 = undefined;
        let v84 = 0;
    } catch(v85) {
        const v86 = {construct:v85};
    }
}
const v87 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
const v89 = new Proxy(v39,v87);
v89[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
