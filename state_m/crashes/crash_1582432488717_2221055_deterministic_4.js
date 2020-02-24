function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337];
const v6 = [1337];
const v7 = {toString:13.37,constructor:1337};
const v8 = {length:v7,b:WeakSet};
let v9 = -800599726;
const v13 = [13.37,13.37,13.37,13.37];
const v16 = [1337,1337,1337,1337];
const v17 = [v13,1337];
const v18 = {a:"number"};
const v19 = {d:v17};
let v20 = 1337;
const v23 = [13.37];
const v25 = [1337,1337];
const v26 = [-4294967295,13.37,v23];
let v27 = v25;
const v30 = [];
const v31 = v30.__proto__;
for (let v35 = 0; v35 < 10; v35++) {
    const v36 = Object();
}
let v37 = 1;
const v38 = ~1337;
const v40 = {set:Object};
const v42 = Object.defineProperty(v7,"constructor",v40);
const v43 = {length:1337,e:1337,c:v30,a:1337,toString:"symbol"};
let v45 = 0;
const v46 = v45 + 1;
let v48 = 13.37;
function v49(v50,v51,v52,v53,v54) {
    'use strict'
    const v56 = [13.37,13.37,13.37];
    const v58 = typeof 0;
    try {
        const v60 = [530086.5682938832,530086.5682938832,530086.5682938832];
        let v62 = 0;
        const v63 = v62 + 1;
        for (let v67 = 0; v67 < 100; v67++) {
            const v68 = v49(v62,"constructor",v58,4294967296);
        }
        const v69 = [v56,v60];
        const v70 = v69.toLocaleString();
        let v71 = 530086.5682938832;
    } catch(v72) {
    }
}
const v73 = v49();
}
%NeverOptimizeFunction(main);
main();
