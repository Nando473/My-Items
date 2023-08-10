-- CreateTable
CREATE TABLE `Tienda` (
    `store_id` INTEGER NOT NULL AUTO_INCREMENT,
    `store_name` VARCHAR(191) NOT NULL,
    `num_store` VARCHAR(191) NOT NULL,
    `email_store` VARCHAR(191) NOT NULL,
    `calle_store` VARCHAR(191) NOT NULL,
    `ciudad_store` VARCHAR(191) NOT NULL,
    `estado_store` VARCHAR(191) NOT NULL,
    `cp_store` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Tienda_store_name_key`(`store_name`),
    PRIMARY KEY (`store_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manager` (
    `manager_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_manager` VARCHAR(191) NOT NULL,
    `num_manager` VARCHAR(191) NOT NULL,
    `email_manager` VARCHAR(191) NOT NULL,
    `estatus_manager` BOOLEAN NOT NULL,
    `store_id1` INTEGER NOT NULL,

    UNIQUE INDEX `Manager_nom_manager_key`(`nom_manager`),
    PRIMARY KEY (`manager_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Personal` (
    `personal_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_personal` VARCHAR(191) NOT NULL,
    `ape_personal` VARCHAR(191) NOT NULL,
    `tel_personal` VARCHAR(191) NOT NULL,
    `email_personal` VARCHAR(191) NOT NULL,
    `estatus_personal` BOOLEAN NOT NULL,
    `store_id2` INTEGER NOT NULL,
    `manager_id1` INTEGER NOT NULL,

    PRIMARY KEY (`personal_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Marca` (
    `brand_id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`brand_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Producto` (
    `product_id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_name` VARCHAR(191) NOT NULL,
    `desc_product` VARCHAR(191) NOT NULL,
    `brand_id1` INTEGER NOT NULL,
    `category_id1` INTEGER NOT NULL,
    `precio_compra` DOUBLE NOT NULL,
    `precio_vta` DOUBLE NOT NULL,

    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stock` (
    `stock_id` INTEGER NOT NULL AUTO_INCREMENT,
    `store_id3` INTEGER NOT NULL,
    `product_id1` INTEGER NOT NULL,
    `cantidad_stock` INTEGER NULL,

    PRIMARY KEY (`stock_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id_cli` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_cli` VARCHAR(191) NOT NULL,
    `ape_clie` VARCHAR(191) NOT NULL,
    `tel_cli` VARCHAR(191) NOT NULL,
    `email_cli` VARCHAR(191) NOT NULL,
    `calle_cli` VARCHAR(191) NOT NULL,
    `ciudad_cli` VARCHAR(191) NOT NULL,
    `estado_cli` VARCHAR(191) NOT NULL,
    `cp_cli` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_cli`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Factura` (
    `factura_id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cli1` INTEGER NOT NULL,
    `status_orden` VARCHAR(191) NOT NULL,
    `fecha_orden` DATETIME(3) NOT NULL,
    `store_id4` INTEGER NOT NULL,
    `personal_id1` INTEGER NOT NULL,

    PRIMARY KEY (`factura_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orden_Venta` (
    `orden_id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id2` INTEGER NOT NULL,
    `cantidad_orden` INTEGER NOT NULL,
    `descuento_vta` INTEGER NOT NULL,
    `facturaFactura_id` INTEGER NULL,

    PRIMARY KEY (`orden_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proveedor` (
    `id_prov` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_prov` VARCHAR(191) NOT NULL,
    `email_prov` VARCHAR(191) NOT NULL,
    `calle_prov` VARCHAR(191) NOT NULL,
    `ciudad_prov` VARCHAR(191) NOT NULL,
    `estado_prov` VARCHAR(191) NOT NULL,
    `cp_prov` VARCHAR(191) NOT NULL,
    `estatus_prov` BOOLEAN NOT NULL,

    UNIQUE INDEX `Proveedor_nom_prov_key`(`nom_prov`),
    PRIMARY KEY (`id_prov`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Manager` ADD CONSTRAINT `Manager_store_id1_fkey` FOREIGN KEY (`store_id1`) REFERENCES `Tienda`(`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Personal` ADD CONSTRAINT `Personal_store_id2_fkey` FOREIGN KEY (`store_id2`) REFERENCES `Tienda`(`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Personal` ADD CONSTRAINT `Personal_manager_id1_fkey` FOREIGN KEY (`manager_id1`) REFERENCES `Manager`(`manager_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_brand_id1_fkey` FOREIGN KEY (`brand_id1`) REFERENCES `Marca`(`brand_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_category_id1_fkey` FOREIGN KEY (`category_id1`) REFERENCES `Categoria`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_store_id3_fkey` FOREIGN KEY (`store_id3`) REFERENCES `Tienda`(`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_product_id1_fkey` FOREIGN KEY (`product_id1`) REFERENCES `Producto`(`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_id_cli1_fkey` FOREIGN KEY (`id_cli1`) REFERENCES `Cliente`(`id_cli`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_store_id4_fkey` FOREIGN KEY (`store_id4`) REFERENCES `Tienda`(`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_personal_id1_fkey` FOREIGN KEY (`personal_id1`) REFERENCES `Personal`(`personal_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orden_Venta` ADD CONSTRAINT `Orden_Venta_product_id2_fkey` FOREIGN KEY (`product_id2`) REFERENCES `Producto`(`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orden_Venta` ADD CONSTRAINT `Orden_Venta_facturaFactura_id_fkey` FOREIGN KEY (`facturaFactura_id`) REFERENCES `Factura`(`factura_id`) ON DELETE SET NULL ON UPDATE CASCADE;
