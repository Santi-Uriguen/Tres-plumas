import images from "./images.js";
const products = {
  frutales: [
    {
      name: "Melón",
      serial: "C. 2332",
      temp: "22°",
      cant: "6X700ML",
      src: images.botellas.frutales[0],
    },
    {
      name: "Frutilla",
      serial: "C. 2312",
      temp: "22°",
      cant: "6X700ML",
      src: images.botellas.frutales[1],
    },
    {
      name: "Curaçao Triple Sec",
      serial: "C. 2326",
      temp: "39°",
      cant: "6X700ML",
      src: images.botellas.frutales[2],
    },
    {
      name: "Blue Curaçao",
      serial: "C. 2328",
      temp: "29°",
      cant: "6X700ML",
      src: images.botellas.frutales[3],
    },
    {
      name: "Limoncello",
      serial: "C. 2325",
      temp: "29°",
      cant: "6X700ML",
      src: images.botellas.frutales[4],
    },
    {
      name: "Durazno",
      serial: "C. 2321",
      temp: "24°",
      cant: "6X700ML",
      src: images.botellas.frutales[5],
    },
    {
      name: "Kiwi",
      serial: "C, 2338",
      temp: "22°",
      cant: "6X700ML",
      src: images.botellas.frutales[6],
    },
    {
      name: "Manzana",
      serial: "C. 2320",
      temp: "22°",
      cant: "6X700ML",
      src: images.botellas.frutales[7],
    },
    {
      name: "Menta",
      serial: "C. 2315",
      temp: "24°",
      cant: "6X700ML",
      src: images.botellas.frutales[8],
    },
    {
      name: "Café",
      serial: "C. 2336",
      temp: "24°",
      cant: "6X700ML",
      src: images.botellas.frutales[9],
    },
    {
      name: "Cacao",
      serial: "C: 2309",
      temp: "24°",
      cant: "6X700ML",
      src: images.botellas.frutales[10],
    },
    {
      name: "Amaretto",
      serial: "C. 2319",
      temp: "24°",
      cant: "6X700ML",
      src: images.botellas.frutales[11],
    },
    {
      name: "Licor de Menta",
      serial: "C. 1466",
      temp: "24°",
      cant: "12X200ML",
      src: images.botellas.frutales[12],
    },
    {
      name: "Licor de Melón",
      serial: "C. 1469",
      temp: "22°",
      cant: "12X200ML",
      src: images.botellas.frutales[13],
    },
  ],
  cremosos: [
    {
      name: "Chocotella",
      serial: "C. 2346",
      temp: "17°",
      cant: "6X700ML",
      src: images.botellas.cremosos[0],
    },
    {
      name: "Chocolate Amargo",
      serial: "C. 2345",
      temp: "17°",
      cant: "6X700ML",
      src: images.botellas.cremosos[1],
    },
    {
      name: "Chocolate",
      serial: "C. 2306",
      temp: "17°",
      cant: "6X700ML",
      src: images.botellas.cremosos[2],
    },
    {
      name: "Chocolate a la Frutilla",
      serial: "C. 2341",
      temp: "17°",
      cant: "6X700ML",
      src: images.botellas.cremosos[3],
    },
    {
      name: "Chocolate al Dulce de Leche",
      serial: "C. 2330",
      temp: "17°",
      cant: "6X700ML",
      src: images.botellas.cremosos[4],
    },
    {
      name: "Chocolate a la Almendra",
      serial: "C. 2323",
      temp: "17°",
      cant: "6X700ML",
      src: images.botellas.cremosos[5],
    },
    {
      name: "Chocolate a la Menta",
      serial: "C. 2322",
      temp: "17°",
      cant: "6X700ML",
      src: images.botellas.cremosos[6],
    },
    {
      name: "Chocolate Blanco",
      serial: "C, 2324",
      temp: "17°",
      cant: "6X700ML",
      src: images.botellas.cremosos[7],
    },
    {
      name: "Dulce de Leche",
      serial: "C. 2316",
      temp: "17°",
      cant: "6X700ML",
      src: images.botellas.cremosos[8],
    },
    {
      name: "Dulce de Leche a la Almendra",
      serial: "C. 2343",
      temp: "17",
      cant: "6X700ML",
      src: images.botellas.cremosos[9],
    },
    {
      name: "Banana con Dulce de Leche",
      serial: "C. 2334",
      temp: "17°",
      cant: "6X700ML",
      src: images.botellas.cremosos[10],
    },
    {
      name: "Huevo",
      serial: "C: 2305",
      temp: "18°",
      cant: "6X700ML",
      src: images.botellas.cremosos[11],
    },
    {
      name: "Licor de Chocolate",
      serial: "C. 1465",
      temp: "17°",
      cant: "12X200ML",
      src: images.botellas.cremosos[12],
    },
    {
      name: "Licor de Dulce de Leche",
      serial: "C. 1468",
      temp: "17°",
      cant: "12X200ML",
      src: images.botellas.cremosos[13],
    },
  ],
  alCafe: [
    {
      name: "Al Coñac",
      serial: "C. 2207",
      temp: "24°",
      cant: "6X750ML",
      src: images.botellas.cremosos[0],
    },
    {
      name: "Al Ron",
      serial: "C. 2226",
      temp: "24°",
      cant: "6X750ML",
      src: images.botellas.cremosos[1],
    },
    {
      name: "Al Whisky",
      serial: "C. 2209",
      temp: "24°",
      cant: "6X750ML",
      src: images.botellas.cremosos[2],
    },
    {
      name: "Al Chocolate",
      serial: "C. 2221",
      temp: "24°",
      cant: "6X750ML",
      src: images.botellas.cremosos[3],
    },
    {
      name: "Al Dulce de Leche",
      serial: "C. 2225",
      temp: "24°",
      cant: "6X750ML",
      src: images.botellas.cremosos[4],
    },
    {
      name: "Café al Coñac",
      serial: "C. 0204",
      temp: "24°",
      cant: "12X200ML",
      src: images.botellas.alCafe[5],
    },
    {
      name: "Café al Whisky",
      serial: "C. 02222",
      temp: "24°",
      cant: "12X200ML",
      src: images.botellas.alCafe[6],
    },
    {
      name: "Café al Ron",
      serial: "C. 0229",
      temp: "24°",
      cant: "12X200ML",
      src: images.botellas.alCafe[7],
    },
    {
      name: "Café al Chocolate",
      serial: "C. 0224",
      temp: "24°",
      cant: "12X200ML",
      src: images.botellas.alCafe[8],
    },
  ],
  secos: [
    {
      name: "Licor Seco",
      serial: "C. 1607",
      temp: "39°",
      cant: "6x930mL",
      src: images.botellas.seco[0],
    },
    {
      name: "Licor Seco",
      serial: "C. 1602",
      temp: "39°",
      cant: "6x200mL",
      src: images.botellas.seco[1],
    },
  ],
  golden: [
    {
      name: "Apricot Brandy",
      serial: "C. 1523",
      temp: "24°",
      cant: "6x750mL",
      src: images.botellas.golden[0],
    },
    {
      name: "Cherry Brandy",
      serial: "C. 1521",
      temp: "24°",
      cant: "6x750mL",
      src: images.botellas.golden[1],
    },
    {
      name: "Maraschino",
      serial: "C. 1522",
      temp: "27°",
      cant: "6x750mL",
      src: images.botellas.golden[4],
    },
    {
      name: "Elderflowe",
      serial: "C. 1526",
      temp: "20°",
      cant: "6x750mL",
      src: images.botellas.golden[2],
    },
    {
      name: "Parfait Amour",
      serial: "C. 1525",
      temp: "24°",
      cant: "6x750mL",
      src: images.botellas.golden[5],
    },
    {
      name: "Kummel",
      serial: "C. 1524",
      temp: "30°",
      cant: "6x750mL",
      src: images.botellas.golden[3],
    },
  ],
};

export default products;
