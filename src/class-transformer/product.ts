import 'reflect-metadata'

import {
  Expose,
  Transform,
  TransformationType,
  Type,
  instanceToInstance,
  instanceToPlain,
  plainToClass,
  plainToInstance,
} from "class-transformer";

export type UnitType = { name: string; rate: number; default?: boolean };

export class Product {
  @Expose({ name: "id", toClassOnly: true })
  id: number;

  @Expose()
  brandName: string; // Tên biệt dược

  @Expose({ groups: ["ALL", "CREATE"] })
  substance: string; // Tên biệt dược

  @Expose()
  @Transform(({ value, type }) => {
    if (type === TransformationType.PLAIN_TO_CLASS) {
      return JSON.parse(
        value || JSON.stringify([{ name: "", rate: 1, default: true }])
      );
    } else if (type === TransformationType.CLASS_TO_PLAIN) {
      return JSON.stringify(value);
    } else if (type === TransformationType.CLASS_TO_CLASS) {
      return JSON.parse(JSON.stringify(value));
    }
    return value;
  })
  unit: UnitType[];

  @Expose({ groups: ["ALL"] })
  @Transform(({ value }) => {
    return value || [];
  })
  @Type(() => ProductBatch)
  productBatches: ProductBatch[];
}

export class ProductBatch {
  @Expose({ name: "id", toClassOnly: true })
  id: number;

  @Expose()
  costPrice: number;

  @Expose({ toClassOnly: true })
  // @Type(() => Product)
  product: Product;
}

const plain = {
  id: 4,
  brandName: "BRAND_NAME",
  substance: "SUBSTANCE",
  // unit: "",
  productBatches: [
    { id: 22, costPrice: 22000 },
    { id: 23, costPrice: 23000 },
  ],
};

const obj = plainToInstance(Product, plain, {
  exposeUnsetFields: false,
  excludeExtraneousValues: true,
  groups: ["ALLX"],
});
// obj.productBatches.forEach((i) => {
//   i.product = obj;
// });

// const toPlain = instanceToPlain(obj, {
//   exposeUnsetFields: false,
//   excludeExtraneousValues: true,
// });
// console.log("🚀 ~ file: product.ts:61 ~ toPlain:", toPlain);

const objCopy = instanceToInstance(obj, {
  exposeUnsetFields: false,
  excludeExtraneousValues: true,
  groups: ["ALL"],
});

// obj.unit[0].name = "xxxxxxxxxxxxx";
console.log("🚀 ~ file: product.ts:41 ~ obj:", obj);
console.log("🚀 ~ file: product.ts:53 ~ objCopy:", objCopy);
