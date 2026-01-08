const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
    }
    catch (error) {
    }
};
export {};
//# sourceMappingURL=fetchReq.js.map