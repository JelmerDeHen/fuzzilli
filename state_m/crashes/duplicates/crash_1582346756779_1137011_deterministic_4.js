function main() {
const v4 = [1337,13.37,1337,Uint8Array];
let v5 = v4;
let v8 = 13.37;
const v11 = [1337,1337,1337,1337,1337];
function v12(v13,v14,v15,v16) {
    'use strict'
    const v18 = Symbol.isConcatSpreadable;
    const v19 = typeof 1337;
    const v21 = v19 === "object";
    const v22 = !v18;
    let v23 = ArrayBuffer;
    try {
        const v27 = [1337,1337];
        const v29 = new ArrayBuffer();
        v8 = v15;
        let v32 = 0;
        do {
            const v33 = v32 + 1;
            v32 = v33;
        } while (v32 < 4);
        let v35 = 0;
        const v36 = v29.slice(v8);
        const v37 = v35 + 1;
        const v38 = [13.37];
        const v40 = [1337,13.37,v38,-1155643050];
        let v41 = v38;
        const v43 = [1337,1337];
        const v44 = {valueOf:1337,b:v5,e:1337,d:1337,constructor:v41,__proto__:1337,a:v38};
        const v47 = [1337,1337];
        const v50 = new ArrayBuffer();
        const v51 = v50.slice();
        let v53 = undefined;
        const v54 = new DataView(v51);
        let v56 = 0;
        function v57(v58,v59) {
            const v60 = [13.37];
            if (v59) {
            } else {
                const v61 = v57(v56,v60);
            }
        }
        const v63 = [1337];
        let v64 = v63;
        const v65 = v57();
        const v67 = [1337,1337,1337,1337,1337];
        const v68 = [v67];
        const v69 = v43[-4096];
        const v70 = v40[-3357639552];
        const v71 = 13.37 == v40;
        let v73 = 0;
        const v74 = v41.flat();
        v16[3] = v16;
        const v75 = v67();
        const v76 = v75[-2900725722];
        let v78 = undefined;
        function v79(v80,v81,v82,v83,v84) {
            'use strict'
            v78 = v27;
        }
        let v86 = 0;
    } catch(v87) {
        const v88 = {construct:v87};
    }
}
const v89 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
const v91 = new Proxy(v11,v89);
v91[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
