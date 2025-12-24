// افزودن مورد درآمد
function addEarningsItem() {
    const container = document.getElementById('earningsContainer');
    const newItem = document.createElement('div');
    newItem.className = 'ظرف-درآمد-کسورات mt-15';
    newItem.innerHTML = `
        <div class="row gy-15 مورد-درآمد">
            <div class="col-md-6">
                <label class="برچسب-فرم">توضیحات</label>
                <input type="text" class="کنترل-فرم توضیحات-درآمد" placeholder="مثال: حقوق پایه" required>
            </div>
            <div class="col-md-5">
                <label class="برچسب-فرم">مبلغ</label>
                <div class="گروه-فرم">
                    <div class="گروه-ورودی">
                        <div class="متن-گروه-ورودی text-muted"> <i class="ri-money-dollar-circle-line fs-20"></i>
                        </div>
                        <input type="number" class="کنترل-فرم مبلغ-درآمد" placeholder="۰٫۰۰" required>
                    </div>
                </div>
            </div>
            <div class="col-md-1 d-flex align-items-end">
                <span class="دکمه-حذف-مورد" onclick="removeEarningsItem(this)"><i class="ri-close-large-fill"></i></span>
            </div>
        </div>
    `;
    container.appendChild(newItem);
}

// حذف مورد درآمد
function removeEarningsItem(element) {
    element.closest('.ظرف-درآمد-کسورات').remove();
}

// افزودن مورد کسورات
function addDeductionsItem() {
    const container = document.getElementById('deductionsContainer');
    const newItem = document.createElement('div');
    newItem.className = 'ظرف-درآمد-کسورات mt-15';
    newItem.innerHTML = `
        <div class="row gy-15 مورد-کسورات">
            <div class="col-md-6">
                <label class="برچسب-فرم">توضیحات</label>
                <input type="text" class="کنترل-فرم توضیحات-کسورات" placeholder="مثال: مالیات بر درآمد" required>
            </div>
            <div class="col-md-5">
                <label class="برچسب-فرم">مبلغ</label>
                <div class="گروه-فرم">
                    <div class="گروه-ورودی">
                        <div class="متن-گروه-ورودی text-muted"> <i class="ri-money-dollar-circle-line fs-20"></i>
                        </div>
                        <input type="number" class="کنترل-فرم مبلغ-کسورات" placeholder="۰٫۰۰" required>
                    </div>
                </div>
            </div>
            <div class="col-md-1 d-flex align-items-end">
                <span class="دکمه-حذف-مورد" onclick="removeDeductionsItem(this)"><i class="ri-close-large-fill"></i></span>
            </div>
        </div>
    `;
    container.appendChild(newItem);
}

// حذف مورد کسورات
function removeDeductionsItem(element) {
    element.closest('.ظرف-درآمد-کسورات').remove();
}

// افزودن مورد مرخصی
function addLeaveItem() {
    const container = document.getElementById('leaveContainer');
    const newItem = document.createElement('div');
    newItem.className = 'ظرف-درآمد-کسورات mt-15';
    newItem.innerHTML = `
        <div class="row gy-15 مورد-مرخصی">
            <div class="col-md-5">
                <label class="برچسب-فرم">نوع مرخصی</label>
                <input type="text" class="کنترل-فرم نوع-مرخصی" placeholder="مثال: مرخصی سالانه">
            </div>
            <div class="col-md-2">
                <label class="برچسب-فرم">مجاز</label>
                <input type="number" class="کنترل-فرم مجاز-مرخصی" placeholder="۰">
            </div>
            <div class="col-md-2">
                <label class="برچسب-فرم">استفاده‌شده</label>
                <input type="number" class="کنترل-فرم استفاده‌شده-مرخصی" placeholder="۰">
            </div>
            <div class="col-md-2">
                <label class="برچسب-فرم">مانده</label>
                <div class="گروه-فرم">
                    <div class="گروه-ورودی">
                        <div class="متن-گروه-ورودی text-muted"> <i class="ri-money-dollar-circle-line fs-20"></i>
                        </div>
                        <input type="number" class="کنترل-فرم مانده-مرخصی" placeholder="۰" required>
                    </div>
                </div>
            </div>
            <div class="col-md-1 d-flex align-items-end">
                <span class="دکمه-حذف-مورد" onclick="removeLeaveItem(this)"><i class="ri-close-large-fill"></i></span>
            </div>
        </div>
    `;
    container.appendChild(newItem);
}

// حذف مورد مرخصی
function removeLeaveItem(element) {
    element.closest('.ظرف-درآمد-کسورات').remove();
}

