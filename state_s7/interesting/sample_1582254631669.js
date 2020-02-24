function main() {
function v10(v11,v12,v13,v14,...v15) {
}
let v25 = 0;
const v26 = gc();
// v26 = .undefined
const v33 = v10(4294967297,Uint16Array,1337,v26,v25);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
