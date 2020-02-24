function main() {
const v3 = [1337,1337];
const v4 = {e:v3,constructor:Int16Array,c:v3,valueOf:Int16Array,b:"symbol",a:1337};
const v8 = [1337,13.37,1337,Uint8Array];
let v9 = v8;
const v11 = [1337,1337,1337,1337,1337];
const v12 = {valueOf:v11,__proto__:v11};
let v14 = 13.37;
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        const v26 = [1337,1337];
        const v28 = new ArrayBuffer();
        v14 = v21;
        let v31 = 0;
        do {
            const v32 = v31 + 1;
            v31 = v32;
        } while (v31 < 4);
        let v36 = Infinity;
        let v37 = 0;
        const v38 = v28.slice(v14,4);
        const v39 = v37 + 1;
        const v40 = [13.37];
        const v42 = [1337,13.37,v40,-1155643050];
        let v43 = v40;
        const v45 = [1337,1337];
        const v46 = {valueOf:1337,b:v9,e:1337,d:1337,constructor:v43,__proto__:1337,a:v40};
        const v48 = [1337,1337,1337,1337,1337];
        const v49 = [v48];
        const v50 = v45[-4096];
        const v51 = v42[-3357639552];
        const v52 = 13.37 == v42;
        let v54 = 0;
        const v55 = v43.flat();
        v22[3] = v22;
        const v56 = v12();
        const v57 = v56[-2900725722];
        function v58(v59,v60,v61,v62,v63) {
            'use strict'
            return v19;
        }
        let v65 = 0;
    } catch(v66) {
        const v67 = {construct:v66};
    }
}
const v68 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v70 = new Proxy(v17,v68);
v70[1] = "MIN_VALUE";
for (const v71 of v4) {
}
}
%NeverOptimizeFunction(main);
main();
