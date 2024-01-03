import React, { useState, useEffect } from "react";
export default function UserTable() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/users?limit=3");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.log("Api Failed", error.message);
      }
    };

    getUsersData();
  }, []);

  return (
    <div className="w-full my-4">
      <table className="w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-indigo-500 text-white text-xs md:text-base border-b border-gray-300">
            <th className="py-2 ">User Id</th>
            <th className="py-2 ">Name</th>
            <th className="py-2 ">City</th>
            <th className="py-2 ">Contact</th>
            <th className="py-2 ">Status</th>
          </tr>
        </thead>
        <tbody>
          {usersData?.map((item, index) => {
            const capitalizeFirstLetter = (word) => {
              return word.charAt(0).toUpperCase() + word.slice(1);
            };
            return (
              <tr
                key={item?.id}
                className="text-xs text-center md:text-base  border-b border-gray-300"
              >
                {item?.id && <td className="py-2">{item.id}</td>}
                {item?.name && (
                  <td className="py-2">
                    {capitalizeFirstLetter(item?.name?.firstname)}{" "}
                    {capitalizeFirstLetter(item?.name?.lastname)}
                  </td>
                )}
                {item?.address?.city && (
                  <td className="py-2">
                    {capitalizeFirstLetter(item.address.city)}
                  </td>
                )}
                {item?.phone && <td className="py-2">{item.phone}</td>}
                <td className={`py-2`}>
                  {parseInt(item?.id) === 1 || parseInt(item?.id) === 3
                    ? "On Hold"
                    : "Active"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
