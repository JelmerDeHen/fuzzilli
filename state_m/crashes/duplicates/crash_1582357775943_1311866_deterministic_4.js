function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337,1337];
const v7 = {isExtensible:Array,apply:Array,get:Array,construct:Array};
for (let v11 = 0; v11 < 8; v11++) {
}
let v13 = 0;
const v14 = [-3189384476,13.37,"number"];
const v15 = {e:13.37,b:13.37,a:v6};
const v16 = {c:1337,__proto__:v6,e:v15,length:1337};
let v17 = v6;
const v20 = [1337,1337,1337,1337,1337];
function v21(v22,v23,v24,v25) {
    'use strict'
    try {
        let v27 = 0;
        for (let v33 = 0; v33 < 100; v33++) {
            const v34 = v21();
        }
        let v36 = 0;
        const v37 = v36 + 1;
        for (let v41 = 0; v41 < 0; v41++) {
            const v42 = v14.constructor;
        }
        const v43 = [13.37];
        function v44(v45,v46,v47,v48) {
            'use strict'
        }
        const v49 = v44(v27,3);
    } catch(v50) {
    }
}
const v51 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v53 = new Proxy(v20,v51);
v53[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
