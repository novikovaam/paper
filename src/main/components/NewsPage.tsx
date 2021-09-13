import React from "react";

const NewsPage = (props: any) => {

    return (
        <div>
            {props.match.params.id}
            <div>author</div>
            <div>title</div>
            <div>description</div>
            <div>comments</div>
        </div>

    )
}

export default NewsPage
