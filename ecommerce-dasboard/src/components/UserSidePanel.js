import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function UserSidePanel({
  selectedUser,
  handleAdminChange,
  adminUsers,
  setSelectedTab,
  setOpenMobilePanel,
  openMobilePanel
}) {
  console.log("selectedUser", selectedUser);

  return (
    <div className="w-full">
      <div className="flex flex-row">
        <div className="w-full flex flex-row items-center">
          <div className="w-10 h-10">
            <img src={selectedUser?.imgSrc} alt="admin" />
          </div>
          <div className="px-2 text-base text-white">
            <select
              className="bg-transparent"
              onChange={(e) => {
                handleAdminChange(e.target.value);
              }}
            >
            
              {adminUsers.map((item, index) => {
                return (
                  <option
                    value={item?.id}
                    key={item?.id}
                    className="bg-transparent"
                  >
                    {item?.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex lg:hidden items-center text-white text-xl px-4">
          <FontAwesomeIcon
            icon={faBars}
            className="cursor-pointer"
            onClick={() => {
              setOpenMobilePanel(!openMobilePanel);
            }}
          />
        </div>
      </div>

      <div className="hidden lg:flex w-full flex-col justify-center gap-4 my-8 text-white text-base">
        <div
          onClick={() => {
            setSelectedTab("dashboard");
          }}
          className="cursor-pointer"
        >
          Dashboard
        </div>
        <div
          onClick={() => {
            setSelectedTab("product");
          }}
          className="cursor-pointer"
        >
          Products
        </div>
      </div>
    </div>
  );
}
