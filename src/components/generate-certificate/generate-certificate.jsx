/* eslint-disable react/prop-types */
import "./generateCer.css";
import moment from "moment";
// import html2canvas from "html2canvas";

const ViewGenerateCertificate = ({ profile }) => {
  const capitalizeFirstLetter = (name) => {
    return name?.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  const downloadCertificate = () => {
    //
  };

  return (
    <div>
      <div className="certificateWrapper">
        <div className="certificateContainer" id="certificate-container">
          <div>
            <img
              style={{ width: "80px", height: "60px", margin: "auto" }}
              src="https://i.ibb.co/BrBQRcX/Untitled-design.png"
              alt="logo"
            />
          </div>
          <h1 className="text-3xl font-semibold">
            CERTIFICATE OF APPRECIATION
          </h1>
          <span className="smallText mt-1">
            This certificate is proudly awarded to
          </span>
          <p className="text-blue-500 text-5xl font-bold italic my-4 pb-4">
            {capitalizeFirstLetter(profile?.firstName)}{" "}
            {capitalizeFirstLetter(profile?.lastName)}
          </p>

          <span className="smallText">
            for successfully completing the internship
          </span>
          <h2 className="text-2xl font-semibold mb-2">{`Junior ${profile?.departmentId?.departmentName}`}</h2>
          <span className="smallText">{`conducted from ${
            profile?.joinDate
              ? moment(profile?.joinDate).format("MMMM YYYY")
              : "-"
          } to ${
            profile?.endDate
              ? moment(profile?.endDate).format("MMMM YYYY")
              : "-"
          }`}</span>
          <div className="signatureBlock mt-5">
            <img
              className="signatureImage"
              src="https://i.ibb.co/1Mf8t5s/signature-new.png"
              alt="signature"
              style={{ margin: "auto" }}
            />
            <span className="horizontalBar" />
            <span className="smallText">CEO, Roni Sarkar</span>
          </div>
        </div>
        <button
          className="button-gen"
          style={{ marginTop: " 3rem" }}
          onClick={downloadCertificate}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ViewGenerateCertificate;
