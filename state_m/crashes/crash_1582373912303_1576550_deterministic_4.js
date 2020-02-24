function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
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
        const v25 = new ArrayBuffer();
        v11 = v18;
        function v26(v27,v28,v29,v30) {
            'use strict'
        }
        const v31 = v26 + 1;
        try {
            const v33 = new ArrayBuffer();
            v33.constructor = v31;
            const v34 = v33.slice();
        } catch(v35) {
        }
        let v38 = 0;
        do {
            const v39 = v38 + 1;
            v38 = v39;
        } while (v38 < 4);
        let v42 = 0;
        const v43 = v25.slice(v11,4);
        const v44 = v42 + 1;
        const v45 = [13.37];
        const v47 = [1337,13.37,v45,-1155643050];
        let v48 = v45;
        const v50 = [1337,1337];
        const v51 = {valueOf:1337,b:v6,e:1337,d:1337,constructor:v48,__proto__:1337,a:v45};
        const v53 = [1337,1337,1337,1337,1337];
        const v54 = [v53];
        const v55 = v50[-4096];
        const v56 = v47[-3357639552];
        const v57 = 13.37 == v47;
        let v59 = 0;
        const v60 = v48.flat();
        v19[3] = v19;
        const v61 = v9();
        const v62 = v61[-2900725722];
        let v64 = undefined;
        function v65(v66,v67,v68,v69,v70) {
            'use strict'
            v64 = v23;
        }
        let v72 = 0;
    } catch(v73) {
        const v74 = {construct:v73};
    }
}
const v75 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v77 = new Proxy(v14,v75);
v77[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
