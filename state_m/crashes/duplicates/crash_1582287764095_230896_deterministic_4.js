function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [1337,v4,Int8Array];
const v6 = {toString:v5,e:v4,c:v2,valueOf:v5,a:v4,constructor:v2};
const v7 = {};
let v8 = v7;
const v12 = [13.37,13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337,1337];
const v15 = [13.37];
const v16 = {d:Int8Array,toString:v14,length:v12};
const v17 = {d:3122233220,constructor:1337,length:3122233220,a:Int8Array,toString:1337};
let v18 = 3122233220;
function v19(v20,v21) {
    let v23 = 0;
    let v26 = 0;
    do {
        try {
            let v28 = 0;
            const v30 = DataView();
        } catch(v31) {
            const v34 = [];
            const v35 = {valueOf:v34,length:13.37,d:127,d:127};
            let v36 = v35;
            const v38 = [1337];
            let v39 = v38;
            let v41 = undefined;
            let v42 = undefined;
        }
        for (let v46 = 0; v46 < 100; v46++) {
        }
        const v50 = [13.37,13.37,13.37,13.37];
        const v52 = [1337,1337,1337,1337];
        const v53 = [Map,v50,13.37,"function"];
        const v56 = [1337,1337,1337,1337,1337];
        function v57(v58,v59,v60,v61) {
            'use strict'
            try {
                v61[3] = v61;
            } catch(v62) {
                const v64 = [1337,1337];
                const v69 = "unscopable".concat(100);
                const v70 = [-372074.99096011615,v64,-372074.99096011615];
                const v71 = Function(v70);
            }
            return v56;
        }
        const v72 = {deleteProperty:v57,set:v57,getPrototypeOf:v57,call:v57,preventExtensions:v57,isExtensible:v57,construct:v57,get:v57,ownKeys:v57,setPrototypeOf:v57,has:v57};
        const v74 = new Proxy(v56,v72);
        v74[1] = "MIN_VALUE";
        const v75 = v26 + 1;
    } while (v26 < 8);
}
const v76 = v19();
}
%NeverOptimizeFunction(main);
main();
