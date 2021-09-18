import React, {Component} from "react";
import {Link} from "react-router-dom";
import Service from "./service";

interface IProps {
}

interface IState {
    stories?: any
}

class NewsList extends Component <IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.setState({
            stories: undefined
        })

        Service.getTopStories()
            .then(response => {
                this.setState({
                    stories: response
                })
            })
    }

    render() {
        if (this.state === null || this.state.stories === undefined) {
            return (<div>loading</div>)
        } else {
            let content = this.state.stories.map((value: any) => {
                return (
                    <div key={`${value.id.toString()}`}>
                        <Link to={`/news/${value.id}`}>{value.title}</Link>
                    </div>
                )
            })
            return (
                <div>
                    {content}
                </div>
            )
        }

    }
}


export default NewsList


// enum sortType
// {
//     None,
//     ByDate,
//     ByRating,
//     ByAuthor,
// }
//
// let sortetData = [];
// switch (this.state.sortType)
// {
//     case sortetType.None:
//         sortetData = this.state.data;
//         break;
//     case sortedType.ByDate:
//         sortetData = this.state.data.sort(byDateComparator);
//         break;
//
// }