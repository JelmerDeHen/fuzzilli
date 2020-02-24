function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = [v3,v3];
const v7 = {e:-2,d:v3,constructor:-2,a:1337};
const v8 = {d:v3,e:v5,valueOf:v7,__proto__:"cj/9qiZkOc",c:v5,toString:v7};
let v9 = v7;
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
            const v33 = {};
            const v34 = [v33,v33,v33];
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
        const v52 = [1337,1337,1337,1337,1337];
        function v53(v54,v55,v56,v57) {
            'use strict'
            try {
                v57[3] = v57;
            } catch(v58) {
                const v60 = [1337,1337];
                const v65 = "unscopable".concat(100);
                const v66 = [-372074.99096011615,v60,-372074.99096011615];
                const v67 = Function(v66);
            }
            return v52;
        }
        const v68 = {deleteProperty:v53,set:v53,getPrototypeOf:v53,call:v53,preventExtensions:v53,isExtensible:v53,construct:v53,get:v53,ownKeys:v53,setPrototypeOf:v53,has:v53};
        const v70 = new Proxy(v52,v68);
        v70[1] = "MIN_VALUE";
    } while (v27 < 8);
}
const v71 = v20();
}
%NeverOptimizeFunction(main);
main();
