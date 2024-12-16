import { useState } from "react";
import Text from "../shared/Text";
import IconButton from "../shared/IconButton";
import RouteSelect from "./RouteSelect";
import ICONS from "../../constant/icon";

interface MenuItem {
  icon: string;
  label: string;
  hasSubMenu?: boolean;
  isExpanded?: boolean;
  badge?: number;
  subItems?: string[];
}

export default function Sidebar() {
  const [menuItems] = useState<MenuItem[]>([
    { icon: ICONS.dashboard, label: "Dashboard" },
    { icon: ICONS.inventory, label: "Inventory" },
    {
      icon: ICONS.cart,
      label: "Procurement",
      hasSubMenu: true,
      isExpanded: true,
      subItems: ["Quotes", "Orders"],
    },
    {
      icon: ICONS.finance,
      label: "Finance",
      hasSubMenu: true,
      isExpanded: false,
    },
    {
      icon: ICONS.communication,
      label: "Communication",
      badge: 10,
    },
    {
      icon: ICONS.calendar,
      label: "Calendar",
      badge: 10,
    },
    { icon: ICONS.contracts, label: "Contracts" },
  ]);

  const [bottomMenuItems] = useState<MenuItem[]>([
    { icon: ICONS.dashboard, label: "Support" },
    { icon: ICONS.inventory, label: "Setting" },
  ]);

  return (
    <div className="hidden md:flex col-span-2 bg-secondary border-gray-300 h-screen px-6 flex-col justify-between sticky top-0">
      <div className="mt-6">
        <IconButton src={ICONS.logo} width={1000} height={40} />
        <div className="mt-6">
          {menuItems.map((item) => {
            return (
              <div key={item.label}>
                <RouteSelect
                  key={item.label}
                  src={item.icon}
                  name={item.label}
                  active={item.label === "Procurement"}
                  icon={
                    (item.hasSubMenu && (
                      <div className="mt-1">
                        {item.isExpanded ? (
                          <img src={ICONS.chevronDown} className="w-4 h-4 rotate-180" />
                        ) : (
                          <img src={ICONS.chevronDown} className="w-5 h-5" />
                        )}
                      </div>
                    )) ||
                    (item.badge && (
                      <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">{item.badge}</span>
                    ))
                  }
                />

                {item.isExpanded &&
                  item.subItems &&
                  item.subItems.map((subItem) => (
                    <RouteSelect key={subItem} name={subItem} active={subItem === "Quotes"} />
                  ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pb-8">
        {bottomMenuItems.map((item) => (
          <RouteSelect active={false} key={item.label} src={item.icon} name={item.label} />
        ))}

        {/* User Profile */}
        <div className="flex flex-row items-center gap-2 pt-5 cursor-pointer">
          <img src={ICONS.mark} className="w-10 h-10" />
          <div className="flex flex-col">
            <Text className="text-sm text-gray-900 font-satoshi-bold">Mark Beacon</Text>
            <Text className="text-sm text-gray-600 font-satoshi-light">markbenson@core...</Text>
          </div>
          <img src={ICONS.signout} className="w-5 h-10" />
        </div>
      </div>
    </div>
  );
}
