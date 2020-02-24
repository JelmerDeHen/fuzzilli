function main() {
const v5 = [1337,1337];
const v8 = new ArrayBuffer();
const v9 = v8.slice();
let v11 = undefined;
const v12 = new DataView(v9);
const v13 = [13.37,13.37,13.37,13.37];
const v15 = [1337,1337,1337,1337,1337];
const v16 = ["EbVA7q923p","EbVA7q923p",13.37,13.37];
const v17 = {length:13.37,c:-1802196748,__proto__:v13,b:Int8Array,a:Int8Array,d:v15};
const v18 = {valueOf:1337,toString:13.37,c:v15,e:v17,d:-1802196748};
let v19 = 1337;
function v20(v21,v22) {
    for (const v24 in "boolean") {
        let v26 = 0;
        const v29 = [1337];
        let v30 = v29;
        const v31 = new Float32Array();
        let v33 = 7;
        const v34 = v26 + 1;
        const v37 = [13.37,13.37];
        const v39 = [-2,-2,-2,-2,-2];
        const v40 = [];
        const v41 = {e:v39,c:13.37,constructor:13.37,d:500915904};
        for (let v45 = 0; v45 < 3; v45++) {
            for (const v47 in "object") {
                const v50 = [1337,1337,1337,1337,1337];
                function v51(v52,v53,v54,v55) {
                    'use strict'
                    try {
                        v55[3] = v55;
                    } catch(v56) {
                        let v58 = 0;
                        const v59 = v58 + 1;
                        const v62 = 2.2250738585072014e-308 / 3890419937;
                        const v63 = [v62];
                        let v64 = v63;
                        const v66 = Math.acosh(v64);
                    }
                    return v50;
                }
                const v67 = {deleteProperty:v51,set:v51,getPrototypeOf:v51,call:v51,preventExtensions:v51,isExtensible:v51,construct:v51,get:v51,ownKeys:v51,setPrototypeOf:v51,has:v51};
                const v69 = new Proxy(v50,v67);
                v69[1] = "MIN_VALUE";
            }
            function v70(v71,v72,v73,v74,v75) {
                'use strict'
            }
        }
    }
}
const v76 = v20();
}
%NeverOptimizeFunction(main);
main();
