function main() {
const v4 = [13.37];
const v6 = [1337,1337];
const v7 = ["toString",255,"toString","toString"];
const v8 = {a:255,__proto__:v7,length:v6,b:1337,d:Infinity};
const v9 = {e:1337,constructor:v4,toString:v7,b:v8,c:"toString"};
const v13 = [1337,13.37,1337,Uint8Array];
let v14 = v13;
const v16 = [1337,1337,1337,1337,1337];
const v17 = {valueOf:v16,__proto__:v16};
let v19 = 13.37;
const v22 = [1337,1337,1337,1337,1337];
function v23(v24,v25,v26,v27) {
    'use strict'
    try {
        const v31 = [1337,1337];
        const v33 = new ArrayBuffer();
        v19 = v26;
        let v36 = 0;
        do {
            const v37 = v36 + 1;
            v36 = v37;
        } while (v36 < 4);
        let v40 = 0;
        const v41 = v33.slice(v19,4);
        const v42 = v40 + 1;
        const v43 = [13.37];
        const v45 = [1337,13.37,v43,-1155643050];
        let v46 = v43;
        const v48 = [1337,1337];
        const v49 = {valueOf:1337,b:v14,e:1337,d:1337,constructor:v46,__proto__:1337,a:v43};
        const v51 = [1337,1337,1337,1337,1337];
        const v52 = [v51];
        const v53 = v48[-4096];
        const v54 = v45[-3357639552];
        const v55 = 13.37 == v45;
        let v57 = 0;
        const v58 = v46.flat();
        v27[3] = v27;
        const v59 = v17();
        const v60 = v33[1337];
        const v61 = v59[-2900725722];
        let v63 = undefined;
        const v64 = v49.every();
        const v66 = DataView();
        function v67(v68,v69,v70,v71,v72) {
            'use strict'
            v63 = v31;
        }
        let v74 = 0;
    } catch(v75) {
        const v76 = {construct:v75};
    }
}
const v77 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
const v79 = new Proxy(v22,v77);
v79[1] = "MIN_VALUE";
const v80 = v79(v77,v16,v9,v17);
const v81 = {set:v23};
const v83 = Object.defineProperty();
const v84 = {preventExtensions:v80,construct:v23,ownKeys:v79,call:v23,has:Object,isExtensible:v79,deleteProperty:Object,set:v80,apply:v80,get:Object};
const v86 = Proxy();
const v87 = Object();
}
%NeverOptimizeFunction(main);
main();
