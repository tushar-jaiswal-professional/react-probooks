import React, { Component } from 'react'

export default class Book extends Component {
    selectType = (e) => {
        let obj
        if(e.target.value==='read'){
            obj = { type: "read", id: this.props.id }
        }
        else if(e.target.value==='like'){
            obj = { type: "like", id: this.props.id }
        }
        else if(e.target.value==='dislike'){
            obj = { type: "dislike", id: this.props.id }
        }
        else if(e.target.value==='del'){
            obj = { type: "all", id: this.props.id }
        }
        this.props.setBook(obj);
    }
    render() {
        return (
            <div className="book-cont">
                <img src={this.props.img} alt="" />
                <p className="bname">{this.props.title}</p>
                <p className="bauthor">{this.props.author}</p>
                <div className="arrow"></div>
                <select onChange={this.selectType}>
                    <option className="dis" value="non">Move to...</option>
                    <option value="read">Read &#128214;</option>
                    <option value="like">Like &#128077;</option>
                    <option value="dislike">Dislike &#128078;</option>
                    <option value="del">Delete &#10060;</option>
                </select>
            </div>
        )
    }
}