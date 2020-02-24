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
        let v29 = 0;
        const v30 = v23.slice(v9);
        const v31 = v29 + 1;
        const v32 = [13.37];
        const v34 = [1337,13.37,v32,-1155643050];
        const v38 = [13.37,13.37,13.37,13.37];
        const v40 = [-1369322805,-1369322805,-1369322805,-1369322805];
        const v41 = "caller".__proto__;
        const v42 = [-1369322805,13.37,Function,v40];
        const v43 = {b:"caller",valueOf:v38,__proto__:v42};
        const v45 = [13.37,13.37];
        for (let v50 = 0; v50 < 3919595582; v50 = v50 + 3106653711) {
            const v51 = v45.splice(-2147483647,0,13.37,0,3919595582,v50,0);
        }
        let v53 = 0;
        const v54 = v53 + 1;
        const v55 = v45.shift();
        let v56 = v32;
        const v58 = [1337,1337];
        const v59 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v56,__proto__:1337,a:v32};
        const v61 = [1337,1337,1337,1337,1337];
        const v62 = [v61];
        const v63 = v58[-4096];
        const v64 = v34[-3357639552];
        const v65 = 13.37 == v34;
        let v67 = 0;
        const v68 = v56.flat();
        v17[3] = v17;
        const v69 = v7();
        const v70 = v69[-2900725722];
        let v72 = 0;
    } catch(v73) {
        const v74 = {construct:v73};
    }
}
const v75 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v77 = new Proxy(v12,v75);
v77[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
