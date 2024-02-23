/* eslint-disable react/prop-types */

const StrokeTextIcon = ({ title }) => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-circle btn-ghost btn-xs text-warning"
      >
        <svg
          tabIndex={0}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-4 h-4 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <div
        tabIndex={0}
        className="compact dropdown-content z-[1] shadow bg-base-100 rounded w-32"
      >
        <div tabIndex={0}>
          <p className="p-1">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default StrokeTextIcon;
