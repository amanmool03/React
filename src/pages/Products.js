import React from "react";
import { Link } from "react-router-dom";
export default function Products() {
  return (
    <section>
      <h2>The products Page</h2>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">A course</Link>
        </li>
      </ul>
    </section>
  );
}
