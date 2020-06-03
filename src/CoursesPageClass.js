import React from 'react';

class CoursesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { framework: '' };
    }

    showMessage = () => {
        alert('Followed ' + this.state.framework);
    };

    handleClick = () => {
        this.setState({ framework: this.props.framework });
        setTimeout(this.showMessage, 3000);
    };

    render() {
        return <button onClick={this.handleClick}>Follow class</button>;
    }
}

export default CoursesPage;
