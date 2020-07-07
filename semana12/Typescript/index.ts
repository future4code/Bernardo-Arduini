type pessoa = {
    nome: string;
    age: number;
    cumprimentar: (nome: string) => void;
  };
  ​
  const astrodev: pessoa = {
    nome: "Astrodev",
    age: 29,
    cumprimentar: (nome: string): void => {
      console.log("oi ", nome);
    },
  };
  ​
  astrodev.cumprimentar("Mateus");
  ​
  enum MarcaDeCarro {
    FIAT = "Fiat",
    VOLKSWAGEN = "Volkswagen",
  }
  ​
  type carro = {
    marca: MarcaDeCarro;
    capacidadeDoTanque: number;
    temMotorFlex: boolean;
    calculaLitrosDeGasolina: (km: number) => number;
  };
  ​
  const uno: carro = {
    marca: MarcaDeCarro.FIAT,
    capacidadeDoTanque: 50,
    temMotorFlex: false,
    calculaLitrosDeGasolina: (km: number): number => {
      return 0.25 * km;
    },
  };
  ​
  const gol: carro = {
    marca: MarcaDeCarro.VOLKSWAGEN,
    capacidadeDoTanque: 45,
    temMotorFlex: true,
    calculaLitrosDeGasolina: (km: number): number => {
      return 0.35 * km;
    },
  };
  ​
  const frota: carro[] = [uno, gol];
  ​
  // function buscaMarca(carros: carro[], marca: string): carro[] {
  //   const resultado: carro[] = carros.filter((item: carro) => {
  //     // if (item.marca === marca) { return true }
  //     return item.marca === marca;
  //   });
  ​
  //   return resultado;
  // }
  ​
  const buscaMarca: (array: carro[], query: MarcaDeCarro) => carro[] = (
    carros: carro[],
    marca: MarcaDeCarro
  ): carro[] => {
    const resultado: carro[] = carros.filter((item: carro) => {
      return item.marca === marca;
    });
  ​
    return resultado;
  };
  ​
  const foo: (aux: number) => boolean = (input: number): boolean => {
    return input === 0;
  };
  ​
  enum LabenuClasses {
    T01 = "NEWTON",
    T02 = "BOUMAN",
    T03 = "SAGAN",
    T04 = "HAMILTON",
    T05 = "bananinha",
  }
  ​
  enum LabenuNota {
    F,
    E,
    D,
    C,
    B,
    A,
  }
  ​
  const alice = {
    turma: LabenuClasses.T05,
    nota: LabenuNota.A,
  };
  ​
  const bob = {
    turma: LabenuClasses.T05,
    nota: LabenuNota.F,
  };
  ​
  console.log("alice: ", alice);
  console.log("bob: ", bob);