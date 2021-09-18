import axios from "axios";

class Service {
    static apiUrl: string = "https://hacker-news.firebaseio.com";

    static async getTopStories() {
        let stories: object[] = [];
        const {data} = await axios.get(Service.apiUrl + "/v0/topstories.json");
        for (let i = 0; i < data.length && i < 20; i++) {
            let response = await axios.get(Service.apiUrl + "/v0/item/" + data[i] + ".json")
            stories.push(response.data)
        }
        return stories
    }

    static async getStoryById(id: number) {
        let response = await axios.get(Service.apiUrl + "/v0/item/" + id + ".json");
        return response.data
    }
}

export default Service
