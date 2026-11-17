// 1. Dữ liệu sách mẫu
const books = [
  {
    id: 1,
    title: "Nhà Giả Kim",
    author: "Paulo Coelho",
    category: "Văn học",
    price: 79000,
    coverImage: "nhagiakim.jpg",
    description:
      "Nhà giả kim (Paulo Coelho) kể về hành trình của chàng chăn cừu Santiago rời bỏ quê hương Tây Ban Nha để băng qua sa mạc tìm kiếm kho báu bí ẩn vùng Kim Tự Tháp theo lời mách bảo của những giấc mơ."
  },
  {
    id: 2,
    title: "Tâm Lý Học Về Tiền",
    author: "Morgan Housel",
    category: "Kinh tế",
    price: 145000,
    coverImage: "tamlyhoc.webp",
    description:
      "Tâm lý học về tiền (Morgan Housel) lý giải một sự thật bất ngờ rằng thành công tài chính không phụ thuộc vào trí thông minh hay các công thức phức tạp, mà được quyết định bởi chính cảm xúc và hành vi của mỗi người."
  },
  {
    id: 3,
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    category: "Kỹ năng",
    price: 86000,
    coverImage: "dacnhantam.jpg",
    description:
      "Đắc Nhân Tâm (Dale Carnegie) là cuốn sách kinh điển mọi thời đại về nghệ thuật giao tiếp và ứng xử, giúp bạn khám phá bí quyết thấu hiểu tâm lý để chinh phục trái tim người đối diện.\nVới những nguyên tắc thực tế, sâu sắc và đầy nhân văn, đây chính là cuốn cẩm nang gối đầu giường không thể thiếu giúp bạn mở rộng các mối quan hệ và chạm tới thành công bền vững."
  },
  {
    id: 4,
    title: "Clean Code - Mã Sạch",
    author: "Robert C. Martin",
    category: "Công nghệ",
    price: 320000,
    coverImage: "cleancode.jpg",
    description:
      "Clean Code - Mã Sạch (Robert C. Martin) là cuốn cẩm nang kinh điển giúp lập trình viên khám phá nghệ thuật viết mã nguồn tinh gọn, rõ ràng và dễ bảo trì thay vì những dòng code rối rắm.\nVới những nguyên tắc thực chiến và tư duy chuẩn mực, đây chính là cuốn sách gối đầu giường không thể thiếu giúp bạn nâng tầm kỹ năng để trở thành một kỹ sư phần mềm chuyên nghiệp."
  },
  {
    id: 5,
    title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
    author: "Rosie Nguyễn",
    category: "Kỹ năng",
    price: 90000,
    coverImage: "tuoitre.jpg",
    description:
    "Tuổi Trẻ Đáng Giá Bao Nhiêu (Rosie Nguyễn) là người bạn đồng hành đầy tâm huyết, giúp người trẻ tìm thấy định hướng cho hành trình học hỏi, làm việc và khám phá bản thân giữa những chênh vênh đầu đời.\nVới giọng văn gần gũi, chân thành và giàu trải nghiệm, cuốn sách bán chạy này sẽ tiếp thêm động lực để bạn dũng cảm bước ra khỏi vùng an toàn và sống trọn vẹn những năm tháng rực rỡ nhất."
  },
  {
    id: 6,
    title: "Số Đỏ",
    author: "Vũ Trọng Phụng",
    category: "Văn học",
    price: 68000,
    coverImage: "sodo.jpg",
    description:
      "Số đỏ là kiệt tác trào phúng đỉnh cao của Vũ Trọng Phụng, theo chân Xuân Tóc Đỏ, từ một kẻ lưu manh đường phố bất ngờ bước chân vào giới thượng lưu Hà Nội những năm 1930 nhờ những cơ duyên đầy trớ trêu."
  },
  {
    id: 7,
    title: "Khởi Nghiệp Tinh Gọn",
    author: "Eric Ries",
    category: "Kinh tế",
    price: 165000,
    coverImage: "khoinghiep.jpg",
    description:
      "Khởi Nghiệp Tinh Gọn (Eric Ries) mang đến phương pháp luận đột phá giúp các nhà sáng lập biến ý tưởng thành sản phẩm thực tế thông qua chu trình thử nghiệm nhanh, đo lường chính xác và hạn chế tối đa rủi ro lãng phí nguồn lực."
  },
  {
    id: 8,
    title: "Lập Trình Web Hiện Đại",
    author: "Tô Oai Hùng",
    category: "Công nghệ",
    price: 210000,
    coverImage: "laptrinhweb.jpg",
    description:
      "Lập Trình Web Hiện Đại trang bị trọn bộ kiến thức từ nền tảng cốt lõi đến các công nghệ và tư duy phát triển web tiên tiến, giúp bạn tự tin xây dựng những ứng dụng mượt mà, chuẩn mực và tối ưu trải nghiệm người dùng.\nVới lộ trình bài bản cùng hệ thống ví dụ thực tế sinh động, đây chính là cuốn cẩm nang thực chiến không thể thiếu giúp bạn làm chủ công nghệ và bứt phá sự nghiệp lập trình."
  },
  {
    id: 9,
    title: "Mắt Biếc",
    author: "Nguyễn Nhật Ánh",
    category: "Văn học",
    price: 125000,
    coverImage: "macbiec.jpg",
    description:
      "Mắt biếc là bản tình ca đầy hoài niệm đưa bạn trở về làng quê Đo Đo yên bình, nơi bắt đầu mối tình đơn phương vừa trong trẻo, vừa day dứt của Ngạn dành cho cô bạn thuở nhỏ Hà Lan.\nQua ngòi bút tinh tế và đượm buồn của Nguyễn Nhật Ánh, cuốn sách khắc họa trọn vẹn vẻ đẹp của tuổi trẻ, sự thủy chung và những ngã rẽ đầu đời khiến bất cứ ai từng yêu cũng thấy lòng mình rung động."
  },
  {
    id: 10,
    title: "Hoàng Tử Bé",
    author: "Antoine de Saint-Exupéry",
    category: "Văn học",
    price: 120000,
    coverImage: "hoangtube.jpg",
    description:
      "Hoàng Tử Bé (Antoine de Saint-Exupéry) kể về cuộc gặp gỡ kỳ diệu giữa một chàng phi công lạc giữa sa mạc Sahara và cậu hoàng tử nhỏ đến từ tiểu hành tinh B612 xa xôi.\nTựa như một câu chuyện cổ tích dành cho người lớn, kiệt tác kinh điển vượt thời gian này sẽ chạm đến trái tim bạn bằng những bài học thuần khiết, sâu lắng về tình yêu, tình bạn và cách nhìn thế giới bằng cả tâm hồn."
  },
  {
    id: 11,
    title: "Thiên Tài Bên Trái, Kẻ Điên Bên Phải",
    author: "Cao Minh",
    category:"Tâm lý Học",
    price: 115000,
    coverImage: "thientai.webp",
    description:
    "Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Cao Minh) mở ra cánh cửa bước vào thế giới nội tâm đầy bí ẩn thông qua những cuộc đối thoại chân thực với các bệnh nhân tâm thần và những người mang góc nhìn khác biệt về vũ trụ, nhân sinh.\nCuốn sách tâm lý học độc đáo này sẽ phá vỡ mọi giới hạn tư duy thông thường, cuốn hút bạn vào hành trình khám phá ranh giới mong manh đầy mê hoặc giữa sự tỉnh táo và điên rồ."
  },
  {
    id: 12,
    title: "Cây Cam Ngọt Của Tôi",
    author: "José Mauro de Vasconcelos",
    category:"Văn học",
    price: 95000,
    coverImage: "caycamngot.webp",
    description:
    "Cây Cam Ngọt Của Tôi (José Mauro de Vasconcelos) mở ra thế giới tuổi thơ vừa hồn nhiên, tinh nghịch, vừa chất chứa những nỗi niềm sâu kín của cậu bé Zezé nghèo khó nhưng giàu trí tưởng tượng.\nTựa như một khúc ca dịu dàng và đầy nhân văn, cuốn tiểu thuyết kinh điển này sẽ chạm đến những góc khuất mềm yếu nhất trong trái tim bạn, để lại dư âm ấm áp về tình yêu thương và sự đồng cảm."
  },

];

