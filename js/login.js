`use strict`

const elForm = document.querySelector(".form")
const elUsernameInput = document.querySelector(".username")
const elPasswordInput = document.querySelector(".password")


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()


    const usernameValue = elUsernameInput.value
    const passwordValue = elPasswordInput.value
    // console.log(usernameValue, passwordValue);


    fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }),

        }).then((res) => res.json())
        .then((data) => {
            if (data.token) {
                window.localStorage.setItem("token", data.token)

                window.location.replace("home.html")
            } else {
                alert("Parol yoki Username xato!")
            }

        });
})