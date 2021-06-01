import React, { Component } from "react";

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.ddRef = React.createRef();
        this.onBodyClick = this.onBodyClick.bind(this);
    }

    onBodyClick(event) {
        if (this.ddRef.current.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    }

    componentDidMount() {
        document.body.addEventListener("click", this.onBodyClick);
    }

    componentWillUnmount() {
        document.body.removeEventListener("click", this.onBodyClick);
    }

    getRenderedOptionList() {
        return this.props.options.map((option, index) => {
            const activeOptionClass =
                this.props.selectedOption !== "" && option === this.props.selectedOption ? "active selected" : "";

            return (
                <div
                    key={index}
                    className={`item ${activeOptionClass}`}
                    onClick={() => this.props.onOptionSelect(option)}
                >
                    {option}
                </div>
            );
        });
    }

    render() {
        return (
            <div className="field">
                <div
                    ref={this.ddRef}
                    onClick={() => this.setState({ open: !this.state.open })}
                    className={`ui selection dropdown ${this.state.open ? "visible active" : ""} ${
                        !this.props.options.length ? "disabled" : ""
                    }`}
                >
                    <i className="dropdown icon"></i>
                    <span className="text">
                        {this.props.options.includes(this.props.selectedOption)
                            ? this.props.selectedOption
                            : this.props.label}
                    </span>
                    <div className={`menu ${this.state.open ? "visible transition" : ""}`}>
                        {this.getRenderedOptionList()}
                    </div>
                </div>
            </div>
        );
    }
}
