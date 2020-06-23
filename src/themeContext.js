import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
    state = {
        theme: "dark",
        fontSize: "small"
    };

    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            };
        });
    };

    toggleFontSize = () => {
      this.setState(prevState => {
          return {
              fontSize: prevState.fontSize === "small" ? "big" : "small"
          }
      })
    };

    render() {
        return (
            <Provider
                value={{ theme: this.state.theme, toggleTheme: this.toggleTheme,
                    fontSize: this.state.fontSize, toggleFontSize: this.toggleFontSize }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
