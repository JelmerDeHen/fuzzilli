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
            const v52 = ["boolean",-199391297];
            let v53 = v52;
            v53[127] = 1337;
            const v55 = (1337)[-2147483647];
            const v57 = new Float64Array();
            const v58 = v57.sort();
            let v60 = Int32Array;
            const v61 = new v60();
        }
        const v65 = [13.37,13.37,13.37,13.37];
        const v67 = [1337,1337,1337,1337];
        const v68 = [Map,v65,13.37,"function"];
        const v71 = [1337,1337,1337,1337,1337];
        function v72(v73,v74,v75,v76) {
            'use strict'
            try {
                v76[3] = v76;
            } catch(v77) {
                const v79 = [1337,1337];
                const v84 = "unscopable".concat(100);
                const v85 = [-372074.99096011615,v79,-372074.99096011615];
                const v86 = Function(v85);
            }
            return v71;
        }
        const v87 = {deleteProperty:v72,set:v72,getPrototypeOf:v72,call:v72,preventExtensions:v72,isExtensible:v72,construct:v72,get:v72,ownKeys:v72,setPrototypeOf:v72,has:v72};
        const v89 = new Proxy(v71,v87);
        v89[1] = "MIN_VALUE";
        const v90 = v26 + 1;
    } while (v26 < 8);
}
const v91 = v20();
}
%NeverOptimizeFunction(main);
main();
