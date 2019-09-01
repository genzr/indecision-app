import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter Valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        } 

        this.setState((prevState)=> ({options: prevState.options.concat([option]) }))
    }

    handleDeleteOption = (optionToDelete) => {
        this.setState((prevState)=> ({options: prevState.options.filter((option) => optionToDelete !== option)}))
    }

    handleDeleteOptions = () => {
        this.setState(()=> ({options: [] }))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => ({
            selectedOption: option,
        }))
    }

    handleOkay = () => {
        this.setState(()=>({selectedOption: undefined}))
    }

    componentDidMount() {
        try {
            const loadedData = JSON.parse(localStorage.getItem('options'))
            if(loadedData){
                this.setState(()=> {
                    return {
                        options: loadedData,
                    }
                })
            }
        } catch(e) {
            //Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const newState = this.state.options
        if(prevState.options.length !== newState.length) {
            const json = JSON.stringify(newState)
            localStorage.setItem('options', json)
        }
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        const subtitle = 'Put your life in the hands of rng'

        return (
            <div>
                <Header subtitle={subtitle}/>
                    <div className='container'> 
                        <Action 
                            hasOptions={this.state.options.length >0} 
                            handlePick={this.handlePick}
                        />
                        <div className='widget'>
                            <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                            />
                            <AddOption 
                                handleAddOption={this.handleAddOption}
                            />
                        </div>
                    </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleOkay={this.handleOkay}
                />
            </div>
        )
    }
}
