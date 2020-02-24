function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [v4,v6];
const v8 = {constructor:v4,length:-4294967296,a:-4294967296,toString:1337,b:"cK.RXRe3Z6",valueOf:-4294967296};
const v9 = {constructor:v6,length:1337,e:"cK.RXRe3Z6",toString:"cK.RXRe3Z6",valueOf:String,d:v4};
let v10 = -4294967296;
const v13 = arguments + 1;
const v15 = [1337,1337,"MIN_VALUE",1337,1337];
function v16(v17,v18,v19,v20) {
    'use strict'
    try {
        const v22 = new Uint32Array();
        const v23 = v22.slice();
        const v27 = [13.37,-65536,13.37];
        const v29 = new Int8Array();
        const v30 = v29.slice();
        let v32 = 0;
        while (v32 <= 4) {
            const v33 = v32 + 1;
            const v36 = arguments + 1;
            const v38 = [1337,1337,"MIN_VALUE",1337,1337];
            function v39(v40,v41,v42,v43) {
                'use strict'
                try {
                    let v45 = 0;
                    v43[3] = 0;
                } catch(v46) {
                    let v47 = v36;
                    const v48 = [];
                    const v49 = {a:v48};
                    const v50 = {__proto__:v43,constructor:v49,length:v48};
                    const v51 = v47 in v50;
                }
                return v43;
            }
            const v52 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:1337,has:v39};
            const v54 = new Proxy(v38,v52);
            v54[1] = "MIN_VALUE";
        }
    } catch(v55) {
        let v56 = v13;
        const v57 = [];
        const v58 = {a:v57};
        const v59 = {__proto__:v20,constructor:v58,length:v57};
        const v60 = v56 in v59;
    }
}
const v61 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:1337,has:v16};
const v63 = new Proxy(v15,v61);
v63[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
