import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SmallPalette.css'

export class SmallPalette extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <>
            <Link to={`${this.props.link}`} className='smallpalette-container'>
                <div className="colors">
                    <div className="color" style={{background: this.props.col1}}></div>
                    <div className="color" style={{background: this.props.col2}}></div>
                    <div className="color" style={{background: this.props.col3}}></div>
                    <div className="color" style={{background: this.props.col4}}></div>
                    <div className="color" style={{background: this.props.col5}}></div>
                    <div className="color" style={{background: this.props.col6}}></div>
                    <div className="color" style={{background: this.props.col7}}></div>
                    <div className="color" style={{background: this.props.col8}}></div>
                    <div className="color" style={{background: this.props.col9}}></div>
                </div>
                    <div className="name">{this.props.name}</div>
            </Link>
    </>
        )
    }
}

export default SmallPalette