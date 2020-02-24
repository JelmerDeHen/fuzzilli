function main() {
const v2 = [13.37];
const v4 = [1337];
const v5 = [13.37,Promise];
const v6 = {d:13.37,b:v5,valueOf:v2};
const v7 = {toString:v2,length:1337,valueOf:v6};
const v10 = v7[-1024];
const v14 = 2.2250738585072014e-308 / 9007199254740991;
const v15 = [v14];
const v16 = [1337,13.37,1337,Uint8Array];
let v17 = v16;
const v19 = [1337,1337,1337,1337,1337];
const v20 = {valueOf:v19,__proto__:v19};
let v22 = 13.37;
const v25 = [1337,1337,1337,1337,1337];
function v26(v27,v28,v29,v30) {
    'use strict'
    try {
        const v34 = [1337,1337];
        const v36 = new ArrayBuffer();
        v22 = v29;
        let v39 = 0;
        do {
            const v40 = v39 + 1;
            v39 = v40;
        } while (v39 < 4);
        let v42 = 0;
        const v43 = v36.slice(v22);
        const v44 = v42 + 1;
        const v45 = [13.37];
        const v47 = [1337,13.37,v45,-1155643050];
        let v48 = v45;
        const v50 = [1337,1337];
        const v54 = [13.37];
        const v55 = ["F8+a.RaKn+"];
        const v56 = {__proto__:"F8+a.RaKn+",e:2937671842,c:v55,length:v54};
        let v57 = v56;
        const v59 = new Int16Array();
        const v61 = new Uint32Array();
        const v62 = v61.slice();
        const v63 = v59.slice();
        const v64 = {valueOf:1337,b:v17,e:1337,d:1337,constructor:v48,__proto__:1337,a:v45};
        const v66 = [1337,1337,1337,1337,1337];
        const v67 = [v66];
        const v68 = v50[-4096];
        const v69 = v47[-3357639552];
        const v70 = 13.37 == v47;
        let v72 = 0;
        const v73 = v48.flat();
        v30[3] = v30;
        const v74 = v20();
        const v75 = v74[-2900725722];
        let v77 = undefined;
        const v78 = v29.toLocaleString(v30,v4,v10);
        const v79 = {...v56};
        let v81 = 0;
        const v82 = v81 + 1;
        function v83(v84,v85,v86,v87,v88) {
            'use strict'
            v77 = v34;
        }
        let v89 = v28;
        const v90 = v15 / 13.37;
        for (let v94 = 0; v94 < 1; v94++) {
            const v95 = {getPrototypeOf:Promise,call:v78};
            const v97 = Proxy();
        }
        for (let v101 = 0; v101 < 6; v101++) {
            let v102 = v101;
        }
    } catch(v103) {
        const v104 = {construct:v103};
    }
}
const v105 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
const v107 = new Proxy(v25,v105);
v107[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
