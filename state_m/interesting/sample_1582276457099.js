function main() {
this.species = Object;
delete this.species;
for (const v5 in this) {
}
}
%NeverOptimizeFunction(main);
main();
