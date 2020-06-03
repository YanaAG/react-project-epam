import React, { PureComponent } from "react";

class PureClassComponent extends PureComponent {
    state = {
        name: "React JS"
    };

    changeName = () => {
        this.setState({ name: "React JS" });
    };

    render() {
        console.log("FirstComponent -- Render method called");
        return (
            <div>
                <p> Course is : {this.state.name} </p>
                <button onClick={this.changeName}>Like course</button>
            </div>
        );
    }
}

export default PureClassComponent;
