import React from 'react';

class CharacterCard extends React.Component {

    componentDidUpdate(prevProps) {
        if (prevProps.attempt !== this.props.attempt) {
            this.setState({ active: false })
        }
    }
    state = {
        active: false,
    }
    
    activate = () => {

        this.setState({
            active: true,
        });
        if(!this.state.active)
        this.props.activationHandler(this.props.value);

    }

    render() {
        let activeClass = this.state.active ? 'activeCard' : '';
        let className = `card ${activeClass}`
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}

export default CharacterCard;