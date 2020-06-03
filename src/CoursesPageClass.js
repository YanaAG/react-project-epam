import React from 'react';

class CoursesPage extends React.Component {
    showMessage = () => {
        alert('Followed ' + this.props.framework);
    };

    handleClick = () => {
        setTimeout(this.showMessage, 3000);
    };

    render() {
        return <button onClick={this.handleClick}>Follow class</button>;
    }
}

export default CoursesPage;
