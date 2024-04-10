const product = {
  id: 1,
  name: "圖像 Angular 開發入門 第二版",
  company: "博碩文化",
  price: 500,
  isShow: true,
  createDate: new Date(2024, 3, 10),
  modifyDate: undefined,
};

let productId: number;
productId = 1;
console.log("Product Id = ", productId);

const productName: string = "圖像 Angular 開發入門 第二版";
console.log("Product Name = ", productName);

const isShow = true;
console.log("Is Show = ", isShow);

let createDate = undefined;
console.log("Create Date = ", createDate);

let modifyDate: Date | undefined;
console.log("Modify Date = ", modifyDate);

let type: "none" | "doing" | "finish" = "doing";
