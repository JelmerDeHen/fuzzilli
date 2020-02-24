function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [v6,Object,"object"];
const v8 = {length:v6,__proto__:v4,e:v4,toString:v6};
const v9 = {d:64};
let v10 = v6;
const v11 = [];
const v12 = Object();
const v15 = [13.37,13.37,13.37,13.37];
const v17 = [v15,-2,-4294967297];
const v21 = Object();
const v22 = v4.includes();
const v23 = [64,1337,-2];
const v24 = v4 && v15;
const v25 = v15 || v23;
const v26 = [13.37,13.37,13.37,-4294967297];
const v28 = [13.37,-93687789,v26];
let v32 = 0;
do {
    let v34 = 2237842118;
    const v35 = v34 + 1;
    const v36 = v28.push(v35,v32,2237842118);
    const v37 = v32 + 1;
    const v40 = [1337,1337,"MIN_VALUE",1337,1337];
    function v41(v42,v43,v44,v45) {
        'use strict'
        try {
            let v47 = 0;
            const v48 = v47 + 1;
            v45[3] = v45;
        } catch(v49) {
            let v51 = eval;
            const v52 = [];
            const v53 = {a:v52};
            const v54 = {__proto__:v45,constructor:v53,length:v52};
        }
        return v45;
    }
    const v55 = {deleteProperty:v41,set:v41,getPrototypeOf:v41,call:v41,preventExtensions:v41,isExtensible:v41,construct:v41,get:v41,ownKeys:v41,setPrototypeOf:1337,has:v41};
    const v57 = new Proxy(v40,v55);
    v57[1] = "MIN_VALUE";
} while (v32 < 10000);
const v58 = [-1242988596,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
let v59 = v58;
const v60 = v17[v59];
}
%NeverOptimizeFunction(main);
main();
