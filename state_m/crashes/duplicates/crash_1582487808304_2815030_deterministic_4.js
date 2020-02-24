function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = [64];
const v7 = {};
const v8 = {e:13.37,c:"string",d:v5,a:1337,constructor:v3,valueOf:v6};
let v9 = v3;
const v11 = [1337,1337];
const v15 = new ArrayBuffer(1337);
const v16 = v15.slice();
let v18 = undefined;
const v19 = new DataView(v16,v11);
function v20(v21,v22) {
    let v27 = 0;
    do {
        const v28 = 3156875969 === "pvU0UUjoya";
        let v29 = v28;
        const v30 = v19.getUint16();
        const v31 = v29 + 1;
        let v32 = v30;
        const v33 = v32 + 1;
        const v34 = v27 + 1;
        for (const v36 in "description") {
        }
        const v39 = arguments + 1;
        const v41 = [1337,1337,"MIN_VALUE",1337,1337];
        function v42(v43,v44,v45,v46) {
            'use strict'
            try {
                let v49 = 0;
                while (v49 <= 4) {
                    const v50 = v49 + 1;
                    v49 = v50;
                }
                v46[3] = 0;
            } catch(v51) {
                let v52 = v39;
                const v53 = [];
                const v54 = {a:v53};
                const v55 = {__proto__:v46,constructor:v54,length:v53};
            }
            return v46;
        }
        const v56 = {deleteProperty:v42,set:v42,getPrototypeOf:v42,call:v42,preventExtensions:v42,isExtensible:v42,construct:v42,get:v42,ownKeys:v42,setPrototypeOf:1337,has:v42};
        const v58 = new Proxy(v41,v56);
        v58[1] = "MIN_VALUE";
    } while (v27 < 8);
}
const v60 = [1337];
let v61 = v60;
const v62 = v20();
}
%NeverOptimizeFunction(main);
main();
