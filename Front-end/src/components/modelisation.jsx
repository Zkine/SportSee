export default class Modelisation {
  constructor() {
    this.state = {
      count: 0,
    };
  }
  static getmodel(Data) {
    const value = [...Data[1].sessions];

    // console.log(result);
    return value;
  }
}
