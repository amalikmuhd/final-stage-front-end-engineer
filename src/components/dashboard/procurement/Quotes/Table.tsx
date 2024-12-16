import { QouteTableData } from "../../../../assets/data";
import ICONS from "../../../../constant/icon";

export default function Table() {
  return (
    <div className="flex flex-col">
      <div className=" overflow-x-auto pb-4">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden  border rounded-lg border-gray-300">
            <table className="table-auto min-w-full rounded-xl">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[10px]">
                    <div className="flex items-center py-5 pl-5 ">
                      <input
                        type="checkbox"
                        value=""
                        className="w-5 h-5 appearance-none border-[2px] border-gray-300 rounded-md mr-2  checked:bg-no-repeat checked:bg-center"
                      />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="p-5 pl-2 text-left whitespace-nowrap text-sm leading-6 font-satoshi-light text-gray-700 capitalize"
                  >
                    {" "}
                    Items{" "}
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left whitespace-nowrap text-sm leading-6 font-satoshi-light text-gray-700 capitalize"
                  >
                    {" "}
                    Variants{" "}
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left whitespace-nowrap text-sm leading-6 font-satoshi-light text-gray-700 capitalize min-w-[150px]"
                  >
                    {" "}
                    Quantity{" "}
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left whitespace-nowrap text-sm leading-6 font-satoshi-light text-gray-700 capitalize"
                  >
                    {" "}
                    Price{" "}
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left whitespace-nowrap text-sm leading-6 font-satoshi-light text-gray-700 capitalize"
                  >
                    {" "}
                    Amount{" "}
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left whitespace-nowrap text-sm leading-6 font-satoshi-light text-gray-700 capitalize"
                  >
                    {" "}
                    Expected Delivery Date{" "}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 ">
                {QouteTableData.map((item, index) => (
                  <tr key={index} className="bg-white transition-all duration-500 hover:bg-gray-50">
                    <td className="w-[10px]">
                      <div className="flex items-center py-2 pl-5">
                        <input
                          type="checkbox"
                          value=""
                          className="w-5 h-5 appearance-none border-[2px] border-[#D0D5DD] rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                        />
                      </div>
                    </td>

                    <td className="py-3">
                      <div className="w-48 flex items-center gap-3">
                        <img src={ICONS.leadingMedia} alt="leading media" />
                        <div className="data">
                          <p className="font-satoshi-regular text-sm text-gray-900">{item.items}</p>
                          <p className="font-satoshi-regular text-xs leading-5 text-gray-400">{item.productID}</p>
                        </div>
                      </div>
                    </td>

                    <td className="p-5 font-satoshi-regular whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                      {item.variants}
                    </td>

                    <td className=" px-5 py-3">
                      <p className="font-normal font-satoshi-regular text-sm text-gray-900">{item.quantity}</p>
                    </td>
                    <td className="p-5 font-satoshi-regular whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                      {item.price}
                    </td>
                    <td className="p-5 font-satoshi-regular whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                      {item.amount}
                    </td>
                    <td className="p-5 font-satoshi-regular whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                      {item.expectedDeliveryDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
