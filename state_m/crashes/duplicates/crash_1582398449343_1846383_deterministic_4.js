function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [v6,Infinity,1337];
const v8 = {b:v4,c:Infinity,e:1337,valueOf:2,__proto__:"e"};
const v9 = {valueOf:v4,d:v7};
let v10 = 2;
const v12 = new Float32Array();
const v13 = [v6,v9,...v7];
const v14 = v12.slice();
const v18 = [1337,13.37,1337,Uint8Array];
let v19 = v18;
const v21 = [1337,1337,1337,1337,1337];
const v22 = {valueOf:v21,__proto__:v21};
let v24 = 13.37;
const v29 = 3156875969 <= 8;
const v31 = new Int32Array();
const v32 = [1337,1337,1337,1337,1337];
function v33(v34,v35,v36,v37) {
    'use strict'
    try {
        const v41 = [1337,1337];
        const v43 = new ArrayBuffer();
        v24 = v36;
        let v46 = 0;
        do {
            const v47 = v46 + 1;
            v46 = v47;
        } while (v46 < 4);
        let v49 = 0;
        const v50 = v43.slice(v24);
        const v51 = v49 + 1;
        const v52 = [13.37];
        const v54 = [1337,13.37,v52,-1155643050];
        let v55 = v52;
        const v57 = [1337,1337];
        const v58 = {valueOf:1337,b:v19,e:1337,d:1337,constructor:v55,__proto__:1337,a:v52};
        const v61 = new Int16Array();
        const v62 = v61.slice();
        const v63 = [1337,1337,1337,1337,1337];
        const v64 = [v63];
        const v65 = v57[-4096];
        const v66 = v54[-3357639552];
        const v67 = 13.37 == v54;
        let v69 = 0;
        const v70 = v55.flat();
        v37[3] = v37;
        const v71 = v22();
        const v72 = v71[-2900725722];
        let v74 = 0;
    } catch(v75) {
        const v77 = Uint16Array();
        const v78 = {construct:v75};
    }
}
const v79 = {deleteProperty:v33,set:v33,getPrototypeOf:v33,call:v33,preventExtensions:v33,isExtensible:v33,construct:v33,get:v33,ownKeys:v33,setPrototypeOf:v33,has:v33};
const v81 = new Proxy(v32,v79);
v81[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
