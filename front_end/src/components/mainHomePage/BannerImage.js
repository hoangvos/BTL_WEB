import React, {useEffect, useState} from 'react'
import style from './MainHomePage.module.css';
import bannerBitis from '../../assets/banner/banner_bitis.webp';
import bannerDiscount from '../../assets/banner/banner_discount.webp';
import bannerDocQuyen from '../../assets/banner/banner_docquyen.webp';
import bannerRong from '../../assets/banner/banner_rong.webp';

function Button({isActive, onDotClick}) {
  return (
    <button
      className={`${style.dot} ${isActive && style.active}`}
      onClick={onDotClick}
      ></button>
  );
}

function ImageBanner({ path}) {
  return (
    <img src={path} alt='xxx' className={`${style.bannerImage}`} />
  );
}

export default function BannerImage() {
  const [currentActive, setCurrentActive] = useState(0);

  const handleClick = (index) => {
    setCurrentActive(index);
  }

  useEffect(() => {
    // Thiết lập setInterval để tự động thay đổi currentActive sau mỗi khoảng thời gian
    const interval = setInterval(() => {
      // Tính toán currentActive mới
      const nextActive = (currentActive + 1) % 4; // Đặt 4 là số lượng ImageBanner
      setCurrentActive(nextActive);
    }, 5000); // Thay đổi mỗi 5 giây (5000ms)

    // Lưu ý: Để tránh memory leak, hãy clear interval khi component bị unmount
    return () => clearInterval(interval);
  }, [currentActive]); // Thêm currentActive vào dependency array để useEffect được gọi lại khi currentActive thay đổi

  return (
    <div>
      <div className={`${style.banner} position-relative`}>
        <div
          className={`${style.bannerImages} d-flex`}
          style={{ transform: `translateX(-${currentActive * 100}%)` }}  
        >
          <ImageBanner path={bannerBitis}></ImageBanner>
          <ImageBanner path={bannerDiscount}></ImageBanner>
          <ImageBanner path={bannerDocQuyen}></ImageBanner>
          <ImageBanner path={bannerRong}></ImageBanner>
        </div>
        <div className={`${style.bannerControl} position-absolute d-flex gap-4`}>
          <Button isActive={currentActive === 0} onDotClick={() => handleClick(0)}></Button>
          <Button isActive={currentActive === 1} onDotClick={() => handleClick(1)}></Button>
          <Button isActive={currentActive === 2} onDotClick={() => handleClick(2)}></Button>
          <Button isActive={currentActive === 3} onDotClick={() => handleClick(3)}></Button>
        </div>
      </div>
    </div>
  )
}

