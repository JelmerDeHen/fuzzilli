function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337,1337];
const v5 = [13.37,1337,1000];
const v6 = {b:1000};
const v7 = {};
let v8 = 1000;
const v10 = [1337,1337];
const v14 = new ArrayBuffer(1337);
const v15 = v14.slice();
let v17 = undefined;
const v18 = new DataView(v15,v10);
function v19(v20,v21) {
    let v23 = -2;
    const v24 = v23 + 1;
    const v25 = v18.getFloat64();
    const v27 = v18.setFloat32(0);
    function v29(v30,v31) {
        let v33 = 0;
        const v34 = ArrayBuffer + 1;
        let v36 = this;
        let v37 = v36;
        const v40 = new Proxy(v37,Object);
        const v41 = Object.seal();
        const v43 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
        const v47 = arguments + 1;
        const v49 = [1337,1337,"MIN_VALUE",1337,1337];
        function v50(v51,v52,v53,v54) {
            'use strict'
            try {
                let v57 = 0;
                while (v57 <= 4) {
                    const v58 = v57 + 1;
                    v57 = v58;
                }
                v54[3] = 0;
            } catch(v59) {
                let v60 = v47;
                const v61 = [];
                const v62 = {a:v61};
                const v63 = {__proto__:v54,constructor:v62,length:v61};
            }
            return v54;
        }
        const v64 = {deleteProperty:v50,set:v50,getPrototypeOf:v50,call:v50,preventExtensions:v50,isExtensible:v50,construct:v50,get:v50,ownKeys:v50,setPrototypeOf:1337,has:v50};
        const v66 = new Proxy(v49,v64);
        v66[1] = "MIN_VALUE";
        const v67 = new ArrayBuffer();
    }
    for (let v71 = 0; v71 < 100; v71++) {
        const v72 = v29();
    }
}
const v73 = v19();
}
%NeverOptimizeFunction(main);
main();
