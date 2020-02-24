function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337];
const v7 = [];
const v8 = {b:Map,a:Map};
const v9 = {constructor:v7,c:Map,__proto__:1337,valueOf:v7,a:"c"};
let v10 = "c";
const v13 = 2.2250738585072014e-308 / 9007199254740991;
function v15(v16,v17) {
    const v19 = gc(...arguments);
    let v21 = 0;
    const v22 = v21 + 1;
    const v25 = arguments + 1;
    const v27 = [1337,1337,"MIN_VALUE",1337,1337];
    function v28(v29,v30,v31,v32) {
        'use strict'
        try {
            let v35 = 0;
            while (v35 <= 4) {
                const v36 = v35 + 1;
                v35 = v36;
            }
            v32[3] = 0;
        } catch(v37) {
            let v38 = v25;
            const v39 = [];
            const v40 = {a:v39};
            const v41 = {__proto__:v32,constructor:v40,length:v39};
            const v42 = v38 in v41;
        }
        return v32;
    }
    const v43 = {deleteProperty:v28,set:v28,getPrototypeOf:v28,call:v28,preventExtensions:v28,isExtensible:v28,construct:v28,get:v28,ownKeys:v28,setPrototypeOf:1337,has:v28};
    const v45 = new Proxy(v27,v43);
    v45[1] = "MIN_VALUE";
}
const v46 = v15();
let v48 = 0;
const v49 = gc / 512;
const v50 = v48 + 1;
const v51 = gc();
let v52 = 0;
let v53 = 13.37;
const v54 = v10.substring();
let v56 = 0;
for (let v60 = 0; v60 < 100; v60++) {
    const v61 = v15();
}
const v62 = v56 + 1;
const v63 = v46();
for (const v65 in v46) {
    const v66 = v63(v65,v56);
}
const v67 = typeof 0;
const v69 = v67 === "number";
const v70 = v63();
let v72 = 0;
for (const v73 in v70) {
    const v74 = v6.length;
}
const v75 = v72 + 1;
let v76 = 0;
let v77 = Map;
const v78 = gc >> v51;
const v79 = gc();
const v80 = v76 + 1;
let v82 = 0;
const v83 = v82 + 1;
const v84 = gc();
}
%NeverOptimizeFunction(main);
main();