// بازنشانی فرم
function resetForm() {
    document.getElementById('payslipForm').reset();
    document.getElementById('earningsContainer').innerHTML = `
        <div class="ظرف-درآمد-کسورات mt-15">
            <div class="row gy-15 مورد-درآمد">
                <div class="col-md-6">
                    <label class="برچسب-فرم">توضیحات</label>
                    <input type="text" class="کنترل-فرم توضیحات-درآمد" placeholder="مثال: حقوق پایه" required>
                </div>
                <div class="col-md-5">
                    <label class="برچسب-فرم">مبلغ</label>
                    <div class="گروه-فرم">
                        <div class="گروه-ورودی">
                            <div class="متن-گروه-ورودی text-muted"> <i class="ri-money-dollar-circle-line fs-20"></i>
                            </div>
                            <input type="number" class="کنترل-فرم مبلغ-درآمد" placeholder="۰٫۰۰" required>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 d-flex align-items-end">
                    <span class="دکمه-حذف-مورد" onclick="removeEarningsItem(this)"><i class="ri-close-large-fill"></i></span>
                </div>
            </div>
        </div>
    `;
    document.getElementById('deductionsContainer').innerHTML = `
        <div class="ظرف-درآمد-کسورات mt-15">
            <div class="row gy-15 مورد-کسورات">
                <div class="col-md-6">
                    <label class="برچسب-فرم">توضیحات</label>
                    <input type="text" class="کنترل-فرم توضیحات-کسورات" placeholder="مثال: مالیات بر درآمد" required>
                </div>
                <div class="col-md-5">
                    <label class="برچسب-فرم">مبلغ</label>
                    <div class="گروه-فرم">
                        <div class="گروه-ورودی">
                            <div class="متن-گروه-ورودی text-muted"> <i class="ri-money-dollar-circle-line fs-20"></i>
                            </div>
                            <input type="number" class="کنترل-فرم مبلغ-کسورات" placeholder="۰٫۰۰" required>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 d-flex align-items-end">
                    <span class="دکمه-حذف-مورد" onclick="removeDeductionsItem(this)"><i class="ri-close-large-fill"></i></span>
                </div>
            </div>
        </div>
    `;
    document.getElementById('leaveContainer').innerHTML = `
        <div class="ظرف-درآمد-کسورات mt-15">
            <div class="row gy-15 مورد-مرخصی">
                <div class="col-md-5">
                    <label class="برچسب-فرم">نوع مرخصی</label>
                    <input type="text" class="کنترل-فرم نوع-مرخصی" placeholder="مثال: مرخصی سالانه">
                </div>
                <div class="col-md-2">
                    <label class="برچسب-فرم">مجاز</label>
                    <input type="number" class="کنترل-فرم مجاز-مرخصی" placeholder="۰">
                </div>
                <div class="col-md-2">
                    <label class="برچسب-فرم">استفاده‌شده</label>
                    <input type="number" class="کنترل-فرم استفاده‌شده-مرخصی" placeholder="۰">
                </div>
                <div class="col-md-2">
                    <label class="برچسب-فرم">مانده</label>
                    <div class="گروه-فرم">
                        <div class="گروه-ورودی">
                            <div class="متن-گروه-ورودی text-muted"> <i class="ri-money-dollar-circle-line fs-20"></i>
                            </div>
                            <input type="number" class="کنترل-فرم مانده-مرخصی" placeholder="۰" required>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 d-flex align-items-end">
                    <span class="دکمه-حذف-مورد" onclick="removeLeaveItem(this)"><i class="ri-close-large-fill"></i></span>
                </div>
            </div>
        </div>
    `;
}

// پیش‌نمایش فیش حقوقی
function previewPayslip() {
    alert('عملکرد پیش‌نمایش فیش حقوقی در اینجا پیاده‌سازی می‌شود.\nاین کار تمام داده‌های فرم را جمع‌آوری کرده و در قالب فیش حقوقی نمایش می‌دهد.');
    // در پیاده‌سازی واقعی، این کار:
    // 1. جمع‌آوری تمام داده‌های فرم
    // 2. محاسبه کل
    // 3. باز کردن یک پنجره/تب جدید با قالب فیش حقوقی پرشده با داده‌ها
    // 4. یا نمایش یک مودال با پیش‌نمایش
}

// ارسال فرم
document.getElementById('payslipForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('تولید فیش حقوقی در اینجا پیاده‌سازی می‌شود.\nاین کار داده‌های فرم را پردازش کرده و فیش حقوقی نهایی را تولید می‌کند.');
    // در پیاده‌سازی واقعی، این کار:
    // 1. اعتبارسنجی تمام داده‌ها
    // 2. محاسبه کل
    // 3. تولید PDF یا HTML قابل چاپ
    // 4. ذخیره اختیاری در پایگاه داده
});