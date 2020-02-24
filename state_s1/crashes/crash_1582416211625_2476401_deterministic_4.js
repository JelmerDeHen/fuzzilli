function main() {
let v4 = 0;
while (v4 != 4096) {
    const v5 = v4 + 1;
    v4 = v5;
}
const v6 = new Int16Array();
const v10 = [1337,13.37,1337,Uint8Array];
let v11 = v10;
const v13 = [1337,1337,1337,1337,1337];
const v14 = {valueOf:v13,__proto__:v13};
let v16 = 13.37;
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        const v27 = v21 * 1337;
        const v28 = v6.indexOf();
        const v29 = v28 > v20;
        let v30 = v19;
        const v32 = [1337,1337];
        const v34 = new ArrayBuffer();
        v16 = v23;
        let v37 = 0;
        do {
            const v38 = v37 + 1;
            v37 = v38;
        } while (v37 < 4);
        let v40 = 0;
        const v41 = v34.slice(v16);
        const v42 = v40 - 1;
        const v43 = [13.37];
        const v45 = [1337,13.37,v43,-1155643050];
        let v46 = v43;
        const v48 = [1337,1337];
        const v49 = {valueOf:1337,b:v11,e:1337,d:1337,constructor:v46,__proto__:1337,a:v43};
        const v51 = [1337,1337,1337,1337,1337];
        const v52 = [v51];
        const v53 = v48[-4096];
        const v54 = v45[-3357639552];
        const v55 = 13.37 == v45;
        let v57 = 0;
        const v58 = v46.flat();
        v24[3] = v24;
        const v59 = v14();
        const v60 = v59[-2900725722];
    } catch(v61) {
        const v62 = {construct:v61};
    }
}
const v63 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v65 = new Proxy(v19,v63);
v65[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
