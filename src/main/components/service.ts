import axios from "axios";


interface IStory {
    title: string
    time: string
}

class Service {
    static apiUrl: string = "https://hacker-news.firebaseio.com";

    static async getTopStories(): Promise<IStory[]> {
        let stories: IStory[] = []
        const {data} = await axios.get(Service.apiUrl + "/v0/topstories.json");

        let requests = [];
        for (let i = 0; i < data.length && i < 100; i++) {
            let request = axios.get<IStory>(Service.apiUrl + "/v0/item/" + data[i] + ".json");
            requests.push(request)
        }
        await axios.all(requests).then(axios.spread((...responses) => {
            responses.forEach(response => stories.push({...response.data}))
        }))
        return stories
    }


    static async getStoryById(id: number): Promise<IStory> {
        let response = await axios.get<IStory>(Service.apiUrl + "/v0/item/" + id + ".json");
        return response.data
    }
}

export type {IStory};
export default Service
