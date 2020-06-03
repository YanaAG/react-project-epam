import React from "react";

function CoursesPage(props) {
    const showMessage = () => {
        alert("Followed " + props.framework);
    };

    const handleClick = () => {
        setTimeout(showMessage, 3000);
    };

    return <button onClick={handleClick}>Follow function</button>;
}

export default CoursesPage;
