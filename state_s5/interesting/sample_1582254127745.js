function main() {
try {
    let v19 = 0;
    do {
        break;
    } while (v19 < 2);
} catch(v20) {
}
let v39 = 0;
const v40 = v39 + 1;
// v40 = .primitive
v39 = v40;
}
%NeverOptimizeFunction(main);
main();
