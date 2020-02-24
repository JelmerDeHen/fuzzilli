function main() {
const v3 = [1337,13.37,1337,Uint8Array];
let v4 = v3;
const v6 = [1337,1337,1337,1337,1337];
const v7 = {valueOf:v6,__proto__:v6};
let v9 = 13.37;
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        let v21 = -3964937747;
        const v23 = String.fromCharCode();
        function v24(v25,v26,v27,v28,v29) {
            'use strict'
        }
        let v30 = v21;
        const v32 = [v24,Infinity,4294967297];
        const v33 = [v30,v32];
        let v35 = v33;
        const v36 = JSON.stringify();
        const v39 = [1337,1337];
        const v41 = new ArrayBuffer();
        v9 = v16;
        let v44 = 0;
        do {
            const v45 = v44 + 1;
            v44 = v45;
        } while (v44 < 4);
        let v47 = 0;
        const v48 = v41.slice(v9);
        const v49 = v47 + 1;
        const v50 = [13.37];
        const v52 = [1337,13.37,v50,-1155643050];
        let v53 = v50;
        const v55 = [1337,1337];
        const v56 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v53,__proto__:1337,a:v50};
        const v58 = [1337,1337,1337,1337,1337];
        const v59 = [v58];
        const v60 = v55[-4096];
        const v61 = v52[-3357639552];
        const v62 = 13.37 == v52;
        let v64 = 0;
        const v65 = v53.flat();
        v17[3] = v17;
        const v66 = v7();
        const v67 = v66[-2900725722];
        let v69 = undefined;
        function v70(v71,v72,v73,v74,v75) {
            'use strict'
            v69 = v39;
        }
    } catch(v76) {
        const v77 = {construct:v76};
    }
}
const v78 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v80 = new Proxy(v12,v78);
v80[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
