<template>
    <slot name="content"></slot>
    <div v-if="!$slots.content" class="d-flex justify-content-between borderAround">
        <h6 class="align-self-center text-start m-0 ms-3">{{ content.header }}</h6>
        <button type="button" class="btn btn-outline-danger align-self-center" @click="copy(content.text)">Copy</button>
        <textarea class="form-control text-uppercase align-self-center" :class="isActive ? 'active' : 'bg-light'" rows="1"
            readonly>{{ content.text }}</textarea>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: false
        }
    },
    props: ["content"],
    methods: {
        copy(content) {
            this.isActive = true
            let text = document.createElement("textarea");
            document.body.appendChild(text);
            text.value = content;
            text.select();
            document.execCommand("copy");
            document.body.removeChild(text);
        }
    }
}
</script>
<style scoped>
.borderAround {
    border-bottom: 1px solid black;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
}

.active {
    background-color: rgb(170, 170, 170);
    border: rgba(196, 115, 115, 0.774) 1px solid;
}

h6 {
    width: 25%;
    font-size: 15px;
    text-shadow: 0.5px 0.5px 5px rgba(196, 115, 115, 0.774);
}

button {
    width: 15%;
    height: 38px;
    margin: 1px 0;
}

textarea {
    width: 60%;
    max-height: 150px;
    margin: 1px 0;
    color: black;
    background-color: whitesmoke;
}
</style>