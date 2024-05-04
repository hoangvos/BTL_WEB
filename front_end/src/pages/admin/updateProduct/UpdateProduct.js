import React, { useEffect, useRef, useState } from 'react'
import style from './UpdateProduct.module.css'
import axios from 'axios';
import Header from '../component/Header';
import { useParams } from 'react-router-dom';
export default function UpdateProduct() {
  const productID = useParams().productID;
  const [product, setProduct] = useState({});
  const productName = useRef('');
  const productPrice = useRef('');
  const productGender = useRef('');
  const productType = useRef('');
  const description = useRef('');
  const keyImage = useRef(0);
  const [images, setImages] = useState([]);
  const [indexDisplayImage, setindexDisplayImage] = useState(0);
  const productIndexMainImage = useRef(-1);
  const keySize = useRef(0);
  const [sizeInputs, setSizeInputs] = useState([{ size: '', soluong: '', key: 0 }]);
  
  function removeVietnameseAccent(str) {
    // Chuyển chuỗi tiếng Việt thành chuỗi không dấu
    let unicode = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Chuyển chuỗi thành chuỗi viết hoa và thay thế khoảng trắng bằng dấu gạch dưới
    return unicode.toUpperCase().replace(/\s/g, "_");
  }
  //get product
  useEffect(() => {
    axios
    .get(`http://localhost/BE/?c=product&a=list&search=${productID}`)
    .then((result) => {
      productName.current = result.data[0].ptitle;
      productPrice.current = result.data[0].pprice.replace(/,/g, '');
      productGender.current = removeVietnameseAccent(result.data[0].pgender);
      productType.current = removeVietnameseAccent(result.data[0].pkind);
      keyImage.current++;
      productIndexMainImage.current = 0;
      console.log(result.data[0]);
      setProduct(result.data[0]);
    })
  }, [])
  //get sub images
  useEffect(() => {
    axios
      .get(`http://localhost/BE/?c=subImage&a=list&search=${productID}`)
      .then((result) => {
        const subImages = [];
        result.data.forEach((subImage, index) => {
          keyImage.current++;
          subImages.push({ id: subImage.id, productID: subImage.productID, link: subImage.img, key: keyImage.current });
        })
        setImages(subImages)
      })
  }, [product])
  //get size of product
  useEffect(() => {
    axios
    .get(`http://localhost/BE/?c=size&a=list&search=${productID}`)
    .then((result) => {
      const productSizes = []
      result.data.forEach((size, index) => {
        productSizes.push({id: size.id, productID: size.productID, size: size.size, soluong: size.soluong, key: keySize.current});
        keySize.current++;
      })
      setSizeInputs(productSizes);
    })
  }, [product])
  //get description of product
  useEffect(() => {
    axios
      .get(`http://localhost/BE/?c=description&a=list&search=${productID}`)
      .then((result) => {
        if (result.data.length === 0 ) {
          return;
        } else {
          description.current = result.data[0];
        }
      })
  }, [product])
  
  const handleClickAddSize = () => {
    keySize.current++;
    setSizeInputs([...sizeInputs, {id: '', productID: '', size: '', soluong: '', key: keySize.current}]);
  }
  const handleClickDeleteSize = (index) => {
    // const newSizes = sizeInputs.filter((sizeInput, i) => i !== index);
    // setSizeInputs(newSizes);
    const sizeID = sizeInputs[index].id;
    if (window.confirm(`Xác nhận xóa size ${sizeInputs[index].size}`)) {
      axios
        .delete(`http://localhost/BE/?c=size&a=delete&id=${sizeID}`)
        .then((result) => {
          if (result.data) {
            if (window.confirm('Xóa size thành công. Bấm đồng ý để reload lại trang')) {
              window.location.reload();
            }
          } else {
            alert('Xóa size thất bại')  
          }
        })
    } else {
      return;
    }
  }
  
  const categories = [
    'NAM:HUNTER',
    'NAM:SANDAL',
    'NAM:GIAY_THE_THAO',
    'NAM:GIAY_CHAY_BO',
    'NAM:GIAY_DA_BANH',
    'NAM:GIAY_TAY',
    'NAM:DEP',
    'NU:HUNTER',
    'NU:SANDAL',
    'NU:GIAY_BUP_BE',
    'NU:GIAY_THOI_TRANG',
    'NU:GIAY_CHAY_BO',
    'NU:GIAY_THE_THAO',
    'NU:DEP',
    'BE_TRAI:SANDAL',
    'BE_TRAI:GIAY_THE_THAO',
    'BE_TRAI:DEP',
    'BE_GAI:GIAY_BUP_BE',
    'BE_GAI:GIAY_THE_THAO',
    'BE_GAI:SANDAL',
    'BE_GAI:DEP',
    'BE_GAI:GIAY_TAP_DI',
];
  

  useEffect(() => {
    if (images.length !== 0) {
      const mainImage = document.querySelector(`.${style.mainImageContainer} img`);
      mainImage.src = images[indexDisplayImage].link;
    }
  }, [indexDisplayImage])
  
  const handleClickSubImage = (index) => {
    setindexDisplayImage(index);
  }

  //btn delete in image which is displayed
  const handleClickDeleteImage = () => {
    //if the image which is displayed is mainImage -> not allow
    if (indexDisplayImage === productIndexMainImage.current) {
      alert('Không thể xóa ảnh chính');
      return;
    }
    // console.log(images[indexDisplayImage])
    //remove image which is displayed from images
    const newImages = images.filter((image, index) => index !== indexDisplayImage);
    setImages(newImages);
    setindexDisplayImage(0);
  }


  const [showInputAddImage, setShowInputAddImage] = useState(false);
  const handleClickAddImage = () => {
    setShowInputAddImage(true);
  }
  const handleClickCancelSubmitImage = () => {
    setImages((prevImages) => {
      prevImages = prevImages.filter(image => image.link !== '');
      return prevImages;
    });
    setShowInputAddImage(false);
  }
  const handleClickSubmitImage = () => {
    setImages((prevImages) => {
      prevImages = prevImages.filter(image => image.link !== '');
      return prevImages;
    });
    setShowInputAddImage(false);
  }
  const handleClickAddInputImage = () => {
    keyImage.current++;
    setImages([...images, {id: '', productID: '', link: '', key: keyImage.current}]);
  }

  
  const sizes = sizeInputs.filter(sizeInput => sizeInput.size !== '' && sizeInput.soluong !== '');
  const subImages = images.filter((image, index) => index !== productIndexMainImage.current);
  const btnSubmitAddProduct = () => {
    
    //check input empty
    if (productName.current === ''
      || productIndexMainImage.current === -1
      || productPrice.current === ''
      || productGender.current === ''
      || productType.current === ''
      || sizes.length === 0
      || subImages.length === 0
      || description.current === '') {
      alert("Vui lòng điền đầy đủ thông tin sản phẩm");
      return;
    }
    
    //check size equal
    for (let i = 0; i < sizes.length; i++) {
      for (let j = i + 1; j < sizes.length; j++) {
        if (sizes[i].size === sizes[j].size) {
          alert('Size không được trùng nhau');
          return;
        }
      }
    }


    const sendData = {
      product:{
        ptitle: productName.current,
        pimg: images[productIndexMainImage.current].link,
        pprice: productPrice.current,
        pgender: productGender.current,
        pkind: productType.current,
      },
      sizes: sizes,
      subImages: subImages.map(image => image.link),
      description: description.current
    };
    axios
    .post("http://localhost/BE/?c=product&a=save", sendData)
    .then((result) => {
      if (result.data.Status === "Invalid") {
        alert('Tạo mới sản phẩm thất bại')  
      } else {
        if (window.confirm('Tạo mới sản phẩm thành công. Bấm đồng ý để reload lại trang')) {
          window.location.reload();
        }
      }
    });
  }
  
  //update general information
  const handleClickUpdateGeneralInfor = () => {
    const sendData = {
      id: productID,
      ptitle: productName.current,
      pimg: images[productIndexMainImage.current].link,
      pprice: productPrice.current,
      pgender: productGender.current,
      pkind: productType.current,
    };
    axios
      .post("http://localhost/BE/?c=product&a=update", sendData)
      .then((result) => {
          if (result.data) {
            if(window.confirm('Cập nhật thông tin sản phẩm thành công. Bấm đồng ý để reload lại trang')) {
              window.location.reload();
            }
          } else {
            alert(result)
          }
      });
  }
  //update main image
  const handleUpdateMainImage = (index) => {

  }

  //update description
  const handleClickUpdateDescription = () => {
    if (typeof description.current === 'string') {
      
      const sendData = {
        productID : productID ,
        description : description.current
      }
      axios
        .post("http://localhost/BE/?c=description&a=save", sendData)
        .then((result) => {
          if(result.data){
            if(window.confirm('Cập nhật thông tin mô tả sản phẩm thành công. Bấm đồng ý để reload lại trang')) {
              window.location.reload();
            }
          }
          else{
            alert('Cập nhật thông tin mô tả sản phẩm thất bại');
          }
        }); 
    } else {
      const sendData = {
        id: description.current.id, //id of description
        content: description.current.content
      }
      axios.post("http://localhost/BE/?c=description&a=update", sendData).then((result)=>{
        if(result.data){
          if(window.confirm('Cập nhật thông tin mô tả sản phẩm thành công. Bấm đồng ý để reload lại trang')) {
            window.location.reload();
          }
        }
        else{
          alert('Cập nhật thông tin mô tả sản phẩm thất bại');
        }
      });
    }
    
  }

  return (
    <div className={style.container}>
      <Header route={'updateProduct'}/>
      {showInputAddImage && 
        <div className={style.inputAddImageContainer}>
          <div className={style.inputAddImageContent}>
            <label>Thêm ảnh</label>
            <div className={style.inputHeader}>
              <label>Ảnh chính</label>
              <label>Link ảnh</label>
              <label>Xóa ảnh</label>
            </div>
            <div className={style.inputRows}> 
              {images.map((image, index) => {
                return (
                  <div className={style.inputAddImageRow} key={image.key}>
                    <input
                      type='radio' name='indexNameImage'
                      onChange={() => { handleUpdateMainImage(index) }}
                      defaultChecked={index === productIndexMainImage.current ? true : false}
                    />
                    <input
                      type='text' className={style.inputAddImage}
                      placeholder='Nhập Link ảnh vào đây'
                      onChange={(e) => { image.link = e.target.value}}
                      defaultValue={image.link}
                    />
                    <button
                      className='btn'
                      onClick={() => {
                        const newImages = images.filter((img, i) => i !== index);
                        setImages(newImages);
                      }}
                    ><i className="bi bi-x-circle"></i></button>
                  </div>
                )
              })}
            </div>

            <button
              className={`btn ${style.btnCancelAddImage}`}
              onClick={() => { handleClickCancelSubmitImage() }}><i className="bi bi-x-circle"></i></button>
            <div className='d-flex col-12 justify-content-between'>
              <button className='btn btn-success' onClick={() => { handleClickSubmitImage() }}>Đồng ý</button>
              <button className='btn btn-success' onClick={() => { handleClickAddInputImage() }}>Thêm ảnh</button>
            </div>
            
          </div>
        </div>
      }
      <div className={style.middle}>
        
        <div className={style.title}>
          <h1>Thêm sản phẩm</h1>
          <button className='btn btn-primary' onClick={() => {btnSubmitAddProduct()}}>Submit</button>
        </div>
        <div className={style.addProductContainer}>
          <div className={style.addProductImage}>
            <label>Thêm ảnh</label>
            <div className={style.mainImageContainer}>
              <button
                className={style.btnDeleteImage}
                onClick={() => {handleClickDeleteImage()}}
              ><i className="bi bi-x-circle"></i></button>
              {images.length === 0 ?
                <h1>Chưa có ảnh</h1>
                :
                <img src={ images[0].link } alt='mainImage' />
              }
            </div>
            <div className={style.subImageContainer}>
              <button
                className={style.btnAddImage}
                onClick={() => { handleClickAddImage() }}
              ><i className="bi bi-plus-circle"></i></button>
              {images.map((image, index) => {
                return (
                  <div
                    className={style.subImage}
                    onClick={() => {
                      handleClickSubImage(index);
                    }}
                    key={index}
                  >
                    
                    <img src={image.link} alt='subImage'/>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={style.addProductInfo}>
            <div className={style.generalInfo}>
              <div className={style.textInputContainer}>
                <label for='productName'>Tên sản phẩm</label>
                <textarea
                  rows={2} id='productName'
                  name='productName' className={style.textInput}
                  onChange={(e) => { productName.current = e.target.value }}
                  defaultValue={ productName.current }
                />
              </div>
              
              <div className={style.textInputContainer}>
                <label for='productPrice'>Giá</label>
                <input
                  type='number' id='productPrice'
                  name='productPrice' className={style.textInput}
                  onChange={(e) => { productPrice.current = e.target.value }}
                  defaultValue={ productPrice.current }
                />
              </div>
              <div className={style.textInputContainer}>
                <label for='productCategory'>Phân loại</label>
                <select
                  id="inputState" class={style.textInput}
                  onChange={(e) => {
                    productGender.current = e.target.value.split(':')[0];
                    productType.current = e.target.value.split(':')[1];
                  }}
                >
                  <option value="">Loại sản phẩm</option>
                  {categories.map((category, index) => {
                    return (
                      <option
                        value={category} key={index}
                        selected={`${productGender.current}:${productType.current}` === category}
                      >{category}</option>
                    )
                  })}
                </select>
              </div>
              <button className='btn btn-success' onClick={()=>{handleClickUpdateGeneralInfor()}}>Cập nhật thông tin sản phẩm</button>
            </div>
            <div>
              <div className={style.textInputContainer}>
                <label for='productDescription'>Mô tả sản phẩm</label>
                <textarea
                  rows={5} id='productDescription' name='productDescription'
                  className={style.textInput}
                  onChange={(e) => {
                    if (typeof description.current === "string") description.current = e.target.value
                    else description.current.content = e.target.value
                  }}
                  defaultValue={
                    typeof description.current === "string" ?
                      description.current :
                      description.current.content
                  }
                />
              </div>
              <button
                className='btn btn-success mt-3'
                onClick={() => {handleClickUpdateDescription()}}
              >Cập nhật thông tin mô tả sản phẩm</button>
            </div>
            <div className={style.sizeContainer}>
              <table className={`table ${style.sizeTable}`} >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Size</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeInputs.map((sizeInput, index) => {
                    return (
                      <tr key={sizeInput.key} className={style.sizeInput}>
                        <th scope="row">{index + 1}</th>
                        <td><input
                          type='number' className={style.size}
                          onChange={(e) => { sizeInput.size = e.target.value }}
                          defaultValue={sizeInput.size}
                        /></td>
                        <td>
                          <input
                            type='number' className={style.soluong}
                            onChange={(e) => { sizeInput.soluong = e.target.value }}
                            defaultValue={sizeInput.soluong}
                          /></td>
                        <td>
                          <button
                              className='btn'
                              onClick={() => handleClickDeleteSize(index)}
                            ><i className="bi bi-x-circle"></i></button>
                          
                        </td>
                      </tr>
                    )
                  })} 
                </tbody>
              </table>
              <div className='d-flex justify-content-between col-12'>
                <button className='btn btn-success col-6' >Cập nhật thông tin size sản phẩm</button>
                <div className={style.btnAddSizeContainer}>
                  <button
                    className={`btn btn-success ${style.btnAddSize}`}
                    onClick={() => handleClickAddSize()}
                  >Thêm size</button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
