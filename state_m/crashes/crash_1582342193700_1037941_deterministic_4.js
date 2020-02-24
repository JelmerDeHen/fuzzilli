function main() {
const v3 = [1337,1337];
const v4 = {e:v3,constructor:Int16Array,c:v3,valueOf:Int16Array,b:"symbol",a:1337};
const v7 = [1337,13.37,1337,v4];
let v8 = v7;
const v10 = [1337,1337,1337,1337,1337];
const v11 = {valueOf:v10,__proto__:v10};
let v13 = 13.37;
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        const v25 = [1337,1337];
        const v27 = new ArrayBuffer();
        v13 = v20;
        let v30 = 0;
        do {
            const v31 = v30 + 1;
            const v33 = [1337];
            const v37 = [v33,3609309068,13.37];
            const v39 = [1337];
            const v40 = {a:3609309068,c:"6UX*hLOH3D"};
            const v41 = {e:1337,__proto__:v37,constructor:1337,a:v39,c:"6UX*hLOH3D",valueOf:v40};
            v30 = v31;
        } while (v30 < 4);
        const v45 = [1337];
        const v47 = Reflect.construct(RegExp,v45);
        let v49 = 0;
        const v50 = v27.slice(v13,4);
        const v51 = v49 + 1;
        const v52 = [13.37];
        const v54 = [1337,13.37,v52,-1155643050];
        let v55 = v52;
        const v57 = [1337,1337];
        const v58 = {valueOf:1337,b:v8,e:1337,d:1337,constructor:v55,__proto__:1337,a:v52};
        const v60 = [1337,1337,1337,1337,1337];
        const v61 = [v60];
        const v62 = v57[-4096];
        const v63 = v54[-3357639552];
        const v64 = 13.37 == v54;
        let v65 = v18;
        const v66 = v55.flat();
        v21[3] = v21;
        const v67 = v11();
        const v68 = v67[-2900725722];
        const v71 = [1337,1337,1337,1337];
        const v73 = Int8Array();
        let v74 = undefined;
        function v75(v76,v77,v78,v79,v80) {
            'use strict'
            v74 = v25;
        }
    } catch(v81) {
        const v82 = {construct:v81};
    }
}
const v83 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:1337,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v85 = new Proxy(v16,v83);
v85[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
