/* eslint-disable react/prop-types */
const AdminInfo = ({ profile }) => {
  return (
    <div
      className="card bg-base-100 rounded-sm shadow-xl"
      style={{ flex: "0 0 40%" }}
    >
      <div className="card-body border-dotted">
        <h2 className="card-title">Name: {profile?.name}</h2>
        <p>Email: {profile?.email}</p>
      </div>
    </div>
  );
};

export default AdminInfo;
