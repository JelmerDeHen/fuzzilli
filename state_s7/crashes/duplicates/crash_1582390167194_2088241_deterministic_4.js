function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337,v3];
const v6 = [];
const v7 = {toString:v6,constructor:v6,b:v6,valueOf:1337,__proto__:1028847933,c:v3};
const v8 = {toString:"constructor",constructor:v3,b:v5};
let v9 = 1028847933;
const v12 = [1337,1337];
const v14 = new ArrayBuffer();
const v15 = v14.slice();
let v17 = undefined;
const v19 = [1337];
let v20 = v19;
let v22 = undefined;
let v24 = 0;
let v26 = -2;
const v29 = [1337,13.37,1337,Uint8Array];
let v30 = v29;
const v32 = [1337,1337,1337,1337,1337];
const v33 = {valueOf:v32,__proto__:v32};
let v35 = 13.37;
const v38 = [1337,1337,1337,1337,1337];
function v39(v40,v41,v42,v43) {
    'use strict'
    try {
        const v47 = [1337,1337];
        const v49 = new ArrayBuffer();
        v35 = v42;
        let v52 = 0;
        let v54 = 0;
        do {
            const v55 = v54 + 1;
            v54 = v55;
        } while (v54 < 4);
        let v58 = 0;
        const v59 = v49.slice(v35,4);
        const v60 = v58 + 1;
        const v61 = [13.37];
        const v63 = [1337,13.37,v61,-1155643050];
        let v64 = v61;
        const v66 = [1337,1337];
        const v67 = {valueOf:1337,b:v30,e:1337,d:1337,constructor:v64,__proto__:1337,a:v61};
        const v69 = [1337,1337,1337,1337,1337];
        const v70 = [v69];
        const v71 = v66[-4096];
        const v72 = v63[-3357639552];
        const v73 = 13.37 == v63;
        let v75 = 0;
        const v76 = v64.flat();
        v43[3] = v43;
        const v77 = v33();
        const v78 = v77[-2900725722];
        function v79(v80,v81,v82,v83,v84) {
            'use strict'
            return v42;
        }
        let v86 = 0;
    } catch(v87) {
        const v88 = {construct:v87};
    }
}
const v89 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
const v91 = new Proxy(v38,v89);
v91[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
