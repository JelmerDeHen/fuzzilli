function main() {
const v4 = [13.37];
const v6 = [1337,1337,1337];
const v7 = [13.37];
const v8 = {constructor:v6,__proto__:v4};
const v9 = {__proto__:-3268787000,toString:Array,valueOf:Array,c:"dnPLKt+CAH",length:13.37};
let v10 = v4;
const v13 = {__proto__:536870912};
const v16 = v6.length;
const v19 = [1.7976931348623157e+308];
const v21 = [255,255,255];
const v22 = {a:255,toString:isFinite,c:v19,__proto__:v21,valueOf:"object",constructor:"gM8oAednYn"};
let v24 = RegExp;
let v25 = v24;
const v29 = [1337,13.37,1337,Uint8Array];
let v30 = v29;
const v32 = [1337,1337,1337,1337,1337];
const v33 = {valueOf:v32,__proto__:v32};
let v35 = 13.37;
const v38 = {preventExtensions:v24,construct:RegExp,getPrototypeOf:RegExp,call:RegExp,ownKeys:Array};
const v40 = new Proxy(v19,v38);
const v41 = v22 == RegExp;
const v42 = [1337,1337,1337,1337,1337];
function v43(v44,v45,v46,v47) {
    'use strict'
    try {
        const v51 = [1337,1337];
        const v53 = new ArrayBuffer();
        v35 = v46;
        let v56 = 0;
        do {
            const v57 = v56 + 1;
            v56 = v57;
        } while (v56 < 4);
        let v59 = 0;
        const v60 = v53.slice(v35);
        const v61 = v59 + 1;
        const v62 = [13.37];
        const v64 = [1337,13.37,v62,-1155643050];
        let v65 = v62;
        const v67 = [1337,1337];
        const v68 = {valueOf:1337,b:v30,e:1337,d:1337,constructor:v65,__proto__:1337,a:v62};
        const v70 = [1337,1337,1337,1337,1337];
        const v71 = [v70];
        const v72 = v67[-4096];
        const v73 = v64[-3357639552];
        const v74 = 13.37 == v64;
        let v76 = 0;
        const v77 = v65.flat();
        v47[3] = v47;
        const v78 = v33();
        const v79 = v78[-2900725722];
        let v81 = undefined;
        const v82 = {construct:v44,apply:v78,call:v40,getPrototypeOf:v35,ownKeys:v44,set:v45};
        const v84 = Proxy();
        let v86 = 0;
    } catch(v87) {
        const v88 = {construct:v87};
    }
}
const v89 = {deleteProperty:v43,set:v43,getPrototypeOf:v43,call:v43,preventExtensions:v43,isExtensible:v43,construct:v43,get:v43,ownKeys:v43,setPrototypeOf:v43,has:v43};
const v91 = new Proxy(v42,v89);
v91[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
