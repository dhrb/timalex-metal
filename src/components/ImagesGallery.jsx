import "../styles/Catalog.css";
const ImagesGallery = ({ img, title }) => {
  return (
    <div className="galleryCard">
      <img className="galleryImg" src={img} alt="galleryImg" />
      <p className="galleryTitle">{title}</p>
    </div>
  );
};

export default ImagesGallery;
