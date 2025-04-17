import { useState } from "react";
import { useLang } from "../components/LanguageController";
import "../styles/catalog.css";
import ImagesGallery from "../components/ImagesGallery";
import imagesData from "../data/imagesData.jsx";
import ImageModal from "../components/ImageModal.jsx";

function Catalog() {
  const [filter, setFilter] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const { translate } = useLang();

  const filteredItems =
    filter === ""
      ? imagesData
      : imagesData.filter((item) => item.category === filter);
  return (
    <div className="catalogWrapper">
      <div className="catalogHeader">
        <h3 className="catalogHeaderTitle">
          {translate("catalog.catalogHeaderTitle")}
        </h3>
        <p className="catalogHeaderSubtitle">
          {translate("catalog.catalogHeaderSubtitle")}
        </p>
        <p className="catalogHeaderSubtitle">
          {translate("catalog.catalogHeaderSubtitle2")}
        </p>
      </div>
      <div className="catalogFilters">
        <button
          onClick={() => setFilter("")}
          className={
            filter === "" ? "catalogFiltersBtnActive" : "catalogFiltersBtn"
          }
        >
          {translate("catalog.allFilterBtn")}
        </button>
        <button
          onClick={() => {
            setFilter("balcons");
          }}
          className={
            filter === "balcons"
              ? "catalogFiltersBtnActive"
              : "catalogFiltersBtn"
          }
        >
          {translate("catalog.balconsFilterBtn")}
        </button>

        <button
          onClick={() => {
            setFilter("gates");
          }}
          className={
            filter === "gates" ? "catalogFiltersBtnActive" : "catalogFiltersBtn"
          }
        >
          {translate("catalog.gatesFilterBtn")}
        </button>
        <button
          onClick={() => {
            setFilter("constructions");
          }}
          className={
            filter === "constructions"
              ? "catalogFiltersBtnActive"
              : "catalogFiltersBtn"
          }
        >
          {translate("catalog.constructionsFilterBtn")}
        </button>
      </div>

      <div className="imagesGallerySection">
        {filteredItems.map((item) => (
          <ImagesGallery
            onClick={() => {
              setSelectedImage(item.img);
            }}
            img={item.image}
            title={item.title}
          />
        ))}
      </div>
      <div className="catalogImageModal">
        {selectedImage && (
          <ImageModal
            img={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Catalog;
