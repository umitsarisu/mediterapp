<template>
    <form @submit.prevent="onSubmit()" class="container d-flex justify-content-center align-items-center " autocomplete="on">
        <div class="col-11 col-md-6 col-lg-4 box pt-2 bg-light">
            <h3 class="text-center m-0 mt-1">{{ loginPageTexts.header }}</h3>
            <hr>
            <div class="px-4 d-flex flex-column justify-content-around">
                <div>
                    <input type="email" class="text-input" required v-model.trim="user.email"
                        placeholder="usermail@email.com" autocomplete="on">
                    <input class="text-input" required v-model.trim="user.password" :on-keyup="confirm()"
                        :placeholder="loginPageTexts.passwordText" type="password" minlength="6">
                    <input class="text-input" required v-model.trim="user.confirmPassword" :on-keyup="confirm"
                        placeholder="Şifreyi doğrulayın" type="password" v-if="isSignIn" minlength="6">
                </div>
                <button type="submit" class="submit-button btn-primary" v-if="!isSignIn">Giriş</button>
                <button type="submit" class="submit-button btn-primary" :disabled="!confirm()" v-if="isSignIn">Kaydet</button>
                <a class="text-center" @click.prevent="forgottenPassword()" v-if="!isSignIn">Şifremi unuttum!</a>
                <p class="text-center mt-1">{{ loginPageTexts.text }}
                    <a @click.prevent="isSignIn = !isSignIn">Tıklayın!</a>
                </p>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    data() {
        return {
            user: {
                email: "",
                password: "",
                confirmPassword: ""
            },
            isSignIn: false,
            loginPageTexts: {
                header: "Giriş Yap",
                passwordText: "Şifre",
                text: "Yeni Hesap Oluşturmak için"
            }
        }
    },
    methods: {
        confirm() {
            if (this.user.password != "") {
                if (this.user.password === this.user.confirmPassword && this.user.password.length >= 6) return true;
            }
        },
        onSubmit() {
            localStorage.setItem("userEmail", this.user.email)
            this.$store.dispatch("login", { ...this.user, isSignIn: this.isSignIn })
                .then(response => {
                    this.$router.push("/")
                })
        },
        forgottenPassword() {
            console.log("şifreni mi unuttun sen");
        }
    },
    created() {
        this.user.email = localStorage.getItem("userEmail")
    },
    watch: {
        isSignIn() {
            if (this.isSignIn) {
                this.loginPageTexts = {
                    header: "Hesap Oluştur",
                    passwordText: "Şifre oluştur",
                    text: "Giriş yapmak için"
                }
            }
            else {
                this.loginPageTexts = {
                    header: "Giriş Yap",
                    passwordText: "Şifre",
                    text: "Yeni Hesap Oluşturmak için"
                }
            }
        }
    }
}
</script>
<style scoped>
.box {
    font-family: cursive;
    background-color: #ecf0f1;
    border: 1px solid blue;
    border-radius: 5px;
}

form {
    width: 100%;
    height: 90%;
}

.text-input {
    width: 100%;
    padding: 5px;
    margin: 15px 0;
    border: 0;
    border-bottom: 2px solid #bbb;
}

.text-input:focus {
    outline: none;
}

.submit-button {
    text-align: center;
    width: 80%;
    border: 1px solid #777;
    border-radius: 20px;
    font-weight: bold;
    line-height: 35px;
    margin: 10px auto 5px;
}

/* .submit-button:hover {
    border: 1px solid salmon;
    background-color: #ddd;
} */

a {
    cursor: pointer;
    color: #0d6efd !important;
    text-decoration: underline !important;
}
</style>