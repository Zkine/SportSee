class Performance {
  constructor(Data) {
    this._perfData = [...Data[3].data];
    this.perfDataTransform(this._perfData);
    this.reverse(this._perfData);
  }

  perfDataTransform = (myArray) => {
    myArray.map((e) => {
      if (e.kind === 1) {
        return (e.kind = "Cardio");
      } else if (e.kind === 2) {
        return (e.kind = "Energie");
      } else if (e.kind === 3) {
        return (e.kind = "Endurance");
      } else if (e.kind === 4) {
        return (e.kind = "Force");
      } else if (e.kind === 5) {
        return (e.kind = "Vitesse");
      } else if (e.kind === 6) {
        return (e.kind = "Intensité");
      }
    });

    return myArray;
  };

  reverse = (myArray) => {
    myArray.reverse();
    return myArray;
  };
}

class AverageOfSessions extends Performance {
  constructor(Data) {
    super(Data);
    this._sessionData = [...Data[2].sessions];
    this.session(this._sessionData);
  }
  session = (myArray) => {
    myArray.map((e) => {
      if (e.day === 1) {
        return (e.day = "L");
      } else if (e.day === 2) {
        return (e.day = "M");
      } else if (e.day === 3) {
        return (e.day = "M");
      } else if (e.day === 4) {
        return (e.day = "J");
      } else if (e.day === 5) {
        return (e.day = "V");
      } else if (e.day === 6) {
        return (e.day = "S");
      } else if (e.day === 7) {
        return (e.day = "D");
      }
    });

    return myArray;
  };
}

class Activity extends AverageOfSessions {
  constructor(Data) {
    super(Data);
    this._value = [...Data[1].sessions];
    this._array = this.transform(this._value);
    this._axis = this.dataAxis(this._array);
    this._array.push(this._axis);
  }

  transform = (myArray) => {
    const array = myArray.map((e) => {
      return e.kilogram && { ...e, kg: e.kilogram, Kcal: e.calories };
    });
    array.map((e, i) => {
      return (
        e.kilogram && (delete e.kilogram, delete e.calories, (e.day = i + 1))
      );
    });
    return array;
  };

  dataAxis = (myArray) => {
    const kilogram = myArray.map((el) => el.kg);
    const miniweight = Math.min(...kilogram) - 1;
    const maxweight = Math.max(...kilogram) + 1;
    const array = [miniweight, maxweight];
    let summ = 0;
    array.map((e) => (summ = summ + e));
    const moyenneweight = summ / array.length;

    return {
      maxweight: maxweight,
      miniweight: miniweight,
      moyenneweight: moyenneweight,
    };
  };
}

class MainData extends Activity {
  constructor(Data) {
    super(Data);
    this._firstName = Data[0].userInfos.firstName;
    this._score = this.score(Data);
  }

  score = (Data) => {
    const score = Data[0].todayScore ? Data[0].todayScore : Data[0].score;

    return [
      { name: "score", value: score * 100 },
      { name: "score restant", value: 100 - score * 100 },
    ];
  };
}

export default class Modelisation extends MainData {
  constructor(Data) {
    super(Data);
  }
}
