import React from "react";
import ReactDOM from "react-dom";

import CoursesPageFunction from './CoursesPageFunction';
import CoursesPageClass from './CoursesPageClass';

import PureClassComponent from './LikeButton';

class App extends React.Component {
    state = {
        framework: 'React',
    };
    render() {
        return (
            <>
                <label>
                    <b>Choose framework to learn: </b>
                    <select
                        value={this.state.framework}
                        onChange={e => {
                            this.setState({ framework: e.target.value })
                            }
                        }
                    >
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </label>
                <p><CoursesPageFunction framework={this.state.framework} /></p>
                <p><CoursesPageClass framework={this.state.framework} /></p>

                <PureClassComponent />
            </>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
