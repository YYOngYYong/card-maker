class ImageUploader{

  //upload 완료되면 이미지 올라가니까 aync
  async uploader(file){
   const data = new FormData();
   data.append('file', file);
   data.append('upload_preset', 'vtk79khe');
   const result = await fetch(
     'https://api.cloudinary.com/v1_1/dct6qic8i/image/upload',
      {
       method: 'POST',
       body: data,
      }
     );
     return await result.json();
  }
}

export default ImageUploader;