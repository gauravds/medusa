import { AdminCollection } from "../../collection"
import { AdminPrice } from "../../pricing"
import { AdminProductCategory } from "../../product-category"
import { AdminProductTag } from "../../product-tag"
import { AdminProductType } from "../../product-type"
import { AdminSalesChannel } from "../../sales-channel"
import {
  BaseProduct,
  BaseProductImage,
  BaseProductOption,
  BaseProductOptionValue,
  BaseProductVariant,
  ProductStatus,
} from "../common"

export interface AdminProductVariant extends BaseProductVariant {
  /**
   * The product variant's prices.
   */
  prices: AdminPrice[] | null
  /**
   * The variant's values for the associated product's options.
   */
  options: AdminProductOptionValue[] | null
  /**
   * The product that this variant belongs to.
   */
  product?: AdminProduct | null
}
export interface AdminProductOption extends BaseProductOption {
  /**
   * The associated product's details.
   */
  product?: AdminProduct | null
  /**
   * The option's values.
   */
  values?: AdminProductOptionValue[]
}
export interface AdminProductImage extends BaseProductImage {}
export interface AdminProductOptionValue extends BaseProductOptionValue {
  /**
   * The option's details.
   */
  option?: AdminProductOption | null
}
export interface AdminProduct
  extends Omit<BaseProduct, "categories" | "variants"> {
  /**
   * The product's collection.
   */
  collection?: AdminCollection | null
  /**
   * The product's categories.
   */
  categories?: AdminProductCategory[] | null
  /**
   * The sales channels that the product is available in.
   */
  sales_channels?: AdminSalesChannel[] | null
  /**
   * The product's variants.
   */
  variants: AdminProductVariant[] | null
  /**
   * The product's type.
   */
  type: AdminProductType | null
  /**
   * The product's tags.
   */
  tags?: AdminProductTag[] | null
  /**
   * The product's options.
   */
  options: AdminProductOption[] | null
  /**
   * The product's images.
   */
  images: AdminProductImage[] | null
}
export type AdminProductStatus = ProductStatus
export interface AdminProductVariantInventoryLink {
  Product: {
    variant_id: string
  }
  Inventory: {
    inventory_item_id: string
  }
}
