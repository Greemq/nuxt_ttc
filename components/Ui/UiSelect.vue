<script setup>

</script>

<template>
    <div class="mx-auto w-full mt-5">
        <label class="select_label" for="countries">Select your
            country</label>
        <select id="countries"
                class="select_field w-full">
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
        </select>
    </div>

</template>

<style scoped>
.select_label {
    color: rgba(0, 0, 0, 0.50);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.2px;
}

.select_field {
    margin-top: 14px;
    display: flex;
    padding: 16px 20px;
    align-items: center;
    gap: 12px;
    border-radius: 8px;
border: 1px solid rgba(62, 62, 62, 0.20);
}
</style>