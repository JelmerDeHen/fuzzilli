function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [v4,13.37,3];
const v9 = [1337,13.37,1337,Uint8Array];
let v10 = v9;
const v12 = [1337,1337,1337,1337,1337];
const v13 = {valueOf:v12,__proto__:v12};
let v15 = 13.37;
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        const v27 = [1337,1337];
        const v29 = new ArrayBuffer();
        v15 = v22;
        let v32 = 0;
        do {
            const v33 = v32 + 1;
            const v37 = new Int8Array(128);
            v37.constructor = Int16Array;
            const v39 = v37.slice(v37,1337);
            v32 = v33;
        } while (v32 < 4);
        let v42 = 0;
        const v43 = v29.slice(v15,4);
        const v44 = v42 + 1;
        const v45 = [13.37];
        const v47 = [1337,13.37,v45,-1155643050];
        let v48 = v45;
        const v50 = [1337,1337];
        const v51 = {valueOf:1337,b:v10,e:1337,d:1337,constructor:v48,__proto__:1337,a:v45};
        const v53 = [1337,1337,1337,1337,1337];
        const v54 = [v53];
        const v55 = v50[-4096];
        const v56 = v47[-3357639552];
        const v57 = 13.37 == v47;
        let v59 = 0;
        const v60 = v48.flat();
        v23[3] = v23;
        const v61 = v13();
        const v62 = v61[-2900725722];
        function v63(v64,v65,v66,v67,v68) {
            'use strict'
            return v20;
        }
    } catch(v69) {
        const v70 = {construct:v69};
    }
}
const v71 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v73 = new Proxy(v18,v71);
v73[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
