function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [];
const v8 = {b:v6,valueOf:4294967295,d:"iterator",a:v7};
const v9 = {d:v8,valueOf:v4,b:v4};
let v10 = Set;
const v15 = [ArrayBuffer,13.37];
const v17 = [1337,1337];
const v18 = [1337,"arguments",1337];
const v19 = {__proto__:"arguments",a:v18,b:v15,d:v18,constructor:v15,c:-2147483648};
let v20 = Set;
const v23 = [];
const v24 = v17.__proto__;
const v26 = [13.37];
const v28 = [1337,1337,1337,1337];
const v29 = [String,13.37];
const v30 = {constructor:String,c:1604510041,a:v28,e:1604510041,__proto__:v28,length:String};
let v31 = v28;
let v32 = 1604510041;
const v34 = [13.37,13.37];
for (const v37 in v31) {
    let v39 = 0;
    const v40 = v39 + 1;
    let v42 = 339680996;
    const v44 = new Int32Array();
    const v45 = v44.slice();
    const v48 = arguments + 1;
    const v50 = [1337,1337];
    let v51 = v50;
    const v53 = [1337,1337,"MIN_VALUE",1337,1337];
    function v54(v55,v56,v57,v58) {
        'use strict'
        try {
            let v61 = 0;
            while (v61 <= 4) {
                const v62 = v61 + 1;
                v61 = v62;
            }
            v58[3] = 0;
        } catch(v63) {
            let v64 = v48;
            const v65 = [];
            const v66 = {a:v65};
            const v67 = {__proto__:v58,constructor:v66,length:v65};
            const v68 = v64 in v67;
        }
        return v58;
    }
    const v69 = {deleteProperty:v54,set:v54,getPrototypeOf:v54,call:v54,preventExtensions:v54,isExtensible:v54,construct:v54,get:v54,ownKeys:v54,setPrototypeOf:1337,has:v54};
    const v71 = new Proxy(v53,v69);
    v71[1] = "MIN_VALUE";
    for (let v75 = 0; v75 < 5; v75++) {
        const v78 = gc();
        const v79 = v34.splice(1337,0,13.37,0,Reflect,v75,13.37);
    }
}
const v80 = v34.shift();
const v81 = v15.push();
const v82 = Object.prototype;
const v83 = Object();
}
%NeverOptimizeFunction(main);
main();
