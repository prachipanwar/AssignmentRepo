export default function UserSidePanel({
  selectedUser,
  handleAdminChange,
  adminUsers,
  setSelectedUser,
}) {
  console.log("selectedUser", selectedUser);

  return (
    <div className="w-full ">
      <div className="flex flex-row items-center">
        <div className="w-10 h-10">
          <img src={selectedUser?.imgSrc} alt="admin" />
        </div>
        <div className="px-2 text-base text-white">
          <select
            className="bg-transparent"
            onChange={(e) => {
              handleAdminChange(e.target.value)
            }}
          >
            {adminUsers.map((item, index) => {
              return (
                <option
                  value={item?.id}
                  key={item?.id}
                  className="bg-transparent"
                  defaultValue={selectedUser}
                >
                  {item?.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
