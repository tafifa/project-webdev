document.getElementById("submit").addEventListener(click(), function()
{
    const nama = document.getElementById("name").value;
    const umur = document.getElementById("age").value;

    sessionStorage.setItem("name", nama);
    sessionStorage.setItem("age", umur);
});
