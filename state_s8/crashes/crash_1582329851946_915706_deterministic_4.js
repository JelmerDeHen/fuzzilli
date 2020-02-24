function main() {
const v3 = [13.37,13.37,13.37,3797639666];
const v5 = [13.37,127,v3];
const v7 = new Uint32Array();
const v9 = [13.37];
const v14 = new ArrayBuffer();
const v15 = v14.slice();
const v16 = new DataView(v15);
let v17 = 0;
let v19 = 0;
function v20(v21,v22) {
    const v23 = [13.37];
    let v28 = 0;
    do {
        const v29 = 3156875969 <= "pvU0UUjoya";
        let v31 = v29;
        do {
            try {
                const v32 = {constructor:v21,__proto__:v31,c:v16};
            } catch(v33) {
            }
            const v34 = v31 + 1;
            v31 = v34;
        } while (v31 < 7);
        const v35 = v28 + 1;
        v28 = v35;
    } while (v28 < 8);
    if (v22) {
        const v38 = [1337,1337,"MIN_VALUE",1337,1337];
        function v39(v40,v41,v42,v43) {
            'use strict'
            try {
                let v46 = 0;
                while (v46 < 4) {
                    const v47 = v46 + 1;
                    v46 = v47;
                }
                v43[3] = v43;
            } catch(v48) {
                let v50 = eval;
                const v51 = [];
                const v52 = {a:v51};
                const v53 = {__proto__:v43,constructor:v52,length:v51};
                const v54 = v50 in v53;
            }
            return v43;
        }
        const v55 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:1337,has:v39};
        const v57 = new Proxy(v38,v55);
        v57[1] = "MIN_VALUE";
    } else {
        const v58 = v20(v19,v23);
    }
}
const v59 = v20();
const v60 = v20(v17);
}
%NeverOptimizeFunction(main);
main();
