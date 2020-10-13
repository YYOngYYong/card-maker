import React, { useRef } from 'react';
import { useState } from 'react';
import styles from './image_file_input.module.css';

//로딩 스피너


const ImageInput = ({imageUploader, name, onFileChange}) => {
  //button이 클릭이 되면 input이 클릭이 되는것 처럼!
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);
  
  const onButtonClick = (event)=>{
    event.preventDefault();
    inputRef.current.click();
  }

  const onChange = async(event)=>{
    setLoading(true);
    const uploaded = await imageUploader.uploader(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    })
   
  }
  return (  
    <div className={styles.container}>
      <input  ref = {inputRef} 
      className={styles.input} 
      type="file" 
      accept="image/*" 
      name="file"
      onChange={onChange}/>
      
      {
        !loading && <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>{name || 'No file'}</button>
      }
      {
        loading && <div className={styles.loading}></div>
      }
    </div>
    
  )
}
      


export default ImageInput;