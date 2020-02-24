function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = ["valueOf",Reflect];
const v7 = {a:1337,d:"valueOf",e:v5,b:v3};
const v8 = {};
let v9 = v8;
const v11 = [1337,1337];
const v15 = new ArrayBuffer(1337);
const v16 = v15.slice();
let v18 = undefined;
const v19 = new DataView(v16,v11);
function v20(v21,v22) {
    let v26 = 0;
    do {
        const v27 = v7 === "pvU0UUjoya";
        let v28 = v27;
        const v29 = v19.getUint16();
        let v30 = v29;
        const v31 = !v30;
        const v34 = arguments + 1;
        const v36 = [1337,1337,"MIN_VALUE",1337,1337];
        function v37(v38,v39,v40,v41) {
            'use strict'
            try {
                let v44 = 0;
                while (v44 <= 4) {
                    const v45 = v44 + 1;
                    v44 = v45;
                }
                v41[3] = 0;
            } catch(v46) {
                let v47 = v34;
                const v48 = [];
                const v49 = {a:v48};
                const v50 = {__proto__:v41,constructor:v49,length:v48};
            }
            return v41;
        }
        const v51 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:1337,has:v37};
        const v53 = new Proxy(v36,v51);
        v53[1] = "MIN_VALUE";
        const v54 = v26 + 1;
        for (const v56 in "description") {
        }
    } while (v26 < 8);
}
const v57 = [v16];
let v58 = v57;
const v59 = v20(v58);
const v60 = v20();
}
%NeverOptimizeFunction(main);
main();
