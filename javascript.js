
const filterButtons = document.querySelectorAll(".filterbutton");

const items = document.querySelectorAll(".item");


filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.filter;

        items.forEach(item => {

            const categories = item.dataset.category.split(" ");

            const shouldShow =
                selectedCategory === "all" ||
                categories.includes(selectedCategory);

            item.classList.toggle("hidden", !shouldShow);
        });
    });
});
