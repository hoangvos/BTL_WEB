import React from 'react'
import style from './Header.module.css'
export default function NavRow() {
  return (
    <nav
      className={`${style.nav}`}>
      
      <div className={`${style.navContent}`}>

        <div className={style.hasSubmenu}><a href="http://localhost:3000/">VỀ BITI'S </a></div>
        <div className={style.hasSubmenu}><a href="http://localhost:3000/">NAM</a>
          <i className={`${style.iconDown} bi bi-chevron-down`}></i>
          <div className={`${style.menuListSubmain} shadow flex-column`}>
            <div>
              <a href="http://localhost:3000/">Hunter</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Sandal</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Giày thể thao</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Giày chạy bộ</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Giày đá banh</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Giày tây</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Dép</a>
            </div>
          </div>
        </div>
        <div className={style.hasSubmenu}><a href="http://localhost:3000/">NỮ</a>
          <i className={`${style.iconDown} bi bi-chevron-down`}></i>
          <div className={`${style.menuListSubmain} shadow flex-column`}>
            <div>
              <a href="http://localhost:3000/">Hunter</a>
            </div>
            <div className={`${style.hasSubsubmenu} d-flex justify-content-between`}>
              <a href="http://localhost:3000/">GOSTO</a>
              <i className={`${style.iconRight} bi bi-chevron-right`}></i>
              <div className={`${style.menuListSubsubmain} shadow flex-column`}>
                <div>
                  <a href="http://localhost:3000/">Giày cao gót</a>
                </div>
                <div>
                  <a href="http://localhost:3000/">Giày thời trang</a>
                </div>
                <div>
                  <a href="http://localhost:3000/">Sandal</a>
                </div>
                <div>
                  <a href="http://localhost:3000/">Dép</a>
                </div>
                <div>
                  <a href="http://localhost:3000/">Túi xách - ví</a>
                </div>
              </div>
            </div>
            <div>
              <a href="http://localhost:3000/">Sandal</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Giày búp bê</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Giày thời trang</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Giày chạy bộ - đi bộ</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Giày thể thao</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Dép</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Túi xách</a>
            </div>
          </div>
        </div>
        <div className={style.hasSubmenu}><a href="http://localhost:3000/">BÉ TRAI</a>
          <i className={`${style.iconDown} bi bi-chevron-down`}></i>
          <div className={`${style.menuListSubmain} shadow flex-column`}>
            <div>
              <a href="http://localhost:3000/">Sandal</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Giày thể thao</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Dép</a>
            </div>
          </div>
        </div>
        <div className={style.hasSubmenu}><a href="http://localhost:3000/">BÉ GÁI</a>
          <i className={`${style.iconDown} bi bi-chevron-down`}></i>
          <div className={`${style.menuListSubmain} shadow flex-column`}>
            <div>
              <a href="http://localhost:3000/">Giày búp bê</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Giày thể thao</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Sandal</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Dép bé gái</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Giày tập đi</a>
            </div>
            
            
          </div>
        </div>
        <div className={style.hasSubmenu}><a href="http://localhost:3000/">PHỤ KIỆN</a>
          <i className={`${style.iconDown} bi bi-chevron-down`}></i>  
          <div className={`${style.menuListSubmain} shadow flex-column`}>
            <div>
              <a href="http://localhost:3000/">Balo - Túi xách</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Áo thun</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Túi Tote</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Tất vớ</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Nón</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Ví nam</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Lót đế</a>
            </div>
            
          </div>
        </div>
        <div className={style.hasSubmenu}><a href="http://localhost:3000/">CHIA SẺ</a>
          <i className={`${style.iconDown} bi bi-chevron-down`}></i>
          <div className={`${style.menuListSubmain} shadow flex-column`}>
            <div>
              <a href="http://localhost:3000/">Xu hướng thời trang</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Tư vấn chọn size</a>
            </div>
            <div>
              <a href="http://localhost:3000/">Kinh nghiệm hay</a>
            </div>          
          </div>
        </div>
      </div>
    </nav>
  )
}

