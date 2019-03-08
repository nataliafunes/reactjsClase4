import React from 'react';
import ReactDom from 'react-dom';

class HacerPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: '',
            estado: ''
        }
        this.doPost = this.doPost.bind(this);
    }

    doPost() {
        this.setState({ estado: 'aguarde...'});
        alert(this.state.texto);

        let self = this;

        fetch('http://5c80085012b7310014de2b7d.mockapi.io/api/v2/Metricas',         
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ dato: this.state.texto })
            }
        )
        .then(function(resp) {
            console.log(resp.statusText);
            self.setState({
                estado: resp.statusText
            });
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={z => this.setState({texto: z.target.value})} />
                <input type="button" value="ENVIAR" onClick={this.doPost} />
                <h1>{this.state.estado}</h1>
            </div>
        );
    }
}

class HacerGet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};        
    }

    componentDidMount() {
        let self = this;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/arteysoft');
        xhr.send();
        xhr.onload = function() {
            if (xhr.status != 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                let objResp = JSON.parse(xhr.responseText);
                self.setState({
                    login: objResp.login,
                    name: objResp.name,
                    imagen: objResp.avatar_url
                });
            }
        }
    }
    
    render() {
        return (
            <div>
                <h1>Datos de la cuenta mia de github</h1>
                <h2>{this.state.login}</h2>
                <h2>{this.state.name}</h2>
                <img src={this.state.imagen}></img>
            </div>
        )
    }
}

ReactDom.render(
    <HacerGet></HacerGet>, 
    document.getElementById('root')
);
