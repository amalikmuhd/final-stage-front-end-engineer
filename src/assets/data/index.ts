interface Item {
  items: string;
  productID: string;
  variants: string;
  quantity: string;
  price: string;
  amount: string;
  expectedDeliveryDate: string;
}

export const QuoteInformation = [
  {
    title: "Title",
    description: "Request for Equipments",
  },
  {
    title: "RFQ No",
    description: "RQ #01234",
  },
  {
    title: "Requestor",
    description: "",
  },
  {
    title: "Status",
    description: "",
  },
  {
    title: "Department",
    description: "Maternity",
  },
];

export const QouteTableData: Item[] = [
  {
    items: "Oxygen concentrator",
    productID: "#28373",
    variants: "Blue",
    quantity: "100 pieces",
    price: "$200.00",
    amount: "$2,000.00",
    expectedDeliveryDate: "2024-08-07",
  },
  {
    items: "Mechanical ventilator",
    productID: "#28373",
    variants: "NIL",
    quantity: "45 Kg",
    price: "$350.00",
    amount: "$2,500.00",
    expectedDeliveryDate: "2024-08-07",
  },
  {
    items: "Patient Monitor",
    productID: "#28373",
    variants: "Blue",
    quantity: "30 Units",
    price: "$300.00",
    amount: "$1,500.00",
    expectedDeliveryDate: "2024-08-07",
  },
  {
    items: "Mechanical ventilator",
    productID: "#28373",
    variants: "Blue",
    quantity: "35 Units",
    price: "$200.00",
    amount: "$1,500.00",
    expectedDeliveryDate: "2024-08-07",
  },
];

export const Steps = [
  {
    title: "Request Information",
    description: "Provide details about the RFQ",
  },
  {
    title: "Terms and Attachments",
    description: "Payment and delivery terms",
  },
  {
    title: "Review",
    description: "Confirm all information provided",
  },
];

export const addItemData = [
  {
    item: "Oxygen Concentrator",
    variant: "Blue",
    quantity: "100",
    unit: "Pack",
    price: "12.00",
    deliveryDate: "2023-12-02",
    amount: "1200.00",
  },
  {
    item: "Mechanical Ventilator",
    variant: "Blue",
    quantity: "100",
    unit: "Pack",
    price: "12.00",
    deliveryDate: "2023-12-02",
    amount: "1200.00",
  },
  {
    item: "Patient Monitor",
    variant: "Blue",
    quantity: "100",
    unit: "Pack",
    price: "12.00",
    deliveryDate: "2023-12-02",
    amount: "1200.00",
  },
  {
    item: "Mechanical Ventilator",
    variant: "Blue",
    quantity: "100",
    unit: "Pack",
    price: "12.00",
    deliveryDate: "2023-12-02",
    amount: "1200.00",
  },
];
