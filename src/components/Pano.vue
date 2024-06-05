<template>
    <div class="pano position-relative overflow p-1">
        <slot></slot>
    </div>
</template>
<script>

export default {

}
</script>
<style>
.pano {
    padding-right: 50px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    user-select: none
}

.overflow {
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>