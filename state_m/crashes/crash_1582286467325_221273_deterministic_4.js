function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [v3,RegExp,-4294967296,-4294967296];
const v7 = {c:1337,valueOf:v5,b:13.37,e:-4294967296};
const v8 = {e:-4294967296,__proto__:v6,b:RegExp};
let v9 = 13.37;
const v10 = {toString:-4294967296,constructor:13.37,...1337};
const v11 = 1337 & 13.37;
const v15 = [13.37,13.37,13.37,13.37,13.37];
const v17 = [1337,1337,1337,1337,1337];
const v18 = [13.37];
const v19 = {d:Int8Array,toString:v17,length:v15};
const v20 = {d:3122233220,constructor:1337,length:3122233220,a:Int8Array,toString:1337};
let v21 = 3122233220;
function v22(v23,v24) {
    let v26 = 0;
    let v29 = 0;
    do {
        try {
            let v31 = 0;
            const v33 = DataView();
        } catch(v34) {
            const v37 = [];
            const v38 = {valueOf:v37,length:13.37,d:127,e:127};
            let v39 = v38;
            const v41 = [1337];
            let v42 = v41;
            let v44 = undefined;
            let v45 = undefined;
        }
        for (let v49 = 0; v49 < 100; v49++) {
        }
        const v51 = [13.37,13.37,13.37,13.37];
        const v54 = [1337,1337,1337,1337,1337];
        function v55(v56,v57,v58,v59) {
            'use strict'
            try {
                v59[3] = v59;
            } catch(v60) {
                const v62 = [1337,1337];
                const v67 = "unscopable".concat(100);
                const v68 = [-372074.99096011615,v62,-372074.99096011615];
                const v69 = Function(v68);
            }
            return v54;
        }
        const v70 = {deleteProperty:v55,set:v55,getPrototypeOf:v55,call:v55,preventExtensions:v55,isExtensible:v55,construct:v55,get:v55,ownKeys:v55,setPrototypeOf:v55,has:v55};
        const v72 = new Proxy(v54,v70);
        v72[1] = "MIN_VALUE";
    } while (v29 < 8);
}
const v73 = v22();
}
%NeverOptimizeFunction(main);
main();
