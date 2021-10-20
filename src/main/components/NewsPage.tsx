import React, {FC, useEffect, useState} from "react";
import Service from "./service";
import type {IStory} from "./service";


interface IProps {
    match: any
}

const NewsPage: FC<IProps> = (props: any) => {

    const [story, setStory] = useState<IStory>();

    useEffect(() => {
        let id = props.match.params.id

        Service.getStoryById(id)
            .then(response => {
                setStory(response)
            })
    });

    if (!story) {
        return <div>LOADING...</div>
    } else {

        return <div>
            <div>{story.title}</div>
            <div>{story.time}</div>
        </div>;
    }
}
export default NewsPage