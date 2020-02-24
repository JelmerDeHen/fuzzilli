function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337];
const v6 = ["symbol",v3,13.37,v5];
const v7 = {b:10000,constructor:v3};
const v8 = {toString:10000};
let v9 = v3;
const v13 = [1337,13.37,1337,Uint8Array];
let v14 = v13;
const v16 = v3 || v6;
for (let v20 = 0; v20 < 2; v20++) {
}
const v21 = [1337,1337,1337,1337,1337];
for (const v22 in "symbol") {
    function v23(v24,v25,...v26) {
    }
}
const v27 = {valueOf:v21,__proto__:v21};
let v29 = 13.37;
const v32 = [1337,1337,1337,1337,1337];
function v33(v34,v35,v36,v37) {
    'use strict'
    try {
        const v41 = [1337,1337];
        const v43 = new ArrayBuffer();
        v29 = v36;
        let v46 = 0;
        do {
            const v47 = v46 + 1;
            v46 = v47;
        } while (v46 < 4);
        let v50 = 0;
        const v51 = v43.slice(v29,4);
        const v52 = v50 + 1;
        const v53 = [13.37];
        const v55 = [1337,13.37,v53,-1155643050];
        let v56 = v53;
        const v58 = [1337,1337];
        const v59 = {valueOf:1337,b:v14,e:1337,d:1337,constructor:v56,__proto__:1337,a:v53};
        const v62 = -1.7976931348623157e+308 / 9007199254740991;
        const v64 = [1337,1337,1337,1337,1337];
        const v65 = [v64];
        const v66 = v58[-4096];
        const v67 = v55[-3357639552];
        const v68 = 13.37 == v55;
        let v70 = 0;
        const v71 = v56.flat();
        v37[3] = v37;
        const v72 = v27();
        const v73 = v72[-2900725722];
        function v74(v75,v76,v77,v78,v79) {
            'use strict'
            return v37;
        }
        let v81 = 0;
    } catch(v82) {
        const v83 = {construct:v82};
    }
}
const v84 = {deleteProperty:v33,set:v33,getPrototypeOf:v33,call:v33,preventExtensions:v33,isExtensible:v33,construct:v33,get:v33,ownKeys:v33,setPrototypeOf:v33,has:v33};
const v86 = new Proxy(v32,v84);
v86[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
