import { useMemo, useId } from 'react';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import './index.less';
import img1 from './assets/1.webp';
import img2 from './assets/2.webp';
import img3 from './assets/3.webp';
import img4 from './assets/4.webp';

const Banner = () => {

    const list = useMemo(() => [img1,img2,img3,img4], [])


    return (
        <div className='banner'>
            <Swiper
                className='swiper'
                autoplay
                interval={3000}
                circular
            >
                {
                    list.map((item) => {
                        return (
                            <SwiperItem className='swiperItem' key={useId()}>
                                <div className='imgBox'>
                                    <Image className='img' mode='scaleToFill' src={item} webp />
                                </div>
                            </SwiperItem>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Banner;