function main() {
const v3 = [1337,13.37,1337,WeakMap];
let v4 = v3;
const v6 = [1337,1337,1337,1337,1337];
const v7 = {valueOf:v6,__proto__:v6};
let v9 = 13.37;
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        const v20 = {c:"function"};
        const v23 = RegExp();
        v23.valueOf = 1.7976931348623157e+308;
        const v26 = [1337,1337];
        const v28 = new ArrayBuffer();
        v9 = v16;
        let v31 = 0;
        do {
            const v32 = v31 + 1;
            v31 = v32;
        } while (v31 < 4);
        let v35 = 0;
        const v36 = v28.slice(v9,4);
        const v37 = v35 + 1;
        const v38 = [13.37];
        let v41 = 0;
        const v42 = v41 + 1;
        const v43 = {deleteProperty:v16,getOwnPropertyDescriptor:v15,get:v9,defineProperty:v17,preventExtensions:v14};
        const v45 = Proxy(1337);
        const v46 = [1337,13.37,v38,-1155643050];
        let v47 = v38;
        const v49 = [1337,1337];
        const v50 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v47,__proto__:1337,a:v38};
        const v52 = [1337,1337,1337,1337,1337];
        const v53 = [v52];
        const v54 = v49[-4096];
        const v55 = v46[-3357639552];
        const v56 = 13.37 == v46;
        let v58 = 0;
        const v59 = v47.flat();
        const v60 = v7();
        const v61 = v60[-2900725722];
        let v63 = undefined;
        function v64(v65,v66,v67,v68,v69) {
            'use strict'
            v63 = v26;
        }
        let v71 = 0;
        const v73 = [13.37,13.37,13.37];
        const v75 = [530086.5682938832,530086.5682938832,530086.5682938832];
        const v76 = [v73,v75];
        const v77 = v76.toLocaleString();
    } catch(v78) {
        const v79 = {construct:v78};
    }
}
const v80 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v82 = new Proxy(v12,v80);
v82[1] = "MIN_VALUE";
const v83 = "MIN_VALUE".replace("MIN_VALUE",v82);
}
%NeverOptimizeFunction(main);
main();
