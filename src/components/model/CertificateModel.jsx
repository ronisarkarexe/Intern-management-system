/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import "./CertificateModel.css";

const CertificateModel = ({ isOpen, handleClose, children }) => {
  return (
    <>
      <div
        className={`modalWrapper ${isOpen ? "modalOpen" : ""}`}
        onClick={handleClose}
      >
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>
  );
};

export default CertificateModel;
