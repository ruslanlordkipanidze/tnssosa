const IMAGE_BASE_PATH = '/assets/images';

export const getImagePath = (imagePath) => {
  if (!imagePath) return null;
  
  const fullPath = `${IMAGE_BASE_PATH}/${imagePath}`;
  console.log('Loading image:', fullPath);
  return fullPath;
};

export const preloadImage = (imagePath) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = getImagePath(imagePath);
    img.onload = () => {
      console.log('Image loaded successfully:', imagePath);
      resolve(img);
    };
    img.onerror = (error) => {
      console.error('Failed to load image:', imagePath, error);
      reject(error);
    };
  });
};