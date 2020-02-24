function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [13.37,1000];
const v8 = {b:1000,c:Infinity,__proto__:v4,length:v7,valueOf:v7};
const v9 = {b:v4,__proto__:v4,valueOf:"boolean",d:Infinity};
let v10 = v9;
const v14 = [13.37,13.37,13.37,13.37,13.37];
const v16 = [1337,1337,1337,1337,1337];
const v17 = [13.37];
const v18 = {d:Int8Array,toString:v16,length:v14};
const v19 = {d:3122233220,constructor:1337,length:3122233220,a:Int8Array,toString:1337};
let v20 = 3122233220;
function v21(v22,v23) {
    let v25 = 0;
    let v28 = 0;
    do {
        try {
            let v30 = 0;
            const v32 = DataView();
        } catch(v33) {
            const v36 = [];
            const v37 = {valueOf:v36,length:13.37,d:127,e:127};
            let v38 = v37;
            const v40 = [1337];
            let v41 = v40;
            let v43 = undefined;
            let v44 = v36;
        }
        for (let v48 = 0; v48 < 100; v48++) {
        }
        const v52 = [13.37,13.37,13.37,13.37];
        const v54 = [1337,1337,1337,1337];
        const v55 = [Map,v52,13.37,"function"];
        const v58 = [1337,1337,1337,1337,1337];
        function v59(v60,v61,v62,v63) {
            'use strict'
            try {
                v63[3] = v63;
            } catch(v64) {
                const v66 = [1337,1337];
                const v71 = "unscopable".concat(100);
                const v72 = [-372074.99096011615,v66,-372074.99096011615];
                const v73 = Function(v72);
            }
            return v58;
        }
        const v74 = {deleteProperty:v59,set:v59,getPrototypeOf:v59,call:v59,preventExtensions:v59,isExtensible:v59,construct:v59,get:v59,ownKeys:v59,setPrototypeOf:v59,has:v59};
        const v76 = new Proxy(v58,v74);
        v76[1] = "MIN_VALUE";
    } while (v28 < 8);
}
const v77 = v21();
}
%NeverOptimizeFunction(main);
main();
