/* eslint-disable react/prop-types */

const BasicInfo = ({ profile }) => {
  return (
    <div
      className="card bg-base-100 rounded-sm shadow-xl mt-4"
      style={{ flex: "1" }}
    >
      <div className="card-body">
        <h2 className="text-xl">Basic Information About Me</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div className="" style={{ flex: "0 0 30%" }}>
            <h2 className="text-base">Join Date</h2>
            <p className="text-sm">{profile?.joinDate}</p>
          </div>
          <div className=" " style={{ flex: "0 0 30%" }}>
            <h2 className="text-base">End Date</h2>
            <p className="text-sm">{profile?.endDate}</p>
          </div>
          <div style={{ flex: "0 0 30%" }}>
            <h2 className="text-base">Gender</h2>
            <p className="text-sm">{profile?.gender}</p>
          </div>
        </div>
        <div className="mt-4" style={{ display: "flex", gap: "1rem" }}>
          <div className="" style={{ flex: "0 0 30%" }}>
            <h2 className="text-base">Contact</h2>
            <p className="text-sm">{profile?.contact}</p>
          </div>
          <div className=" " style={{ flex: "0 0 30%" }}>
            <h2 className="text-base">City</h2>
            <p className="text-sm">{profile?.city}</p>
          </div>
          <div style={{ flex: "0 0 30%" }}>
            <h2 className="text-base">Collage Name</h2>
            <p className="text-sm">{profile?.collageName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
