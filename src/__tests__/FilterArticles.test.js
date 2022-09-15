import { FilterArticles } from "../Helpers/FilterArticles/FilterArticles";

const articlesMock = [
  {
    _id: "ZNJ67CCHJNAEBE6IUETWOXMNFM",
    display_date: new Date("2019-12-06"),
    headlines: {
      basic: "Arroz con Leche",
    },
    promo_items: {
      basic: {
        url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg",
      },
    },
    subtype: "7",
  },
  {
    _id: "ZNJ67CCHJNAEBE6IUETWOXMNFM",
    display_date: new Date("2019-12-06"),
    headlines: {
      basic: "Arroz con Leche",
    },
    promo_items: {
      basic: {
        url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg",
      },
    },
    subtype: "2",
  },
];
describe("Helpers-FilterArticles", () => {
  test("Debería devolver solo artículos de subtipo 7", () => {
    const filter = FilterArticles(articlesMock);
    expect(filter).toHaveLength(1);
    expect(filter).toMatchSnapshot();
  });
  test("Debería devolver null si no recibe ningún parametro", () => {
    expect(FilterArticles()).toBeNull();
  });
});
