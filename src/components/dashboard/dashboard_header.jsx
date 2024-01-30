const DashboardHeader = () => {
  return (
    <div className="flex flex-wrap justify-evenly m-5">
      <div className="md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl mb-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">5 Web Intern</h2>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 lg:w-1/3 bg-base-100 shadow-xl mb-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">2 Finance Intern</h2>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 lg:w-1/3 bg-base-100 shadow-xl mb-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">2 HR Intern</h2>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl mb-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">6 Full Stack Intern</h2>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 lg:w-1/3 bg-base-100 shadow-xl mb-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">3 Design Intern</h2>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 lg:w-1/3 bg-base-100 shadow-xl mb-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">4 Frontend Intern</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
