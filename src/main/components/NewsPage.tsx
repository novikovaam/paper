import React, {Component} from "react";
import Service from "./service";


interface IProps {
    match: any
}

interface IState {
    story?: IStory

}

interface IStory {
    title: string
}

class NewsPage extends Component<IProps, IState> {


    constructor(props: Readonly<IProps> | IProps) {
        super(props);

        this.setState({
                story: undefined
            }
        )

        let id = props.match.params.id

        Service.getStoryById(id)
            .then(response => {
                this.setState({
                    story: response
                })
            })
    }

    render() {
        if (this.state === null || this.state.story === undefined) {
            return <div>LOADING...</div>
        } else {
            return <div>{this.state.story.title}</div>;
        }
    }
}

export default NewsPage;