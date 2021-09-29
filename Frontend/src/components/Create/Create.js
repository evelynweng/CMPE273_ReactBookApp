import React, {Component} from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookies'
import '../../App.css';

class Create extends Component{
    constructor(props){
        super(props);
        //BookID Title Author
        this.state = {
            bookId  : undefined,
            title : undefined,
            author: undefined,
            message: undefined,
            created: false
        }
        this.bookidChangeHandler = this.bookidChangeHandler.bind(this);
        this.titleChangeHandler = this.titleChangeHandler.bind(this);
        this.authorChangeHandler = this.authorChangeHandler.bind(this);
        this.submitCreate = this.submitCreate.bind(this);

        
    }
    componentWillMount(){
        this.setState({
            bookId : undefined,
            title : undefined,
            author: undefined,
            message: undefined,
            created: false
        })
    }

    bookidChangeHandler = (e) =>{
        this.setState({
            bookId:e.target.value,
            message:undefined
        })
    }
    titleChangeHandler = (e) =>{
        this.setState({
            title:e.target.value,
            message:undefined
        })
    }
    authorChangeHandler = (e) =>{
        this.setState({
            author:e.target.value,
            message:undefined
        })
    }
    submitCreate = (e) => {
        var headers = new Headers();
        e.preventDefault();

        const data = {
            BookID: this.state.bookId,
            Title: this.state.title,
            Author:this.state.author
        }

        if (!this.state.bookId || !this.state.title || !this.state.author) {
            console.log("empty input");
            this.setState({
                message: 'Please enter valid BookId/Title/Author'
            })
            return;
        }

        axios.defaults.withCredentials = true;
        axios.post('/create',data).then(response =>{
            this.setState({
                message:response.data,
                created:true
            })
        }).catch(error=>{
            console.log("create fail: ", error.response.data )
            this.setState({
                message:error.response? error.response.data : `${error}`
            })
        });

    }

    render(){
        let redirectVar = null;
        if(!cookie.load('cookie')){
            redirectVar = <Redirect to= "/login"/>
        }
        else if (this.state.created){
            redirectVar = <Redirect to = "/home"/>
        }
        return(
            <div>
                {redirectVar}
                <br/>
                <div class="container">
                    <form onSubmit = {this.submitCreate}>
                        <div style={{width: '30%'}} class="form-group">
                            <input  onChange = {this.bookidChangeHandler} type="text" class="form-control" name="BookID" placeholder="Book ID"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} class="form-group">
                                <input  onChange = {this.titleChangeHandler} type="text" class="form-control" name="Title" placeholder="Book Title"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} class="form-group">
                                <input onChange = {this.authorChangeHandler} type="text" class="form-control" name="Author" placeholder="Book Author"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}}>
                            <button class="btn btn-success" type="submit">Create</button>
                        </div> 
                    </form>
                </div>
                <div>
                <div class={this.state.message? "visible": "invisible"}>{this.state.message}</div>
                </div>
            </div>
        )
    }
}

export default Create;