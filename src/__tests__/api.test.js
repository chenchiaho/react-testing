describe('API', () => {
    let originalFetch;

    beforeAll(() => {
        originalFetch = global.fetch;
        jest.mock(global, 'fetch').mockImplementation(() => {
            console.log('Mocked fetch called');
            return Promise.resolve({
                json: () => Promise.resolve({
                    data: 'Hello World'
                })
            })
        })
    })

    afterAll(() => {
        global.fetch.mockRestore();
    })

    it('should return the correct data', async () => {
        const response = await global.fetch('https://example.com/api');
        const data = await response.json();
        console.log('Data:', response);
        expect(data.data).toBe('Hello World');
    })
})
