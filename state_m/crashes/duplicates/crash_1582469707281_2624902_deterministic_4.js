function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337];
const v5 = [parseFloat,1337,v4,1337];
const v6 = {};
const v7 = {length:13.37,e:v2,d:v5,__proto__:parseFloat,toString:v2};
let v8 = 1337;
const v10 = new Uint8Array();
const v11 = v10.slice();
const v13 = [1337,1337];
const v17 = new ArrayBuffer(1337);
const v18 = v17.slice();
let v20 = undefined;
const v21 = new DataView(v18);
function v22(v23,v24) {
    let v29 = 0;
    do {
        const v30 = 3156875969 <= "pvU0UUjoya";
        let v31 = v30;
        const v32 = v21.setUint32();
        const v33 = v31 + 1;
        const v35 = [1337,1337,1337,1337];
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
        for (const v59 in "description") {
            const v60 = v35.fill();
        }
    } while (v29 < 8);
}
const v61 = v22();
}
%NeverOptimizeFunction(main);
main();
