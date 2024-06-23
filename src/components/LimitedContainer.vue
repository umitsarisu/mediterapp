<template>
    <div class="col-12 col-md-11 col-lg-10 px-0 lr-white-border">
        <slot></slot>
    </div>
</template>
<style>
.lr-white-border {
    border-left: 1px solid rgb(112, 112, 112);
    border-right: 1px solid rgb(112, 112, 112);
    border-radius: 10px;
    box-sizing: border-box;
}
</style>