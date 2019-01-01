import React, { Component } from 'react';



class Cloudinary extends Component {
    constructor() {
        super()
        this.state = {
            cloudImg: ''
        }
    }

    uploadWidget = () => {
        window.cloudinary.openUploadWidget(
            { cloud_name: 'dzyljunq0',
            upload_preset: 'pzerapqx',
            multiple: 'false',
            autoMinimize: true,
            showCompletedButton: true,
            
        },
        (error, result) => {
            if (result.info.secure_url) {
                this.setState({
                    //result.info.secure_url is the image adress you need to display the image
                    cloudImg: result.info.secure_url
                })
            }
            
        })}

    render() {

        return (
            <div>
                <button onClick={this.uploadWidget}>Upload Image</button>
            </div>
        )
    }
  }

export default Cloudinary
