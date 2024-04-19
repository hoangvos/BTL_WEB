import React, { useState } from 'react'
import style from './Categories.module.css'
export default function CategoryHome() {
  // [, , , , , , , , , ]
  const [indexActive, setIndexActive] = useState(0);

  const handleClickParent = (index) => {
    setIndexActive(index);
  }

  return (
    <div className={`${style.container}`}>
      <div className={`${style.parent}`}>
        <div
          className={indexActive === 0 && style.parentActive}
          onClick={() => { handleClickParent(0) }}><a href="http://localhost:3000/">NAM</a></div>
        <div
          className={indexActive === 1 && style.parentActive}
          onClick={() => { handleClickParent(1) }}><a href="http://localhost:3000/">NỮ</a></div>
        <div
          className={indexActive === 2 && style.parentActive}
          onClick={() => { handleClickParent(2) }}><a href="http://localhost:3000/">BÉ TRAI</a></div>
        <div
          className={indexActive === 3 && style.parentActive}
          onClick={() => { handleClickParent(3) }}><a href="http://localhost:3000/">BÉ GÁI</a></div>
        <div
          className={indexActive === 4 && style.parentActive}
          onClick={() => { handleClickParent(4) }}><a href="http://localhost:3000/">PHỤ KIỆN</a></div>
      </div>
      {/* man */}
      {indexActive === 0 &&
        <div className={`${style.children}`}>
          <div className={`${style.childrenContent} `}>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/hunter-nam.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Hunter</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/sandal-nam.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Sandal</a>
            </div>
            <div>
              <a href="http://localhost:3000/"><img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/giay-the-thao-nam.svg?v=612' /></a>
              <a href="http://localhost:3000/">Giày Thể Thao</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/hunter-running-nam.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Giày Chạy Bộ</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src="https://theme.hstatic.net/1000230642/1001205219/14/giay-da-banh.svg?v=612" />
              </a>
              <a href="http://localhost:3000/">Giày Đá Banh</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src="https://theme.hstatic.net/1000230642/1001205219/14/giay-tay-nam.svg?v=612" />
              </a>
              <a href="http://localhost:3000/">Giày Tây</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/dep-nam.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Dép</a>
            </div>
          </div>
        </div>
      }
      
      {/* woman */}
      {indexActive === 1 &&
        <div className={`${style.children} `}>
          <div className={`${style.childrenContent}`}>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/hunter-nu.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Hunter</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/gosto.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">GOSTO</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/sandal-nu-1.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Sandal</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/giay-bup-be-nu.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Giày Búp Bê</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/giay-thoi-trang-nu-1.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Giày Thời Trang</a>
            </div>
            
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/hunter-running-jogging.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Giày Chạy Bộ - Đi Bộ</a>
            </div>
            
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/giay-the-thao-nu.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Giày Thể Thao</a>
            </div>
            
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/dep-nu.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Dép</a>
            </div>
            
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/tui-xach.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Túi Xách</a>
            </div>
          </div>
        </div>
      }
      {/* boy */}
      {indexActive === 2 &&
        <div className={`${style.children}`}>
          <div className={`${style.childrenContent}`}>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/giay-the-thao-be-trai.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Giày Thể Thao</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/sandal-be-trai.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Sandal</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/dep-be-trai.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Dép</a>
            </div>
          </div>
        </div>
      }
      {/* girl */}
      {indexActive === 3 &&
        <div className={`${style.children}`}>
          <div className={`${style.childrenContent}`}>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/giay-bup-be-be-gai.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Giày Búp Bê</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/giay-the-thao-be-gai.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Giày Thể Thao</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/sandal-be-gai.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Sandal</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/dep-be-gai.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Dép Bé Gái</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/giay-tap-di.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Giày Tập Đi</a>
            </div>
          </div>
        </div>
      }
      {/* phu kien */}
      {indexActive === 4 &&
        <div className={`${style.children}`}>
          <div className={`${style.childrenContent}`}>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/balo-tui-xach.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Balo - Túi xách</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/ao-thun.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Áo Thun</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/tui-tote.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Túi Tote</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/vo.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Tất vớ</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/non.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Nón</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/vi-nam.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Ví Nam</a>
            </div>
            <div>
              <a href="http://localhost:3000/">
                <img alt="anh" src='https://theme.hstatic.net/1000230642/1001205219/14/lot-de.svg?v=612' />
              </a>
              <a href="http://localhost:3000/">Lót Đế</a>
            </div>
          </div>
        </div>
      }
    </div>
      
  )
}
