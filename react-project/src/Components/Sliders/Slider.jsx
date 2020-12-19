import React from 'react';
import '../../styles/slider.css';

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: ['https://wallpapershome.ru/images/pages/pic_h/19791.jpg',
            'https://vestikavkaza.ru/upload/2018-06-14/15289876195b227fe385b9a1.36412470.jpg',
            'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/14122642/2018-06-14T152053Z_1329745415_RC1AFA130600_RTRMADP_3_SOCCER-WORLDCUP-RUS-SAU.jpg', 
            'https://img.fifa.com/image/upload/t_l1/dc4p6aiir4kvua3v9bcr.jpg',
            'https://img.fifa.com/image/upload/t_l1/wwloatfdd6sszayof1et.jpg'
            ],
            imageIndex: 0,
            isMode: false
        };
        this.nextHandler = this.nextHandler.bind(this);
    }
    nextHandler(event) {
        let newIndex = this.state.imageIndex;
        if(event.currentTarget.dataset.direction === 'next') {
            if(newIndex < this.state.images.length - 1) {
                newIndex = this.state.imageIndex + 1;
            }
        } else {
            if(newIndex > 0) {
                newIndex = this.state.imageIndex - 1;
            }
        }
        this.setState({imageIndex: newIndex});
        setInterval(() => this.nextHandler, 2000);
    }
    render() {
        return(
            <div className='slider'>
                <div>
                    <button className='btn-prev' data-direction='prev' onClick={this.nextHandler.bind(this)}>&#60;</button>
                </div>
                <div>
                    <img src={this.state.images[this.state.imageIndex]} alt='#'/>
                </div>
                <div>
                    <button className='btn-next' data-direction='next' onClick={this.nextHandler.bind(this)}>&#62;</button>
                </div>
            </div>
        );
    }
}

export default Slider;