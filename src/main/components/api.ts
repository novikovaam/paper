import axios from "axios";

class Api {
    static apiUrl: string = "https://hacker-news.firebaseio.com";

    static async getTopStories() {
        let stories: object[] = [];
        const {data} = await axios.get(Api.apiUrl + "/v0/topstories.json");
        for (let i = 0; i < data.length && i < 20; i++) {
            let story = await axios.get(Api.apiUrl + "/v0/item/" + data[i] + ".json")
            stories.push(story.data)
        }
        return stories
    }
}

export default Api
