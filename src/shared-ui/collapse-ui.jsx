/* eslint-disable react/prop-types */

const CollapseUi = ({ children, title }) => {
  return (
    <div className="collapse collapse-plus border bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content bg-green-100">{children}</div>
    </div>
  );
};

export default CollapseUi;
