import React from "react";

import { useLoaderData } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const OrderList = () => {
  const { orders, meta } = useLoaderData();

  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize ">
        total orders: {meta.pagination.total}
      </h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}

          <thead>
            <tr>
              <th>name</th>
              <th>Address</th>
              <th>products</th>
              <th>cost</th>
              <th className="hidden sm:block">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => {
              const id = order.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;

              const date = day(createdAt).format("hh:mm a -MMM Do, YYYY");
              return (
                <tr key={id}>
                  <td>{name} </td>
                  <td>{address} </td>
                  <td>{numItemsInCart} </td>
                  <td>{orderTotal} </td>
                  <td className="hidden sm:block">{date} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
