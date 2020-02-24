function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [v3,v5,v3];
const v7 = {__proto__:v5,toString:"description",b:1337,valueOf:v6,constructor:1337,length:"description"};
const v8 = {__proto__:v5,toString:"description",d:v5,a:String};
let v9 = v8;
const v12 = [-1000000000.0,-1000000000.0,-1000000000.0,-1000000000.0];
const v14 = [v12,-2,3797639666];
let v15 = String;
const v16 = 3797639666 - String;
const v17 = v16[String];
const v18 = !v12;
let v20 = 0;
const v21 = v15 + v16;
const v22 = v20 + 1;
const v24 = [1000000.0,1000000.0,1000000.0,3797639666];
const v26 = [1000000.0,2,v24];
const v28 = [1337];
let v31 = 0;
do {
    const v35 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
    function v36(v37,v38,v39,v40) {
        'use strict'
        try {
            for (let v44 = 0; v44 < 100; v44++) {
                const v45 = v36(String,v38,8,"MIN_VALUE");
            }
            const v46 = {};
            const v47 = [v46,v46];
            const v49 = [1.7976931348623157e+308];
        } catch(v50) {
        }
    }
    const v51 = {deleteProperty:v36,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:v36,has:v36};
    const v53 = new Proxy(v35,v51);
    v53[1] = "MIN_VALUE";
    const v54 = v31 + 1;
    const v56 = [1337];
    const v58 = Symbol.species;
} while (v31 < 8);
let v60 = 0;
const v61 = v26.push();
const v62 = v60 + 1;
}
%NeverOptimizeFunction(main);
main();
