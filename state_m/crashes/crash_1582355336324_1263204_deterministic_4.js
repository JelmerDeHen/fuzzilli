function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [parseFloat,13.37,4085530160];
const v7 = {constructor:4085530160,b:1337};
const v8 = {valueOf:13.37};
let v9 = v8;
const v13 = {e:13.37,d:"d"};
function v14(v15,v16) {
    for (const v18 in "boolean") {
        let v21 = 0;
        const v24 = arguments + 1;
        const v26 = [1337,1337,"MIN_VALUE",1337,1337];
        function v27(v28,v29,v30,v31) {
            'use strict'
            try {
                let v34 = 0;
                while (v34 <= 4) {
                    const v35 = v34 + 1;
                    v34 = v35;
                }
                v31[3] = 0;
            } catch(v36) {
                let v37 = v24;
                const v38 = [];
                const v39 = {a:v38};
                const v40 = {__proto__:v31,constructor:v39,length:v38};
            }
            return v31;
        }
        const v41 = {deleteProperty:v27,set:v27,getPrototypeOf:v27,call:v27,preventExtensions:v27,isExtensible:v27,construct:v27,get:v27,ownKeys:v27,setPrototypeOf:1337,has:v27};
        const v43 = new Proxy(v26,v41);
        v43[1] = "MIN_VALUE";
        do {
            let v45 = 0;
            const v46 = v13 === "boolean";
            const v47 = v45 + 1;
            const v48 = v46 / 8;
            const v49 = 0 & v48;
            let v50 = 1337;
            const v51 = v21 + 1;
            v21 = v51;
        } while (v21 <= 8);
    }
}
const v53 = [1337];
let v54 = v53;
const v55 = v14();
const v56 = v55();
const v57 = v5.flat();
}
%NeverOptimizeFunction(main);
main();
