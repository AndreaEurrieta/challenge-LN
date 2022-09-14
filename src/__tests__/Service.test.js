import {Service} from '../services/Service'
import articlesMock from '../__mocks__/articlesMock.json' 

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(articlesMock)
    })
);
describe("Service", () => {
    let resp;
    beforeEach(async () => {
        resp = await Service();
    });
    test("Should call correct function", async() => {
        expect(resp).toEqual(articlesMock.articles);
    });
});