function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {b:v6,valueOf:13.37,d:"boolean"};
const v8 = {b:"boolean",e:v3,length:65535,toString:65535};
let v9 = v6;
const v13 = [13.37,13.37,13.37,13.37,13.37];
const v15 = [1337,1337,1337,1337,1337];
const v16 = [13.37];
const v17 = {d:Int8Array,toString:v15,length:v13};
const v18 = {d:3122233220,constructor:1337,length:3122233220,a:Int8Array,toString:1337};
let v19 = 3122233220;
function v20(v21,v22) {
    let v24 = 0;
    let v26 = 0;
    do {
        try {
            let v28 = 0;
            const v30 = DataView();
        } catch(v31) {
            const v34 = [];
            const v35 = {valueOf:v34,length:13.37,d:127,e:127};
            let v36 = v35;
            const v38 = [1337];
            let v39 = v38;
            let v41 = undefined;
            let v42 = undefined;
        }
        for (let v46 = 0; v46 < 100; v46++) {
            const v48 = new Uint8ClampedArray();
            let v50 = Int32Array;
            const v51 = new v50();
        }
        const v55 = [13.37,13.37,13.37,13.37];
        const v57 = [1337,1337,1337,1337];
        const v58 = [Map,v55,13.37,"function"];
        const v61 = [1337,1337,1337,1337,1337];
        function v62(v63,v64,v65,v66) {
            'use strict'
            try {
                v66[3] = v66;
            } catch(v67) {
                const v69 = [1337,1337];
                const v74 = "unscopable".concat(100);
                const v75 = [-372074.99096011615,v69,-372074.99096011615];
                const v76 = Function(v75);
            }
            return v61;
        }
        const v77 = {deleteProperty:v62,set:v62,getPrototypeOf:v62,call:v62,preventExtensions:v62,isExtensible:v62,construct:v62,get:v62,ownKeys:v62,setPrototypeOf:v62,has:v62};
        const v79 = new Proxy(v61,v77);
        v79[1] = "MIN_VALUE";
    } while (v26 < 8);
}
const v81 = [1337];
let v82 = v81;
const v83 = v20();
const v84 = v18 + 1337;
const v85 = !13.37;
}
%NeverOptimizeFunction(main);
main();
