function main() {
Promise.species = Object;
delete Promise.species;
}
%NeverOptimizeFunction(main);
main();
