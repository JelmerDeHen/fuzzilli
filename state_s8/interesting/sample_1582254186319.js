function main() {
let v35 = 0;
const v36 = v35 + 1;
// v36 = .primitive
v35 = v36;
let v93 = 0;
let v96 = 0;
let v99 = 0;
const v100 = v99 + 1;
// v100 = .primitive
v99 = v100;
let v107 = 0;
const v111 = v96 + 1;
// v111 = .primitive
v96 = v111;
const v112 = v93 + 1;
// v112 = .primitive
v93 = v112;
const v118 = (13.37).toString();
// v118 = .unknown
let v127 = 0;
const v128 = v127 + 1;
// v128 = .primitive
v127 = v128;
}
%NeverOptimizeFunction(main);
main();
