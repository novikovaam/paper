import React, {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Service from "./service";
import type {IStory} from "./service";

interface IProps {
}

const NewsList: FC<IProps> = (props: any) => {

    const [stories, setStories] = useState<IStory[]>();

    useEffect(() => {
        Service.getTopStories()
            .then(response => {
                setStories(response)
            })
    });

    if (stories === null || stories === undefined) {
        return (<div>loading</div>)
    } else {
        let content = stories.map((value: any) => {
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