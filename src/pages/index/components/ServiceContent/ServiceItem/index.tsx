
import { Image } from '@tarojs/components';
import { Service } from '../type';
import './index.less';

const ServiceItem = (props: Service) => {



    const { tag, title, text, img } = props;

  return (
    <div className="serviceItem">
        <div className="tag">{tag}</div>
        <div className='title'>{title}</div>
        <div className='text'>{text}</div>
        <div className='imgBox'>
            {/* <div className='img'>
                <Image className='img' mode='aspectFit' src={img} />
            </div> */}
            <Image className='img' mode='aspectFill' src={img} />
        </div>
    </div>
  );
};

export default ServiceItem;
