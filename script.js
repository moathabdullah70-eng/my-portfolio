// دالة تصفية المشاريع في معرض الأعمال
function filterSelection(category) {
    // جلب جميع كروت المشاريع من الصفحة
    const projects = document.getElementsByClassName("project-item");
    // جلب جميع أزرار الفلترة
    const buttons = document.getElementsByClassName("filter-btn");

    // 1. التحكم في ظهور واختفاء المشاريع بناءً على التصنيف
    for (let i = 0; i < projects.length; i++) {
        // إذا تم اختيار "الكل" أو كان المشروع يطابق التصنيف المختار
        if (category === "all" || projects[i].classList.contains(category)) {
            projects[i].style.display = "block"; // إظهار المشروع
        } else {
            projects[i].style.display = "none";  // إخفاء المشروع
        }
    }

    // 2. تغيير الزر النشط (Active) ليعرف المستخدم أين يقف الآن
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    
    // إضافة كلاس active للزر الذي تم الضغط عليه حالياً
    event.currentTarget.classList.add("active");
}