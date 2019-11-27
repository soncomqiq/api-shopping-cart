'use strict';
const moment = require('moment')
const now = moment().format('YYYY-MM-DD HH:mm:ss')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    await queryInterface.bulkInsert('ProductCategories', [
      { name: 'Computers', createdAt: now, updatedAt: now },
      { name: 'Smartphones', createdAt: now, updatedAt: now },
      { name: 'Mouses', createdAt: now, updatedAt: now },
    ], {});

    const computers = (await queryInterface.sequelize.query(
      `SELECT id from ProductCategories where name = 'Computers';`
    ))[0][0];
    const smartphones = (await queryInterface.sequelize.query(
      `SELECT id from ProductCategories where name = 'Smartphones';`
    ))[0][0];
    const mouses = (await queryInterface.sequelize.query(
      `SELECT id from ProductCategories where name = 'Mouses';`
    ))[0][0];

    return await queryInterface.bulkInsert('Products', [
      {
        name: 'APPLE MACBOOK 12.0 1.3GHZ DUAL-CORE INTEL CORE I5/8GB/512GB - GOLD',
        image: 'https://www.bnn.in.th/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/M/R/MRQP2THA-1-1565456431.jpg',
        description: 'MacBook ได้นำประสิทธิภาพที่มากยิ่งกว่าเดิมมาใส่ลงในโน้ตบุ๊ค Mac ที่บางและเบาที่สุดเท่าที่เคยมีมา ด้วยโปรเซสเซอร์ Intel Core รุ่นที่ 7 ใหม่, จอภาพ Retina ขนาด 12 นิ้ว คีย์บอร์ดขนาดมาตรฐาน, แทร็คแพดที่สามารถรับรู้ได้ถึงแรงกด, พอร์ต USB-C อเนกประสงค์ และแบตเตอรี่ที่ใช้งานได้นานตลอดทั้งวัน เรียกได้ว่า MacBook คือการระดมความคิดครั้งใหญ่เพื่อรวบรวมทุกอย่างไว้ในรูปทรงที่กะทัดรัด',
        price: 52100.00,
        createdAt: now,
        updatedAt: now,
        productCategoryId: computers.id
      },
      {
        name: 'MICROSOFT SURFACE LAPTOP2 I7/8/256GB (LQQ-00022)',
        image: 'https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/8/8/889842385243-1-1574182877.jpg',
        description: 'Surface Laptop 2 รุ่น CPU Intel Core i7 รุ่นที่ 8 Ram ขนาด 16 GB และฮาร์ดดิสก์แบบ SSD 256 GB โน้ตบุ๊คประสิทธิภาพสูง ถ่ายโอนอ่านเขียนข้อมูลรวดเร็ว รองรับการทำงานทั่วไปได้หลากหลาย หน้าจอทัชสกรีน 13.5 นิ้ว ความละเอียดสูง ให้ภาพคมชัด สีสันงดงามเป็นธรรมชาติ รองรับการสัมผัสได้ถึง 10 จุด พร้อมกัน ใช้ระบบเสียง Dolby Audio Premium ให้เสียงทรงพลัง เหมาะสำหรับความบันเทิงทุกรูปแบบ ติดตั้ง Windows 10 พร้อมใช้งาน',
        price: 61300.00,
        createdAt: now,
        updatedAt: now,
        productCategoryId: computers.id
      },
      {
        name: 'ACER NOTEBOOK SWIFT SF314-57G-52FD GRAY',
        image: 'https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/A/c/Acer-Notebook-SWIFT-SF314-57G-52FD-Gray-1-1574270791.jpg',
        description: 'Acer Swift 3 SF314-57G-52FD โน๊ตบุ๊คดีไซน์บางเบา สไตล์เรียบง่าย ลงตัว สีเทา มากับหน้าจอ IPS Full HD 14 นิ้ว ขอบจอบางเพิ่มพื้นที่การมองเห็น ได้ภาพคมชัด สีสันสดสวย ติดตั้ง CPU Intel Core i5-1035G1,RAM LPDDR4 8GB ประสิทธิภาพดีเยี่ยม รองรับงานได้แบบหลากหลาย และมีการ์ดจอ Nvidia GeForce MX250 สำหรับทำงานกราฟิกและเล่นเกมสที่ใช้เปคไม่สูงมาก โน๊ตบุ๊ค Acer Swift 3 SF314 ยังมาพร้อม SSD M.2 PCIe 512 GB เพิ่มความเร็วให้กับการใช้งานต่างๆ ติดตั้ง Windows 10 ลิขสิทธิ์แท้ และ Microsoft Office Home & Student 2019 สินค้ามีประกันนาน 2 ปี ฟรีค่าแรง ค่าอะไหล่',
        price: 20990.00,
        createdAt: now,
        updatedAt: now,
        productCategoryId: computers.id
      },
      {
        name: 'ASUS NOTEBOOK ROG STRIX G G731GU-EV231T BLACK',
        image: 'https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/A/S/ASUS-Notebook-ROG-STRIX-G-G731GU-EV231T-Black-01-1574444159.jpg',
        description: '',
        price: 20990.00,
        createdAt: now,
        updatedAt: now,
        productCategoryId: computers.id
      },
      {
        name: 'OPPO SMARTPHONE RENO2F NEBULA GREEN',
        image: 'https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/O/P/OPPO-Reno2F-Nebula-Green-1-1574528450.jpg',
        description: '',
        price: 11990.00,
        createdAt: now,
        updatedAt: now,
        productCategoryId: smartphones.id
      },
      {
        name: 'XIAOMI MOBILE GAMING BLACK SHARK 2 PRO',
        image: 'https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/6/9/6971409201661-1-1573579408.jpg',
        description: 'Xiaomi Black Shark 2 Pro Gaming Mobile มือถือสมาร์ทโฟนชิปเซ็ต Qualcomm Snapdragon 855 Plus และ RAM 12GB ให้ประสิทธิภาพสูง ตอบสนองการเล่นเกมได้ดี ใช้ ROM แบบ UFS 3.0 อ่านเขียนข้อมูลได้รวดเร็ว ดีไซน์ตัวเครื่อง มีการเพิ่มไฟ RGB ด้านหลัง 2 จุด และมีการปรับตัวเครื่องให้จับถนัดมือมากขึ้น หน้าจอ AMOLED 6.39 นิ้ว Refresh Rate 240Hz ให้ภาพที่คมชัด ต่อเนื่อง ได้การเคลื่อนไหวของภาพที่นุ่มนวล พร้อมเซ็นเซอร์ Scan ลายนิ้วมือบนหน้าจอ ระบายความร้อน Liquid Cooling 3.0 ถ่ายเทความร้อนของตัวเครือ่งได้ดีกว่ามือถือสมาร์โฟนทั่วไป แบตเตอรี 4,000 mAh รองรับการชาร์จเร็ว 27W ได้ชั่วโมงการใช้งานที่ยาวนาน เล่นเกมได้ยาวๆ กล้องหลังคู่ 48 และ 12 ล้านพิกเซ, กล้องหน้า 20 ล้านพิกเซล',
        price: 18900.00,
        createdAt: now,
        updatedAt: now,
        productCategoryId: smartphones.id
      },
      {
        name: 'RAZER MOBILE GAMING PHONE 2 BLACK',
        image: 'https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/8/8/8886419355342-1-1574701254.jpg',
        description: 'Razer Phone 2 สมาร์ทโฟนสำหรับสายเกมมิ่งแบบฮาร์ดคอร์ ตอบโจทย์การเล่นเกมด้วย หน้าจอ IGZO 5.7 นิ้ว Refresh Rate 120 Hz ให้การเคลื่อนไหวที่นุ่มนวล ต่อเนื่อง ใช้ขุมพลัง Qualcomm Snapdragon 845 2.8 GHz และ Vapor Chamber ระบายความร้อนตัวเครื่องด้วยของเหลว รวมถึงโลโก้แบรนด์มีแสงไฟ RGB ปรับได้ 16.8 ล้านสี อันเป็นเอกลักษณ์เฉพาะของอุปกรณ์เกมมิ่ง ได้ระบบเสียง Dolby 5.1 Digital Surround เติมเต็มอรรถรสทางเสียงได้อย่างดี',
        price: 16900.00,
        createdAt: now,
        updatedAt: now,
        productCategoryId: smartphones.id
      },
      {
        name: 'APPLE IPHONE XS MAX 256GB SPACE GRAY',
        image: 'https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/1/9/190198784254-1-1572542722.jpg',
        description: '6.5-inch Super Retina display — the largest display ever on an iPhone. Advanced Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual-camera system. iPhone XS Max is everything you love about iPhone and more.',
        price: 38900.00,
        createdAt: now,
        updatedAt: now,
        productCategoryId: smartphones.id
      },
      {
        name: 'LOGITECH WIRELESS MOUSE M350 PEBBLE OFFWHITE',
        image: 'https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/L/o/Logitech-Wireless-Mouse-Pebble-M350-Offwhite-1-1566926602.jpg',
        description: 'Logitech Pebble M350 เม้าส์ไร้สาย ดีไซน์โมเดิร์น ดูเรียบง่าย และไร้เสียงรบกวน สีขาว Off-White ขนาดกะทัดรัด พกพาง่าย ขนาดพอดีกระเป๋าเสื้อหรือกางเกง ให้สมาธิและความสบายขณะใช้งาน จะคลิกหรือเลื่อนก็ไร้เสียงกวนใจ Scroll Wheel ออกแบบด้วยเทคโนโลยี Micro-Precise Scrolling เหมาะสำหรับการท่องเว็บไซต์ เชื่อมต่อ Bluetooth และ ตัวรับสัญญาณ USB',
        price: 711.00,
        createdAt: now,
        updatedAt: now,
        productCategoryId: mouses.id
      },
      {
        name: 'MOFII BLUETOOTH MOUSE CUTE PINK',
        image: 'https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/6/9/6950125747400-1-1572630022.jpg',
        description: 'MOFii CUTE เมาส์ไร้สายดีไซน์สุดน่ารัก สีชมพูพาสเทลหวานแหวว รูปทรงกลมมน ไม่เหมือนใคร เชื่อมต่อได้ทั้งทาง Bluetooth และ ทางตัวรับสัญญาณ Wireless ผลิตจากวัสดุชั้นดี สามารถปรับความละเอียดของเซ็นเซอร์ได้ 3 ระดับ ที่ 800dpi/ 1200dpi/ 1600dpi ใช้แบตเตอรีแบบ AA 1 ก้อน',
        price: 590.00,
        createdAt: now,
        updatedAt: now,
        productCategoryId: mouses.id
      },
      {
        name: 'LOGITECH WIRELESS MOUSE M238 MARVEL COLLECTION SPIDER MAN',
        image: 'https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/9/7/97855146144-1-1572022929.jpg',
        description: 'Logitech M238 SpiderMan เมาส์ไร้สายลายสไปเดอร์แมน ฮีโร่ผู้โลดโผนแห่งค่าย Marvel ลิขสิทธิ์แท้จาก Disney และ Marvel รองรับการใช้งานได้คลอบคลุมทุกระบบปฏิบัติการ Windows และ Mac ตัวเมาส์มีขนาดกะทัดรัดพกพาสะดวก จับกระชับมือควบคุมง่าย เชื่อมต่อใช้งานได้ในระยะ 33 ฟุต ใช้แบตเตอรี AA ใช้งานได้ยาวนานถึง 12 เดือน',
        price: 20990.00,
        createdAt: now,
        updatedAt: now,
        productCategoryId: mouses.id
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('ProductCategories', null, {});
    return queryInterface.bulkDelete('Products', null, {});
  }
};
