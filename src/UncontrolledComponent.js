import React, {useRef} from "react";

// 1. String Refs (legacy method)

// 2. React.createRef (from React 16.3)

class UncontrolledComponent extends React.Component {
    //  constructor(props) {
    //     super(props);
    //     this.textInput = React.createRef();
    //   }

    textInput = React.createRef();

    handleClick = () => {
        // console.log("this.textInput", this.textInput);
        // console.log("textInput.current.value)", this.textInput.current.value);
        const value = this.textInput.current.value;
        this.textInput.current.value = value.toUpperCase();
    };

    render() {
        // console.log("render");
        // console.log("this.textInput first render", this.textInput);
        return (
            <>
                <p>Uncontrolled Component</p>
                <input ref={this.textInput} />
                <button onClick={this.handleClick}>Uppercase</button>
                <button>Square</button>
            </>
        );
    }
}

// 3. Callback Refs

// class UncontrolledComponent extends React.Component {
//   handleClick = () => {
//     console.log('this.textInput', this.textInput);
//     const value = this.textInput.value;
//     this.textInput.value = value.toUpperCase();
//   }

//   render() {
//     return (
//       <>
//         <p>Uncontrolled Component</p>
//         <input ref={elem => this.textInput = elem}  />
//         <button onClick={this.handleClick}>Uppercase</button>
//         <button>Square</button>
//       </>
//     );
//   }
// }

export default UncontrolledComponent;