// 2. Trạng thái ứng dụng
let cart = JSON.parse(localStorage.getItem("bookstore_cart")) || [];
let currentCategory = "all";
let searchQuery = "";

// 3. Truy xuất phần tử DOM
const bookListEl = document.getElementById("book-list");
const searchInputEl = document.getElementById("search-input");
const filterBtns = document.querySelectorAll(".filter-btn");
const cartBtn = document.getElementById("cart-btn");
const closeCartBtn = document.getElementById("close-cart");
const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsEl = document.getElementById("cart-items");
const cartCountEl = document.getElementById("cart-count");
const cartTotalEl = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const bookModal = document.getElementById("book-modal");
const closeModalBtn = document.getElementById("close-modal");
const modalBodyEl = document.getElementById("modal-body");
const checkoutModal = document.getElementById("checkout-modal");
const closeCheckoutBtn = document.getElementById("close-checkout");
const checkoutForm = document.getElementById("checkout-form");
const checkoutSummaryEl = document.getElementById("checkout-summary");
const toastEl = document.getElementById("toast");

// Định dạng tiền tệ VNĐ
function formatPrice(price) {
  return price.toLocaleString("vi-VN") + " ₫";
}

function normalizeSearchText(text) {
  return text
    .toLocaleLowerCase("vi")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim();
}

// Hiển thị thông báo ngắn
let toastTimeout;
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2500);
}

