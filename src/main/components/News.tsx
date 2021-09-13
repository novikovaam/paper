import React, {Component} from "react";
import {Link} from "react-router-dom";
import Api from "./api";

interface IProps {
}

interface IState {
    loading: boolean,
    stories: any,
}

class News extends Component <IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.setState({
            loading: true,
            stories: undefined,
        })

        Api.getTopStories()
            .then(response => {
                this.setState({
                    loading: false,
                    stories: response
                })
            })
    }


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

    render() {
        if (this.state === null || this.state.loading) {
            return (<div>loading</div>)
        } else {
            let content = this.state.stories.map((value: any) => {
                {console.log(value)}
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


export default News