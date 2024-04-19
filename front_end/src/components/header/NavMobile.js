import React, { useEffect, useState } from 'react';
import style from './Header.module.css';
import { motion } from 'framer-motion';
function Container({ indexLayer, layoutLocal, handleBackMenu, handleNextMenu }) {
  return (
    <>
      {layoutLocal.prev ?
        <>
          <div
            onClick={handleBackMenu}
            className={style.goBack}
          >
            <i className="bi bi-chevron-left"></i>
            <span>
              QUAY VỀ
            </span>
          </div>
          {layoutLocal.next.map((item, index) => (
            <>
              {index === 0 && //first index
                <div
                  className={`${style.menuItem} ${style.mainMenuItem} `}
                >
                  <a href="http://localhost:3000/" className={`${style.menuItemLink}`}>
                    {`Xem tất cả "${layoutLocal.data}"`}
                  </a>
                </div>
              }
              <div //add item
                className={`${style.menuItem} `}
                onClick={() => item.next && handleNextMenu(indexLayer, layoutLocal, index)}
              >
                  
                {item.next ?
                  <>
                    <span>
                      {item.data}
                    </span>
                    <i className="bi bi-chevron-right"></i>
                  </>
                  :
                  <a href="http://localhost:3000/" className={`${style.menuItemLink}`}>{item.data}</a>
                }
              </div>
            </>
          ))}
        </>
        :
        <>
          {layoutLocal.next.map((item, index) => (
          <div
            className={`${style.menuItem} ${style.mainMenuItem} `}
            onClick={() => handleNextMenu(indexLayer, layoutLocal, index)}
          >
            <span>
              {item.data}
            </span>
            {item.next && //having next
              <i className="bi bi-chevron-right"></i>
            }
          </div>
        ))}
        </>
      }
    </>
  )
}
export default function NavMobile() {
  const [show, setShow] = useState(false);
  class Node {
    constructor(data, prev = null, next = null) {
      this.data = data;
      this.prev = prev;
      this.next = next;
    }
  }
  const root = new Node("");

  // const [layout, setLayout] = useState(root);
  const layout = root;
  
  
  root.next = [
    new Node("VỀ BITI'S", root),
    new Node("NAM", root),
    new Node("NỮ", root),
    new Node("BÉ TRAI", root),
    new Node("BÉ GÁI", root),
    new Node("PHỤ KIỆN", root),
    new Node("CHIA SẺ", root)
  ]

  root.next[0].next = [
    new Node("Câu Chuyện Bitis", root.next[0]),
    new Node("Bước Tiến Phát Triển", root.next[0]),
    new Node("Hoạt Động", root.next[0]),
    new Node("Tuyển Dụng", root.next[0]),
    new Node("Tin Tức", root.next[0])
  ]
  root.next[1].next = [
    new Node("Hunter", root.next[1]),
    new Node("Sandal", root.next[1]),
    new Node("Giày Thể Thao", root.next[1]),
    new Node("Giày Chạy Bộ", root.next[1]),
    new Node("Giày Đá Banh", root.next[1]),
    new Node("Giày Tây", root.next[1]),
    new Node("Dép", root.next[1])
  ]
  root.next[2].next = [
    new Node("Hunter", root.next[2]),
    new Node("GOSTO", root.next[2]),
    new Node("Sandal", root.next[2]),
    new Node("Giày Búp Bê", root.next[2]),
    new Node("Giày Thời Trang", root.next[2]),
    new Node("Giày Chạy Bộ - Đi Bộ", root.next[2]),
    new Node("Giày Thể Thao", root.next[2]),
    new Node("Dép", root.next[2]),
    new Node("Túi Xách", root.next[2])
  ]
  root.next[2].next[1].next = [
    new Node("Giày Cao Gót", root.next[2].next[1]),
    new Node("Giày Thời Trang", root.next[2].next[1]),
    new Node("Sandal", root.next[2].next[1]),
    new Node("Dép", root.next[2].next[1]),
    new Node("Túi Xách - Ví", root.next[2].next[1])
  ]
  root.next[3].next = [
    new Node("Giày thể Thao", root.next[3]),
    new Node("Sandal", root.next[3]),
    new Node("Dép", root.next[3])
  ]
  root.next[4].next = [
    new Node("Giày Búp Bê", root.next[4]),
    new Node("Giày Thể Thao", root.next[4]),
    new Node("Sandal", root.next[4]),
    new Node("Dép Bé Gái", root.next[4]),
    new Node("Giày tập đi", root.next[4])
  ]
  root.next[5].next = [
    new Node("Balo - Túi Xách", root.next[5]),
    new Node("Áo Thun", root.next[5]),
    new Node("Túi Tote", root.next[5]),
    new Node("Tất Vớ", root.next[5]),
    new Node("Nón", root.next[5]),
    new Node("Ví Nam", root.next[5]),
    new Node("Lót Đế", root.next[5])
  ]
  root.next[6].next = [
    new Node("Xu Hướng Thời Trang", root.next[6]),
    new Node("Tư Vấn Chọn Size", root.next[6]),
    new Node("Kinh Nghiệm Hay", root.next[6])
  ]
  
  const handleNextMenu = (indexLayer, layoutLocal, index) => {
    const componentsLength = components.length;
    setComponents(prevComponents => [
      ...prevComponents.slice(0, indexLayer + 1),
      <Container
        indexLayer={componentsLength}
        layoutLocal={layoutLocal.next[index]}
        handleBackMenu={handleBackMenu}
        handleNextMenu={handleNextMenu}
      />
    ]);
  }
  const handleBackMenu = () => {
    setComponents(prevComponents => prevComponents.slice(0, -1))
  }
  const [components, setComponents] = useState([
    <Container
      indexLayer={0}
      layoutLocal={layout}
      handleBackMenu={handleBackMenu}
      handleNextMenu={handleNextMenu}
    />]);
  
  useEffect(() => {
    
    const navMobileContentElement = document.querySelector(`.${style.navMobileContent}`);
    if (navMobileContentElement) {
      navMobileContentElement.style.transform = `translateX(calc(${components.length - 1}*(-90vw - 4vw)))`
    }
    
  }, [components])

  useEffect(() => {
    setComponents([
      <Container
        indexLayer={0}
        layoutLocal={layout}
        handleBackMenu={handleBackMenu}
        handleNextMenu={handleNextMenu}
      />])
  }, [show])

  return (
    <div>
      <div
        className={`${style.menuIcon}`}
        onClick={() => {
          const body = document.querySelector('body');
          if (!show) {
            body.style.overflow = "hidden";
          } else {
            body.style.overflow = "visible";
          }
          show ? setShow(false) : setShow(true);
        }}
      >
        <i className="bi bi-list"></i>
      </div>
      {
        show && 
        <motion.div
            className={`${style.navMobile} shadow`}
            initial={{ x: '-100vw' }}
            animate={{ transform: 'translateX(-50%)', left: '50%'}}
            transition={{ type: 'tween', duration: '0.5'}}
            
          >
          <div className={`${style.navMobileContent}`}>
            {components.map((component, index) => (
              <div
                className='w-100'
                style={{marginLeft: '4vw'}}
              >{component}</div>
            ))}
          </div>
        </motion.div>
      }
    </div>
  
  )
}

