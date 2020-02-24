function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337];
const v7 = [3146204514,"e5rkP.F/fB"];
const v8 = {constructor:13.37,c:3146204514,length:v4,__proto__:"e5rkP.F/fB"};
const v9 = {valueOf:"e5rkP.F/fB",e:"e5rkP.F/fB",__proto__:v6,d:v4,c:1337,toString:Symbol,a:1337};
let v10 = v6;
const v11 = {};
function v12(v13,v14) {
    const v15 = v13 in v12;
    let v18 = 0;
    let v20 = 0;
    const v22 = new Float64Array();
    let v24 = 0;
    for (const v25 in "boolean") {
        let v28 = 0;
        const v33 = [13.37,13.37,13.37,13.37];
        const v35 = [1337,1337,1337,1337];
        const v36 = [Map,v33,13.37,"function"];
        const v37 = {valueOf:1337,a:Map,toString:v33,b:Map,c:-65535};
        const v38 = {valueOf:-65535,a:"function",toString:"function",b:13.37};
        const v41 = [1337,1337,1337,1337,1337];
        function v42(v43,v44,v45,v46) {
            'use strict'
            try {
                v46[3] = v46;
            } catch(v47) {
                const v49 = [1337,1337];
                const v53 = "unscopable".concat(100);
                const v54 = [-372074.99096011615,v49,-372074.99096011615];
            }
            return v41;
        }
        const v55 = {deleteProperty:v42,set:v42,getPrototypeOf:v42,call:v42,preventExtensions:v42,isExtensible:v42,construct:v42,get:v42,ownKeys:v42,setPrototypeOf:v42,has:v42};
        const v57 = new Proxy(v41,v55);
        v57[1] = "MIN_VALUE";
        do {
            let v60 = 0;
            do {
                const v61 = v60 + 1;
                v60 = v61;
            } while (v60 < 7);
            const v62 = v28 + 1;
            v28 = v62;
        } while (v28 < 8);
    }
}
const v63 = v12();
}
%NeverOptimizeFunction(main);
main();
