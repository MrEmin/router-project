import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layour">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est
        deleniti vitae eaque repellendus debitis incidunt cumque, hic harum
        totam.
      </p>

      <Outlet />
    </div>
  );
}
