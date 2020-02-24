function main() {
const v1 = [1337,1337];
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [v4,-2,v1];
const v9 = [13.37,13.37,13.37,1838834278];
const v11 = [13.37,690620749,v9];
let v14 = 0;
const v15 = v11.push();
const v16 = v14 + 1;
let v17 = v9;
const v18 = v6[v17];
const v19 = new Uint8ClampedArray();
const v20 = v19.sort();
const v23 = [1337,1337,1337,1337,1337];
function v25(v26,v27,v28,v29) {
    'use strict'
    try {
        const v30 = "MIN_VALUE".length;
        let v33 = 0;
        while (v33 < 1) {
            const v34 = v33 + 1;
            v33 = v34;
        }
        for (let v38 = 0; v38 < 1; v38++) {
            const v39 = v25();
        }
        const v40 = {};
        let v41 = v40;
        const v44 = [2153514987,1,13.37,13.37,v29];
        const v45 = [v41,v44,v44];
    } catch(v46) {
    }
}
const v47 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
const v49 = new Proxy(v23,v47);
v49[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
