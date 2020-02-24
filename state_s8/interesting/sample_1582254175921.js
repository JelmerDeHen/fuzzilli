function main() {
let v32 = 0;
const v33 = v32 + 1;
// v33 = .primitive
v32 = v33;
let v60 = 0;
const v61 = v60 + 1;
// v61 = .primitive
v60 = v61;
let v82 = 0;
const v83 = v82 + 1;
// v83 = .primitive
v82 = v83;
let v139 = 0;
try {
} catch(v146) {
    for (let v152 = 0; v152 < 0; v152++) {
    }
    try {
    } catch(v153) {
    }
}
const v154 = v139 + 1;
// v154 = .primitive
v139 = v154;
}
%NeverOptimizeFunction(main);
main();
