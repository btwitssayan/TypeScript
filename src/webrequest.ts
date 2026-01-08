import axios, {type AxiosResponse} from 'axios';

interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(response => {
    console.log('Data received:', response.data);
})

const fetchData = async () =>{
    try {
    const response: AxiosResponse<Todo> = await axios.get<Todo>('https://jsonplaceholder.typicode.com/todos/1');
    console.log('Async Data received:', response.data);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error message:', error.message);
            if (error.response) {
                console.error('Axios error response data:', error.response.data);
                console.error('Axios error response status:', error.response.status);
            }
        }
    }
}

fetchData();