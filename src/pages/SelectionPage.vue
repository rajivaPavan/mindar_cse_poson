<template>
    <div class="selection-page">
        <h2 class="selection-header">Select the Model</h2>
        <div class="selection-buttons">
            <a id="mihintale-button" class="selection-button" href="#/mihintale">
                <span id="mihintale-button-text" class="button-text">
                    AR Mihintale
                </span>
            </a>
            <a id="lantern-button" class="selection-button" href="#/lanterns">
                <span class="button-text">
                    AR Lanterns
                </span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    mounted() {
        const image = new Image();
        image.src = "/poson-web-back-v7-scaled.jpg";
    },
}
</script>

<style scoped>
    .selection-page {
        background-image: url('./poson-web-back-v7-scaled.jpg');
        height: 95vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .selection-header {
        text-align: center;
        margin-top: 3rem;
    }
 
    .selection-buttons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 1rem;
        height: 100%;
    }

    .selection-button {
        height: 100%;
        margin: 1rem;
        text-decoration: none;
        color: white;
        font-size: 2rem;
        background-color: var(--bg-gradient);
        text-align: center;
        border-radius: 3rem;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .button-text {
        background-color: rgba(0, 0, 0, 0.567);
        padding: 1rem;
        border-radius: 3rem;
    }

    #mihintale-button-text {
        margin-top: 2rem;
    }

    #mihintale-button {
        background-image: url('poson-web-back-v7-scaled.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        justify-content: start;
    }

    #lantern-button {
        background-image: url('ar-lantern-design.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        justify-content: center;
    }
</style>