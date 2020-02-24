function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337];
const v6 = [13.37,v3,Infinity,13.37];
const v7 = {d:-2324552845};
const v8 = {valueOf:Infinity,__proto__:13.37,d:-2324552845,b:v5,toString:v7};
let v9 = 1337;
const v12 = [13.37];
const v14 = [1337,1337];
const v15 = {length:v12,b:v14,__proto__:"POSITIVE_INFINITY",toString:v14,d:1337};
const v17 = [13.37,13.37,13.37,13.37,13.37];
const v19 = new Int8Array();
function v20(v21,v22) {
    function v23(v24,v25) {
        for (let v29 = 0; v29 < 100; v29++) {
            function v30(v31,v32) {
            }
        }
        try {
            const v33 = v23();
        } catch(v34) {
        }
        for (let v38 = 0; v38 < 4; v38++) {
        }
    }
    const v39 = v23();
}
const v40 = v12.flatMap(v20);
}
%NeverOptimizeFunction(main);
main();
