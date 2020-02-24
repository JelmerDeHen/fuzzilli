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
        const v21 = [1337,1337];
        const v23 = new ArrayBuffer();
        v9 = v16;
        let v26 = 0;
        do {
            const v27 = v26 + 1;
            v26 = v27;
        } while (v26 < 4);
        let v30 = 0;
        const v31 = v23.slice(v9,4);
        const v32 = v30 + 1;
        const v33 = [13.37];
        const v35 = [1337,13.37,v33,-1155643050];
        let v36 = v33;
        const v38 = [1337,1337];
        const v39 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v36,__proto__:1337,a:v33};
        const v41 = [1337,1337,1337,1337,1337];
        const v42 = [v41];
        const v43 = v38[-4096];
        const v44 = v35[-3357639552];
        const v45 = 13.37 == v35;
        let v47 = 0;
        const v49 = [129];
        let v50 = v49;
        let v52 = undefined;
        const v58 = [1337,1337,1337];
        const v59 = [];
        const v60 = {__proto__:v59,constructor:Promise,valueOf:v58,c:2745332013,length:13.37};
        let v61 = undefined;
        const v63 = ["nVkEIOUd+c",13.37];
        const v64 = {b:v63};
        const v69 = [2,3407732871];
        const v70 = [NaN,13.37,2];
        let v71 = v69;
        const v73 = v60.includes(v61,v71,v70,"name",v64);
        let v75 = -2;
        const v76 = v75 + 1;
        const v77 = v36.flat();
        v17[3] = v17;
        const v78 = v7();
        const v79 = v78[-2900725722];
        let v81 = 0;
    } catch(v82) {
        const v83 = {construct:v82};
    }
}
const v84 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v86 = new Proxy(v12,v84);
v86[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