// 4. Render danh sách sách theo bộ lọc & từ khóa tìm kiếm
function renderBooks() {
  const filteredBooks = books.filter((book) => {
    const matchCategory =
      currentCategory === "all" || book.category === currentCategory;
    const keyword = normalizeSearchText(searchQuery);
    const matchSearch =
      normalizeSearchText(book.title).includes(keyword) ||
      normalizeSearchText(book.author).includes(keyword);
    return matchCategory && matchSearch;
  });

  if (filteredBooks.length === 0) {
    bookListEl.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b;">Không tìm thấy cuốn sách phù hợp.</p>`;
    return;
  }

  bookListEl.innerHTML = filteredBooks
    .map(
      (book) => `
      <article class="book-card">
        <div class="book-cover" onclick="openBookModal(${book.id})">
          <img class="book-cover-image" src="${book.coverImage}" alt="Bìa sách ${book.title}" />
        </div>
        <div class="book-info">
          <h3 class="book-title" onclick="openBookModal(${book.id})">${book.title}</h3>
          <p class="book-author">Tác giả: ${book.author}</p>
          <div class="book-bottom">
            <span class="book-price">${formatPrice(book.price)}</span>
            <button class="add-btn" onclick="addToCart(${book.id})">+ Thêm</button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

// 5. Xử lý giỏ hàng
function saveCart() {
  localStorage.setItem("bookstore_cart", JSON.stringify(cart));
}

function addToCart(bookId) {
  const book = books.find((b) => b.id === bookId);
  if (!book) return;

  const existingItem = cart.find((item) => item.id === bookId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }

  saveCart();
  renderCart();
  showToast(`Đã thêm "${book.title}" vào giỏ hàng`);
}

function updateQuantity(bookId, delta) {
  const item = cart.find((i) => i.id === bookId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter((i) => i.id !== bookId);
  }

  saveCart();
  renderCart();
}

function removeFromCart(bookId) {
  cart = cart.filter((i) => i.id !== bookId);
  saveCart();
  renderCart();
}

function renderCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  cartCountEl.textContent = totalItems;
  cartTotalEl.textContent = formatPrice(totalPrice);

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="cart-empty">Giỏ hàng của bạn đang trống.</p>`;
    return;
  }

  cartItemsEl.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item.title}</h4>
          <p>${formatPrice(item.price)} x ${item.quantity}</p>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">Xóa</button>
        </div>
      </div>
    `
    )
    .join("");
}

// 6. Modal xem chi tiết sách
function openBookModal(bookId) {
  const book = books.find((b) => b.id === bookId);
  if (!book) return;

  modalBodyEl.innerHTML = `
    <span class="modal-detail-tag">${book.category}</span>
    <h2 class="modal-detail-title">${book.title}</h2>
    <p class="modal-detail-author">Tác giả: <strong>${book.author}</strong></p>
    <p class="modal-detail-desc">${book.description}</p>
    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 20px;">
      <span class="book-price" style="font-size: 1.3rem;">${formatPrice(book.price)}</span>
      <button class="btn-primary" onclick="addToCart(${book.id}); closeBookModal();">
        Thêm vào giỏ hàng
      </button>
    </div>
  `;
  bookModal.classList.add("open");
}

function closeBookModal() {
  bookModal.classList.remove("open");
}

// 7. Sự kiện tương tác
searchInputEl.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderBooks();
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    renderBooks();
  });
});

cartBtn.addEventListener("click", () => {
  cartSidebar.classList.add("open");
  cartOverlay.classList.add("open");
});

function closeCart() {
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("open");
}

closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

closeModalBtn.addEventListener("click", closeBookModal);
bookModal.addEventListener("click", (e) => {
  if (e.target === bookModal) closeBookModal();
});

function closeCheckoutModal() {
  checkoutModal.classList.remove("open");
  checkoutModal.setAttribute("aria-hidden", "true");
}

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Vui lòng thêm sách trước khi thanh toán!");
    return;
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  checkoutSummaryEl.innerHTML = `
    <strong>Đơn hàng (${totalItems} sản phẩm)</strong>
    <ul class="checkout-summary-list">
      ${cart.map((item) => `<li>${item.title} × ${item.quantity}</li>`).join("")}
    </ul>
    <p class="checkout-summary-total">Tổng cộng: <strong>${formatPrice(totalPrice)}</strong></p>
  `;
  closeCart();
  checkoutModal.classList.add("open");
  checkoutModal.setAttribute("aria-hidden", "false");
}

checkoutBtn.addEventListener("click", openCheckoutModal);
closeCheckoutBtn.addEventListener("click", closeCheckoutModal);
checkoutModal.addEventListener("click", (e) => {
  if (e.target === checkoutModal) closeCheckoutModal();
});

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    closeCheckoutModal();
    showToast("Giỏ hàng đang trống. Vui lòng chọn sách trước khi đặt hàng.");
    return;
  }

  cart = [];
  saveCart();
  renderCart();
  closeCheckoutModal();
  checkoutForm.reset();
  showToast("Đã hoàn tất bước đặt hàng. Chúng tôi sẽ liên hệ với bạn sớm!");
});

// Khởi chạy lần đầu
renderBooks();
renderCart();
