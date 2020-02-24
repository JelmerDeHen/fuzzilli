function main() {
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
const v108 = 1337 == 13.37;
// v108 = .boolean
let v122 = 0;
do {
    function v123(v124,v125,v126,v127,v128) {
        function v129(v130,v131,v132,v133) {
        }
    }
    const v137 = v122 + 1;
    // v137 = .primitive
    v122 = v137;
} while (v122 < 7);
let v145 = 0;
const v146 = v145 + 1;
// v146 = .primitive
v145 = v146;
}
%NeverOptimizeFunction(main);
main();
