import "../styles/ImageModal.css";

export default function ImageModal({ img, onClose }) {
  console.log(img);
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <img src={img} alt="full" />
        <button className="closeModal" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}
