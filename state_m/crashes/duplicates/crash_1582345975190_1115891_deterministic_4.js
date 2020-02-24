function main() {
let v1 = "EVPrpYFgIX";
const v3 = [1337,1337,1337,1337,1337];
const v4 = {valueOf:v3,__proto__:v3};
let v6 = 13.37;
const v9 = [1337,1337,1337,1337,1337];
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        const v17 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
        function v18(v19,v20,v21,v22) {
            'use strict'
        }
        const v23 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
        const v25 = new Proxy(v17,v23);
        const v28 = [1337,1337];
        const v30 = new ArrayBuffer();
        v6 = v13;
        let v33 = 0;
        do {
            const v34 = v33 + 1;
            v33 = v34;
        } while (v33 < 4);
        let v36 = 0;
        const v37 = v30.slice(v6);
        const v38 = v36 + 1;
        const v39 = [13.37];
        const v43 = v1 * v11;
        let v44 = v14;
        const v45 = [1337,1337,1337,1337,1337];
        function v46(v47,v48,v49,v50,v51) {
            'use strict'
        }
        const v52 = [v45];
        let v53 = 1337;
        const v55 = [v46,-3170815044,Infinity];
        const v56 = [v53,v55];
        const v57 = v56.toLocaleString();
        const v58 = {c:v57,d:v52};
        let v59 = v58;
        const v61 = [1337,13.37,v39,-1155643050];
        let v62 = v39;
        const v64 = [1337,1337];
        const v66 = [1337,1337,1337,1337,1337];
        const v67 = [v66];
        const v68 = v64[-4096];
        const v69 = v61[-3357639552];
        const v70 = 13.37 == v61;
        let v72 = 0;
        const v73 = v62.flat();
        v14[3] = v14;
        const v74 = v4();
        const v75 = v74[-2900725722];
    } catch(v76) {
        const v77 = {construct:v76};
    }
}
const v78 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
const v80 = new Proxy(v9,v78);
v80[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
