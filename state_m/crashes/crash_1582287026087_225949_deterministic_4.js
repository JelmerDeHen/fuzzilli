function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [v3,RegExp,-4294967296,-4294967296];
const v7 = {c:1337,valueOf:v5,b:13.37,e:-4294967296};
const v8 = {e:-4294967296,__proto__:v6,b:RegExp};
let v9 = 13.37;
const v13 = [13.37,13.37,13.37,13.37,13.37];
const v15 = [1337,1337,1337,1337,1337];
const v16 = [13.37];
const v17 = {d:Int8Array,toString:v15,length:v13};
const v18 = {d:3122233220,constructor:1337,length:3122233220,a:Int8Array,toString:1337};
let v19 = 3122233220;
function v20(v21,v22) {
    let v24 = 0;
    let v27 = 0;
    do {
        try {
            let v29 = 0;
            const v31 = DataView();
        } catch(v32) {
            const v35 = [];
            const v36 = {valueOf:v35,length:13.37,d:127,e:127};
            let v37 = v36;
            const v39 = [1337];
            let v40 = v39;
            let v42 = undefined;
            let v43 = undefined;
        }
        for (let v47 = 0; v47 < 100; v47++) {
        }
        const v51 = [13.37,13.37,13.37,13.37];
        const v53 = [1337,1337,1337,1337];
        const v54 = [Map,v51,13.37,"function"];
        const v57 = [1337,1337,1337,1337,1337];
        function v58(v59,v60,v61,v62) {
            'use strict'
            try {
                v62[3] = v62;
            } catch(v63) {
                const v65 = [1337,1337];
                const v68 = "unscopable".concat(100);
            }
            const v69 = v51 === 0;
            const v70 = {b:v69,constructor:100};
            const v71 = {length:RegExp,a:v22};
            return v57;
        }
        const v72 = {deleteProperty:v58,set:v58,getPrototypeOf:v58,call:v58,preventExtensions:v58,isExtensible:v58,construct:v58,get:v58,ownKeys:v58,setPrototypeOf:v58,has:v58};
        const v74 = new Proxy(v57,v72);
        v74[1] = "MIN_VALUE";
    } while (v27 < 8);
}
const v75 = v20();
}
%NeverOptimizeFunction(main);
main();
