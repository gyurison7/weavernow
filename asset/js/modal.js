$(function () {
    $(".common-modal-area").load("include/common-modal.html", function () {
        const commonModal = document.getElementById("commonModal");

        $(".cancel-btn").on("click", function () {
            commonModal.style.display = "none";
        });
    });
});

function checkModal() {
    commonModal.style.display = "block";
}