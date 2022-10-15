import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "./PostForm.css"

// const galleryStyle = {
//     border: 'none',
//     margin: 0,
//     color: '#fff',
//     fontWeight: 'bold',
//     padding: '16px 20px',
//     position: 'absolute',
//     top: '35px',
//     right: '200px',
//     background: '#7bc74d',
// }
const postBtnStyle = {
    border: 'none',
    margin: 0,
    color: '#fff',
    // fontWeight: 'bold',
    padding: '16px 20px',
    background: '#7D4C92 ',
    width: '400px',
    borderRadius:'15px',
    fontSize:'25px',
    fontFamily: 'Russo One,sans-serif'
}
const parentDiv1 = {
    align: 'center',
    margin: '100px auto auto auto',
    textAlign: 'center',
    border: '5px solid black',
    borderRadius:'30px 0px 30px 0px'
}

const formStyle = {
    width: '500px',
    // border: '1px solid Blue',
    margin: '10px auto 0px 0px',
    textAlign: 'center',
    padding: '30px 40px 30px 40px',
    color: 'green',
}
const inputFields = {
    width: '100%',
    fontFamily: 'arial',
    padding: '4px',
    color:'green',
    backgroundColor:'#CCF3EE'
}

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const image = this.getImage.value;
        localStorage.setItem('title', title);
        localStorage.setItem('message', message);
        localStorage.setItem('image', image);
        this.getTitle.value = '';
        this.getMessage.value = '';
        this.getImage.value = '';
        window.location.reload(false);
    }
    render() {
        return (
        <div>
            <div style={{align: 'center',margin: '380px auto auto auto',textAlign: 'center'}} >
                    <h1 style={{ color: '#000080', fontFamily:'Dancing Script,cursive,Kalam,cursive', fontSize:'3.25rem', fontWeight:'bolder' }}><span style={{ color: '#FF9933' }}>India</span> Tours<span style={{ color: '#138808' }}> Gallery</span>
                    </h1>
                    <p style={{fontFamily:'Amatic SC,cursive', fontSize:'38px', fontWeight:'bolder'}}>Post Your Favouraite Image</p>
                </div>
                <div class="split left">
                    <div class="centered">
                        <div style={ parentDiv1 }>
                            <h1 style={{margin:'50px 0px 0px 10px', fontFamily: 'Cinzel,serif', fontWeight:'bold'}}>Create a New Post</h1>
                            <form onSubmit={this.handleSubmit} style={formStyle}>
                                <label style={{fontSize:'25px', fontWeight:'bold', fontFamily:'Alegreya,serif'}}>Title</label>
                                <input required type="text" placeholder="Enter Image Title" ref={(input) => this.getTitle = input} style={inputFields}
                                /><br /><br />
                                <label style={{fontSize:'25px', fontWeight:'bold', fontFamily:'Alegreya,serif'}}>URL</label>
                                <input required type="text" placeholder="Paste your image url here" ref={(input) => this.getImage = input} style={inputFields}
                                /><br></br>
                                <br></br>
                                <label style={{fontSize:'25px', fontWeight:'bold', fontFamily:'Alegreya,serif'}}>Description</label>
                                <textarea required rows="5" cols="28" placeholder="Enter a Comment" ref={(input) => this.getMessage = input}  style={inputFields}/>
                                <br /><br />
                                <button style={postBtnStyle} >Post</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="split right">
                    <div class="centered">
                        <div style={{ margin: '40px auto 50px auto' }}>
                            <h1 style={{fontFamily:'Frijole,cursive,Kalam,cursive', fontSize:'50px'}}>{localStorage.getItem('title')}</h1>
                        </div>
                        {/* <div id='card'>
                            <img src={localStorage.getItem('image')} alt={'C - language'} />
                            <div style={{ margin: '50px auto 0px auto' }} id='contain'>
                                <p style={{ width: '50%', margin: '0px auto' }} >{localStorage.getItem('message')}</p>
                            </div>
                        </div> */}
                        <div className="card" style={{width:"40rem", height:'35rem', borderRadius: '10px' ,border:'0px solid black'}}>
                            <img src={localStorage.getItem('image')} alt={'Could Find an img'} />
                                <div className="card-body">
                                    {/* <h5 class="card-title">Card title</h5> */}
                                    <p style={{width:'100%' , margin: '0px 0px 8px 0px', fontFamily:'Kalam,cursive', fontWeight:'bold' }} >{localStorage.getItem('message')}</p>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}
export default PostForm;
