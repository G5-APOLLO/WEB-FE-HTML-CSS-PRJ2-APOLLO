import { MenuItemType } from "../types/MenuItem.type";
import { Link } from "react-router-dom";

export function Subheader({ menuItems }: { menuItems: MenuItemType[] }) {
  return (
    <nav className="bg-[#686565] h-[40px] sm:h-[60px] border-b border-gray-300 flex items-center pl-[15px] box-border">
      <ul className="flex list-none m-0 p-0">
        {menuItems.map((item) => (
          <li className="relative mr-5 group text-[11px] sm:text-base" key={item.category}>
            <a className="no-underline text-white py-[10px] px-[1px] sm:px-[15px] block">
              {item.category}
            </a>
            <ul className="absolute hidden group-hover:block top-full left-0 bg-white text-black list-none p-0 m-0 shadow-md">
              {item.subcategories.map((sub) => (
                <li key={sub.name}>
                  <Link
                    to={`${sub.url}?optionCategory=${item.category}&optionId=${sub.id}&optionName=${sub.name}`}
                    className="text-[13px] sm:text-base block py-[7px] sm:py-[10px] px-[10px] sm:px-[15px] no-underline text-black hover:bg-[#fcfcfc]"
                  >
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}