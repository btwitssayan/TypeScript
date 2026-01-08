import axios, {} from 'axios';
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
    console.log('Data received:', response.data);
});
const fetchData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Async Data received:', response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error message:', error.message);
            if (error.response) {
                console.error('Axios error response data:', error.response.data);
                console.error('Axios error response status:', error.response.status);
            }
        }
    }
};
fetchData();
//# sourceMappingURL=webrequest.js.map