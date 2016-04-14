export default class Location {
  constructor(name) {
    if (!name.match(/[A-H][0-9]/)) {
      throw new Error(`Location name ${name} was invalid`);
    } else {
      this.name = name;
    }
  }
}
