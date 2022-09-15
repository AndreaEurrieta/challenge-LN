import { GetTagList } from '../Helpers/GetTagList/GetTagList';
import tagMock from '../__mocks__/tagMock.json' 

describe("Helpers-GetTagList", () => {
    test("Debería devolver diez objetos", () => {
      const tags = GetTagList(tagMock);
      expect(tags).toHaveLength(10);
      expect(tags).toMatchSnapshot();
    });
    test("Debería devolver true si no recibe ningún parametro", () => {
      expect(GetTagList()).toBeTruthy();
    });
  });