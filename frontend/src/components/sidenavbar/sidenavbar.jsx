import {Nav} from "react-bootstrap";

const sidebar = () => {
  return (
    <div>
      <Nav defaultActiveKey="/admin" className="flex-column">
        <Nav.Link className={"text-decoration-none text-dark fw-semibold fs-5"}
                  href="/admin">Dashboard</Nav.Link>
        <Nav.Link className={"text-decoration-none text-dark fw-semibold fs-5"}
                  href="/admin/users">Users</Nav.Link>
        <Nav.Link className={"text-decoration-none text-dark fw-semibold fs-5"}
                  href="/admin/orders">Orders</Nav.Link>
        <Nav.Link className={"text-decoration-none text-dark fw-semibold fs-5"}
                  href="/admin/foodItems">Food Items</Nav.Link>
      </Nav>
    </div>
  );
}
export default sidebar;
