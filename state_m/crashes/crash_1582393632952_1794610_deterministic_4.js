function main() {
const v2 = [13.37];
const v4 = [1337,1337];
const v5 = [-736345120,v4,1337];
const v6 = {};
const v7 = {__proto__:v2};
let v8 = 13.37;
const v11 = [1337,1337,1337];
const v12 = {a:1337,c:4294967295};
const v13 = [];
let v15 = 0;
const v16 = v15 + 1;
let v18 = Uint8ClampedArray;
const v19 = [v18];
let v21 = 0;
let v23 = 0;
const v24 = v23 + 1;
const v25 = v21 + 1;
const v29 = [1337,1337];
const v33 = new ArrayBuffer(1337);
const v34 = v33.slice();
let v36 = undefined;
const v37 = new DataView(v34);
let v38 = 0;
let v41 = 0;
function v42(v43,v44) {
    const v45 = [13.37];
    let v49 = v43;
    do {
        const v50 = 3156875969 <= "pvU0UUjoya";
        let v52 = v50;
        do {
            const v53 = v37.setInt32();
            const v54 = v52 + 1;
            v52 = v54;
        } while (v52 < 7);
        const v55 = v49 + 1;
        v49 = v55;
    } while (v49 < 8);
    const v58 = [1337,1337,"MIN_VALUE",1337,1337];
    function v59(v60,v61,v62,v63) {
        'use strict'
        try {
            let v66 = 0;
            while (v66 < 4) {
                const v67 = v66 + 1;
                v66 = v67;
            }
            v63[3] = v63;
        } catch(v68) {
            const v69 = [];
            const v70 = {a:v69};
            const v71 = {__proto__:v63,constructor:v70,length:v69};
        }
        return v63;
    }
    const v72 = {deleteProperty:v59,set:v59,getPrototypeOf:v59,call:v59,preventExtensions:v59,isExtensible:v59,construct:v59,get:v59,ownKeys:v59,setPrototypeOf:1337,has:v59};
    const v74 = new Proxy(v58,v72);
    v74[1] = "MIN_VALUE";
    if (v44) {
    } else {
        const v75 = v42(v41,v45);
    }
}
const v77 = [1337];
let v78 = v77;
function v80(v81,v82,v83,v84,...v85) {
}
const v86 = v80(1337);
const v87 = v42();
const v88 = v42(v38,0);
const v90 = [-2588121454];
let v91 = v90;
const v93 = {get:Uint8ClampedArray};
}
%NeverOptimizeFunction(main);
main();
