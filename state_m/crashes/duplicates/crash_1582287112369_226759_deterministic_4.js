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
            const v44 = [1337,1337];
            const v46 = new Float64Array();
            let v47 = undefined;
        }
        for (let v51 = 0; v51 < 100; v51++) {
        }
        const v53 = [13.37,13.37,13.37,13.37];
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
    } while (v27 < 8);
}
const v75 = v20();
}
%NeverOptimizeFunction(main);
main();
