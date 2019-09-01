class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.toggleHide = this.toggleHide.bind(this)
        this.state = {
            hiden: false,
            buttonText: 'Hide',
            text: 'Secret password is elephant'
        }
    }

    toggleHide(){
        if(!this.state.hiden) {
            this.setState(()=>{
                return {
                    text: '',
                    buttonText: 'Show',
                    hiden: true
                }
            })
        } else {
            this.setState(()=>{
                return {
                    text: 'Secret Password is elephant',
                    buttonText: 'Hide',
                    hiden: false
                }
            })
        }
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.toggleHide}> {this.state.buttonText} </button>
                <p>{this.state.text}</p>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


// const appRoot = document.getElementById('app')

// const app = {
//     title: 'Build-it App',
//     details: 'These are the details specified.',
//     buttonText: 'Hide Details',
//     hideDetails: true
// }

// const toggleDetails = () =>{
//     if(app.hideDetails){
//         app.hideDetails =!app.hideDetails
//         app.buttonText = 'Show Details'
//     } else {
//         app.hideDetails =!app.hideDetails
//         app.buttonText = 'Hide Details'
//     }
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleDetails}>{app.buttonText}</button>
//             {app.hideDetails ? <p>here are some details</p> : ''}
//         </div>
//         )
//     ReactDOM.render(template, appRoot)
// }

// render()